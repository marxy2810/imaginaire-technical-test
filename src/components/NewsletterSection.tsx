"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-white pt-36 pb-16 tablet:pt-28 mobile:pt-24 mobile:pb-10">
      <div className="max-w-[45rem] mx-auto px-6 text-center">
        <h2 className="text-4xl text-off-black mb-6">
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
            className="w-full border-b border-gray-300 text-md text-center py-2 outline-none placeholder:text-off-black focus:border-off-black transition-colors bg-transparent"
          />
          <button
            type="submit"
            className="w-full bg-off-black text-white text-md font-semibold uppercase py-3.5 text-center rounded-[0.275rem] supports-hover:hover:bg-[#B9FF2F] supports-hover:hover:text-black transition-colors"
          >
            Sign up for the mailing list
          </button>
        </form>
      </div>
    </section>
  );
}
