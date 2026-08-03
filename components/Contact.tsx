"use client";

import { useState } from "react";
import { MoveRight } from "lucide-react";

const FORMSPREE_URL = "https://formspree.io/f/mqerrnzg";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full border border-gray-600 bg-transparent px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-accent";

  if (status === "sent") {
    return (
      <p className="font-mono text-accent">
        Message sent — I&apos;ll get back to you soon. Thanks!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-[640px] flex-col gap-6">
      <div>
        <label htmlFor="name" className="mb-2 block font-mono text-sm text-gray-300">
          Your name <span className="text-accent">*</span>
        </label>
        <input
          id="name"
          name="name"
          required
          placeholder="What's your name?"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block font-mono text-sm text-gray-300">
          Your email <span className="text-accent">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="What's your email?"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block font-mono text-sm text-gray-300">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="What do you want to say?"
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="flex items-center gap-1.5 self-start border border-accent px-5 py-2.5 font-mono text-sm text-accent transition hover:bg-accent hover:text-black disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
        <MoveRight size={14} />
      </button>

      {status === "error" && (
        <p className="font-mono text-sm text-red-400">
          Something went wrong — email me directly at briannatt007@gmail.com
        </p>
      )}
    </form>
  );
}