import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-ballon-ultralauf.png.asset.json";

const NAV = [
  { label: "Konzept", href: "#konzept" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Strecken", href: "#strecken" },
  { label: "Welver", href: "#welver" },
  { label: "Geschichte", href: "#geschichte" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="flex shrink-0 items-center" aria-label="Ballon-Ultralauf Welver">
          <img
            src={logo.url}
            alt="Ballon-Ultralauf Welver – Veranstaltungslogo"
            className="h-9 w-auto max-w-[190px] object-contain sm:h-11 sm:max-w-none"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#stand"
            className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Infos zur Anmeldung
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-2 sm:px-8">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/70 py-3.5 text-base font-semibold text-foreground last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#stand"
              onClick={() => setOpen(false)}
              className="mt-3 mb-3 rounded-full border border-border px-4 py-3 text-center text-base font-semibold"
            >
              Infos zur Anmeldung
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
