"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-white py-16 mobile:py-10">
      <div className="max-w-[480px] mx-auto px-6 text-center">
        <h2 className="text-xl font-sans font-semibold text-off-black mb-6">
          Looking for inspiration?
        </h2>
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
          className="flex flex-col items-center gap-4"
        >
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full border-b border-gray-300 text-sm text-center py-2 outline-none placeholder:text-gray-400 focus:border-off-black transition-colors bg-transparent"
          />
          <button
            type="submit"
            className="w-full bg-off-black text-white text-xs tracking-widest uppercase py-3.5 supports-hover:hover:bg-gray-800 transition-colors"
          >
            Sign up for the mailing list
          </button>
        </form>
      </div>
    </section>
  );
}
