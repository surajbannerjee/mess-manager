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

  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Database logic will be added in the next step.

  return {
    success: true,
  };
}
