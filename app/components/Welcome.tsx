"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import useInView from "@/app/hooks/useInView";

export default function Invitation() {
  // Separate in-view hooks for each row
  const { ref: row1Ref, isVisible: row1Visible } = useInView();
  const { ref: row2Ref, isVisible: row2Visible } = useInView();
  const { ref: row3Ref, isVisible: row3Visible } = useInView();
  const { ref: row4Ref, isVisible: row4Visible } = useInView();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (row4Visible) {
      timer = setTimeout(() => setShowButton(true), 500);
    } else {
      timer = setTimeout(() => setShowButton(false), 0);
    }
    return () => clearTimeout(timer);
  }, [row4Visible]);

  return (
    <section className="relative py-5 px-4 max-w-6xl mx-auto flex flex-col gap-2 z-10 font-playfair">
      {/* Row 1: Nhà Trai & Nhà Gái */}
      <div
        ref={row1Ref}
        className={`flex flex-col md:flex-row gap-2 sm:text-md md:text-xl ${
          row1Visible ? "animate-fade-up" : "opacity-0"
        }`}
      >
        <div className="flex-1 p-4 bg-white/10 text-center ">
          <p><b>Nhà Trai</b></p>
          <p>Ông Lương Đình Tuân</p>
          <p>Bà Trịnh Thị Ngọc Anh</p>
          <p>Thôn 14, phường Tân Dân, Thanh Hóa</p>
        </div>
        <div className="flex-1 p-4 bg-white/10 text-center">
          <p><b>Nhà Gái</b></p>
          <p>Ông Lâm Ngọc Niêm</p>
          <p>Bà Lê Thị Mai</p>
          <p>TDP Hồng Kỳ, phường Ngọc Sơn, Thanh Hóa</p>
        </div>
      </div>

      {/* Row 2: Image & Invitation Text */}
      <div
        ref={row2Ref}
        className={`flex flex-col gap-8 items-center sm:text-md md:text-xl ${
          row2Visible ? "animate-fade-up" : "opacity-0"
        }`}
      >
        <div className="flex-1 text-center">
          <Image src="/images/couple-name.png" alt="Couple" width={300} height={300} />
        </div>
        <div className="flex-1 text-center md:text-left">
          <p>Kính Mời quý khách đến dự tiệc cưới của chúng tôi</p>
        </div>
      </div>

      {/* Row 3: Center Image */}
      <div
        ref={row3Ref}
        className={`flex justify-center ${
          row3Visible ? "animate-fade-up" : "opacity-0"
        }`}
      >
        <Image src="/images/welcome/Horizontal_Name_black.png" alt="Decorative" width={400} height={200}
        className="md:w-2xl" />
      </div>

      {/* Row 4: Time & Date */}
      <div
        ref={row4Ref}
        className={`flex text-lg md:text-3xl flex-row justify-between gap-1 text-center ${
          row4Visible ? "animate-fade-up" : "opacity-0"
        }`}
      >
        <div className="flex-1 flex items-center text-xl md:text-4xl justify-center  border-r-2 border-primary">
          <p>10 giờ</p>
        </div>
        <div className="flex-1 text-5xl md:text-6xl ">
          <p>28</p>
          <p>12</p>
          <p>25</p>
        </div>
        <div className="flex-1 flex items-center justify-center border-l-2 border-primary">
          <p>Chủ Nhật</p>
        </div>
      </div>

      {/* Button */}
      <div className="text-center text-md md:text-2xl mt-8">
        <button
          onClick={() =>
            document.getElementById("envelope")?.scrollIntoView({ behavior: "smooth" })
          }
          className={`px-6 py-3 text-primary bg-background border-2 border-primary transition-colors duration-100 hover:bg-primary hover:text-background ${
            showButton ? "animate-fade-up" : "opacity-0"
          }`}
        >
          Địa Điểm
        </button>
      </div>
    </section>
  );
}
