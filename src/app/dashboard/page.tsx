import { redirect } from "next/navigation";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { AppShell } from "@/components/layout";
import { CreateMessForm } from "@/features/mess";
import { signOutAction } from "@/features/auth/actions/auth-actions";
import { Button } from "@/components/ui/button";


export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: member } = await supabase
    .from("mess_members")
    .select("mess_id")
    .eq("profile_id", user.id)
    .maybeSingle();

  return (
    <AppShell>
      {!member ? (
        <div className="mx-auto mt-24 max-w-xl rounded-3xl border border-white/10 bg-[#111111] p-10 text-center">
          <h1 className="text-3xl font-bold text-white">Welcome 👋</h1>

          <p className="mt-4 text-neutral-400">
            You are not part of any mess yet.
          </p>
          <form action={signOutAction}>
            <Button type="submit" variant="destructive">
              Logout
            </Button>
          </form>
          <CreateMessForm />
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>

          <p className="mt-2 text-neutral-400">{user.email}</p>
        </div>
      )}
    </AppShell>
  );
}
