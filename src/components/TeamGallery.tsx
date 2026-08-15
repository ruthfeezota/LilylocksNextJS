import Image from "next/image";

export default function TeamGallery() {
  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="heading-font text-3xl uppercase md:text-6xl">
          LilyLocks Ponytails In <span className="text-[#dfff00]">Action</span>
          </h2>

          <p className="mx-auto mt-5 max-w-5xl text-lg leading-relaxed md:text-xl">
            Real athletes. Real routines. Real competition-ready results.
            Explore how gyms, cheer squads, and performance teams wear
            LilyLocks across practices, showcases, and nationals.
          </p>
        </div>

        {/* Collage */}
        <div className="relative mx-auto mt-16 h-[820px] w-full max-w-6xl">
          {/* LEFT BIG */}
          <div className="absolute left-[8%] top-[8%] h-[420px] w-[420px] overflow-hidden rounded-full z-20">
            <Image
              src="/gallery-1.jpg"
              alt="LilyLocks athlete"
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* TOP CENTER MEDIUM */}
          <div className="absolute left-1/2 top-[12%] h-[310px] w-[310px] -translate-x-1/2 overflow-hidden rounded-full z-30">
            <Image
              src="/gallery-2.jpg"
              alt="LilyLocks athlete"
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* TOP RIGHT SMALL */}
          <div className="absolute right-[14%] top-[4%] h-[160px] w-[160px] overflow-hidden rounded-full z-10">
            <Image
              src="/gallery-3.jpg"
              alt="LilyLocks athlete"
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* RIGHT BIG */}
          <div className="absolute right-[2%] top-[28%] h-[390px] w-[390px] overflow-hidden rounded-full z-20">
            <Image
              src="/gallery-4.jpg"
              alt="LilyLocks athlete"
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* LEFT SMALL */}
          <div className="absolute left-[0%] top-[50%] h-[160px] w-[160px] overflow-hidden rounded-full z-10">
            <Image
              src="/gallery-5.jpg"
              alt="LilyLocks athlete"
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* BOTTOM LEFT MEDIUM */}
          <div className="absolute left-[10%] bottom-[2%] h-[300px] w-[300px] overflow-hidden rounded-full z-20">
            <Image
              src="/gallery-6.jpg"
              alt="LilyLocks athlete"
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* BOTTOM CENTER BIG */}
          <div className="absolute left-1/2 bottom-[0%] h-[360px] w-[360px] -translate-x-1/2 overflow-hidden rounded-full z-30">
            <Image
              src="/gallery-7.jpg"
              alt="LilyLocks athlete"
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* BOTTOM RIGHT SMALL */}
          <div className="absolute right-[14%] bottom-[6%] h-[160px] w-[160px] overflow-hidden rounded-full z-10">
            <Image
              src="/gallery-8.jpg"
              alt="LilyLocks athlete"
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}