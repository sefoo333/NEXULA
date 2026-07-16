import React from 'react'

function Heading({children}: {children: React.ReactNode}) {
  return (
    <div className="text flex justify-center flex-col items-center gap-4">
      <h1 className="font-bold text-5xl max-md:text-4xl text-center text-white">{children}</h1>
      <div className="w-22 h-1  bg-[#f59687] rounded-lg"></div>
    </div>
  )
}

export default Heading