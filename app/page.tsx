import Hero from "@/app/components/hero";
import Welcome from "@/app/components/Welcome";
import Countdown from "@/app/components/countdown";
import Envelope from "@/app/components/envelope";
import Gallery from "@/app/components/gallery";
import MusicPlayer from "@/app/components/MusicPlayer";
import AttendanceCounter from "@/app/components/AttendanceCounter";
import WishSection from "@/app/components/WishSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding of Giang & Minh",
  description: "Trân trọng kính mời bạn đến dự lễ cưới của Giang & Minh",

  openGraph: {
    title: "Wedding of Giang & Minh",
    description: "Trân trọng kính mời bạn đến dự lễ cưới của Giang & Minh",
    url: "https://giang-minh.vercel.app",
    siteName: "Giang & Minh Wedding",
    images: [
      {
        url: "https://giang-minh.vercel.app/images/hero-background.webp",
        width: 1200,
        height: 630,
        alt: "Wedding of Giang & Minh",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Wedding of Giang & Minh",
    description: "Trân trọng kính mời bạn đến dự lễ cưới của Giang & Minh",
    images: ["https://giang-minh.vercel.app/images/hero-background.webp"],
  },
};

export default function Home() {
  return (
    <main className="bg-background">
      <MusicPlayer />
      <Hero
        coupleName="Hoàng Giang & Tue Minh"
        date="9:00 AM, 28/12/2025"
        location="Tư Gia" />
      <Welcome />
      <Envelope />
      <Countdown weddingDate="2025-12-28T09:00:00" />
      <AttendanceCounter />
      <WishSection />
      <Gallery />
    </main>
  );
}
