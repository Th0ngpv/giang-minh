"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import useInView from "@/app/hooks/useInView";

export default function CoupleRow() {
  const { ref: headerRef, isVisible: headerVisible } = useInView();
  const { ref: triggerRef, isVisible: sectionVisible } = useInView();

  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  // 🔹 Animation steps
  const [showHusbandImage, setShowHusbandImage] = useState(false);
  const [showHusbandText, setShowHusbandText] = useState(false);
  const [showWifeImage, setShowWifeImage] = useState(false);
  const [showWifeText, setShowWifeText] = useState(false);

  // 🔹 Master animation sequence
  useEffect(() => {
    if (!sectionVisible) return;

    const t1 = setTimeout(() => setShowHusbandImage(true), 100);
    const t2 = setTimeout(() => setShowHusbandText(true), 900);
    const t3 = setTimeout(() => setShowWifeImage(true), 1100);
    const t4 = setTimeout(() => setShowWifeText(true), 1900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [sectionVisible]);

  // Modal animation
  useEffect(() => {
    if (!open) return;
    const id = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(id);
  }, [open]);

  const closeModal = () => {
    setAnimate(false);
    setTimeout(() => setOpen(false), 300);
  };

  return (
    <section
      ref={triggerRef}
      className="relative py-10 px-4 flex flex-col items-center gap-12 overflow-hidden"
      style={{ backgroundColor: "#01321f" }}
    >
      {/* Decorations */}
      <Image
        src="/images/envelope/goldflower.webp"
        alt="Decoration"
        width={220}
        height={220}
        className={`absolute -bottom-1/12 -left-1/12 rotate-90 z-0 pointer-events-none md:w-1/4
          transition-all duration-1000 ease-out
          ${headerVisible
            ? "opacity-100 scale-100 translate-x-0 translate-y-0"
            : "opacity-0 scale-75 -translate-x-10 translate-y-10"
          }`}
      />

      <Image
        src="/images/envelope/goldflower.webp"
        alt="Decoration"
        width={220}
        height={220}
        className={`absolute -top-1/12 -right-1/12 rotate-270 z-0 pointer-events-none md:w-1/4
          transition-all duration-1000 ease-out delay-200
          ${headerVisible
            ? "opacity-100 scale-100 translate-x-0 translate-y-0"
            : "opacity-0 scale-75 translate-x-10 -translate-y-10"
          }`}
      />

      {/* Header */}
      <div ref={headerRef} className="relative z-10 text-center space-y-2">
        <div
          className={`text-white font-playfair text-4xl md:text-5xl
            transition-all duration-1000 ease-out
            ${headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
            }`}
        >
          When two hearts beat at once
        </div>

        <div
          className={`text-white/80 font-montserrat text-sm sm:text-base md:text-lg
            transition-all duration-1000 ease-out delay-200
            ${headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
            }`}
        >
          They create a bond strong enough to last forever
        </div>
      </div>

      {/* Couple */}
      <div className="relative z-10 flex flex-col md:flex-row gap-16 md:gap-32 items-center justify-center w-full">
        {/* Husband */}
        <div
          className={`relative flex flex-col items-center justify-center
            transition-all duration-1000 ease-out
            ${showHusbandImage
              ? "opacity-100 translate-x-0 rotate-0"
              : "opacity-0 -translate-x-16 -rotate-12"
            }`}
        >
          <div className="relative aspect-2/3 h-[50vh] lg:h-[70vh] w-auto">
            <Image
              src="/images/envelope/AOI_7396.webp"
              alt="Chú Rể Hoàng Giang"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black/20 rounded-lg pointer-events-none" />

            <div
              className={`absolute bottom-4 left-1/2 -translate-x-1/2 text-center
                text-white font-playfair text-2xl sm:text-3xl md:text-4xl drop-shadow-lg leading-tight
                transition-all duration-700 ease-out
                ${showHusbandText
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
                }`}
            >
              <span className="font-imperial">Chú Rể</span> <br /> Hoàng Giang
            </div>
          </div>
        </div>

        {/* Wife */}
        <div
          className={`relative flex flex-col items-center justify-center
            transition-all duration-1000 ease-out
            ${showWifeImage
              ? "opacity-100 translate-x-0 rotate-0"
              : "opacity-0 -translate-x-16 -rotate-12"
            }`}
        >
          <div className="relative aspect-2/3 h-[50vh] lg:h-[70vh] w-auto">
            <Image
              src="/images/envelope/DSC_4682.webp"
              alt="Cô Dâu Tuệ Minh"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black/20 rounded-lg pointer-events-none" />

            <div
              className={`absolute bottom-4 left-1/2 -translate-x-1/2 text-center
                text-white font-playfair text-2xl sm:text-3xl md:text-4xl drop-shadow-lg leading-tight
                transition-all duration-700 ease-out
                ${showWifeText
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
                }`}
            >
              <span className="font-imperial">Cô Dâu</span> <br /> Tuệ Minh
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={() => setOpen(true)}
        className="relative z-10 mt-4 px-10 py-3 border border-white/70 text-white
          font-playfair text-lg rounded-full transition-all duration-300 ease-out
          hover:bg-white hover:text-[#01321f]
          hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
      >
        Chung vui
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className={`absolute inset-0 bg-black/70 transition-opacity duration-300
              ${animate ? "opacity-100" : "opacity-0"}`}
            onClick={closeModal}
          />

          <div
            className={`relative z-10 bg-white rounded-2xl p-5 py-8 max-w-sm w-[90%] text-center
              transition-all duration-300 ease-out
              ${animate
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-6 scale-95"
              }`}
          >

            <Image
              src="/images/envelope/qr.webp"
              alt="QR Code"
              width={250}
              height={250}
              className="mx-auto"
            />

            <p className="mt-4 font-playfair text-lg text-gray-700">
              Quét mã để chung vui cùng chúng tôi 💛
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
