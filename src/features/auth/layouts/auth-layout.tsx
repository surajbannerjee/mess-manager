import { ReactNode } from "react";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export function AuthLayout({ title, subtitle, children }: AuthLayoutProps) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-6">
      <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] h-80 w-80 rounded-full bg-red-500/20 blur-3xl" />

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">{title}</h1>

          <p className="mt-2 text-sm text-zinc-400">{subtitle}</p>
        </div>

        {children}
      </div>
    </div>
  );
}
