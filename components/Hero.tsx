import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function Hero() {
  return (
    <div className='flex justify-center items-center w-full'>
      <div className='relative w-full max-w-[1480px]'>
        {/* SVG Gradient Border */}
        <svg
          className='absolute inset-0 w-full h-full pointer-events-none z-20'
          viewBox='0 0 1480 896'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          style={{ borderRadius: "1rem" }}
        >
          <rect
            x='0.5'
            y='0.5'
            width={1479}
            height={895}
            rx={32}
            fill='none'
            stroke='url(#hero-gradient-border)'
            strokeWidth='1'
          />
          <defs>
            <linearGradient
              id='hero-gradient-border'
              x1='0'
              y1='0'
              x2='1480'
              y2='896'
              gradientUnits='userSpaceOnUse'
            >
              <stop offset='0.6' stopColor='#9DF09C' stopOpacity='0.4' />
              <stop offset='1' stopColor='#434343' stopOpacity='0.4' />
            </linearGradient>
          </defs>
        </svg>
        <Card className='relative w-full bg-black/80 p-0 overflow-hidden rounded-2xl border-none shadow-lg h-[896px] min-h-[60vh]'>
          <Image
            src='/hero/hero-bg.png'
            alt='Grid Background'
            fill
            className='object-cover object-center pointer-events-none select-none opacity-60'
            style={{ zIndex: 0 }}
          />
          <section className='relative z-10 pt-12 pb-24 px-6 w-full flex flex-col md:flex-row md:items-center md:justify-between h-full font-plus-jakarta-sans'>
            <div className='flex flex-col items-start max-w-2xl'>
              <div className='flex items-center mb-6'>
                <Badge className='bg-[#1B2B1B] text-green-200 text-xs font-medium px-4 py-1 rounded-full flex items-center gap-2'>
                  <Image
                    src='/hero/icons/radioactive-icon.png'
                    alt='Radioactive'
                    width={16}
                    height={16}
                  />
                  Beta Coming Soon
                </Badge>
              </div>
              <h1 className='text-5xl md:text-6xl font-bold leading-tight text-white mb-4'>
                Trade Fast.
                <br />
                Infini<span className='italic font-light'> Speed.</span>
              </h1>
              <p className='text-gray-300 text-base md:text-lg mb-8'>
                The Fastest Fully On-Chain DEX With CEX-Level Performance
              </p>
              <div className='flex gap-4'>
                <Button
                  variant='outline'
                  size='lg'
                  className='bg-white text-black border-none shadow hover:bg-gray-100 rounded-full'
                >
                  Learn more
                </Button>
                <Button
                  size='lg'
                  className='bg-green-500 hover:bg-green-600 text-white border-none shadow rounded-full'
                >
                  Register Now
                  <span className='text-lg'>&#8594;</span>
                </Button>
              </div>
            </div>
            <div className='hidden md:flex flex-row items-center justify-end pr-2 min-w-[140px] gap-2 md:self-center'>
              <span className='text-xs text-gray-400 tracking-widest uppercase'>Built on</span>
              <Image src='/solayer-logo.svg' alt='Solayer Logo' width={104} height={25} />
            </div>
          </section>
        </Card>
      </div>
    </div>
  );
}
