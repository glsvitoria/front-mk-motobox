import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg transition-colors duration-300 focus-visible:outline-none focus-visible:bg-foundation-black-11 disabled:pointer-events-none disabled:opacity-50 shadow-elevation-light-1 focus-visible:elevation-light-4",
  {
    variants: {
      variant: {
        light:
          "bg-foundation-black-10 text-white border border-foundation-black-10hover:text-foundation-orange-300 hover:border-foundation-orange-300 focus-visible:bg-foundation-black-11",
        outline:
          "bg-foundation-black-12 text-white border border-foundation-black-10 hover:text-foundation-orange-300 hover:border-foundation-orange-300 focus-visible:bg-foundation-black-11",
        primary:
          "bg-foundation-orange-300 text-white focus-visible:bg-foundation-black-11 hover:bg-foundation-orange-400",
        tertiary:
          "bg-transparent text-foundation-orange-300 border focus-visible:border-foundation-black-11 hover:border-foundation-orange-300 hover:bg-foundation-black-12 border-transparent",
      },
      size: {
        sm: "h-[36px] px-3 py-1 min-w-32 button-sm",
        default: "h-[51px] px-4 py-2 min-w-40 button-md lg:button-lg",
      },
    },
    defaultVariants: {
      variant: "light",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
