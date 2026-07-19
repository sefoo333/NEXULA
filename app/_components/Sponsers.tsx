import Image from 'next/image'

function Sponsers() {
  // const logos = ["/_Client logo (3)" , "/_Client logo-1" , "/_Client logo-2" , "/_Client logo-3" , "/_Client logo-4" , "/_Client logo-5"];

  return (

    // 'scroly col-span-5 mt-25 grid grid-cols-6 gap-20 w-full items-center justify-items-center max-xl:grid-cols-4 max-md:grid-cols-2'
    
       <div id={"Sponsers"} className="box overflow-hidden flex gap-10 mb-20 w-full">
  {/* الحاوية الأولى */}
  <div className="scroly flex gap-15 items-center shrink-0 min-w-full justify-around animate-scroll">
    {Array.from({length:6}).map((e, a) => (
      <Image 
        key={`logo-${a}`} 
        src={`/SPONS.svg`} 
        className={`${a === 4 || a === 5 ? "max-xl:col-span-2 max-md:col-span-1" : ""} object-contain max-md:w-50`} 
        alt='' 
        width={220} 
        height={35} 
      />
    ))}
  </div>

  <div aria-hidden className="scroly flex gap-15 items-center shrink-0 min-w-full justify-around animate-scroll">
    {Array.from({length:6}).map((e, a) => (
       <Image 
        key={`logo-${a}`} 
        src={`/SPONS.svg`} 
        className={`${a === 4 || a === 5 ? "max-xl:col-span-2 max-md:col-span-1" : ""} object-contain max-md:w-50`} 
        alt='' 
        width={220} 
        height={35} 
      />
    ))}
  </div>
</div>
  )
}

export default Sponsers