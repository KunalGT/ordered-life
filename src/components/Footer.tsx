import Link from "next/link";

const footerLinks = [
  { href: "/rules", label: "12 Rules" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-sm font-semibold text-foreground">
              Ordered Life
            </span>
            <span className="text-xs text-muted">
              A wellness philosophy for the modern world.
            </span>
          </div>
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted/60">
            &copy; {new Date().getFullYear()} Ordered Life. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
