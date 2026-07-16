"use client"
import Heading from './ui/Heading'
import { Input } from '@/components/ui/input'

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import ImageAdd from './ImageAdd'
import {  useState } from 'react'
import { Button } from '@/components/ui/button'
import { Copy, Map, Wallet } from 'lucide-react'
import { addDoc, collection, doc, getDoc, increment, updateDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { toast, Toaster } from 'sonner'
import AnimatedBox from './ui/AnimateStyle'
import { ShareTicket } from './ui/ShareTicket'
import { useSearchParams } from 'next/navigation'
import { DateInput } from './DateInput'
import Link from 'next/link'


/**
 * ====== Data Ticket =======
 * Name -
 * Phone - 
 * Email -
 * Education state -
 * payment screenshot
 * promocode - count of promos
 * Date
 * Time
 * 
 */

function Ticket() {

    const [images,uploadImages] = useState([]);
    const [openTicket,setOpenTicket] = useState(false);

    const items = [
  { label: "Select a education State", value: null },
  { label: "Middle school", value: "middle school" },
  { label: "High school", value: "High school" },
  { label: "Graduate", value: "Graduate" },
  { label: "University", value: "University" },
]


const [data,setData] = useState({});
const [id,setId] = useState("");
const sparms = useSearchParams();

const codeTicket = `AMB${Date.now().toString().slice(0,3)}`


const [date, setDate] = useState<Date>()
const sendTicket = async () => {
  
  const ticketId = sparms?.get("id");
   const getVisited = JSON.parse(localStorage.getItem("visited") ?? "null");
   console.log("1" , getVisited , id)
   if (ticketId) {
     const docSnap = await (await getDoc(doc(db, "tickets", ticketId))).id
     console.log("2" , docSnap)
     if (!getVisited && docSnap) {
       await updateDoc(doc(db, "tickets", ticketId), { visited: increment(1) });
     }
   }
   

try {
    const values = Object.values(data).filter((e) => e != "")
 if (values.length >= 5 && images[0]){
        await addDoc(collection(db , "tickets" ) , {
...data,
image:images[0],
invites:0,
code:codeTicket,
date:date,

    }).then((doc) => setId(doc.id))
    
    toast.success("Thank you for your interest !", {
          description: "Ticket has been Sent , Thank you 😀",
                  position:"top-center",
   className:"!bg-gray-900 !border-gray-700 !text-white",
                    descriptionClassName:"!text-gray-400",                  
                

        })
        setOpenTicket(true)
        localStorage.setItem("visited",JSON.stringify(true))
 } else {
    console.log(values)
      toast.error("Form not completed" , {
        description:"Please fill the form",
        position:"top-center",
                    className:"!bg-gray-900 !border-gray-700 !text-white",
                    descriptionClassName:"!text-gray-400",

    })
 }
} catch (err) {
    toast.error("Failed operation" , {
        description:"Sorry, something went wrong, Try again",
                position:"top-center",
                   className:"!bg-gray-900 !border-gray-700 !text-white",
                    descriptionClassName:"!text-gray-400",

    })
}
}

  return (
    <>
    <Toaster />
    <div className="col-span-5 my-20 max-md:mx-2">
    <AnimatedBox>
      <Heading>Tickets</Heading>
          <div className="box w-300 max-2xl:w-260 max-xl:w-190 max-md:w-full bg-[#2b1c1a] border-2 border-[#3b2826] p-10 max-md:py-9 max-md:px-5 mt-10 rounded-lg">
        <form action="" className="grid gap-6">
     <div className="grid grid-cols-2 max-md:flex max-md:flex-col gap-5">
             <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium text-white/80">
              Name
            </label>
            <Input onChange={(e) => setData((x) => ({...x , name:e.target.value}))} id="name" type="text" placeholder="Enter your name" className="py-5" />
          </div>

          <div className="grid gap-2">
            <label htmlFor="phone" className="text-sm font-medium text-white/80">
              WhatsApp Number
            </label>
            <Input onChange={(e) => setData((x) => ({...x , phone:e.target.value}))} id="phone" type="tel" placeholder="Enter your phone number" className="py-5"  />
          </div>

          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium text-white/80">
              Email
            </label>
            <Input onChange={(e) => setData((x) => ({...x , email :e.target.value}))} id="email" type="email" placeholder="Enter your email" className="py-5"  />
          </div>

          {/* <div className="grid gap-2">
            <label htmlFor="phonePayment" className="text-sm font-medium text-white/80">
              Phone payment
            </label>
            <Input id="phonePayment" type="text" placeholder="Enter phone payment details" />
          </div> */}
          <div className="grid gap-2">
            <span className="text-sm font-medium text-white/80">Education State</span>
       <Select onValueChange={(e) => setData((x) => ({...x , educationState:e}))} items={items}>
      <SelectTrigger className="w-full py-5">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Education States</SelectLabel>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
          </div>

            <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium text-white/80">
              Phone Payment you transfered
            </label>
            <Input onChange={(e) => setData((x) => ({...x,phonePayment:e.target.value}))} id="phonePayment" type="text" placeholder="Enter your phone Payment" className="py-5"  />
          </div>
            <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium text-white/80">
              PromoCode
            </label>
            <Input onChange={(e) => setData((x) => ({...x,promoCode:e.target.value}))} id="promoCode" type="text" placeholder="Enter promoCode" className="py-5"  />
          </div>
            <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium text-white/80">
              Date Transfer
            </label>
<DateInput date={date} setDate={setDate} />
          </div>
            <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium text-white/80">
              Time
            </label>
                  <Input
          type="time"
          id="time-picker-optional"
          step="1"
          defaultValue={`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`}
          className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden py-5 [&::-webkit-calendar-picker-indicator]:appearance-none"
        />

          </div>

          <ImageAdd images={images} uploadImage={uploadImages} />


<div className="buttons grid grid-cols-3 max-md:grid-cols-1 gap-6 col-span-2">
    <Link target="_blank" href="https://maps.app.goo.gl/pmHh7SeoDkhP8tdf8?g_st=aw">
    <Button variant={"outline"} className="py-6 hover:bg-[#2b1c1a] hover:border-[#3b2826] w-full cursor-pointer">
        <Map />
        Show Map
    </Button>
    </Link>
    <Button variant={"outline"} className="py-6 hover:bg-[#2b1c1a] hover:border-[#3b2826] cursor-pointer">
        <Wallet />
        InstaPay
    </Button>
    <Button onClick={() => navigator.clipboard.writeText("01211399401")} variant={"outline"} className="py-6 hover:bg-[#2b1c1a] hover:border-[#3b2826] cursor-pointer">
        <Copy />
        01211399401
    </Button>
</div>

          {/* <Input type="submit" value="Send" className="col-span-2 py-5 font-semibold"  /> */}
          <Button onClick={() => sendTicket()} className="col-span-2 py-6 font-semibold bg-[#ff5747] hover:bg-[#fc4f40] cursor-pointer text-white">
            {/* <TicketIcon /> */}
            Send Ticket
          </Button>
     </div>

        </form>
      </div>
    </AnimatedBox>
    </div>
    <ShareTicket code={codeTicket} setOpen={setOpenTicket} openState={openTicket} id={id} />
    </>
  )
}

export default Ticket