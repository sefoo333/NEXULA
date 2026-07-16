import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { NavbarPhone } from './NavbarPhone'

function Navbar() {
  return (
<header className="flex justify-center items-center  sticky top-5 max-xl:w-full  z-9999999999">
  <div className=" bg-gray-100/5 mt-5 max-md:mx-2 rounded-full max-md:px-7  backdrop-blur-sm w-290 border border-gray-100/10 px-4 sm:px-6 lg:px-8">
    <div className="flex h-20 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
             <Image src="/nexula_red.svg" alt="Nexula Logo" className="w-35" width={300} height={300} />
{/* <h1 className="text-2xl font-bold text-[#d2290e]">TED</h1> */}
        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-12 font-medium ">
            <li>
              <a className="text-gray-100 text-lg transition hover:text-gray-500/75" href="#"> Home </a>
            </li>

            <li>
              <a className="text-gray-100 text-lg transition hover:text-gray-500/75" href="#"> Speakers </a>
            </li>

            <li>
              <a className="text-gray-100 text-lg transition hover:text-gray-500/75" href="#"> Sponsers </a>
            </li>

          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
        {/* <Button variant="outline" size="lg" className="p-3">
            Get A Ticket
        </Button> */}
<Button className="rounded-full max-md:hidden bg-[#8a0000] px-7 py-5 text-sm font-medium cursor-pointer text-white shadow hover:bg-[#550101] focus:outline-none focus:ring-4 ">
            Get A Ticket
</Button>
        
        </div>

       <NavbarPhone />
      </div>
    </div>
  </div>
</header>  )
}

export default Navbar