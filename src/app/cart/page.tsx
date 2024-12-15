'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      price: 145,
      size: "Large",
      color: "White",
      quantity: 1,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Checkered Shirt",
      price: 180,
      size: "Medium",
      color: "Red",
      quantity: 1,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      price: 240,
      size: "Large",
      color: "Blue",
      quantity: 1,
      image: "/placeholder.svg"
    }
  ])

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const discount = subtotal * 0.2
  const deliveryFee = 15
  const total = subtotal - discount + deliveryFee

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Banner */}
      <div className="bg-black text-white text-center text-sm py-2 relative">
        Sign up and get 20% off to your first order. <Link href="#" className="underline">Sign Up Now</Link>
        <button className="absolute right-4 top-1/2 -translate-y-1/2">
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Navigation */}
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-8">
          <Link href="/" className="text-gray-600 hover:text-black">Home</Link>
          <span className="text-gray-600">/</span>
          <span>Cart</span>
        </div>

        <h1 className="text-3xl font-bold mb-8">YOUR CART</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 border rounded-lg relative">
                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-black"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <div className="text-sm text-gray-600 mt-1">
                    Size: {item.size}
                  </div>
                  <div className="text-sm text-gray-600">
                    Color: {item.color}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="font-bold">${item.price}</div>
                    <div className="flex items-center border rounded-md">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-2"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-2 border-x">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-2"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:sticky lg:top-8">
            <div className="border rounded-lg p-6">
              <h2 className="text-lg font-bold mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between text-red-500">
                  <span>Discount (-20%)</span>
                  <span>-${discount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span>${deliveryFee}</span>
                </div>
                <div className="border-t pt-4 flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>
              <div className="mt-6 flex gap-2">
                <Input placeholder="Add promo code" />
                <Button variant="outline">Apply</Button>
              </div>
              <Button className="w-full mt-4">Go to Checkout</Button>
            </div>
          </div>
        </div>
      </main>

      {/* Newsletter */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="bg-white flex-1"
            />
            <Button className="bg-white text-black hover:bg-gray-100">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

