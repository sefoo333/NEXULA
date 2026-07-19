import Image from 'next/image'
import React from 'react'

function Sponsers() {
  const logos = ["/_Client logo (3)" , "/_Client logo-1" , "/_Client logo-2" , "/_Client logo-3" , "/_Client logo-4" , "/_Client logo-5"];

  return (

    // 'scroly col-span-5 mt-25 grid grid-cols-6 gap-20 w-full items-center justify-items-center max-xl:grid-cols-4 max-md:grid-cols-2'
    
       <div id={"Sponsers"} className="box overflow-hidden flex gap-10 mb-20 w-full">
  {/* الحاوية الأولى */}
  <div className="scroly flex gap-15 items-center shrink-0 min-w-full justify-around animate-scroll">
    {logos.map((e, a) => (
      <Image 
        key={`logo-1-${a}`} /* يفضل دائماً إضافة key فريد */
        src={`/logos${e}.png`} 
        className={`${a === 4 || a === 5 ? "max-xl:col-span-2 max-md:col-span-1" : ""} object-contain max-md:w-30`} 
        alt='' 
        width={140} 
        height={35} 
      />
    ))}
  </div>

  {/* الحاوية الثانية المكررة */}
  <div aria-hidden className="scroly flex gap-15 items-center shrink-0 min-w-full justify-around animate-scroll">
    {logos.map((e, a) => (
      <Image 
        key={`logo-2-${a}`} 
        src={`/logos${e}.png`} 
        className={`${a === 4 || a === 5 ? "max-xl:col-span-2 max-md:col-span-1" : ""} object-contain  max-md:w-30`} 
        alt='' 
        width={140} 
        height={35} 
      />
    ))}
  </div>
</div>
  )
}

export default Sponsers