import React from 'react'

function Heading({children}: {children: React.ReactNode}) {
  return (
    <h1 className="font-bold text-5xl max-md:text-4xl text-center text-white">{children}</h1>
  )
}

export default Heading