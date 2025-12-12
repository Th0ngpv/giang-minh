import Hero from "@/app/components/hero";
import Welcome from "@/app/components/Welcome";
import Countdown from "@/app/components/countdown";
import Envelope from "@/app/components/envelope";
import Gallery from "@/app/components/gallery";

export default function Home() {
  return (
    <main className="bg-background">
      <Hero coupleName="Hoàng Giang & Tue Minh" date="9:00 PM, 12/12/2025" location="Tư Gia" />
      <Welcome />
      <Envelope />
      <Countdown weddingDate="2025-12-12T09:00:00" />
      <Gallery />
    </main>
  );
}