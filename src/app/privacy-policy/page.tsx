export const metadata = {
  title: "Privacy Policy | Linus Tech Tips Review",
  description:
    "How Linus Tech Tips Review collects, uses, and protects your information, including cookies and third-party advertising.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-gray-950 text-gray-400 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
          Legal
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-12">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="space-y-10 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Who we are
            </h2>
            <p>
              Linus Tech Tips Review ("we", "us", "our") publishes hands-on
              reviews and buying guides covering GPUs, laptops, phones, and TVs
              at linustectips.com. This policy explains what information we
              collect when you visit the site and how it&apos;s used.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Information we collect
            </h2>
            <p className="mb-3">
              We collect a limited amount of information automatically when you
              browse the site:
            </p>
            <ul className="list-disc list-inside space-y-2 marker:text-gray-600">
              <li>
                Standard technical data (browser type, device type, approximate
                location, pages visited) via analytics tools.
              </li>
              <li>
                Cookies set by us or by third-party services we use, such as
                Google Analytics and Google AdSense.
              </li>
              <li>
                Any information you voluntarily submit, such as through our
                contact form.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. Cookies and advertising
            </h2>
            <p className="mb-3">
              We use Google AdSense to display advertising on this site. Google,
              as a third-party vendor, uses cookies to serve ads based on your
              prior visits to this and other websites. Google&apos;s use of
              advertising cookies enables it and its partners to serve ads based
              on your visit to our site and/or other sites on the internet.
            </p>
            <p>
              You may opt out of personalized advertising by visiting{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-2 hover:text-gray-300"
              >
                Google Ads Settings
              </a>
              . For more on how Google uses data when you use our site, see{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-2 hover:text-gray-300"
              >
                Google&apos;s Partner Sites policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Affiliate links
            </h2>
            <p>
              Some posts contain affiliate links, including links to Amazon and
              other retail partners. If you click one of these links and make a
              purchase, we may earn a commission at no extra cost to you. This
              never affects the honesty of our reviews or recommendations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. How we use information
            </h2>
            <ul className="list-disc list-inside space-y-2 marker:text-gray-600">
              <li>To operate, maintain, and improve the site.</li>
              <li>To understand which content is useful to readers.</li>
              <li>To serve relevant advertising through AdSense.</li>
              <li>To respond to messages sent through our contact form.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Your choices
            </h2>
            <p>
              You can disable cookies in your browser settings at any time.
              Doing so may affect how some parts of the site function. You can
              also opt out of Google&apos;s personalized ads at any time through
              the link in Section 3.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              7. Children&apos;s privacy
            </h2>
            <p>
              This site is not directed at children under 13, and we do not
              knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              8. Changes to this policy
            </h2>
            <p>
              We may update this policy from time to time. Changes will be
              posted on this page with a revised "last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              9. Contact us
            </h2>
            <p>
              Questions about this policy? Reach out via our{" "}
              <a
                href="/contact"
                className="text-white underline underline-offset-2 hover:text-gray-300"
              >
                Contact page
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
