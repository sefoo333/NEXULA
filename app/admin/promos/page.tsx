"use client"
import React, { useEffect, useState } from 'react'
import Heading from '../_components/Heading'
import { DataTable } from '../_components/dataTable/Table'
import { columns, columnsPromo } from '../_components/dataTable/Columns'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/lib/firebase'

type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}


export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  // ...
]


function Page() {


  const [myData, setData] = useState<Record<string, any>[]>([]);

  const getData = async () => {
    const data = (await getDocs(collection(db, "promos"))).docs.map((e) => ({ id: e.id, ...e.data() }))
    setData(data);
  }

  useEffect(() => { getData() }, []);


  return (
    <div className="parent">
      <Heading>Promo Codes</Heading>
      <div className="box bg-gray-900 border border-gray-700 px-8 py-7 rounded-lg mt-5 w-full">
        <h2 className="text-lg font-semibold mb-5 text-white">Tickets</h2>
<DataTable columns={columnsPromo} data={myData}  />
      </div>
    </div>
  )
}

export default Page