import Image from "next/image";

export function Navbar() {
  return (
    <nav className='h-[72px] flex items-center justify-between px-6 max-w-[1480px] mx-auto'>
      <Image src='/doxx-icon.svg' alt='Doxx' width={124} height={36} priority />
      <span className='text-sm font-medium text-primary   '>[Coming Soon]</span>
    </nav>
  );
}
