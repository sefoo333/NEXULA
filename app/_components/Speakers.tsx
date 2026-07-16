import Image from 'next/image'
import Heading from './ui/Heading'
import AnimatedBox from './ui/AnimateStyle'

function Speakers() {
  return (
  <div className="box relative my-20 col-span-5 w-full">
   <AnimatedBox>
     <Heading>Speakers</Heading>
     {/* boxs gap-20  grid grid-cols-4 max-2xl:grid-cols-2  max-md:grid-cols-1 max-2xl:gap-8 justify-items-center w-full mt-15 */}
    <div className="boxs overflow-hidden flex  gap-10 w-full mt-15">
  <div className=" flex gap-10 items-center shrink-0 min-w-full justify-around animate-scroll">

  {[...Array(6)].map((_, i) => (
        <div key={i} className="w-fit h-full rounded-xl shadow-xl bg-[#2b1c1a] border border-[#3b2826">
          <Image
            src="/Speaker1.jpg"
            alt="Speaker"
            width={300}
            height={300}
            className="rounded-lg rounded-b-none hover:grayscale-50 transition duration-300"
          />
 <div className="px-4 py-3">
  <h2 className="text-2xl font-bold text-white mt-2">
            Speaker {i + 1}
          </h2>
          <p className="text-[#ff5747] font-medium">Front-end Developer</p>
 </div>
        </div>
      ))}
      </div>
        <div className=" flex gap-10 items-center shrink-0 min-w-full justify-around animate-scroll">

  {[...Array(6)].map((_, i) => (
        <div key={i} className="w-fit h-full rounded-xl shadow-xl bg-[#2b1c1a] border border-[#3b2826">
          <Image
            src="/Speaker1.jpg"
            alt="Speaker"
            width={300}
            height={300}
            className="rounded-lg rounded-b-none  hover:grayscale-50 transition duration-300"
          />
 <div className="px-4 py-3">
           <h2 className="text-2xl font-bold text-white mt-2">
            Speaker {i + 1}
          </h2>
          <p className="text-[#ff5747] font-medium">Front-end Developer</p>
         </div>
        </div>
      ))}
      </div>
    </div>

   </AnimatedBox>
  </div>
  )
}

export default Speakers