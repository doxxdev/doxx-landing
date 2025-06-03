import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export function PerformanceSection() {
  return (
    <section className='w-full flex justify-center items-center py-16 font-plus-jakarta-sans '>
      <div className='w-full max-w-[1480px] bg-black/80 rounded-2xl p-8 md:p-16 border border-[#222] shadow-lg font-plus-jakarta-sans px-12'>
        <Badge className='bg-primary/10 text-primary text-xs font-medium px-5 py-2.5 border border-primary/30 rounded-full flex items-center gap-2 mb-6'>
          <Image
            src='/performance/icons/gauge.svg'
            alt='Gauge'
            width={16}
            height={16}
            className='w-4 h-4'
          />
          Performance
        </Badge>
        <h2 className='text-3xl md:text-4xl font-semibold text-white mb-4'>
          Built for Speed & Efficiency.
        </h2>
        <p className='text-secondary text-base md:text-lg mb-12 max-w-2xl'>
          Supercharge your trading experience on a high-performance network with ultra-low fees.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
          <Card className='bg-[#181818] border-none rounded-xl p-8 flex flex-col items-start'>
            <span className='text-secondary text-sm mb-2'>Average block time</span>
            <span className='text-3xl md:text-4xl text-primary font-poltawski-nowy italic font-medium mb-1'>
              0.01 <span className='font-normal'>Sec</span>
            </span>
            <span className='text-xs text-secondary'>Only on Solayer</span>
          </Card>
          <Card className='bg-[#181818] border-none rounded-xl p-8 flex flex-col items-start'>
            <span className='text-secondary text-sm mb-2'>Latency</span>
            <span className='text-3xl md:text-4xl text-primary font-poltawski-nowy italic font-medium mb-1'>
              Near-Zero
            </span>
            <span className='text-xs text-secondary'>Only on Solayer</span>
          </Card>
          <Card className='bg-[#181818] border-none rounded-xl p-8 flex flex-col items-start'>
            <span className='text-secondary text-sm mb-2'>Network fees</span>
            <span className='text-3xl md:text-4xl text-primary font-poltawski-nowy italic font-medium mb-1'>
              $0.0002
            </span>
            <span className='text-xs text-secondary'>Per transaction</span>
          </Card>
          <Card className='bg-[#181818] border-none rounded-xl p-8 flex flex-col items-start'>
            <span className='text-secondary text-sm mb-2'>Protocol fees as low as</span>
            <span className='text-3xl md:text-4xl text-primary font-poltawski-nowy italic font-medium mb-1'>
              0.02%
            </span>
            <span className='text-xs text-secondary'>Per trade</span>
          </Card>
        </div>
      </div>
    </section>
  );
}
