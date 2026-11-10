import Image from "next/image";

const navigation = [
  { href: "#over-ons", label: "Over ons" },
  { href: "#projecten", label: "Onze projecten" },
  { href: "#impact", label: "Onze impact" },
  { href: "#projecten", label: "Fotogalerij" },
  { href: "#donation", label: "Contact" },
];

const themes = [
  {
    name: "Gezondheid",
    description: "Zorg en welzijn",
    number: "01",
  },
  {
    name: "Onderwijs",
    description: "Kansen om te leren",
    number: "02",
  },
  {
    name: "Natuur & gemeenschap",
    description: "Een groene leefomgeving",
    number: "03",
  },
];

const projectAreas = [
  {
    number: "1",
    name: "Gezondheid",
    description: "Bekijk initiatieven en activiteiten voor welzijn.",
  },
  {
    number: "2",
    name: "Onderwijs",
    description: "Ontdek projecten die leren en kansen stimuleren.",
  },
  {
    number: "3",
    name: "Natuur & buurt",
    description: "Bekijk acties voor een groene en verbonden omgeving.",
  },
];

const focusAreas = [
  { name: "Gezondheid", description: "Zorg en welzijn" },
  { name: "Onderwijs", description: "Kansen om te leren" },
  { name: "Natuur", description: "Groene leefomgeving" },
  { name: "Samenleving", description: "Sterke gemeenschappen" },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Ga naar de inhoud
      </a>

      <div className="announcement">
        Samen zetten we ons in voor een sterke, betrokken samenleving.
      </div>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#main" aria-label="Stiching Mission im Possible, home">
            <Image
              className="brand-logo"
              src="/images/logo.png"
              alt=""
              width={408}
              height={204}
              priority
            />
            <span className="brand-name">Stiching Mission im Possible</span>
          </a>

          <nav className="desktop-nav" aria-label="Hoofdnavigatie">
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="button button-pink header-cta" href="#donation">
            Doneer nu
          </a>

          <details className="mobile-nav">
            <summary>Menu</summary>
            <nav aria-label="Mobiele navigatie">
              {navigation.map((item) => (
                <a href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
              <a href="#projecten">Doneer nu</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="main">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-inner content-width">
            <div className="hero-copy">
              <p className="eyebrow eyebrow-light">Samen voor een betere toekomst</p>
              <h1 id="hero-title">Samen maken we het verschil.</h1>
              <p className="hero-description">
                Met betrokkenheid en daadkracht realiseren we projecten voor
                gezondheid, onderwijs, natuur en gemeenschapsontwikkeling.
              </p>
              <div className="hero-actions">
                <a className="button button-pink" href="#projecten">
                  Steun ons werk
                </a>
                <a className="text-link text-link-light" href="#projecten">
                  Bekijk onze projecten <span aria-hidden="true">→</span>
                </a>
              </div>
              <a className="hero-note" href="#impact">
                <span aria-hidden="true">♥</span> Ontdek wat we samen mogelijk
                maken
              </a>
            </div>

            <div className="hero-visual">
              <Image
                className="hero-image"
                src="/images/project-event.jpg"
                alt="Mensen komen samen tijdens een bijeenkomst"
                width={960}
                height={540}
                priority
                sizes="(max-width: 760px) 100vw, 48vw"
              />
              <div className="project-label">
                <span>Onze projecten</span>
                <small>Gezondheid • Onderwijs • Natuur</small>
              </div>
            </div>
          </div>

          <div className="focus-strip content-width" id="impact">
            {focusAreas.map((area) => (
              <div className="focus-item" key={area.name}>
                <h2>{area.name}</h2>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="intro-section section-padding" id="over-ons">
          <div className="intro-grid content-width">
            <div className="intro-copy">
              <p className="eyebrow eyebrow-green">Wat we doen</p>
              <h2>Van betrokkenheid naar zichtbare verandering.</h2>
              <p>
                Met betrokkenheid en daadkracht zetten we ons in voor een
                sterke, betrokken samenleving. Onze aandacht gaat uit naar
                gezondheid, onderwijs, natuur en gemeenschapsontwikkeling.
              </p>
              <a className="text-link text-link-dark" href="#projecten">
                Ontdek wat we samen mogelijk maken{" "}
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="theme-grid" id="projecten">
              {themes.map((theme) => (
                <article className="theme-card" key={theme.number}>
                  <span className={`theme-number theme-number-${theme.number}`}>
                    {theme.number}
                  </span>
                  <h3>{theme.name}</h3>
                  <p>{theme.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="donation-section" id="donation">
          <div className="donation-inner content-width">
            <div className="donation-copy">
              <h2>Uw betrokkenheid maakt verschil.</h2>
              <p>
                Steun Stichting Mission im Possible en draag bij aan onze
                activiteiten op het gebied van gezondheid, onderwijs, natuur en
                gemeenschapsontwikkeling.
              </p>
              <a className="button button-pink" href="#donation">
                Doneer aan onze stichting
              </a>
            </div>

            <div className="donation-card">
              <h3>Steun onze activiteiten</h3>
              <p>Uw bijdrage helpt ons werk mogelijk te maken.</p>
              <div className="donation-amounts" aria-label="Voorbeeldbedragen">
                <span>€ 10</span>
                <span>€ 25</span>
                <span>€ 50</span>
              </div>
              <small>Voorbeeldbedragen zijn aan te passen</small>
            </div>
          </div>
        </section>

        <section className="process-section" id="projecten">
          <div className="content-width">
            <p className="eyebrow eyebrow-green">Ons werk in beeld</p>
            <h2>Projecten die mensen samenbrengen.</h2>
            <div className="process-grid">
              {projectAreas.map((area) => (
                <article className="process-item" key={area.number}>
                  <span className="process-number">{area.number}</span>
                  <div>
                    <h3>{area.name}</h3>
                    <p>{area.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner content-width">
          <a className="footer-brand" href="#main">
            Stiching Mission im Possible
          </a>
          <p>Gezondheid · Onderwijs · Natuur · Samenleving</p>
          <a href="#main">Terug naar boven ↑</a>
        </div>
      </footer>
    </>
  );
}
