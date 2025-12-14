"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Wish = {
  id: number;
  name: string;
  message: string;
};

export default function WishSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Fetch wishes
  useEffect(() => {
    const fetchWishes = async () => {
      const { data } = await supabase
        .from("wishes")
        .select("id, name, message")
        .order("created_at", { ascending: false });

      if (data) setWishes(data);
      setLoading(false);
    };

    fetchWishes();
  }, []);

  // Submit wish
  const handleSubmit = async () => {
    if (!name.trim() || !message.trim()) return;

    setSubmitting(true);

    const { data } = await supabase
      .from("wishes")
      .insert([{ name: name.trim(), message: message.trim() }])
      .select()
      .single();

    if (data) {
      setWishes((prev) => [data, ...prev]);
    }

    setName("");
    setMessage("");
    setSubmitting(false);
  };

  return (
    <section className="relative py- px-4 max-w-4xl mx-auto z-10 font-playfair">
      {/* Title */}
      <div className="text-center mb-5 mt-5">
        <h2 className="text-6xl md:text-8xl font-delafield text-primary mb-4">
          Wishes
        </h2>
        <p className="text-muted-foreground text-xl md:text-2xl">
          Gửi những lời chúc tốt đẹp nhất đến Giang & Minh
        </p>
      </div>

      {/* Form */}
      <div className="space-y-4 mb-5 bg-white/10 p-6 md:p-8 text-center">
        <input
          type="text"
          placeholder="Tên của bạn"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 bg-background border border-primary rounded-sm text-center focus:outline-none"
        />

        <textarea
          placeholder="Lời chúc của bạn..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full px-4 py-3 bg-background border border-primary rounded-sm text-center resize-none focus:outline-none"
        />

        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="px-8 py-3 text-primary bg-background border-2 border-primary rounded-sm transition-colors duration-150 hover:bg-primary hover:text-background disabled:opacity-50"
        >
          {submitting ? "Đang gửi..." : "Gửi lời chúc"}
        </button>
        
      </div>

      {/* Wishes List */}
      <div className="space-y-4">
        {loading && (
          <p className="text-center text-muted-foreground">
            Đang tải lời chúc...
          </p>
        )}

        {!loading && wishes.length === 0 && (
          <p className="text-center text-muted-foreground">
            Chưa có lời chúc nào 💭
          </p>
        )}

        {wishes.map((wish) => (
          <div
            key={wish.id}
            className="p-5 bg-white/10 border-l-4 border-primary"
          >
            <p className="text-lg text-primary font-semibold mb-1">
              {wish.name}
            </p>
            <p className="text-base text-muted-foreground">
              {wish.message}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
