import Image from "next/image";

export default function ContentSection() {
  return (
    <section className="bg-lime w-full py-16 mobile:py-10">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-serif text-center text-off-black mb-10 mobile:text-2xl">
          The latest drop
        </h2>

        {/* Editorial card */}
        <div className="relative mx-auto max-w-2xl bg-white overflow-hidden">
          {/* Label top-left */}
          <div className="absolute top-4 left-4 z-10">
            <span className="text-sm font-sans text-off-black font-medium">Sanchez</span>
          </div>

          {/* Image */}
          <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
            <Image
              src="/snowboard-2.jpg"
              alt="Sanchez snowboard in a mountain landscape"
              fill
              className="object-cover"
              sizes="(max-width: 720px) 100vw, 672px"
            />
          </div>

          {/* Plus icon bottom-right */}
          <button
            aria-label="Learn more"
            className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center bg-white text-off-black text-xl leading-none supports-hover:hover:bg-off-black supports-hover:hover:text-white transition-colors"
          >
            +
          </button>
        </div>
      </div>
    </section>
  );
}
