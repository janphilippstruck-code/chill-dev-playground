import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum | Ballon-Ultralauf Welver 2027" },
      {
        name: "description",
        content: "Impressum und Anbieterkennzeichnung der Website zum Ballon-Ultralauf Welver 2027.",
      },
      { property: "og:title", content: "Impressum | Ballon-Ultralauf Welver 2027" },
      {
        property: "og:description",
        content: "Impressum und Anbieterkennzeichnung der Website zum Ballon-Ultralauf Welver 2027.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://ballonultralauf.xn--ballonlufer-r8a.de/impressum",
      },
    ],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="balloon-rule max-w-[80px]" />
        <h1 className="mt-6 text-[2rem] sm:text-5xl">Impressum</h1>

        <section className="mt-10">
          <h2 className="text-xl">Verantwortlich für den Inhalt</h2>
          <address className="mt-4 text-base leading-relaxed text-muted-foreground not-italic">
            Jan-Philipp Struck
            <br />
            Brüggenkampstraße 10
            <br />
            59077 Hamm
            <br />
            Deutschland
          </address>
        </section>

        <section className="mt-10">
          <h2 className="text-xl">Kontakt</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            E-Mail:{" "}
            <a
              href="mailto:janphilippstruck@gmx.de"
              className="font-semibold text-foreground underline decoration-2 underline-offset-4"
              style={{ textDecorationColor: "var(--bal-teal)" }}
            >
              janphilippstruck@gmx.de
            </a>
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl">Hinweis zu den Inhalten</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Diese Website informiert über die geplante Veranstaltung Ballon-Ultralauf Welver. Alle
            Angaben entsprechen dem aktuellen Planungsstand und können sich im Laufe der
            Vorbereitungen und der behördlichen Abstimmung noch ändern.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
