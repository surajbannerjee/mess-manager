"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";

import {
  createMessSchema,
  type CreateMessSchema,
} from "../schemas/mess-schema";
import { createMessAction } from "../actions/create-mess-action";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function CreateMessForm() {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateMessSchema>({
    resolver: zodResolver(createMessSchema),
  });

  const onSubmit = (data: CreateMessSchema) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description ?? "");

    startTransition(async () => {
      await createMessAction(formData);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <Label htmlFor="name">Mess Name</Label>

        <Input id="name" placeholder="Royal Boys Mess" {...register("name")} />

        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="description">Description</Label>

        <Textarea
          id="description"
          rows={4}
          placeholder="Optional"
          {...register("description")}
        />
      </div>

      <Button className="orange-glow w-full" disabled={isPending}>
        {isPending ? "Creating..." : "Create Mess"}
      </Button>
    </form>
  );
}
