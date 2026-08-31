import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import ballonlaeuferLogo from "@/assets/ballonlaeufer-logo-reference.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-lg font-extrabold">Ballon-Ultralauf Welver</p>
          <a
            href="https://xn--ballonlufer-r8a.de/"
            className="group mt-3 inline-flex items-center gap-3 rounded-full border border-border px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            <img
              src={ballonlaeuferLogo.url}
              alt="Ballonläufer"
              className="h-7 w-auto max-w-[72px] object-contain"
              loading="lazy"
            />
            <span className="underline decoration-border underline-offset-4 group-hover:decoration-foreground">
              Veranstalter: Ballonläufer
            </span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-muted-foreground">
          <Link to="/impressum" className="transition-colors hover:text-foreground">
            Impressum
          </Link>
          <Link to="/datenschutz" className="transition-colors hover:text-foreground">
            Datenschutz
          </Link>
          <a href="mailto:janphilippstruck@gmx.de" className="transition-colors hover:text-foreground">
            Kontakt
          </a>
        </nav>
      </div>
    </footer>
  );
}
