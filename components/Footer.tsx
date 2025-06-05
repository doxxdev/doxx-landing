import React from "react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className='w-full flex justify-center items-center bg-white py-10 font-plus-jakarta-sans border-t border-[#eee]'>
      <div className='w-full max-w-[1480px] flex flex-col md:flex-row items-center justify-between gap-4 px-6'>
        <Image src='/doxx-dark-icon.svg' alt='Logo' width={100} height={100} />
        <div className='flex gap-3 items-center'>
          {/* Docs */}
          <a
            href='https://x.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:bg-gray-100 rounded-[8px] p-2 transition-colors flex items-center justify-center'
          >
            Docs
          </a>
          <a
            href='https://x.com/'
            target='_blank'
            rel='noopener noreferrer'
        
            className='hover:bg-gray-100 rounded-[8px] p-2 transition-colors flex items-center justify-center'
          >
            <Image src='/footer/icons/dark-x.svg' alt='X' width={24} height={24}  />
          </a>
          <a
            href='https://discord.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:bg-gray-100 rounded-[8px] p-2 transition-colors flex items-center justify-center'
          >
            <Image src='/footer/icons/dark-discord.svg' alt='Discord' width={24} height={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
