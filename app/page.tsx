import Hero from "@/app/components/hero";
import Welcome from "@/app/components/Welcome";
import Countdown from "@/app/components/countdown";
import Envelope from "@/app/components/envelope";
import Gallery from "@/app/components/gallery";
import MusicPlayer from "@/app/components/MusicPlayer";
import AttendanceCounter from "@/app/components/AttendanceCounter";

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
      <Gallery />
    </main>
  );
}
