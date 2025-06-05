import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export function PerformanceSection() {
  return (
    <section className='w-full flex justify-center items-center  font-plus-jakarta-sans bg-white'>
      <div className='w-full  bg-white rounded-2xl p-8 md:p-16 shadow-none px-12'>
        <Badge className='bg- border text-green-900 border-green-900 text-xs font-medium px-5 py-2.5 rounded-full flex items-center gap-2 mb-6'>
          <Image
            src='/performance/icons/gauge.svg'
            alt='Gauge'
            width={16}
            height={16}
            className='w-4 h-4 '
          />
          Performance
        </Badge>
        <h2 className='text-3xl md:text-4xl font-semibold text-black mb-4'>
          Built for Speed & Efficiency.
        </h2>
        <p className='text-[#444] text-base md:text-lg mb-12 max-w-2xl'>
          Supercharge Your Trading Experience On A High-Performance Network With Ultra-Low Fees.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
          <div className='bg-[#FAFAFA] rounded-xl p-8 flex flex-col items-start'>
            <span className='text-[#444] text-sm mb-2'>Transaction per second (TPS)</span>
            <span className='text-3xl md:text-4xl text-green-900 font-poltawski-nowy italic font-medium mb-1'>
              1 Million+
            </span>
            <span className='text-xs text-[#888]'>Only on Solayer</span>
          </div>
          <div className='bg-[#FAFAFA] rounded-xl p-8 flex flex-col items-start'>
            <span className='text-[#444] text-sm mb-2'>Time to finality</span>
            <span className='text-3xl md:text-4xl text-green-900 font-poltawski-nowy italic font-medium mb-1'>
              0.01 Sec
            </span>
            <span className='text-xs text-[#888]'>Only on Solayer</span>
          </div>
          <div className='bg-[#FAFAFA] rounded-xl p-8 flex flex-col items-start'>
            <span className='text-[#444] text-sm mb-2'>Latency</span>
            <span className='text-3xl md:text-4xl text-green-900 font-poltawski-nowy italic font-medium mb-1'>
              Near-Zero
            </span>
            <span className='text-xs text-[#888]'>Only on Solayer</span>
          </div>
          <div className='bg-[#FAFAFA] rounded-xl p-8 flex flex-col items-start'>
            <span className='text-[#444] text-sm mb-2'>Protocol fees as low as</span>
            <span className='text-3xl md:text-4xl text-green-900 font-poltawski-nowy italic font-medium mb-1'>
              0.02%
            </span>
            <span className='text-xs text-[#888]'>Per trade</span>
          </div>
        </div>
      </div>
    </section>
  );
}
