"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "motion/react";
import { Input } from "./ui/input";

export function Hero() {
  return (
    <div className='flex justify-center items-center w-full mx-5'>
      <div className='relative w-full max-w-[1480px] overflow-hidden rounded-2xl gradient-border-pseudo'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Card className='relative w-full bg-black/80 p-0 border-none shadow-lg h-[896px] min-h-[60vh] rounded-2xl overflow-hidden'>
            <Image
              src='/hero/hero-bg.png'
              alt='Grid Background'
              fill
              className='object-cover object-center pointer-events-none select-none opacity-85 rounded-2xl'
              style={{ zIndex: 0 }}
            />
            <section className='relative z-10 pt-12 pb-24 px-12 w-full flex flex-col md:flex-row md:items-center md:justify-between h-full font-plus-jakarta-sans '>
              <div className='flex flex-col items-start max-w-2xl'>
                <div className='flex items-center mb-6'>
                  <Badge className='bg-primary/10 text-primary text-xs font-medium px-5 py-2.5 border border-primary/30 rounded-full flex items-center gap-2'>
                    <Image
                      src='/hero/icons/radioactive-icon.png'
                      alt='Radioactive'
                      width={16}
                      height={16}
                    />
                    Beta Coming Soon
                  </Badge>
                </div>
                <div className='flex items-center gap-11 mb-4'>
                  <Image src='/hero/3-col-line.svg' alt='3 Col Line' width={54} height={146} />
                  <h1 className='text-[64px] md:text-6xl font-medium leading-tight text-white mb-4'>
                    Trade Fast.
                    <br />
                    Infini
                    <span className='font-poltawski-nowy italic font-light text-[64px]'>
                      {" "}
                      Speed.
                    </span>
                  </h1>
                </div>
                <p className='text-secondary text-base font md:text-lg mb-8'>
                  The Fastest Fully On-Chain DEX With CEX-Level Performance
                </p>

                <div className='flex gap-2 w-full'>
                  <Input
                    className='bg-[#282828]/50 text-[#A0A0A2]  pl-5 border-[#646464] hover:bg-[#282828]/70 rounded-xl h-[56px] w-full focus-visible:ring-0 focus-visible:ring-offset-0'
                    placeholder='Enter your email'
                    type='email'
                  />
                  <div className='flex items-center justify-center p-1 rounded-xl border border-primary/20 h-[56px] w-[102px] max-w-[300px]'>
                    <Button
                      size='lg'
                      className='bg-primary text-[#141414] hover:bg-primary/90 p-5 border-none shadow rounded-lg flex items-center justify-center  w-full h-full'
                    >
                      Be Early
                    </Button>
                  </div>
                </div>
              </div>
              <div className='hidden md:flex flex-row items-center justify-end pr-2 min-w-[140px] gap-2 md:self-center'>
                <span className='text-xs text-gray-400 tracking-widest uppercase'>Built on</span>
                <Image src='/solayer-logo.svg' alt='Solayer Logo' width={104} height={25} />
              </div>
            </section>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
