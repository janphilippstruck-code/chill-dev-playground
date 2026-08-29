import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz | Ballon-Ultralauf Welver 2027" },
      {
        name: "description",
        content:
          "Datenschutzerklärung der Website zum Ballon-Ultralauf Welver 2027: rein informative Seite ohne Tracking, Analyse oder Formulare.",
      },
      { property: "og:title", content: "Datenschutz | Ballon-Ultralauf Welver 2027" },
      {
        property: "og:description",
        content:
          "Datenschutzerklärung der Website zum Ballon-Ultralauf Welver 2027: rein informative Seite ohne Tracking, Analyse oder Formulare.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Datenschutz,
});

function Datenschutz() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="balloon-rule max-w-[80px]" />
        <h1 className="mt-6 text-[2rem] sm:text-5xl">Datenschutz</h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Diese Website ist eine rein informative Veranstaltungsseite. Es werden keine Analyse-,
          Tracking-, Newsletter- oder Formularsysteme eingesetzt.
        </p>

        <section className="mt-10">
          <h2 className="text-xl">Verantwortlicher</h2>
          <address className="mt-4 text-base leading-relaxed text-muted-foreground not-italic">
            Jan-Philipp Struck
            <br />
            Brüggenkampstraße 10
            <br />
            59077 Hamm
            <br />
            Deutschland
            <br />
            E-Mail:{" "}
            <a
              href="mailto:janphilippstruck@gmx.de"
              className="font-semibold text-foreground underline decoration-2 underline-offset-4"
              style={{ textDecorationColor: "var(--bal-teal)" }}
            >
              janphilippstruck@gmx.de
            </a>
          </address>
        </section>

        <section className="mt-10">
          <h2 className="text-xl">Server-Logdaten</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Beim Aufruf dieser Website werden durch den Hosting-Anbieter technisch notwendige
            Zugriffsdaten verarbeitet. Dazu können gehören: aufgerufene Adresse, Datum und Uhrzeit
            des Zugriffs, übertragene Datenmenge, Referrer, verwendeter Browser und Betriebssystem
            sowie die IP-Adresse. Diese Verarbeitung ist für den sicheren und stabilen Betrieb der
            Website erforderlich (Art. 6 Abs. 1 lit. f DSGVO). Die Daten werden nicht zur
            Identifikation einzelner Personen genutzt und nicht mit anderen Daten zusammengeführt.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl">Cookies, Analyse und Reichweitenmessung</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Diese Website setzt keine Cookies zu Analyse- oder Marketingzwecken ein und nutzt keine
            Reichweitenmessung, kein Profiling und keine Werbenetzwerke.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl">Schriftarten</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Zur Darstellung der Typografie werden Schriftdateien von Google Fonts geladen. Dabei
            wird die IP-Adresse des aufrufenden Geräts an den Anbieter Google übertragen. Rechtliche
            Grundlage ist das berechtigte Interesse an einer einheitlichen Darstellung der Website
            (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl">Kontaktaufnahme per E-Mail</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Wenn du uns per E-Mail schreibst, werden deine Angaben ausschließlich zur Bearbeitung
            deiner Anfrage verarbeitet und danach gelöscht, sofern keine gesetzlichen
            Aufbewahrungspflichten bestehen.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl">Deine Rechte</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
            Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung. Außerdem kannst du dich
            bei einer Datenschutz-Aufsichtsbehörde beschweren. Wende dich dazu an die oben genannte
            E-Mail-Adresse.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
