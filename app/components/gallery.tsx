"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

export default function Gallery() {
  const slides = [
    { src: "/images/gallery/AOI_7675.webp", alt: "Gallery image 1" },
    { src: "/images/gallery/AOI_7950.webp", alt: "Gallery image 2" },
    { src: "/images/gallery/AOI_7979.webp", alt: "Gallery image 3" },
    { src: "/images/gallery/DSC_4638.webp", alt: "Gallery image 4" },
    { src: "/images/gallery/DSC_4682.webp", alt: "Gallery image 5" },
    { src: "/images/gallery/DSC_4694.webp", alt: "Gallery image 6" },
    { src: "/images/gallery/DSC_4711.webp", alt: "Gallery image 7" },
    { src: "/images/gallery/DSC_4741.webp", alt: "Gallery image 8" },
    { src: "/images/gallery/DSC_4750.webp", alt: "Gallery image 9" },
    { src: "/images/gallery/DSC_4755.webp", alt: "Gallery image 10" },
    { src: "/images/gallery/DSC_4777.webp", alt: "Gallery image 11" },
  ];

  return (
    <section id="gallery" className="py-20 w-full relative">
      <h2 className="text-center text-8xl font-delafield mb-2">Our Gallery</h2>
      <p className="text-center text-md md:text-lg font-montserrat text-gray-700 mb-5 px-4">
        A collection of cherished moments from our journey together.
      </p>

      <div className="relative w-full ">
        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          style={{ transitionTimingFunction: "linear" }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[80vh] relative">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Center overlay image
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20">
          <Image
            src="/images/Initial.webp"
            alt="Initial"
            width={350}
            height={350}
            className="w-md"
          />
        </div> */}
      </div>
    </section>
  );
}
