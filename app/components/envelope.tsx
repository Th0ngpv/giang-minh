"use client";

import Image from "next/image";
import useInView from "@/app/hooks/useInView";

export default function CoupleRow() {
  const { ref: husbandRef, isVisible: husbandVisible } = useInView();
  const { ref: wifeRef, isVisible: wifeVisible } = useInView();

  return (
    <section
      className="py-20 px-4 flex flex-col items-center gap-12"
      style={{ backgroundColor: "#01321f" }}
    >
      {/* Top Text */}
      <div className="text-center space-y-2">
        <div className="text-white font-playfair text-lg sm:text-xl md:text-2xl">
          Where two hearts beat at once
        </div>
        <div className="text-white/80 font-montserrat text-sm sm:text-base md:text-lg">
          They create a bond strong enough to last forever
        </div>
      </div>

      {/* Husband and Wife Row */}
      <div className="flex flex-col md:flex-row gap-16 md:gap-32 items-center justify-center w-full">
        {/* Husband */}
        <div
          ref={husbandRef}
          className={`relative flex flex-col items-center justify-center transition-transform duration-1000 ease-out transform ${
            husbandVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
          }`}
        >
          <div className="relative aspect-2/3 h-[50vh] lg:h-[70vh] w-auto">
            <Image
              src="/images/preWed/AOI_7396.jpg"
              alt="Chú Rể Hoàng Giang"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
            {/* Overlay text */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white font-playfair text-2xl sm:text-3xl md:text-4xl drop-shadow-lg leading-tight">
              <span className="font-imperial">Chú Rể</span> <br /> Hoàng Giang
            </div>
          </div>
        </div>

        {/* Wife */}
        <div
          ref={wifeRef}
          className={`relative flex flex-col items-center justify-center transition-transform duration-1000 ease-out transform ${
            wifeVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}
        >
          <div className="relative aspect-2/3 h-[50vh] lg:h-[70vh] w-auto">
            <Image
              src="/images/preWed/DSC_4682.jpg"
              alt="Cô Dâu Tuệ Minh"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
            {/* Overlay text */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white font-playfair text-2xl sm:text-3xl md:text-4xl drop-shadow-lg leading-tight">
              <span className="font-imperial">Cô Dâu</span> <br /> Tuệ Minh 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
