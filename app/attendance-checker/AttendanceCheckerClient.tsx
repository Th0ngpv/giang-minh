// app/attendance-checker/AttendanceCheckerClient.tsx
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AttendanceCheckerClient() {
    const [total, setTotal] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTotal = async () => {
            const { data, error } = await supabase
                .from("attendance")
                .select("count")
                .eq("id", 1)
                .single();

            if (!error && data) {
                setTotal(data.count);
            }

            setLoading(false);
        };

        fetchTotal();
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center font-playfair text-center">
            {loading ? (
                <p className="text-xl">Đang tải...</p>
            ) : (
                <div className="flex flex-col items-center space-y-4">
                    <p className="text-3xl text-primary">
                        Tổng số người tham dự
                    </p>
                    <p className="text-8xl font-semibold text-primary">
                        {total}
                    </p>
                </div>
            )}
        </div>
    );
}
