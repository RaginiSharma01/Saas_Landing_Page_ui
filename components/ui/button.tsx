
import { cn } from "@/lib/utils";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center cursor-pointer disabled:cursor-not-allowed gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        primary:
          "bg-bg-primary text-[var(--color-text-primary)] border border-white/20 shadow-xs hover:bg-[var(--color-btn-primary-bg)]/90",
        outline:
          "border bg-transparent border-black text-black rounded-[10px] hover:bg-green-200",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-[10px] px-4 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,

  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp =  "button";

  return (
    <Comp
    
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };