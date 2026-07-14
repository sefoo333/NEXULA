import React from 'react'
import SidebarAdmin from './_components/Sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import { Toaster } from 'sonner'
import { LogIng } from './_components/LogIn'

function page({children}:{children:React.ReactNode}) {
  return (
   <>
   <SidebarProvider className="flex flex-col">
    <Toaster />
    <div className="admin w-full h-20 bg-[#171717] border-b border-b-gray-800 flex items-center justify-end px-10">
      <Link href="/">
      <LogOut className="cursor-pointer" />
      </Link>
    </div>
     <div className="parent flex gap-10">
      <SidebarAdmin />
      <div className="py-10 w-full pr-15">
        {children}
      </div>
    </div>
   </SidebarProvider>
<LogIng />
    </>
  )
}

export default page