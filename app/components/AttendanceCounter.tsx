"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AttendanceCounter() {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  // ✅ Fetch initial count (ESLint-safe)
  useEffect(() => {
    let mounted = true;

    const loadCount = async () => {
      const { data, error } = await supabase
        .from("attendance")
        .select("count")
        .eq("id", 1)
        .single();

      if (!error && data && mounted) {
        setCount(data.count);
      }
    };

    loadCount();

    return () => {
      mounted = false;
    };
  }, []);

  // Button action is NOT in an effect → ESLint OK
  const increaseCount = async () => {
    setLoading(true);

    const { data, error } = await supabase.rpc("increment_attendance");

    if (!error && data !== null) {
      setCount(data);
    }

    setLoading(false);
  };

  return (
    <div className="text-center mt-5 space-y-4 font-playfair">
      <button
        disabled={loading}
        onClick={increaseCount}
        className="px-8 py-3 mb-10
        rounded-full border border-primary 
        text-background bg-primary text-xl
        hover:bg-background hover:text-primary
        transition-all duration-300 disabled:opacity-50"
      >
        {loading ? "Đang gửi..." : "Chung vui cùng chúng tôi"}
      </button>
      <p className="text-primary font-playfair text-2xl">
        💛 Đã có <b>{count}</b> khách chung vui
      </p>
    </div>
  );
}
