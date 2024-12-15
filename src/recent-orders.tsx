'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Order {
  id: string
  date: string
  image: string
  total: number
}

const orders: Order[] = [
  {
    id: "184215726015849",
    date: "04/04/2024",
    image: "/placeholder.svg",
    total: 434
  },
  {
    id: "171132971215849",
    date: "07/11/2023",
    image: "/placeholder.svg",
    total: 1449
  },
  {
    id: "170014426415849",
    date: "03/11/2023",
    image: "/placeholder.svg",
    total: 642
  }
]

export default function RecentOrders() {
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
      <div className="rounded-lg border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px] lg:w-[300px]">Order #</TableHead>
              <TableHead>Placed On</TableHead>
              <TableHead>Items</TableHead>
              <TableHead className="text-right">Total</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <div className="w-12 h-12 relative">
                    <Image
                      src={order.image}
                      alt={`Order ${order.id}`}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                </TableCell>
                <TableCell className="text-right">Rs. {order.total}</TableCell>
                <TableCell className="text-right">
                  <Button 
                    variant="link" 
                    className="text-blue-500 hover:text-blue-700"
                  >
                    MANAGE
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

