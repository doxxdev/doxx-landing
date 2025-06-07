import React from "react";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { Button } from "./ui/button";

export function ConnectSection() {
  return (
    <section className='w-full flex justify-center items-center  font-plus-jakarta-sans mx-5'>
      <div className='w-full max-w-[1480px] bg-black/80 rounded-2xl p-8 md:p-16 border border-[#222] shadow-lg px-16 relative overflow-hidden'>
        {/* Background image */}
        <Image
          src='/footer/footer-bg.png'
          alt='Footer Background'
          fill
          className='object-cover object-center z-0 pointer-events-none select-none'
          priority
        />
        <div className='w-full max-w-[1480px] h-[360px] py-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10'>
          <div className='flex flex-col items-center md:items-start gap-2 mb-6 md:mb-0'>
            <Badge className='bg-primary/10 text-primary text-xs font-medium px-5 py-2.5 border border-primary/30 rounded-full flex items-center gap-2 mb-6'>
              <Image
                src='/features/icons/kanban.svg'
                alt='Feature'
                width={16}
                height={16}
                className='w-4 h-4'
              />
              Connect
            </Badge>
            <h2 className='text-3xl md:text-4xl font-semibold text-white mb-2 text-center md:text-left'>
              Stay In Touch
            </h2>
            <p className='text-secondary text-base md:text-lg mb-12 max-w-2xl text-center md:text-left'>
              Follow our socials to stay up to date
            </p>
          </div>
          <div className='flex gap-4 items-center justify-center'>
            <a
              href='https://x.com/DoxXExchange'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-white/5 hover:bg-white/10 rounded-[8px] p-3 transition-colors flex items-center justify-center'
            >
              <Image src='/footer/icons/x.svg' alt='X' width={24} height={24} />
            </a>
            {/* disabled */}
            <Button
              disabled={true}
              // href='https://discord.com/'
              // target='_blank'
              // rel='noopener noreferrer'
              className='bg-white/5 hover:bg-white/10 rounded-[8px] p-3 transition-colors flex items-center justify-center h-full'
            >
              <Image src='/footer/icons/discord.svg' alt='Discord' width={24} height={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
