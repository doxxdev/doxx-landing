"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "motion/react";
import { Input } from "./ui/input";
import { useState } from "react";
import { toast } from "sonner";

export function Hero() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email) {
      toast.custom(() => (
        <div className='bg-[#0A0A0A] font-poltawski-nowy italic gap-2 text-[#A0A0A2] text-sm p-5 border border-white/30 shadow-[0px_0px_8px_1px_#FFFFFF]/30 rounded-md h-[68px] w-[240px] justify-center items-center flex'>
          <p className='text-md font-medium'>Please enter your email</p>
        </div>
      ));
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 409) {
          toast.custom(() => (
            <div className='bg-[#0A0A0A] font-poltawski-nowy italic gap-2 text-[#A0A0A2] text-sm p-5 border border-[#FF1744]/30 shadow-[0px_0px_8px_1px_#FF1744]/30 rounded-md h-[68px] w-[240px] justify-center items-center flex'>
              <p className='text-md font-medium'>Email already submitted</p>
            </div>
          ));
        } else {
          throw new Error(data.error || "Something went wrong");
        }
        return;
      }

      toast.custom(() => (
        <div className='bg-[#0A0A0A] font-poltawski-nowy italic gap-2 text-[#A0A0A2] text-sm p-5 border border-primary/10 shadow-[0px_0px_8px_1px_#CEF1D1]/30 rounded-md h-[68px] w-[240px] justify-center items-center flex'>
          <p className='text-md font-medium'>Email submitted</p>
        </div>
      ));

      setEmail("");
    } catch (error) {
      console.error("Error:", error);
      toast.custom(() => (
        <div className='bg-[#0A0A0A] gap-2 text-[#A0A0A2] text-sm p-5 border border-[#FF1744]/30 shadow-[0px_0px_8px_1px_#FF1744]/30 rounded-md h-[68px] w-[240px] justify-center items-center flex'>
          <p className='text-md font-medium'>Something went wrong</p>
        </div>
      ));
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className='flex justify-center items-center w-full mx-5'>
      <div className='relative w-full max-w-[1480px] overflow-hidden rounded-2xl gradient-border-pseudo'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Card className=' w-full bg-linear-to-b from-[#000000] to-[#282828] p-0 border-none shadow-lg h-[896px] min-h-[60vh] rounded-2xl overflow-hidden'>
            <Image
              src='/hero/grid-hero.png'
              alt='Grid Background'
              fill
              className='object-cover object-center opacity-10 rounded-2xl'
              style={{ zIndex: 2 }}
            />
            <Image
              src='/hero/logo-hero.png'
              alt='Logo Hero'
              fill
              className='object-cover object-center pointer-events-none select-none rounded-2xl'
              style={{ zIndex: 1 }}
            />
            <section className='relative z-10 pt-12 pb-24 px-16 w-full flex flex-col md:flex-row md:items-center md:justify-between h-full font-plus-jakarta-sans'>
              <div className='flex flex-col items-start max-w-2xl'>
                <div className='flex items-center mb-6'>
                  <Badge className='bg-primary/10 text-primary text-xs font-medium px-5 py-2.5 border border-primary/30 rounded-full flex items-center gap-2'>
                    <Image
                      src='/hero/icons/radioactive.svg'
                      alt='Radioactive'
                      width={16}
                      height={16}
                    />
                    Beta Coming Soon
                  </Badge>
                </div>
                <div className='flex items-center gap-11 mb-4'>
                  <Image src='/hero/3-col-line.svg' alt='3 Col Line' width={54} height={146} />
                  <h1 className='text-[50px] md:text-6xl font-medium leading-tight text-white mb-4'>
                    Trade Fast.
                    <br />
                    Infini
                    <span className='font-poltawski-nowy italic font-light text-[50px] md:text-[64px]'>
                      {" "}
                      Speed.
                    </span>
                  </h1>
                </div>
                <p className='text-secondary text-base font md:text-lg mb-8'>
                  The Fastest Fully On-Chain DEX With CEX-Level Performance
                </p>

                <form onSubmit={handleSubmit} className='w-full'>
                  <div className='flex gap-2 w-full'>
                    <Input
                      className='bg-[#282828]/50 text-[#A0A0A2]  pl-5 border-[#646464] hover:bg-[#282828]/70 rounded-xl h-[56px] w-full focus-visible:ring-0 focus-visible:ring-offset-0'
                      placeholder='Enter your email'
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className='flex items-center justify-center p-1 rounded-xl border border-primary/20 h-[56px] w-[102px] max-w-[300px]'>
                      <Button
                        size='lg'
                        className='bg-primary text-[#141414] hover:bg-primary/90 p-5 border-none shadow rounded-lg flex items-center justify-center  w-full h-full'
                        type='submit'
                        disabled={isLoading}
                      >
                        Be Early
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
              <div className='hidden md:flex flex-row items-center justify-end pr-2 min-w-[140px] gap-2 md:self-center'>
                <span className='text-xs text-gray-400 tracking-widest uppercase'>Built on</span>
                <Image src='/solayer-logo.svg' alt='Solayer Logo' width={104} height={25} />
              </div>
            </section>

            <Button className='absolute bottom-12 right-12 rounded-full bg-[#4A4A4A]  flex items-center justify-center gap-2 h-[56px] w-[56px] hover:bg-[#4A4A4A]/90 z-10'>
              <Image src='/hero/icons/thunderbolt.svg' alt='Thunderbolt' width={30} height={30} />
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
