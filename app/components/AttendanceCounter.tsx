"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AttendanceCounter() {
  const [loading, setLoading] = useState(false);
  const [attendees, setAttendees] = useState<number | "">(1);

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
    <div className="text-center mt-5 space-y-4 font-playfair flex flex-col items-center gap-2">
      <p className="text-3xl text-primary">
        Số lượng người tham dự
      </p>

      <input
        type="number"
        min={1}
        value={attendees}
        onChange={(e) => {
          const value = e.target.value;
          setAttendees(value === "" ? "" : Number(value));
        }}
        className="w-24 text-center border border-primary rounded-full pb-3 pl-1 text-xl appearance-none
          [&::-webkit-outer-spin-button]:appearance-none
          [&::-webkit-inner-spin-button]:appearance-none"
      />

      <button
        disabled={loading || !attendees}
        onClick={increaseCount}
        className="px-8 py-3 mb-10
          rounded-full border border-primary 
          text-background bg-primary text-xl
          hover:bg-background hover:text-primary
          transition-all duration-300 disabled:opacity-50"
      >
        {loading ? "Đang gửi..." : "Xác nhận tham dự"}
      </button>
    </div>
  );
}
