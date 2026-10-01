import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "components/ui/button";
import { Input } from "components/ui/input";
import { Label } from "components/ui/label";
import { cn } from "lib/utils";
import CryptoJS from "crypto-js";

const schema = z.object({
  email: z.email("Enter a valid email."),
  role: z.string().min(1, "Tell us who you are."),
});

type FormValues = z.infer<typeof schema>;

const STORAGE_KEY = "nexacura-early-access";

const roles = [
  { value: "self", label: "For myself / my family" },
  { value: "clinician", label: "I'm a clinician" },
  { value: "research", label: "Research or pharma" },
  { value: "other", label: "Something else" },
] as const;

export function EarlyAccessForm({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem(STORAGE_KEY) === "1") {
      setSubmitted(true);
    }
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", role: "self" },
  });

  // function onSubmit(values: FormValues) {
  //   const existing = window.localStorage.getItem(`${STORAGE_KEY}-entries`);
  //   const list: FormValues[] = existing ? (JSON.parse(existing) as FormValues[]) : [];
  //   list.push(values);
  //   window.localStorage.setItem(`${STORAGE_KEY}-entries`, JSON.stringify(list));
  //   window.localStorage.setItem(STORAGE_KEY, "1");
  //   setSubmitted(true);
  // }

  async function onSubmit(values: FormValues) {
    const selectedRole = roles.find(
      (role) => role.value === values.role
    );

    try {
      // Get current Unix timestamp from time.now
      const timeResponse = await fetch(
        "https://time.now/developer/api/timezone/Asia/Kolkata"
      );

      if (!timeResponse.ok) {
        throw new Error("Failed to get current time");
      }

      const timeData = await timeResponse.json();

      // Convert Unix seconds to milliseconds and add 5 minutes
      const timestamp = timeData.unixtime * 1000;

      // Use the same secret provided by the backend/API team
      const secret = "kjsdh#$nHj@5368(<>yqwu126";

      // Generate HMAC SHA256 signature
      const signature = CryptoJS.HmacSHA256(
        timestamp.toString(),
        secret
      ).toString();

      // Send submission to Google Apps Script API
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyI_SQoz-hf_nbahHfeUFKeYdShwHdiyiFugHut2O8TDqBIamI8GyQ1avJw8Wa7RLCFIw/exec",
        {
          method: "POST",
          headers: {
            // "Content-Type": "application/json",
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify({
            timestamp,
            signature,
            email: values.email,
            usecase: selectedRole?.label || values.role,
          }),
        }
      );

      await response.json();

      // if (!response.ok || !data.success) {
      //   throw new Error(data.message || "Failed to submit form");
      // }

      // Keep existing localStorage functionality
      const existing = window.localStorage.getItem(
        `${STORAGE_KEY}-entries`
      );

      const list: FormValues[] = existing
        ? (JSON.parse(existing) as FormValues[])
        : [];

      list.push(values);

      window.localStorage.setItem(
        `${STORAGE_KEY}-entries`,
        JSON.stringify(list)
      );

      window.localStorage.setItem(STORAGE_KEY, "1");

      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        window.localStorage.removeItem(STORAGE_KEY);

        form.reset({
          email: "",
          role: "self",
        });
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  }

  if (submitted) {
    return (
      <div
        className={cn(
          "flex items-start gap-3 rounded-xl bg-paper px-4 py-4 shadow-border",
          className,
        )}
        role="status"
      >
        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-3.5" strokeWidth={2.4} />
        </span>
        <div>
          <p className="text-sm font-medium text-foreground">We've noted your interest.</p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            We'll write when a place is ready. Your data stays yours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className={cn("space-y-3", className)}
      noValidate
      autoComplete="off"
    >
      <div className={cn(compact ? "flex flex-col gap-3 sm:flex-row sm:items-end" : "space-y-3")}>
        <div className="min-w-0 flex-1 space-y-1.5">
          <Label htmlFor="early-email">Work or personal email</Label>
          <Input
            id="early-email"
            type="email"
            autoComplete="email"
            placeholder="you@institution.org"
            aria-invalid={!!form.formState.errors.email}
            {...form.register("email")}
          />
          {form.formState.errors.email ? (
            <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
          ) : null}
        </div>
        {compact ? (
          <Button type="submit" className="sm:w-auto" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? (
              <>
                <Loader2 className="mr-2 size-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Request access"
            )}
          </Button>
        ) : null}
      </div>

      <fieldset className="space-y-2">
        <legend className="text-sm font-medium">I am here</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {roles.map((role) => (
            <label
              key={role.value}
              className={cn(
                "flex min-h-11 cursor-pointer items-center gap-2 rounded-md bg-paper px-3 text-sm shadow-border transition-[box-shadow] duration-150",
                form.watch("role") === role.value && "ring-1 ring-primary",
              )}
            >
              <input
                type="radio"
                value={role.value}
                className="accent-primary"
                {...form.register("role")}
              />
              {role.label}
            </label>
          ))}
        </div>
      </fieldset>

      {!compact ? (
        <Button type="submit" className="w-full sm:w-auto" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Request early access"
          )}
        </Button>
      ) : null}

      <p className="text-xs leading-relaxed text-muted-foreground">
        Leave your interest. We will not share this address.
      </p>
    </form>
  );
}
