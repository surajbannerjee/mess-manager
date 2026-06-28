import * as React from "react";
import { cn } from "@/lib/cn";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "flex h-12 w-full rounded-xl border border-white/10 bg-[#151515] px-4 text-sm text-white outline-none transition-all placeholder:text-[#646464] focus:border-[#EB5002] focus:ring-4 focus:ring-orange-500/10",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };
