import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Flag,
  Utensils,
  Timer,
  Backpack,
  Tent,
  ShowerHead,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import logo from "@/assets/logo-ballon-ultralauf.png.asset.json";
import historie from "@/assets/historie-ballon-ultralauf.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ballon-Ultralauf Welver 2027 | 2.–4. Juli 2027" },
      {
        name: "description",
        content:
          "Der Ballon-Ultralauf kehrt zurück. Acht gemeinsame Starts, vier Strecken und bis zu 100 Kilometer im Buchenwaldstadion Welver. Für die ganz große Herausforderung: 100 Meilen.",
      },
      { property: "og:title", content: "Ballon-Ultralauf Welver 2027" },
      {
        property: "og:description",
        content:
          "Wer früher im Ziel ist, kann länger Pause machen. Der Ballon-Ultralauf kehrt 2027 in Welver zurück.",
      },
    ],
  }),
  component: Index,
});


const ROUNDS = [
  { n: 1, km: "20 KM", when: "Samstag · 08:00 Uhr", window: "4 Stunden", color: "var(--bal-red)" },
  { n: 2, km: "15 KM", when: "Samstag · 12:00 Uhr", window: "3 Stunden", color: "var(--bal-orange)" },
  { n: 3, km: "10 KM", when: "Samstag · 15:00 Uhr", window: "2 Stunden", color: "var(--bal-yellow)" },
  { n: 4, km: "5 KM", when: "Samstag · 17:00 Uhr", window: "1 Stunde", color: "var(--bal-green)" },
  { n: 5, km: "5 KM", when: "Samstag · 18:00 Uhr", window: "1 Stunde", color: "var(--bal-teal)" },
  { n: 6, km: "10 KM", when: "Samstag · 19:00 Uhr", window: "2 Stunden", color: "var(--bal-blue)" },
  { n: 7, km: "15 KM", when: "Samstag · 21:00 Uhr", window: "3 Stunden", color: "var(--bal-violet)" },
  { n: 8, km: "20 KM", when: "Sonntag · 00:00 Uhr", window: "4 Stunden", color: "var(--bal-pink)" },
];

const COURSES = [
  { km: "5 KM", title: "Die kurze Runde.", note: "ortsnah und kompakt.", color: "var(--bal-green)" },
  {
    km: "10 KM",
    title: "Die mittlere Runde.",
    note: "derzeit noch in der finalen Streckenplanung.",
    color: "var(--bal-teal)",
  },
  {
    km: "15 KM",
    title: "Auf Welveraner Wanderwegen.",
    note: "orientiert sich weitgehend am offiziellen Wanderweg A4.",
    color: "var(--bal-orange)",
  },
  {
    km: "20 KM",
    title: "Die große Runde.",
    note: 'orientiert sich an der ausgeschilderten 21,1-km-Variante der Welveraner „5 am Tag“-Marathonroute.',
    color: "var(--bal-red)",
  },
];

const HISTORY = [
  { year: "2018", text: "Der erste Ballon-Ultralauf.", color: "var(--bal-red)" },
  { year: "2019", text: "Aus der Idee wird eine echte Veranstaltung.", color: "var(--bal-orange)" },
  { year: "2020", text: "100 Meilen.", color: "var(--bal-yellow)" },
  { year: "2021", text: "125 Meilen.", color: "var(--bal-green)" },
  { year: "2022", text: "Weitere Ballon-Ultra-Formate.", color: "var(--bal-teal)" },
  { year: "2027", text: "Der Ballon-Ultralauf bekommt in Welver eine neue Heimat.", color: "var(--bal-violet)" },
];

const STADIUM_INFO = [
  { icon: Flag, label: "Start & Ziel" },
  { icon: Utensils, label: "Versorgung" },
  { icon: Timer, label: "Zeitnahme" },
  { icon: Backpack, label: "Eigenverpflegung" },
  { icon: Tent, label: "Aufenthalt & Ruhe" },
  { icon: ShowerHead, label: "Toiletten / Duschen", sub: "nach Verfügbarkeit" },
];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Header />

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-[0.07] blur-2xl"
          style={{ background: "var(--bal-teal)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full opacity-[0.06] blur-2xl"
          style={{ background: "var(--bal-yellow)" }}
        />
        <div className="relative mx-auto max-w-5xl px-5 py-9 sm:px-8 sm:py-24">
          <h1 className="sr-only">Ballon-Ultralauf Welver 2027</h1>
          <img
            src={logo.url}
            alt="Ballon-Ultralauf Welver – Veranstaltungslogo"
            className="w-full max-w-[300px] object-contain sm:max-w-[560px]"
          />

          <p className="eyebrow mt-5 text-muted-foreground sm:mt-8">
            2.–4. Juli 2027 · Welver
          </p>

          <div className="mt-4 max-w-2xl sm:mt-7">
            <div className="balloon-rule max-w-[100px] sm:max-w-[120px]" />
            <p className="mt-4 font-display text-[1.65rem] leading-[1.05] font-extrabold sm:mt-5 sm:text-3xl lg:text-4xl">
              „Wer früher im Ziel ist,
              <br />
              kann länger Pause machen.“
            </p>
          </div>

          <p className="mt-4 max-w-2xl text-[0.975rem] leading-snug text-muted-foreground sm:mt-7 sm:text-lg sm:leading-relaxed">
            Acht Starts. Vier Strecken. 100 Kilometer.
            <br />
            Und für die ganz große Herausforderung: 100 Meilen.
          </p>

          <div className="mt-6 sm:mt-8">
            <a
              href="#konzept"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-display text-sm font-bold tracking-wide text-primary-foreground uppercase transition-transform hover:-translate-y-0.5 sm:w-auto sm:py-3.5"
            >
              Das Konzept entdecken <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              Die Anmeldung öffnet nach Abschluss der behördlichen Abstimmung.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- DAS PRINZIP ---------- */}
      <section id="konzept" className="border-b border-border">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-24">
          <p className="eyebrow" style={{ color: "var(--bal-red)" }}>
            Das Prinzip
          </p>
          <h2 className="mt-3 text-[1.85rem] sm:mt-4 sm:text-5xl">Ein Ultralauf mit Pausen.</h2>
          <div className="mt-5 max-w-2xl space-y-3.5 text-[0.975rem] leading-snug text-muted-foreground sm:mt-7 sm:space-y-5 sm:text-lg sm:leading-relaxed">
            <p>Alle starten gemeinsam. Aber nicht alle kommen gleichzeitig zurück.</p>
            <p>
              Beim Ballon-Ultralauf stehen acht Runden mit festen Startzeiten auf dem Programm. Nach
              jeder Runde geht es zurück ins Buchenwaldstadion. Wer schneller läuft, hat bis zum
              nächsten gemeinsamen Start mehr Zeit zum Essen, Erholen, Duschen, Reden oder einfach zum
              Füßehochlegen.
            </p>
          </div>

          <figure
            className="mt-6 max-w-2xl border-l-4 pl-4 font-display text-lg leading-tight font-extrabold sm:mt-9 sm:pl-5 sm:text-2xl"
            style={{ borderColor: "var(--bal-yellow)" }}
          >
            „Wer früher im Ziel ist, kann länger Pause machen.“
          </figure>

          {/* Kompakte Flow-Infografik (kein Navigationselement) */}
          <ol className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-2 sm:mt-12 sm:gap-x-3 sm:gap-y-3">
            {["Start", "Laufen", "Ziel", "Pause", "Nächster Start"].map((step, i) => (
              <li key={step} className="flex items-center gap-2 sm:gap-3">
                <span className="eyebrow rounded-full border border-border bg-surface px-3 py-1.5 text-[0.68rem] text-foreground sm:px-4 sm:py-2.5 sm:text-xs">
                  {step}
                </span>
                {i < 4 && <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground sm:h-4 sm:w-4" />}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- ABLAUF ---------- */}
      <section id="ablauf" className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-24">
          <h2 className="text-[1.85rem] sm:text-5xl">
            100 Kilometer.
            <br />
            Acht Starts.
            <br />
            20 Stunden.
          </h2>
          <p className="mt-4 max-w-2xl text-[0.975rem] leading-snug text-muted-foreground sm:mt-6 sm:text-lg sm:leading-relaxed">
            Das Hauptprogramm besteht aus acht fest terminierten Runden. Für jeweils fünf Kilometer
            steht eine Stunde zur Verfügung.
          </p>

          {/* Mobile: kompakte Rundenliste · Desktop: Kartenreihe */}
          <Reveal>
            <ol className="mt-6 grid gap-2 sm:mt-10 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
              {ROUNDS.map((r) => (
                <li
                  key={r.n}
                  className="relative overflow-hidden rounded-xl border border-border bg-background py-3 pr-4 pl-5 transition-transform duration-300 hover:-translate-y-1 sm:p-5 sm:pl-6"
                >
                  <span
                    aria-hidden
                    className="absolute top-0 bottom-0 left-0 w-1.5"
                    style={{ background: r.color }}
                  />
                  <div className="flex items-baseline gap-2.5 sm:gap-3">
                    <span
                      className="font-display text-xl font-extrabold sm:text-3xl"
                      style={{ color: r.color }}
                    >
                      {r.n}
                    </span>
                    <span className="font-display text-lg font-extrabold sm:text-2xl">{r.km}</span>
                  </div>
                  <p className="mt-1 text-sm font-semibold sm:mt-3">{r.when}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground sm:mt-1">
                    {r.window} Zeitfenster
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>


          <p className="mt-6 text-sm font-semibold text-muted-foreground sm:mt-8">
            Ende des Hauptprogramms: Sonntag gegen 04:00 Uhr.
          </p>

          <div
            className="mt-8 rounded-2xl border border-border bg-background p-5 sm:mt-12 sm:p-10"
            style={{ borderTop: "4px solid var(--bal-blue)" }}
          >
            <h3 className="text-xl sm:text-3xl">Du musst nicht alle acht Runden laufen.</h3>
            <p className="mt-3 max-w-2xl text-[0.975rem] leading-snug text-muted-foreground sm:mt-4 sm:text-base sm:leading-relaxed">
              Einzelne Runden können ausgelassen werden. Du kannst die Veranstaltung nach deiner
              persönlichen Zieldistanz beenden. Wer bei einer weiteren Runde starten möchte, muss
              rechtzeitig zum gemeinsamen Start zurück im Buchenwaldstadion sein.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- VON 5 BIS 100 KM ---------- */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-24">
          <h2 className="text-[1.85rem] sm:text-5xl">
            5 Kilometer oder 100?
            <br />
            Beides gehört dazu.
          </h2>
          <Reveal className="mt-6 grid gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-3">
            {[
              { t: "Eine Runde", d: "Einfach Teil des Ballon-Ultralaufs sein.", c: "var(--bal-green)" },
              {
                t: "Erster Ultra",
                d: "Mehrere Runden kombinieren und die eigene Grenze verschieben.",
                c: "var(--bal-orange)",
              },
              { t: "100 KM", d: "Alle acht Starts. Das komplette Hauptprogramm.", c: "var(--bal-violet)" },
            ].map((card) => (
              <article key={card.t} className="rounded-2xl border border-border bg-surface p-5 sm:p-7">
                <div className="balloon-rule max-w-[48px]" style={{ background: card.c }} />
                <h3 className="mt-3.5 text-xl uppercase sm:mt-5 sm:text-2xl">{card.t}</h3>
                <p className="mt-2 text-[0.975rem] leading-snug text-muted-foreground sm:mt-3 sm:text-base sm:leading-relaxed">
                  „{card.d}“
                </p>
              </article>
            ))}
          </Reveal>
          <p className="mt-6 max-w-2xl text-[0.975rem] leading-snug text-muted-foreground sm:mt-8 sm:text-base sm:leading-relaxed">
            Der Ballon-Ultralauf verbindet unterschiedliche Leistungsniveaus in derselben
            Veranstaltung.
          </p>
        </div>
      </section>

      {/* ---------- STRECKEN ---------- */}
      <section id="strecken" className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-24">
          <h2 className="text-[1.85rem] sm:text-5xl">
            Vier Strecken.
            <br />
            Acht Starts.
          </h2>
          <Reveal className="mt-6 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
            {COURSES.map((c) => (
              <article
                key={c.km}
                className="relative overflow-hidden rounded-2xl border border-border bg-background p-5 pl-6 sm:p-7 sm:pl-8"
              >
                <span
                  aria-hidden
                  className="absolute top-0 bottom-0 left-0 w-1.5"
                  style={{ background: c.color }}
                />
                <p className="font-display text-2xl font-extrabold sm:text-3xl" style={{ color: c.color }}>
                  {c.km}
                </p>
                <h3 className="mt-1.5 text-lg sm:mt-2 sm:text-xl">{c.title}</h3>
                <p className="mt-2 text-[0.975rem] leading-snug text-muted-foreground sm:mt-3 sm:text-base sm:leading-relaxed">
                  {c.note}
                </p>
              </article>
            ))}
          </Reveal>
          <p className="mt-6 max-w-2xl border-l-4 pl-4 text-[0.975rem] leading-snug text-muted-foreground sm:mt-9 sm:pl-5 sm:text-base sm:leading-relaxed" style={{ borderColor: "var(--bal-teal)" }}>
            Die vier Strecken befinden sich derzeit in der finalen Befahrung, Vermessung und
            Abstimmung. Die endgültigen GPX-Dateien werden mit der Ausschreibung veröffentlicht.
          </p>
        </div>
      </section>

      {/* ---------- 100 MEILEN ---------- */}
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-24">
          <p className="eyebrow" style={{ color: "var(--bal-yellow)" }}>
            Die ganz große Herausforderung
          </p>
          <h2 className="mt-3 text-[2.25rem] sm:mt-4 sm:text-6xl">100 Meilen.</h2>
          <p className="mt-4 max-w-2xl text-[0.975rem] leading-snug opacity-80 sm:mt-6 sm:text-lg sm:leading-relaxed">
            Für Freitagabend ist zusätzlich ein Prolog über rund 61 Kilometer geplant. Gemeinsam mit
            den 100 Kilometern des Hauptprogramms ergibt sich daraus die klassische
            100-Meilen-Distanz.
          </p>

          <div className="mt-7 flex flex-col items-start gap-0.5 sm:mt-10 sm:flex-row sm:items-center sm:gap-5">
            <span className="font-display text-xl font-extrabold sm:text-3xl">61 KM Prolog</span>
            <span className="font-display text-lg opacity-60 sm:text-2xl">+</span>
            <span className="font-display text-xl font-extrabold sm:text-3xl">100 KM Hauptprogramm</span>
            <span className="font-display text-lg opacity-60 sm:text-2xl">=</span>
            <span
              className="font-display text-xl font-extrabold sm:text-3xl"
              style={{ color: "var(--bal-yellow)" }}
            >
              100 Meilen
            </span>
          </div>

          <p className="mt-7 max-w-2xl text-[0.975rem] leading-snug opacity-80 sm:mt-10 sm:text-base sm:leading-relaxed">
            Der Prolog befindet sich noch in der separaten Strecken- und Behördenabstimmung.
          </p>
          <p
            className="eyebrow mt-5 inline-flex rounded-full px-4 py-2 sm:mt-6"
            style={{ background: "var(--bal-violet)", color: "oklch(1 0 0)" }}
          >
            Vorbehaltlich Streckenfreigabe
          </p>
        </div>
      </section>

      {/* ---------- BUCHENWALDSTADION ---------- */}
      <section id="welver" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-24">
          <h2 className="text-[1.85rem] sm:text-5xl">Unser Zuhause für ein langes Wochenende.</h2>
          <p className="mt-4 font-display text-2xl font-extrabold sm:mt-5 sm:text-4xl" style={{ color: "var(--bal-green)" }}>
            Buchenwaldstadion Welver
          </p>
          <p className="mt-4 max-w-2xl text-[0.975rem] leading-snug text-muted-foreground sm:mt-6 sm:text-lg sm:leading-relaxed">
            Hier startet jede Runde. Hier endet jede Runde. Und hier spielt sich der Ballon-Ultralauf
            dazwischen ab.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-2 min-[380px]:grid-cols-2 sm:mt-10 sm:gap-3 lg:grid-cols-3">
            {STADIUM_INFO.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="flex items-start gap-2.5 rounded-xl border border-border bg-surface p-3.5 sm:gap-3 sm:p-5"
              >
                <Icon className="mt-0.5 h-4 w-4 shrink-0 sm:h-5 sm:w-5" style={{ color: "var(--bal-blue)" }} />
                <div>
                  <p className="eyebrow text-[0.68rem] text-foreground sm:text-xs">{label}</p>
                  {sub && <p className="mt-0.5 text-xs text-muted-foreground sm:mt-1 sm:text-sm">{sub}</p>}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-2xl text-[0.975rem] leading-snug text-muted-foreground sm:mt-10 sm:text-base sm:leading-relaxed">
            Das Buchenwaldstadion bildet das zentrale Basecamp der Veranstaltung. Nach jeder Runde
            kehren die Teilnehmenden hierher zurück.
          </p>
        </div>
      </section>

      {/* ---------- MITTEN DURCH WELVER ---------- */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
          <h2 className="text-[2rem] sm:text-5xl">Mitten durch Welver.</h2>
          <div className="mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Die Strecken führen überwiegend über Geh-, Rad-, Feld- und Wirtschaftswege sowie
              bestehende Wander- und Laufrouten.
            </p>
            <p>
              Der öffentliche Raum bleibt dabei öffentlich. Nach aktuellem Planungsstand sind keine
              flächendeckenden Straßensperrungen vorgesehen.
            </p>
          </div>

          <p
            className="mt-9 max-w-2xl border-l-4 pl-5 font-display text-xl leading-tight font-extrabold sm:text-2xl"
            style={{ borderColor: "var(--bal-orange)" }}
          >
            „Rücksicht gehört genauso zum Lauf wie Laufschuhe und GPX.“
          </p>

          <ul className="mt-9 grid gap-3 sm:grid-cols-3">
            {[
              { t: "Öffentlicher Verkehr hat Vorrang.", c: "var(--bal-red)" },
              { t: "Keine Sonderrechte für Teilnehmende.", c: "var(--bal-teal)" },
              { t: "Möglichst verkehrsarme Streckenführung.", c: "var(--bal-green)" },
            ].map((p) => (
              <li key={p.t} className="rounded-xl border border-border bg-background p-5">
                <div className="balloon-rule max-w-[32px]" style={{ background: p.c }} />
                <p className="mt-4 text-base font-semibold">{p.t}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- ORIENTIERUNG UND NACHT ---------- */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
          <h2 className="text-[2rem] sm:text-5xl">Damit du deine Runde findest.</h2>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            {["GPX", "Streckenmarkierung", "Vorhandene Wegeschilder"].map((item, i) => (
              <div key={item} className="flex items-center gap-3">
                <span className="eyebrow rounded-full border border-border bg-surface px-4 py-2.5">
                  {item}
                </span>
                {i < 2 && <span className="font-display text-xl text-muted-foreground">+</span>}
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Die Navigation wird bewusst mehrfach abgesichert.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Für Dämmerung und Nacht gehören Stirnlampe, ausreichende Energiereserve und gut sichtbare
            reflektierende Kleidung zur Pflichtausrüstung.
          </p>
        </div>
      </section>

      {/* ---------- GESCHICHTE / COMEBACK ---------- */}
      <section id="geschichte" className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <h2 className="text-[2rem] sm:text-5xl">Von 2018 nach Welver.</h2>

          <Reveal className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
            <figure>
              <img
                src={historie.url}
                alt="Teilnehmende des Ballon-Ultralaufs jubeln auf einer Wiese am Start- und Zielbereich"
                loading="lazy"
                className="aspect-4/3 w-full rounded-2xl object-cover"
              />
              <figcaption className="mt-3 text-sm text-muted-foreground">
                Ballon-Ultralauf – Impression aus den früheren Veranstaltungsjahren.
              </figcaption>
            </figure>

            <ol className="relative border-l border-border pl-6">
              {HISTORY.map((h) => (
                <li key={h.year} className="relative pb-7 last:pb-0">
                  <span
                    aria-hidden
                    className="absolute top-2 -left-[1.9rem] h-3 w-3 rounded-full"
                    style={{ background: h.color }}
                  />
                  <p className="font-display text-2xl font-extrabold" style={{ color: h.color }}>
                    {h.year}
                  </p>
                  <p className="mt-1 text-base leading-relaxed text-muted-foreground">„{h.text}“</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <p className="mt-12 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Aus einem kleinen Lauf unter Freunden entwickelte sich ein Community-Format mit
            Teilnehmenden aus der Region und darüber hinaus. 2027 kehrt der Ballon-Ultralauf zurück –
            mit der ursprünglichen Idee, aber an einem neuen Standort.
          </p>
        </div>
      </section>

      {/* ---------- AKTUELLER STAND ---------- */}
      <section id="stand" className="border-b border-border">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="eyebrow" style={{ color: "var(--bal-blue)" }}>
            Aktueller Stand
          </p>
          <h2 className="mt-4 text-2xl sm:text-4xl">Die Vorbereitungen laufen.</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Aktuell befindet sich der Ballon-Ultralauf in Abstimmung mit den zuständigen Behörden.
            Grundkonzept, Veranstaltungsstandort und die Streckenkorridore stehen bereits. Die
            Detailplanung und notwendigen Freigaben werden derzeit vorbereitet.
          </p>
          <p className="mt-5 text-base font-semibold">
            Die Anmeldung öffnet nach Abschluss der behördlichen Abstimmung.
          </p>
          <p className="eyebrow mt-6 inline-flex rounded-full border border-border bg-secondary px-4 py-2 text-muted-foreground">
            Updates folgen
          </p>
        </div>
      </section>

      {/* ---------- ABSCHLUSS-CTA ---------- */}
      <section className="bg-surface">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 sm:py-24">
          <img
            src={logo.url}
            alt="Ballon-Ultralauf Welver – Veranstaltungslogo"
            className="mx-auto w-full max-w-[440px] object-contain"
          />
          <div className="mt-9 space-y-1.5">
            <p className="eyebrow">Ballon-Ultralauf Welver</p>
            <p className="eyebrow text-muted-foreground">2.–4. Juli 2027</p>
            <p className="eyebrow text-muted-foreground">Buchenwaldstadion Welver</p>
          </div>
          <div className="balloon-rule mx-auto mt-9 max-w-[120px]" />
          <p className="mx-auto mt-8 max-w-2xl font-display text-2xl leading-tight font-extrabold sm:text-4xl">
            „Wer früher im Ziel ist,
            <br />
            kann länger Pause machen.“
          </p>
          <p className="mt-8 text-base font-semibold">
            Die Anmeldung öffnet nach Abschluss der behördlichen Abstimmung.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
            Bis dahin findest du hier nach und nach alle Neuigkeiten zur Veranstaltung.
          </p>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <Footer />

    </div>
  );
}
