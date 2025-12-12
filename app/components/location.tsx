import Image from "next/image";

export default function LocationCard() {
  return (
    <section className="mt-5 bg-background md:pt-30 px-4 max-h-[75vh] text-foreground font-playfair">
      {/* Row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-6xl mx-auto">
        {/* Left: Specific location */}
        <div className=" w-full md:w-1/5 text-center md:text-left mt-auto mb-auto text-7xl font-delafield">
          Location
        </div>

        {/* Middle: Image */}
        <div className="w-full max-w-md relative overflow-hidden shadow-lg ">
          <Image
            src="/images/location-background.jpg"
            alt="Map to Wedding Location"
            width={800}
            height={600}
            className="object-cover w-full h-full relative"
          />
         
        </div>

        {/* Right: City */}
        <div className="w-full md:w-1/5 text-center md:text-right mt-auto mb-auto  text-3xl">
          Hồ Chí Minh
        </div>
      </div>

      {/* Button */}
      <div className="mt-8 text-center">
        <button className="px-6 py-3 bg-primary hover:bg-primary transition text-background ">
          Get Directions
        </button>
      </div>
    </section>
  );
}
