"use client"
import { useEffect, useState } from 'react'
import Heading from '../_components/Heading'
import { DataTable } from '../_components/dataTable/Table'
import { columns } from '../_components/dataTable/Columns'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/lib/firebase'




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

function Page() {
  const [myData, setData] = useState<Record<string, any>[]>([]);

  const getData = async () => {
    const data = (await getDocs(collection(db, "tickets"))).docs.map((e) => ({ id: e.id, ...e.data() }))
    setData(data);
  }

  useEffect(() => { getData() }, []);

  return (
    <div className="parent">
      <Heading>Tickets</Heading>
      <div className="box bg-gray-900 border border-gray-700 px-8 py-7 rounded-lg mt-5 w-full">
        <h2 className="text-lg font-semibold mb-5 text-white">Tickets</h2>
<DataTable columns={columns} data={myData} isHaveButton={false} />
      </div>
    </div>
  )
}

export default Page