"use client"

import { ColumnDef } from "@tanstack/react-table"

import { MoreHorizontal, X } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { ArrowUpDown } from "lucide-react"
import { toast } from "sonner"
import Image from "next/image"
import { useState } from "react"

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
  image:string
}

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

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
      header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "educationState",
    header: "Education",
  },
  
  {
    accessorKey: "promoCode",
    header: "Promo code",
  },
  
  {
    accessorKey: "invites",
    header: "Invites",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "time",
    header: "Time",
  },


   {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
 const [data,setData] = useState(false);
      return (
        <DropdownMenu>
          <DropdownMenuTrigger >
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
            Show Details
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => payment?.image ? setData(true) : toast.error("can't get the image") }>Open ScreenShot</DropdownMenuItem>
          </DropdownMenuContent>
       {data &&    <div onClick={() => setData(false)} className="fixed left-0 top-0 w-full h-full bg-black/25 z-999999">
            <X className="text-white text-2xl absolute right-5 cursor-pointer top-5" />
            <Image src={payment?.image} width={500} height={500} alt="" className="absolute border-none outline-none top-1/2 left-1/2 -translate-1/2 rounded-lg" />
          </div>}
        </DropdownMenu>
      )
    },
  },
  
]
export const columnsPromo: ColumnDef<Payment>[] = [
  
  {
    accessorKey: "id",
      header: ({ column }) => {
      return (
        <Button
          variant="ghost"
        >
          id
        </Button>
      )
    },
  },
  {
    accessorKey: "promoName",
      header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Promo Code
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
 
  
]


