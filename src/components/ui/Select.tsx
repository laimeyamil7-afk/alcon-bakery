import { cn } from "@/lib/cn";

export function Select({
  className,
  label,
  error,
  id,
  options,
  placeholder,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}) {
  const selectId = id ?? props.name;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={selectId} className="text-sm font-medium text-espresso/80">
        {label}
      </label>
      <select
        id={selectId}
        className={cn(
          "rounded-xl border border-brand/15 bg-white px-4 py-3 text-base text-espresso focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25",
          error && "border-red-500/60",
          className,
        )}
        {...props}
      >
        {placeholder ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error ? (
        <p className="text-xs text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
