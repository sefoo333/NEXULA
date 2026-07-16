import Image from "next/image";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import { Particles } from "@/components/ui/particles";
import Speakers from "./_components/Speakers";
import Wisdom from "./_components/Wisdom";
import Ticket from "./_components/Ticket";
import Footer from "./_components/Footer";
import { Suspense } from "react";
import Sponsers from "./_components/Sponsers";

export default function Home() {
  return (
<>
    <Suspense fallback={<div>Loading...</div>}>

 <div className="parent before:w-full before:fixed before:-z-1 before:h-full before:left-0 before:top-0 before:opacity-50 before:bg-[#1d0202] flex flex-col w-full items-center justify-center">
     <Navbar />
  <div className="container grid grid-cols-5 gap-10">
    <Hero />

  </div>
     <Sponsers />
    <Speakers />
    <Wisdom />
    <Ticket />
    <Particles
        className="absolute inset-0 -z-1"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
 </div>
</Suspense>
       <Footer />

</>
  );
}
