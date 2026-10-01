import type { InputHTMLAttributes } from "react";
import { cn } from "lib/utils";

export function Input({
  className,
  type,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-md bg-paper px-3.5 text-sm text-foreground shadow-border",
        "placeholder:text-muted-foreground",
        "transition-shadow duration-150 ease-clinical",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
