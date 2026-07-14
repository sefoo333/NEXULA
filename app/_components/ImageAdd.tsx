import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Input } from "@/components/ui/input"
import { GiveMeImage } from "@/lib/uploadImage"
import { ImageIcon, Trash } from "lucide-react"
import Image from "next/image"
import { toast } from "sonner"
function ImageAdd({images,uploadImage}:{images:string[],uploadImage:any}) {

      const uploadImag = async (event:any) => {
        const data:{secure_url:string}[] = await GiveMeImage(event);
        uploadImage((prevImages:string[]) => [...prevImages, ...data.map((e:any) => e.full)]);
              
    toast.success("image has been added !")
    
  } 

  return (
<div className="image border-[3px] flex flex-col p-7 mt-6 rounded-xl border-dashed items-center border-[#3b2826] bg-[#2b1c1a] col-span-2">
<div className="cont gap-4 w-full">
{/* <Image src="/Hero.jpg" alt='image' width={200} height={200} className='rounded-lg' />
<Image src="/Hero.jpg" alt='image' width={200} height={200} className='rounded-lg' />
<Image src="/Hero.jpg" alt='image' width={200} height={200} className='rounded-lg' />
<Image src="/Hero.jpg" alt='image' width={200} height={200} className='rounded-lg' />
<Image src="/Hero.jpg" alt='image' width={200} height={200} className='rounded-lg' /> */}

{images.length > 0 ? images.map((img:string) => (
    <div key={img} className="box relative flex justify-center">
      <Trash size={18} className='text-red-600 absolute right-3 top-3 cursor-pointer' onClick={() => uploadImage((e:any) => e?.filter((x:any) => x !== img))} />
      <Image src={img} alt='image' width={200} height={200} className='rounded-lg w-70 ' />
    </div>
)) : (
  <Empty className=" col-span-3">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <ImageIcon />
        </EmptyMedia>
        <EmptyTitle className='font-semibold'>No image found</EmptyTitle>
        <EmptyDescription>
          Upload files to your product to show for your customers
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button className='relative' variant="outline" size="sm">
          <Input multiple type='file' onChange={(e) => uploadImag(e)} className='absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer' />
          Upload Files
        </Button>
      </EmptyContent>
    </Empty>
    )}

    {/* {images.length > 0 &&    <Button className='relative grid col-span-3 mx-auto' variant="outline" size="sm">
          <Input multiple type='file' onChange={(e) => uploadImage(e)} className='absolute top-2 right-0 opacity-0 w-full h-full cursor-pointer' />
          Upload Files
        </Button>} */}
{/* <div className="box relative flex justify-center items-center before:w-full before:h-full before:absolute before:inset-0 before:bg-black/20 before:rounded-lg cursor-pointer">

    <Image src="/Hero.jpg" alt='image' width={200} height={200} className='rounded-lg' />
<span className='text-xl font-semibold absolute text-white z-999'>20+</span>
</div> */}
</div>

</div>
  )
}

export default ImageAdd