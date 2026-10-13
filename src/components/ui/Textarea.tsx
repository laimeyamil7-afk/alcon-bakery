import { cn } from "@/lib/cn";

export function Textarea({
  className,
  label,
  error,
  id,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
}) {
  const inputId = id ?? props.name;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-sm font-medium text-espresso/80">
        {label}
      </label>
      <textarea
        id={inputId}
        className={cn(
          "min-h-[100px] rounded-xl border border-brand/15 bg-white px-4 py-3 text-base text-espresso placeholder:text-espresso/40 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25",
          error && "border-red-500/60",
          className,
        )}
        {...props}
      />
      {error ? (
        <p className="text-xs text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
