import { Sidebar, SidebarHeader, SidebarContent,SidebarMenuItem, SidebarMenuButton, SidebarGroupLabel, SidebarGroup, SidebarGroupContent } from '@/components/ui/sidebar'
import { Percent, Ticket } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'



function SidebarAdmin() {


    const menuItems = [
        {name:"Tickets" , href:"/admin/tickets" , icon: Ticket },
        {name:"promo codes", href:"/admin/promos" , icon: Percent },
    ]

  return (
   <Sidebar>
<SidebarHeader className="pt-8 pb-5 px-5">
              <Image src="/LOGO 2.png" alt="Nexula Logo" className=" w-40" width={300} height={300} />
</SidebarHeader>
<SidebarContent>
             <SidebarGroup>
              <SidebarGroupLabel className='font-semibold ml-[-4px]'>Admin</SidebarGroupLabel>
              <SidebarContent>
                 {menuItems.map((e:any) => (
                <SidebarMenuItem className='focus:bg-transparent mb-1'  key={e.name}>
                     <Link href={e.href}>
                      <SidebarMenuButton className=' cursor-pointer flex items-center' >
                        <e.icon size={25} className="!h-5 !w-5" />
                        <span className='font-medium ml-1.5'>{e.name}</span>
                      </SidebarMenuButton>
                     </Link>
                </SidebarMenuItem>
              ))}
              </SidebarContent>
             </SidebarGroup>
             
</SidebarContent>
   </Sidebar>
  )
}

export default SidebarAdmin