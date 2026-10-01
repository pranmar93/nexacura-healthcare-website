import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "lib/utils";

const buttonVariants = cva(
  "btn-nexa inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-sans text-sm font-medium tracking-tight transition-[color,background-color,box-shadow,transform] duration-150 ease-clinical focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-border hover:bg-physiology/90",
        secondary:
          "bg-transparent text-foreground shadow-border hover:bg-muted",
        ghost: "text-foreground hover:bg-muted",
        link: "h-auto rounded-none px-0 text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 min-h-11 px-5",
        sm: "h-10 min-h-10 px-4 text-sm",
        lg: "h-12 min-h-12 px-7 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
