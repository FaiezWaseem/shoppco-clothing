
"use client"


import Link from "next/link"
import { useState } from "react"
import { ShoppingCart, User,Menu, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {

    const [isSearchOpen, setIsSearchOpen] = useState(false)


    return    <header className="border-b">
    <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4 lg:gap-8">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <Link href="/shop/casual" className="block py-2 text-lg">Shop</Link>
              <Link href="#" className="block py-2 text-lg">On Sale</Link>
              <Link href="#" className="block py-2 text-lg">New Arrivals</Link>
              <Link href="#" className="block py-2 text-lg">Brands</Link>
            </div>
          </SheetContent>
        </Sheet>
        <Link href="/" className="text-2xl font-bold">SHOP.CO</Link>
        <div className="hidden lg:flex items-center space-x-6">
          <Link href="/shop/casual">Shop</Link>
          <Link href="#">On Sale</Link>
          <Link href="#">New Arrivals</Link>
          <Link href="#">Brands</Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:block relative w-64">
          <Input
            type="search"
            placeholder="Search for products..."
            className="pl-8"
          />
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          <Search className="w-6 h-6" />
        </Button>
        <Link href="/cart">
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-6 w-6" />
          </Button>
        </Link>
        <Link href="/profile">
          <Button variant="ghost" size="icon">
            <User className="h-6 w-6" />
          </Button>
        </Link>
      </div>
    </nav>
    {isSearchOpen && (
      <div className="md:hidden px-4 py-2 border-t">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search for products..."
            className="pl-8 w-full"
          />
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>
      </div>
    )}
  </header>
;
}
