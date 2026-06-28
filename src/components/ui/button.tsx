import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EB5002] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#EB5002] via-[#FF6001] to-[#C10B01] text-white shadow-lg shadow-orange-500/20 hover:scale-[1.02] hover:shadow-orange-500/40",

        outline:
          "border border-white/10 bg-[#151515] text-white hover:border-[#EB5002] hover:bg-[#1B1B1B]",

        ghost: "text-[#F9F9F9] hover:bg-white/5",

        destructive: "bg-[#D92C3B] text-white hover:brightness-110",

        secondary: "bg-[#232323] text-white hover:bg-[#2C2C2C]",
      },

      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4",
        lg: "h-12 px-8",
        icon: "h-10 w-10",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
