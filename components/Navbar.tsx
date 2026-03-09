import Image from "next/image";

export function Navbar() {
  return (
    <nav className='h-[72px] flex items-center justify-between px-6 max-w-[1480px] mx-auto font-roboto-mono font-normal'>
      <Image src='/doxx-icon.svg' alt='Doxx' width={124} height={36} priority />
      <span className='flex items-center gap-2 text-sm text-primary'>
        <span className='relative flex h-2 w-2'>
          <span className='absolute inline-flex h-full w-full rounded-full bg-[#00FF94] opacity-60 animate-ping' />
          <span className='relative inline-flex h-2 w-2 rounded-full bg-[#00FF94]' />
        </span>
        InfiniSVM Devnet
      </span>
    </nav>
  );
}
