import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden h-[56.25vw] tablet:h-[70vh] mobile:h-[85vh]">
      <Image
        src="/snowboard-hero.png"
        alt="Snowboarder performing a jump"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Overlay gradient at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* CTA bottom-right */}
      <div className="absolute bottom-6 right-6 mobile:bottom-4 mobile:right-4">
        <button className="group flex items-center gap-2 text-white">
          <span className="text-3xl leading-tight mobile:text-lg transition-opacity supports-hover:group-hover:opacity-70">
            Shop the latest
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform supports-hover:group-hover:translate-x-1"
            aria-hidden="true"
          >
            <path
              d="M4 10H16M16 10L11 5M16 10L11 15"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
