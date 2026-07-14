import Image from 'next/image'
import Heading from './ui/Heading'
import AnimatedBox from './ui/AnimateStyle'

function Speakers() {
  return (
  <div className="box relative col-span-5">
   <AnimatedBox>
     <Heading>Speakers</Heading>
    <div className="boxs  grid grid-cols-4 max-2xl:grid-cols-2  max-md:grid-cols-1 max-2xl:gap-8 justify-items-center w-full mt-15">

  {[...Array(4)].map((_, i) => (
        <div key={i} className="w-fit">
          <Image
            src="/Speaker1.jpg"
            alt="Speaker"
            width={300}
            height={300}
            className="rounded-lg hover:scale-105 hover:grayscale-50 transition duration-300"
          />
          <h2 className="text-2xl font-bold text-white mt-2">
            Speaker {i + 1}
          </h2>
          <p className="text-gray-400">Front-end Developer</p>
        </div>
      ))}
    </div>
   </AnimatedBox>
  </div>
  )
}

export default Speakers