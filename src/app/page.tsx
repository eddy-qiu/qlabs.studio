import Link from "next/link";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-sm font-bold tracking-tight">qlabs</span>
        <nav className="flex gap-8">
          <a href="#services" className="text-xs text-muted hover:text-foreground transition-colors">
            services
          </a>
          <a href="#work" className="text-xs text-muted hover:text-foreground transition-colors">
            work
          </a>
          <a href="#about" className="text-xs text-muted hover:text-foreground transition-colors">
            about
          </a>
          <a
            href="mailto:support@qlabs.studio"
            className="text-xs text-muted hover:text-foreground transition-colors"
          >
            contact
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6">
      <div className="max-w-5xl mx-auto w-full">
        <p className="text-xs text-muted tracking-widest uppercase mb-6">
          software studio
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter leading-[0.9] mb-8">
          we design &amp;<br />
          build apps.
        </h1>
        <p className="text-sm text-muted leading-relaxed max-w-md">
          qlabs is an independent studio working across iOS, Android, and the
          web. we focus on clean software that works well and lasts.
        </p>
        <div className="mt-10 flex gap-6 items-center">
          <a
            href="mailto:support@qlabs.studio"
            className="text-xs border border-foreground px-5 py-2.5 hover:bg-foreground hover:text-background transition-colors"
          >
            get in touch
          </a>
          <a
            href="#work"
            className="text-xs text-muted hover:text-foreground transition-colors"
          >
            see our work &darr;
          </a>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "mobile apps",
    description:
      "native and cross-platform development for iOS and Android. swift, kotlin, react native — whatever fits the project.",
  },
  {
    title: "web apps",
    description:
      "full-stack web applications built with modern tools. fast, accessible, and designed to hold up at scale.",
  },
  {
    title: "design",
    description:
      "interface and experience design from wireframes through production. we ship the pixels, not just the mockups.",
  },
  {
    title: "consulting",
    description:
      "technical advisory on architecture, stack selection, and development process for teams building software.",
  },
];

function Services() {
  return (
    <section id="services" className="py-32 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs text-muted tracking-widest uppercase mb-4">
          what we do
        </p>
        <h2 className="text-2xl font-bold tracking-tight mb-16">services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {services.map((s) => (
            <div key={s.title} className="bg-background p-8 md:p-10">
              <h3 className="text-sm font-bold mb-3">{s.title}</h3>
              <p className="text-xs text-muted leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    label: "iOS",
    title: "productivity tools",
    description:
      "task management and workflow applications with focused interfaces built for daily use.",
  },
  {
    label: "cross-platform",
    title: "consumer apps",
    description:
      "full-stack mobile and web applications built for real users — performance and reliability first.",
  },
  {
    label: "web",
    title: "client projects",
    description:
      "custom web applications for businesses ranging from early-stage startups to established companies.",
  },
];

function Work() {
  return (
    <section id="work" className="py-32 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs text-muted tracking-widest uppercase mb-4">
          selected work
        </p>
        <h2 className="text-2xl font-bold tracking-tight mb-16">projects</h2>
        <div className="space-y-px bg-border">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-background p-8 md:p-10 md:flex md:items-start md:gap-16"
            >
              <div className="md:w-48 shrink-0 mb-3 md:mb-0">
                <span className="text-[10px] text-muted tracking-widest uppercase">
                  {p.label}
                </span>
                <p className="text-sm font-bold mt-1">{p.title}</p>
              </div>
              <p className="text-xs text-muted leading-relaxed max-w-md">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto md:flex md:gap-24">
        <div className="md:w-48 shrink-0 mb-8 md:mb-0">
          <p className="text-xs text-muted tracking-widest uppercase mb-4">
            about
          </p>
          <h2 className="text-2xl font-bold tracking-tight">qlabs</h2>
        </div>
        <div className="space-y-6 max-w-lg">
          <p className="text-sm text-muted leading-relaxed">
            qlabs is a software studio built on the idea that good software
            comes from small teams with high standards. we design, build, and
            ship across platforms — giving every project the same level of care
            whether it&apos;s an internal tool or a consumer-facing product.
          </p>
          <p className="text-sm text-muted leading-relaxed">
            we work across the full stack. native iOS and Android, modern web
            frameworks, infrastructure. our process is straightforward:
            understand the problem, build the right thing, iterate until
            it&apos;s solid.
          </p>
          <p className="text-sm leading-relaxed">
            based in the US. open to freelance, contract, and long-term work.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <span className="text-[11px] text-muted">
            &copy; {new Date().getFullYear()} qlabs LLC
          </span>
          <Link
            href="/privacy"
            className="text-[11px] text-muted hover:text-foreground transition-colors"
          >
            privacy policy
          </Link>
        </div>
        <a
          href="https://github.com/eddy-qiu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-muted hover:text-foreground transition-colors"
        >
          github
        </a>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
      </main>
      <Footer />
    </>
  );
}
