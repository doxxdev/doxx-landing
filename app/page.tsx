import { Hero } from "@/components/Hero";
import { PerformanceSection } from "@/components/PerformanceSection";

export default function Home() {
  return (
    <div className='flex flex-col items-center min-h-screen bg-black px-5 pb-10'>
      <Hero />
      <PerformanceSection />
    </div>
  );
}
