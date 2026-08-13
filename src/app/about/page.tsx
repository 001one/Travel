export const metadata = {
  title: "About Us | Linus Tech Tips Review",
  description:
    "Why Linus Tech Tips Review exists and how we test the GPUs, laptops, phones, and TVs we write about.",
};

export default function AboutPage() {
  return (
    <main className="bg-gray-950 text-gray-400 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
          About
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Honest tech reviews, no hype.
        </h1>

        <div className="space-y-8 leading-relaxed">
          <p>
            Linus Tech Tips Review started with a simple frustration: most
            buying guides online read like they were written to hit a keyword
            quota, not to actually help someone decide what to buy. We wanted
            something different &mdash; reviews grounded in real specs, real
            comparisons, and plain language.
          </p>

          <p>
            We cover four categories closely: GPUs and CPUs, laptops, phones,
            and TVs &amp; monitors. Rather than chasing every launch, we focus
            on the products people are actually deciding between, and try to
            answer the question that matters &mdash; is this worth your money?
          </p>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              How we write reviews
            </h2>
            <ul className="list-disc list-inside space-y-2 marker:text-gray-600">
              <li>
                We compare official specs against real-world benchmarks and
                published test data, not marketing copy.
              </li>
              <li>
                We cross-check pricing and availability at the time of writing
                and note when a product is region-limited.
              </li>
              <li>
                We call out weaknesses as clearly as strengths &mdash; a good
                review should help you avoid a bad purchase, too.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              How the site makes money
            </h2>
            <p>
              Some of our links are affiliate links (including Amazon
              Associates), and we run display advertising through Google
              AdSense. Neither influences our recommendations &mdash; full
              details are in our{" "}
              <a
                href="/terms"
                className="text-white underline underline-offset-2 hover:text-gray-300"
              >
                Terms of Service
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              Get in touch
            </h2>
            <p>
              Have a correction, a product you want covered, or a question?
              Visit our{" "}
              <a
                href="/contact"
                className="text-white underline underline-offset-2 hover:text-gray-300"
              >
                Contact page
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
