import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"

export function NavbarPhone() {
  return (
    <Sheet >
      <SheetTrigger render={ <div className="block md:hidden">
          <button
            className="rounded-sm bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:text-white/75 p-2 text-gray-600 transition hover:text-gray-600/75"
          >
            <span className="sr-only">Toggle menu</span>

            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>} />
      <SheetContent className="!w-full">
        <SheetHeader>
          <SheetTitle>
                                   <Image src="/nexula_red.svg" alt="Nexula Logo" className="w-35 mt-5" width={300} height={300} />

        
          </SheetTitle>
         
        </SheetHeader>
        <hr />
 <nav aria-label="Global">
          <ul className="flex items-start  flex-col  font-medium ">
            <li className="p-4 px-1">
              <a className="text-gray-100 text-lg p-5 transition hover:text-gray-500/75" href="#Home"> Home </a>
            </li>

            <li className="p-4 px-1">
              <a className="text-gray-100 text-lg p-5 transition hover:text-gray-500/75" href="#Speakers"> Speakers </a>
            </li>

            <li className="p-4 px-1">
              <a className="text-gray-100 text-lg p-5 transition hover:text-gray-500/75" href="#Sponsers"> Sponsers </a>
            </li>

          </ul>
        </nav>

         <SheetFooter>
          <Link href="#ticket" className="w-full">
          <Button type="submit" className="bg-[#ff5747] text-white w-full py-6 rounded-full">Get A Ticket</Button>
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
