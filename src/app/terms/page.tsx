export const metadata = {
  title: "Terms of Service | Linus Tech Tips Review",
  description:
    "Terms of use and affiliate disclosure for Linus Tech Tips Review.",
};

export default function TermsPage() {
  return (
    <main className="bg-gray-950 text-gray-400 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
          Legal
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Terms of Service
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
              1. Acceptance of terms
            </h2>
            <p>
              By accessing linustectips.com, you agree to these Terms of
              Service. If you don&apos;t agree, please don&apos;t use the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. What this site offers
            </h2>
            <p>
              We publish independent reviews, comparisons, and buying guides for
              consumer tech &mdash; GPUs, laptops, phones, and TVs. Content
              reflects our own testing and research and is intended for general
              informational purposes, not professional or purchasing advice
              tailored to your specific situation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. Affiliate disclosure
            </h2>
            <p>
              Linus Tech Tips Review is a participant in affiliate programs,
              including the Amazon Associates Program, designed to provide a
              means for sites to earn advertising fees by linking to retail
              partners. When you click certain links and make a purchase, we may
              earn a commission at no additional cost to you. Affiliate
              relationships never influence which products we recommend or how
              we rate them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Advertising
            </h2>
            <p>
              This site displays ads served by Google AdSense and other ad
              networks. These networks may use cookies to serve relevant ads;
              see our{" "}
              <a
                href="/privacy-policy"
                className="text-white underline underline-offset-2 hover:text-gray-300"
              >
                Privacy Policy
              </a>{" "}
              for details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Accuracy of information
            </h2>
            <p>
              We do our best to keep specs, prices, and availability current,
              but tech products change fast. Always verify pricing and
              specifications directly with the retailer before purchasing.
              We&apos;re not liable for outdated or inaccurate third-party
              information referenced in our content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Intellectual property
            </h2>
            <p>
              All original content &mdash; text, images, and graphics &mdash; is
              owned by Linus Tech Tips Review unless otherwise credited. Please
              don&apos;t republish our content without permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              7. Limitation of liability
            </h2>
            <p>
              We&apos;re not responsible for any loss or damage arising from
              your use of this site or reliance on its content, including
              decisions made based on our reviews or affiliate links.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              8. Changes to these terms
            </h2>
            <p>
              We may revise these terms occasionally. Continued use of the site
              after changes means you accept the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              9. Contact us
            </h2>
            <p>
              Questions about these terms? Reach out via our{" "}
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
