"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <main className="bg-gray-950 text-gray-400 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
          Contact
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Get in touch
        </h1>
        <p className="mb-12 leading-relaxed">
          Spotted an error, have a product suggestion, or want to talk
          partnerships? Send us a message below, or email us directly at{" "}
          <a
            href="mailto:ericone141@gmail.com"
            className="text-white underline underline-offset-2 hover:text-gray-300"
          >
            ericone141@gmail.com
          </a>
          .
        </p>

        {status === "sent" ? (
          <div className="border border-gray-800 rounded-xl p-6 text-white">
            Thanks &mdash; your message has been sent. We&apos;ll get back to
            you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {status === "error" && (
              <div className="border border-red-900 bg-red-950/40 rounded-lg p-4 text-red-300 text-sm">
                Something went wrong sending your message. Please try again or
                email us directly.
              </div>
            )}
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-gray-600"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-gray-600"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-gray-600 resize-none"
                placeholder="What's on your mind?"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-white text-gray-950 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
