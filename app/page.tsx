import { Hero } from "@/components/Hero";
import { PerformanceSection } from "@/components/PerformanceSection";
import { FeatureSection } from "@/components/FeatureSection";
import { ConnectSection } from "@/components/ConnectSection";

export default function Home() {
  return (
    <div className='flex flex-col items-center min-h-screen bg-black pb-10 gap-5'>
      <Hero />
      <PerformanceSection />
      <FeatureSection />
      <ConnectSection />
    </div>
  );
}
