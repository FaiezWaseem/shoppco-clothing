'use client'

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Filter, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"




const products = [
  {
    name: "Heavy Graphic T-shirt",
    price: 145,
    rating: 4.5,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%205-FD1dzH9NPiS01MQYCzVWFhdSIkxbdl.png",
  },
  {
    name: "Courage Graphic T-shirt",
    price: 180,
    rating: 4.5,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2033%20(1)-YzzSDsbrYVIOoYKZ9KNVmh9ERDMaSp.png",
  },
  {
    name: "Just Walk Forward T-shirt",
    price: 120,
    oldPrice: 160,
    rating: 4.0,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2033-0ArU1dkbPGu6De33iB2dNDQfc5p2qs.png",
  },
  {
    name: "Classic Polo Shirt",
    price: 240,
    oldPrice: 260,
    rating: 3.5,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2032-3fHSXHAlbrUTQ8StMGNXCWecHWnxis.png",
  },
  {
    name: "Black Fade Slim Jeans",
    price: 180,
    rating: 4.5,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2038-SQe4RmKmk1hF3Be0GCo4f3AUsfa0Bl.png",
  },
  {
    name: "Striped Button-Up Shirt",
    price: 130,
    oldPrice: 160,
    rating: 4.5,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2032%20(1)-BBDgGM41lv8SayMk0s4gloHaM3oU7j.png",
  },
  {
    name: "Checkered Shirt",
    price: 212,
    oldPrice: 232,
    rating: 5.0,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/checked-shirt-D0rsxEBttJOTmojvnf6gREyzukTB5D.png",
  },
]

const colors = [
  { name: 'Green', class: 'bg-green-500' },
  { name: 'Red', class: 'bg-red-500' },
  { name: 'Yellow', class: 'bg-yellow-500' },
  { name: 'Orange', class: 'bg-orange-500' },
  { name: 'Blue', class: 'bg-blue-500' },
  { name: 'Purple', class: 'bg-purple-500' },
  { name: 'Pink', class: 'bg-pink-500' },
  { name: 'White', class: 'bg-white border' },
  { name: 'Black', class: 'bg-black' },
]

const sizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large']

const categories = ['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans']
const dressStyles = ['Casual', 'Formal', 'Party', 'Gym']




export default function CasualPage() {
  const [priceRange, setPriceRange] = useState([50])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const totalPages = Math.ceil(products.length / itemsPerPage)

  const currentProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    const end = start + itemsPerPage
    return products.slice(start, end)
  }, [currentPage, products])

  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }
  const toggleColor = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    )
  }

  const toggleSize = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    )
  }

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
          <span>Casual</span>
        </div>

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Casual</h1>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="lg:hidden"
              onClick={() => setIsMobileFiltersOpen(true)}
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
            <Select defaultValue="popular">
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Filters */}
          <Sheet open={isMobileFiltersOpen} onOpenChange={setIsMobileFiltersOpen}>
            <SheetContent side="left" className="w-full max-w-xs lg:hidden">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="mt-8 space-y-6">
                {/* Mobile Filters Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-4">Categories</h3>
                    <Accordion type="single" collapsible className="w-full">
                      {categories.map((category) => (
                        <AccordionItem value={category} key={category}>
                          <AccordionTrigger className="py-2 hover:text-gray-600">
                            {category}
                          </AccordionTrigger>
                          <AccordionContent>
                            {/* Add subcategories or content here */}
                            <div className="py-2">Subcategory 1</div>
                            <div className="py-2">Subcategory 2</div>
                            <div className="py-2">Subcategory 3</div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                  <div>
                    <h3 className="font-medium mb-4">Price Range</h3>
                    <Slider
                      defaultValue={[50]}
                      max={200}
                      step={1}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="w-full"
                    />
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-gray-600">$50</span>
                      <span className="text-sm text-gray-600">$200</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-4">Colors</h3>
                    <div className="flex flex-wrap gap-2">
                      {colors.map((color) => (
                        <button
                          key={color.name}
                          onClick={() => toggleColor(color.name)}
                          className={cn(
                            "w-8 h-8 rounded-full",
                            color.class,
                            selectedColors.includes(color.name) && "ring-2 ring-offset-2 ring-black"
                          )}
                        >
                          <span className="sr-only">{color.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-4">Size</h3>
                    <div className="flex flex-wrap gap-2">
                      {sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => toggleSize(size)}
                          className={cn(
                            "px-3 py-1 border rounded-md text-sm",
                            selectedSizes.includes(size)
                              ? "bg-black text-white border-black"
                              : "border-gray-200 hover:border-black"
                          )}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-4">Dress Style</h3>
                    <Accordion type="single" collapsible className="w-full">
                      {dressStyles.map((style) => (
                        <AccordionItem value={style} key={style}>
                          <AccordionTrigger className="py-2 hover:text-gray-600">
                            {style}
                          </AccordionTrigger>
                          <AccordionContent>
                            {/* Add subcategories or content here */}
                            <div className="py-2">Option 1</div>
                            <div className="py-2">Option 2</div>
                            <div className="py-2">Option 3</div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
                <Button className="w-full" onClick={() => setIsMobileFiltersOpen(false)}>
                  Apply Filters
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Filters */}
          <div className="hidden lg:block">
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-4">Categories</h3>
                <Accordion type="single" collapsible className="w-full">
                  {categories.map((category) => (
                    <AccordionItem value={category} key={category}>
                      <AccordionTrigger className="py-2 hover:text-gray-600">
                        {category}
                      </AccordionTrigger>
                      <AccordionContent>
                        {/* Add subcategories or content here */}
                        <div className="py-2">Subcategory 1</div>
                        <div className="py-2">Subcategory 2</div>
                        <div className="py-2">Subcategory 3</div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <div>
                <h3 className="font-medium mb-4">Price Range</h3>
                <Slider
                  defaultValue={[50]}
                  max={200}
                  step={1}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="w-full"
                />
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-gray-600">$50</span>
                  <span className="text-sm text-gray-600">$200</span>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-4">Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => toggleColor(color.name)}
                      className={cn(
                        "w-8 h-8 rounded-full",
                        color.class,
                        selectedColors.includes(color.name) && "ring-2 ring-offset-2 ring-black"
                      )}
                    >
                      <span className="sr-only">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-4">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={cn(
                        "px-3 py-1 border rounded-md text-sm",
                        selectedSizes.includes(size)
                          ? "bg-black text-white border-black"
                          : "border-gray-200 hover:border-black"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-4">Dress Style</h3>
                <Accordion type="single" collapsible className="w-full">
                  {dressStyles.map((style) => (
                    <AccordionItem value={style} key={style}>
                      <AccordionTrigger className="py-2 hover:text-gray-600">
                        {style}
                      </AccordionTrigger>
                      <AccordionContent>
                        {/* Add subcategories or content here */}
                        <div className="py-2">Option 1</div>
                        <div className="py-2">Option 2</div>
                        <div className="py-2">Option 3</div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <Button className="w-full">Apply Filter</Button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {currentProducts.map((product, i) => (
                <Link href={`/products/${i + 1}`} key={i} className="group">
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    <h3 className="font-medium text-sm sm:text-base">{product.name}</h3>
                    <div className="flex gap-1 sm:gap-2">
                      {Array(5).fill(0).map((_, i) => (
                        <svg
                          key={i}
                          className={cn(
                            "w-3 h-3 sm:w-4 sm:h-4",
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300 fill-current"
                          )}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                      <span className="text-xs sm:text-sm text-gray-600">{product.rating}/5</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm sm:text-base">${product.price}</span>
                      {product.oldPrice && (
                        <span className="text-gray-400 line-through text-xs sm:text-sm">${product.oldPrice}</span>
                      )}
                      {product.oldPrice && (
                        <span className="text-xs sm:text-sm text-red-500">-{Math.round((1 - product.price/product.oldPrice) * 100)}%</span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <Button variant="outline" onClick={goToPreviousPage} disabled={currentPage === 1}>
                Previous
              </Button>
              {[...Array(totalPages)].map((_, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={currentPage === index + 1 ? "bg-black text-white" : ""}
                  onClick={() => goToPage(index + 1)}
                >
                  {index + 1}
                </Button>
              ))}
              <Button variant="outline" onClick={goToNextPage} disabled={currentPage === totalPages}>
                Next
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Newsletter */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
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


