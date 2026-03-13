import Link from "next/link";

export const metadata = {
  title: "privacy policy — qlabs",
  description: "qlabs privacy policy.",
};

export default function Privacy() {
  return (
    <>
      <header className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="text-sm font-bold tracking-tight hover:opacity-70 transition-opacity">
            qlabs
          </Link>
          <Link href="/" className="text-xs text-muted hover:text-foreground transition-colors">
            &larr; back
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs text-muted tracking-widest uppercase mb-4">
          legal
        </p>
        <h1 className="text-2xl font-bold tracking-tight mb-2">
          privacy policy
        </h1>
        <p className="text-xs text-muted mb-16">last updated: march 2026</p>

        <div className="space-y-10">
          <Section title="overview">
            <p>
              qlabs LLC (&ldquo;qlabs,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy.
              this policy explains how we collect, use, and protect information
              when you use our applications and visit our website at
              qlabs.studio.
            </p>
          </Section>

          <Section title="information we collect">
            <p>
              we collect only the minimum information necessary to provide our
              services.
            </p>
            <ul>
              <li>
                <strong>contact information</strong> — if you contact us via
                email, we collect your email address and any information you
                provide.
              </li>
              <li>
                <strong>usage data</strong> — our apps may collect anonymous
                usage analytics to improve functionality. this data does not
                personally identify you.
              </li>
              <li>
                <strong>device information</strong> — we may collect device
                type, OS version, and app version for troubleshooting and
                compatibility.
              </li>
            </ul>
          </Section>

          <Section title="how we use your information">
            <ul>
              <li>provide, maintain, and improve our applications</li>
              <li>respond to inquiries and support requests</li>
              <li>analyze usage patterns to improve user experience</li>
              <li>ensure security and stability of our applications</li>
            </ul>
          </Section>

          <Section title="data sharing">
            <p>
              we do not sell, trade, or rent your personal information. we may
              share information only:
            </p>
            <ul>
              <li>with your explicit consent</li>
              <li>to comply with legal obligations</li>
              <li>
                to protect the rights and safety of qlabs, our users, or the
                public
              </li>
            </ul>
          </Section>

          <Section title="data security">
            <p>
              we implement reasonable security measures to protect your
              information from unauthorized access, alteration, or destruction.
              no method of transmission over the internet is 100% secure.
            </p>
          </Section>

          <Section title="third-party services">
            <p>
              our applications may use third-party services such as analytics
              providers or cloud infrastructure that have their own privacy
              policies.
            </p>
          </Section>

          <Section title="children's privacy">
            <p>
              our services are not directed to children under 13. we do not
              knowingly collect personal information from children under 13. if
              we become aware that we have, we will delete it.
            </p>
          </Section>

          <Section title="your rights">
            <ul>
              <li>request access to personal information we hold about you</li>
              <li>request correction or deletion of your personal information</li>
              <li>opt out of analytics or data collection within our apps</li>
            </ul>
          </Section>

          <Section title="changes to this policy">
            <p>
              we may update this policy from time to time. changes will be
              posted on this page with an updated date.
            </p>
          </Section>

          <Section title="contact">
            <p>
              questions about this policy? reach us at{" "}
              <a
                href="mailto:support@qlabs.studio"
                className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
              >
                support@qlabs.studio
              </a>
              .
            </p>
          </Section>
        </div>
      </main>

      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <span className="text-[11px] text-muted">
            &copy; {new Date().getFullYear()} qlabs LLC
          </span>
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
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-sm font-bold mb-4">{title}</h2>
      <div className="text-xs text-muted leading-relaxed space-y-3 [&_ul]:space-y-2 [&_ul]:list-none [&_li]:pl-4 [&_li]:relative [&_li]:before:content-['—'] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:text-border">
        {children}
      </div>
    </div>
  );
}
