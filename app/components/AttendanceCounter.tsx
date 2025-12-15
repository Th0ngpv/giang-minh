"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import useInView from "@/app/hooks/useInView";

export default function AttendanceCounter() {
  const [loading, setLoading] = useState(false);
  const [attendees, setAttendees] = useState<number | "">(1);
  const { ref, isVisible } = useInView({ threshold: 0.3 });

  const increaseCount = async () => {
    if (!attendees || attendees < 1) return; // ✅ guard

    setLoading(true);

    await supabase.rpc("increment_attendance_by", {
      value: attendees,
    });

    setLoading(false);
    setAttendees(1); // ✅ optional reset
  };

  return (
    <div ref={ref} className="text-center mt-5 space-y-4 font-playfair flex flex-col items-center gap-2">
      {/* Title */}
      <div className={`text-center mb-5 mt-5 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}>
        <h2 className="text-6xl md:text-8xl font-delafield text-primary mb-1">
          Attendance
        </h2>
        <p className="text-muted-foreground text-xl md:text-2xl">
          Số lượng người tham dự
        </p>
      </div>

      <input
        type="number"
        min={1}
        value={attendees}
        onChange={(e) => {
          const value = e.target.value;
          setAttendees(value === "" ? "" : Number(value));
        }}
        className={`w-24 text-center border border-primary rounded-full pb-3 pl-1 text-xl appearance-none transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        } [&::-webkit-outer-spin-button]:appearance-none
          [&::-webkit-inner-spin-button]:appearance-none`}
        style={{ transitionDelay: "200ms" }}
      />

      <button
        disabled={loading || !attendees}
        onClick={increaseCount}
        className={`px-8 py-3 mb-10 rounded-full border border-primary text-background bg-primary text-xl hover:bg-background hover:text-primary transition-all duration-700 ease-out disabled:opacity-50 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{ transitionDelay: "300ms" }}
      >
        {loading ? "Đang gửi..." : "Xác nhận tham dự"}
      </button>
    </div>
  );
}
