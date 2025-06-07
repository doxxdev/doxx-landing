import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function FeatureSection() {
  return (
    <section className='w-full flex justify-center items-center  font-plus-jakarta-sans mx-5'>
      <div className='w-full max-w-[1480px] bg-black/80 rounded-2xl p-8 md:p-16 border border-[#222] shadow-lg px-12'>
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
          Decentralized Finance. Fully On-chain. Best in class execution.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* Bottom row: span all 3 columns, then 2-col grid inside */}
          <div className='col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:mt-0'>
            <Card className='bg-black border border-primary/10 shadow-[0px_0px_8px_1px_#CEF1D1]/30 rounded-xl p-6 flex flex-row items-start min-h-[300px]'>
              <div className='flex-1'>
                <h3 className='text-lg text-white font-semibold mb-2'>
                  Full-Stack{" "}
                  <span className='italic font-normal font-plus-jakarta-sans'>Trading Arena</span>
                </h3>
                <p className='text-secondary text-xs mb-4'>
                  A fully integrated suite—asset creation, spot,
                  <br /> leverage, and more—into one sleek interface.
                  <br /> No tabs, no friction, just pure onchain
                  <br /> performance.
                </p>
              </div>
              <div className='flex-1 w-full flex items-end justify-center'>
                <Image
                  src='/features/arena.png'
                  alt='Arena'
                  width={344}
                  height={300}
                  className='object-contain'
                />
              </div>
            </Card>
            <Card className='bg-black border border-primary/10 shadow-[0px_0px_8px_1px_#CEF1D1]/30 rounded-xl p-6 flex flex-row items-start min-h-[300px]'>
              <div className='flex-1'>
                <h3 className='text-lg text-white font-semibold mb-2'>
                  CEX-Level{" "}
                  <span className='italic font-normal font-plus-jakarta-sans'>Performance</span>
                </h3>
                <p className='text-secondary text-xs mb-4'>
                  Experience blazing execution on a<br /> high-throughput network, engineered
                  <br /> for serious traders with ultra-low <br />
                  latency and near-zero fees.
                </p>
              </div>
              <div className='flex-1 w-full flex items-end justify-center'>
                <Image
                  src='/features/cex.png'
                  alt='CEX'
                  width={344}
                  height={300}
                  className='object-contain'
                />
              </div>
            </Card>
          </div>

          {/* Top row: 3 columns */}
          <Card className='bg-black border border-primary/10 shadow-[0px_0px_8px_1px_#CEF1D1]/30 rounded-xl p-6 flex flex-col items-start min-h-[400px]'>
            <div className='flex-1'>
              <h3 className='text-lg text-white font-semibold mb-2'>
                Hybrid{" "}
                <span className='italic font-normal font-plus-jakarta-sans'>Fall-Back Engine</span>
              </h3>
              <p className='text-secondary text-xs mb-4'>
                No makers? No problem. DoxX vaults auto-backfill with AMM curves. Liquidity on
                demand, day one.
              </p>
            </div>
            <div className='flex-1 w-full flex items-end justify-center'>
              <Image
                src='/features/hybrid.png'
                alt='Engine'
                width={424}
                height={256}
                className='object-contain'
              />
            </div>
          </Card>
          <Card className='bg-black border border-primary/10 shadow-[0px_0px_8px_1px_#CEF1D1]/30 rounded-xl p-6 flex flex-col items-start min-h-[400px]'>
            <div className='flex-1'>
              <h3 className='text-lg text-white font-semibold mb-2'>
                Fair-Token{" "}
                <span className='italic font-normal font-plus-jakarta-sans'>Launchpad</span>
              </h3>
              <p className='text-secondary text-xs mb-4'>
                Launch any token with zero pre-mine and <br />
                instant liquidity. Vaults auto-activate at genesis
              </p>
            </div>
            <div className='flex-1 w-full flex items-end justify-center'>
              <Image
                src='/features/launchpad.png'
                alt='Launchpad'
                width={424}
                height={256}
                className='object-contain'
              />
            </div>
          </Card>
            <Card className='bg-black border border-primary/10 shadow-[0px_0px_8px_1px_#CEF1D1]/30 rounded-xl p-6 flex flex-col items-start min-h-[400px]'>
            <div className='flex-1'>
              <h3 className='text-lg text-white font-semibold mb-2'>
                No-limits <span className='italic font-normal font-plus-jakarta-sans'>Tooling</span>
              </h3>
              <p className='text-secondary text-xs mb-4'>
                A full-stack toolbox. Granular control over
                <br /> execution, liquidity, and strategy. All in one interface.
              </p>
            </div>
            <div className='flex-1 w-full flex items-end justify-center'>
              <Image
                src='/features/vertical.png'
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
