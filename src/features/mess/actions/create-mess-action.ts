"use server";

import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createMessSchema } from "../schemas/mess-schema";

export async function createMessAction(formData: FormData) {
  const validated = createMessSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  if (!validated.success) {
    return {
      success: false,
      error: validated.error.issues[0]?.message,
    };
  }

  const { name, description } = validated.data;

  const supabase = await createSupabaseServerClient();

  // Current User
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Current Session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log("================================");
  console.log("SESSION:", session);
  console.log("AUTH UID:", session?.user.id);
  console.log("USER:", user);
  console.log("USER ID:", user.id);

  // Check profile
  

  // Create Mess
  const { data: mess, error: messError } = await supabase
    .from("messes")
    .insert({
      name,
      description,
      created_by: user.id,
    })
    .select()
    .single();

  console.log("CREATED MESS:", mess);
  console.log("MESS ERROR:", messError);

  if (messError) {
    return {
      success: false,
      error: messError.message,
    };
  }

  // Add Admin Member
  const { error: memberError } = await supabase.from("mess_members").insert({
    mess_id: mess.id,
    profile_id: user.id,
    role: "ADMIN",
  });

  console.log("MEMBER ERROR:", memberError);

  if (memberError) {
    await supabase.from("messes").delete().eq("id", mess.id);

    return {
      success: false,
      error: memberError.message,
    };
  }

  redirect("/dashboard");
}
