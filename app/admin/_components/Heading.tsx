import React from 'react'

function Heading({children}:{children:React.ReactNode}) {
  return (
    <h1 className="text-3xl font-bold text-white">{children}</h1>
  )
}

export default Heading