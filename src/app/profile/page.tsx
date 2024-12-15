'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile')

  const orders = [
    {
      id: '184215726015849',
      date: '04/04/2024',
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%205-FD1dzH9NPiS01MQYCzVWFhdSIkxbdl.png",
      name: "Heavy Graphic T-Shirt",
      total: 434
    },
    {
      id: '171132971215849',
      date: '07/11/2023',
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2033%20(1)-YzzSDsbrYVIOoYKZ9KNVmh9ERDMaSp.png",
      name: "Courage Graphic T-Shirt",
      total: 1449
    },
    {
      id: '170014426415849',
      date: '03/11/2023',
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2033-0ArU1dkbPGu6De33iB2dNDQfc5p2qs.png",
      name: "Just Walk Forward T-Shirt",
      total: 642
    }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">My Profile</h2>
            <p>Profile information goes here.</p>
          </div>
        )
      case 'orders':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Order #</TableHead>
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
                          alt={order.name}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <span className="text-sm text-gray-600 mt-1 block">{order.name}</span>
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
        )
      case 'reviews':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">My Reviews</h2>
            <p>Your reviews will be displayed here.</p>
          </div>
        )
      case 'wishlist':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">My Wishlist & Followed Stores</h2>
            <p>Your wishlist and followed stores will be shown here.</p>
          </div>
        )
      case 'sell':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Sell On Daraz</h2>
            <p>Information about selling on Daraz goes here.</p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Banner */}
      <div className="bg-black text-white text-center text-sm py-2">
        Sign up and get 20% off to your first order. <Link href="#" className="underline">Sign Up Now</Link>
      </div>

      {/* Navigation */}
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                  <Image src="/placeholder.svg" alt="Profile" width={64} height={64} />
                </div>
                <div>
                  <h2 className="font-bold">Faiez Waseem</h2>
                  <p className="text-sm text-gray-600">fa*******@gmail.com</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox id="marketing-sms" />
                  <label htmlFor="marketing-sms" className="ml-2 text-sm">
                    Receive marketing SMS
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="marketing-emails" />
                  <label htmlFor="marketing-emails" className="ml-2 text-sm">
                    Receive marketing emails
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-white rounded-lg shadow">
              <Button
                variant="ghost"
                className={`w-full justify-start py-2 px-4 font-normal ${activeTab === 'profile' ? 'bg-gray-100' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                My Profile
              </Button>
              <Button
                variant="ghost"
                className={`w-full justify-start py-2 px-4 font-normal ${activeTab === 'orders' ? 'bg-gray-100' : ''}`}
                onClick={() => setActiveTab('orders')}
              >
                My Orders
              </Button>
              <Button
                variant="ghost"
                className={`w-full justify-start py-2 px-4 font-normal ${activeTab === 'reviews' ? 'bg-gray-100' : ''}`}
                onClick={() => setActiveTab('reviews')}
              >
                My Reviews
              </Button>
              <Button
                variant="ghost"
                className={`w-full justify-start py-2 px-4 font-normal ${activeTab === 'wishlist' ? 'bg-gray-100' : ''}`}
                onClick={() => setActiveTab('wishlist')}
              >
                My Wishlist & Followed Stores
              </Button>
              <Button
                variant="ghost"
                className={`w-full justify-start py-2 px-4 font-normal ${activeTab === 'sell' ? 'bg-gray-100' : ''}`}
                onClick={() => setActiveTab('sell')}
              >
                Sell On Daraz
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 w-full lg:w-3/4">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

