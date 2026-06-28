"use server";

import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { loginSchema, registerSchema } from "../schemas/auth-schema";

export async function signUpAction(formData: FormData) {
  console.log("Signup action started");
  const validatedFields = registerSchema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      error: validatedFields.error.issues[0]?.message,
    };
  }

  const { fullName, email, password } = validatedFields.data;

  const supabase = await createSupabaseServerClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });
  console.log("Signup error:", error);
  if (error) {
    return {
      success: false,
      error: error.message,
    };
  }

  redirect("/login");
}

export async function signInAction(formData: FormData) {
  const validatedFields = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      error: validatedFields.error.issues[0]?.message,
    };
  }

  const supabase = await createSupabaseServerClient();

  const { email, password } = validatedFields.data;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return {
      success: false,
      error: error.message,
    };
  }

  redirect("/dashboard");
}

export async function signOutAction() {
  const supabase = await createSupabaseServerClient();

  await supabase.auth.signOut();

  redirect("/login");
}
