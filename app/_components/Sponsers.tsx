import Image from 'next/image'
import React from 'react'

function Sponsers() {
  const logos = ["/_Client logo (3)" , "/_Client logo-1" , "/_Client logo-2" , "/_Client logo-3" , "/_Client logo-4" , "/_Client logo-5"];

  return (
    
            <div className='col-span-5 mt-25 grid grid-cols-6 gap-20 w-full items-center justify-items-center max-xl:grid-cols-4 max-md:grid-cols-2'>
{logos.map((e,a) => (
  <>
        <Image src={`/logos${e}.png`} className={`${a === 4 || a === 5 ? "max-xl:col-span-2 max-md:col-span-1" : ""}`} alt='' width={112} height={26} />
  </>
))}
    </div>
  )
}

export default Sponsers