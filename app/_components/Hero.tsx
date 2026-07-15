"use client"
import { Particles } from '@/components/ui/particles'
import Image from 'next/image'
import React from 'react'
import Sponsers from './Sponsers'
import { motion } from "framer-motion";
import AnimatedBox from './ui/AnimateStyle'

function Hero() {
  return (
        <div className=" relative col-span-5 flex h-hero max-md:h-heroPhone w-full flex-col items-center justify-top py-30 mb-5 overflow-hidden rounded-lg ">
    <AnimatedBox
    >
   <div className="b relative">
      <Image src="/He2ro.png" alt="Hero" width={700} height={700} className="z-10 max-md:w-90" />
      <div className="text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center flex flex-col items-center">
        <Image src="/nexula_red.svg" alt="Nexula Logo" width={340} height={340} className="z-10 max-md:mt-5 max-md:w-48" />
        {/* <h1 className="text-4xl font-bold text-white">Nexula</h1> */}
        <p className="text-2xl max-md:text-[15px] mt-1 font-bold  text-white">THIS CHAPTER IS YOURS</p>

        <div className="counter flex gap-5 max-md:gap-2 mt-7 justify-center px-12 max-md:px-6 bg-gray-950/40 rounded-full backdrop-blur-sm py-3 max-md:py-2">
          <div className="days flex flex-col items-center justify-center px-3 max-md:px-2">
            <span className="text-2xl max-md:text-lg font-bold text-white">00</span>
            <span className="text-white max-md:text-sm">Days</span>
          </div>
          <div className="days flex flex-col items-center justify-center px-3 max-md:px-2">
            <span className="text-2xl max-md:text-lg font-bold text-white">00</span>
            <span className="text-white max-md:text-sm">Hours</span>
          </div>
          <div className="days flex flex-col items-center justify-center px-3 max-md:px-2">
            <span className="text-2xl max-md:text-lg font-bold text-white">00</span>
            <span className="text-white max-md:text-sm">Minutes</span>
          </div>
          <div className="days flex flex-col items-center justify-center px-3 max-md:px-2">
            <span className="text-2xl max-md:text-lg font-bold text-white">00</span>
            <span className="text-white max-md:text-sm">Seconds</span>
          </div>
        </div>
      </div>
   </div>
</AnimatedBox>
      
    </div>
  )
}

export default Hero