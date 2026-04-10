import Image from "next/image";

export default function ContentSection() {
  return (
    <section className="bg-lime-green w-full pt-16 pb-0 mobile:pt-10">
      <div className="max-w-[80rem] mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl text-center text-off-black mb-10 mobile:text-2xl">
          The latest drop
        </h2>

        {/* Editorial card — overflows out of the green section */}
        <div className="relative mx-auto max-w-4xl bg-white overflow-visible mb-[-6rem] tablet:mb-[-4rem] mobile:mb-[-3rem]">
          {/* Label top-left */}
          <div className="absolute top-6 left-6 z-10">
            <span className="text-4xl text-off-black">Sanchez</span>
          </div>

          {/* Image */}
          <div className="relative w-full rounded-md overflow-hidden" style={{ aspectRatio: "4/3" }}>
            <Image
              src="/content-snowboard.jpeg"
              alt="Sanchez snowboard in a mountain landscape"
              fill
              className="object-cover"
              sizes="(max-width: 720px) 100vw, 672px"
            />
          </div>

          {/* Plus icon bottom-right */}
          <button
            aria-label="Learn more"
            className="absolute bottom-6 right-6 w-12 h-12 flex items-center justify-center text-off-black text-6xl leading-none supports-hover:hover:bg-off-black supports-hover:hover:text-white transition-colors"
          >
            +
          </button>
        </div>
      </div>
    </section>
  );
}
