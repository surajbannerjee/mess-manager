import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { signOutAction } from "@/features/auth/actions/auth-actions";
import { AppShell } from "@/components/layout";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

return (
  <AppShell>
    <div>
      <h1 className="text-3xl font-bold text-white">Dashboard</h1>

      <p className="mt-2 text-neutral-400">{user.email}</p>
    </div>
  </AppShell>
);
}
