import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-lg font-extrabold">Ballon-Ultralauf Welver</p>
          <p className="mt-1 text-sm text-muted-foreground">Veranstalter: Ballonläufer</p>
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
