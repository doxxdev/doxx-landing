import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function FeatureSection() {
  return (
    <section className='w-full flex justify-center items-center font-plus-jakarta-sans px-5'>
      <div className='w-full max-w-[1480px] bg-black/80 rounded-2xl p-8 md:p-16 border border-[#222] shadow-lg px-16'>
        <Badge className='bg-primary/10 text-primary text-xs font-medium px-5 py-2.5 border border-primary/30 rounded-full flex items-center gap-2 mb-6'>
          <Image
            src='/features/icons/kanban.svg'
            alt='Feature'
            width={16}
            height={16}
            className='w-4 h-4'
          />
          Features
        </Badge>
        <h2 className='text-3xl md:text-4xl font-semibold text-white mb-4'>
          Where your edge meets the Infini-Speed.
        </h2>
        <p className='text-secondary text-base md:text-lg mb-12 max-w-2xl'>
          Decentralized finance. Fully On-chain. Best in class execution.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* Bottom row: span all 3 columns, then 2-col grid inside */}
          <div className='col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:mt-0'>
            <Card className='bg-black border p-1 pt-4 border-primary/10 shadow-[0px_0px_8px_1px_#CEF1D1]/30 rounded-xl flex flex-col xl:flex-row min-h-[300px]'>
              <div className='flex-1 px-3'>
                <h3 className='text-lg text-white font-semibold mb-2'>
                  Full-Stack{" "}
                  <span className='italic font-normal font-plus-jakarta-sans'>Trading Arena</span>
                </h3>
                <p className='text-secondary text-xs'>
                  A fully integrated suite-asset creation, spot, leverage, and more into one sleek
                  interface. No tabs, no friction, just pure on-chain performance.
                </p>
              </div>
              <div className='relative w-full h-[180px] lg:max-w-[400px] xl:max-w-[344px] md:h-[300px]'>
                <Image
                  src='/features/full-stack.png'
                  alt='full-stack'
                  fill
                  className='object-contain'
                />
              </div>
            </Card>
            <Card className='bg-black border p-1 pt-4 border-primary/10 shadow-[0px_0px_8px_1px_#CEF1D1]/30 rounded-xl flex flex-col xl:flex-row min-h-[300px]'>
              <div className='flex-1 px-3 '>
                <h3 className='text-lg text-white font-semibold mb-2'>
                  CEX-Level{" "}
                  <span className='italic font-normal font-plus-jakarta-sans'>Performance</span>
                </h3>
                <p className='text-secondary text-xs'>
                  Experience blazing execution on a high-throughput network, engineered for serious
                  traders with ultra-low latency and near-zero fees.
                </p>
              </div>
              <div className='relative  w-full  h-[180px] md:max-w-[372px] md:h-[300px] flex items-end justify-end'>
                <Image src='/features/cex.png' alt='CEX' fill className='object-contain' />
              </div>
            </Card>
          </div>

          {/* Top row: 3 columns */}
          <Card className='bg-black border border-primary/10 shadow-[0px_0px_8px_1px_#CEF1D1]/30 rounded-xl p-1 pt-4 flex flex-col items-start min-h-[300px]'>
            <div className='flex-1 px-3'>
              <h3 className='text-lg text-white font-semibold mb-2'>
                Hybrid{" "}
                <span className='italic font-normal font-plus-jakarta-sans'>Fall-Back Engine</span>
              </h3>
              <p className='text-secondary text-xs'>
                No makers? No problem. DoxX auto-backfill with AMM curves. Liquidity on demand.
              </p>
            </div>
            <div className='flex-1 flex items-end justify-end'>
              <Image
                src='/features/hybrid.png'
                alt='Engine'
                width={426}
                height={256}
                className='object-contain'
              />
            </div>
          </Card>
          <Card className='bg-black border border-primary/10 shadow-[0px_0px_8px_1px_#CEF1D1]/30 rounded-xl p-1 pt-6 flex flex-col items-start min-h-[300px]'>
            <div className='flex-1 px-3'>
              <h3 className='text-lg text-white font-semibold mb-2'>
                Fair-Token{" "}
                <span className='italic font-normal font-plus-jakarta-sans'>Launchpad</span>
              </h3>
              <p className='text-secondary text-xs'>
                No premine. No insiders. Just pure price discovery from the very first block.
              </p>
            </div>
            <div className='flex-1 flex items-end justify-end'>
              <Image
                src='/features/launchpad-v2.png'
                alt='Launchpad'
                width={426}
                height={256}
                className='object-contain '
              />
            </div>
          </Card>
          <Card className='bg-black border border-primary/10 shadow-[0px_0px_8px_1px_#CEF1D1]/30 rounded-xl p-1 pt-6 flex flex-col items-start min-h-[300px]'>
            <div className='flex-1 px-3'>
              <h3 className='text-lg text-white font-semibold mb-2'>
                No-limits <span className='italic font-normal font-plus-jakarta-sans'>Tooling</span>
              </h3>
              <p className='text-secondary text-xs'>
                A full-stack toolbox. Granular control over execution, liquidity, and strategy. All
                in one interface.
              </p>
            </div>
            <div className='flex-1 flex items-end justify-end'>
              <Image
                src='/features/no-limit-v2.png'
                alt='Vertical'
                width={424}
                height={256}
                className='object-contain'
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
