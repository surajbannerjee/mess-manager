"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import Link from "next/link";

import { loginSchema, type LoginSchema } from "../schemas/auth-schema";
import { signInAction } from "../actions/auth-actions";
import { AuthLayout } from "../layouts/auth-layout";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchema) => {
    const formData = new FormData();

    formData.append("email", data.email);
    formData.append("password", data.password);

    startTransition(async () => {
      await signInAction(formData);
    });
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to your Mess Manager account"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...register("email")} />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" {...register("password")} />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="orange-glow w-full"
          disabled={isPending}
        >
          {isPending ? "Signing In..." : "Sign In"}
        </Button>

        <p className="text-center text-sm text-zinc-400">
          {"Dont have an account?"}{" "}
          <Link
            href="/signup"
            className="font-medium text-[#EB5002] hover:underline"
          >
            Create Account
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
