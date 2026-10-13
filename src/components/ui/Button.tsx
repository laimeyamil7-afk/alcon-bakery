import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-dark focus-visible:ring-brand/50",
  secondary:
    "bg-brand-light text-brand-dark hover:bg-brand-light/80 focus-visible:ring-brand/40",
  outline:
    "border border-brand/25 bg-transparent text-brand hover:bg-brand-light/50",
  ghost: "text-brand hover:bg-brand-light/60",
};

type ButtonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & (
  | ({ href: string; external?: boolean } & Omit<
      React.ComponentProps<typeof Link>,
      "href" | "className" | "children"
    >)
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
);

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50 sm:text-base";

  if ("href" in props && props.href) {
    const { href, external, ...linkProps } = props;
    if (external) {
      return (
        <a
          href={href}
          className={cn(base, variants[variant], className)}
          target="_blank"
          rel="noopener noreferrer"
          {...linkProps}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cn(base, variants[variant], className)} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      type={buttonProps.type ?? "button"}
      className={cn(base, variants[variant], className)}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
