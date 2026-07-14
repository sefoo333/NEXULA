import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
<footer className="bg-gray-950 w-full">
  <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="flex justify-center text-teal-300 sm:justify-start ">
       <Image src="/LOGO 2.png" alt="Nexula Logo" className="w-40" width={300} height={300} />
      </div>

      <p
        className="mt-4 text-center text-sm text-gray-400 lg:mt-0 lg:text-right dark:text-gray-400"
      >
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      </p>
    </div>
  </div>
</footer>  )
}

export default Footer