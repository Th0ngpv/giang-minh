import Image from 'next/image';

interface HeroProps {
    coupleName: string;
    date: string;
    location: string;
}

export default function Hero({ coupleName, date, location }: HeroProps) {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-center">
            <Image
                src="/images/preWed/AOI_7809_Copy_1.jpg"
                alt="Hero Background"
                fill
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            
            <div className="relative z-20 text-white">
                <p className="mb-10 text-xl font-playfair tracking-widest">THE WEDDING OF</p>
                <Image src="/images/couple-name.png" alt={coupleName} width={400} height={100} className='md:w-xl w-xs' />
                <p className="mt-5 md:mt-15 text-md md:text-2xl font-playfair">{date} • {location}</p>

            </div>
        </section>
    );
}
