'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Minus, Plus, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState('olive')
  const [selectedSize, setSelectedSize] = useState('large')
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false)

  const images = [
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%201-E5N6O4yjMAgB0sdOKPErBO5VzqPKjE.png',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%206-f4eFSLDDeMjv123hwBMyV1AR1VhwIp.png',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%205-AmV9q9GzCRSCN7bDjVPmabyJREvmxX.png'
  ]

  const colors = [
    { name: 'olive', class: 'bg-olive-800' },
    { name: 'green', class: 'bg-green-800' },
    { name: 'navy', class: 'bg-navy-800' }
  ]

  const sizes = ['Small', 'Medium', 'Large', 'X-Large']

  const reviews = [
    {
      id: 1,
      author: 'Samantha D.',
      rating: 4.5,
      date: 'August 14, 2023',
      verified: true,
      content: 'I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail, it\'s become my favorite go-to shirt.'
    },
    {
      id: 2,
      author: 'Alex M.',
      rating: 4,
      date: 'August 15, 2023',
      verified: true,
      content: 'The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I\'m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.'
    }
  ]

  const relatedProducts = [
    {
      name: "Just Walk Forward T-Shirt",
      price: 145,
      rating: 4.5,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2033-X48bCcp3vxQrTkoNqLWFTawntV7ysv.png",
      oldPrice: 180
    },
    {
      name: "Classic Polo Shirt",
      price: 180,
      rating: 4.8,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2032-oiEpz1KkAtbAsoFc5PnRvmhkHeogAX.png",
      oldPrice: 200
    }
  ]

  const productId = params.id

  return (
    <div className="min-h-screen">
      {/* Top Banner */}
      <div className="bg-black text-white text-center text-sm py-2">
        Sign up and get 20% off to your first order. <Link href="#" className="underline">Sign Up Now</Link>
      </div>

      {/* Navigation */}
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-8">
          <Link href="/" className="text-gray-600 hover:text-black">Home</Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Link href="/shop" className="text-gray-600 hover:text-black">Shop</Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Link href="/men" className="text-gray-600 hover:text-black">Men</Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span>T-shirts</span>
        </div>

        {/* Product Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={images[selectedImage]}
                alt="Product image"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    "aspect-square relative bg-gray-100 rounded-lg overflow-hidden",
                    selectedImage === index && "ring-2 ring-black"
                  )}
                >
                  <Image
                    src={image}
                    alt={`Product image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">ONE LIFE GRAPHIC T-SHIRT (ID: {productId})</h1>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={cn(
                      "w-5 h-5",
                      star <= 4 ? "fill-yellow-400 stroke-yellow-400" : "fill-gray-200 stroke-gray-200"
                    )}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">4.5/5</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold">$260</span>
              <span className="text-xl text-gray-400 line-through">$300</span>
              <span className="text-sm text-red-500 font-medium">-40%</span>
            </div>
            <p className="text-gray-600">
              Premium olive green t-shirt featuring the iconic ONE LIFE graphic print. Made from high-quality cotton 
              with a comfortable regular fit, perfect for everyday wear. The vintage-style typography adds a unique 
              streetwear aesthetic to this essential piece.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Select Colors</h3>
                <div className="flex gap-2">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={cn(
                        "w-8 h-8 rounded-full",
                        color.class,
                        selectedColor === color.name && "ring-2 ring-offset-2 ring-black"
                      )}
                    >
                      <span className="sr-only">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Choose Size</h3>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size.toLowerCase())}
                      className={cn(
                        "px-4 py-2 border rounded-full",
                        selectedSize === size.toLowerCase()
                          ? "bg-black text-white border-black"
                          : "border-gray-200 hover:border-black"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <Button className="flex-1 rounded-full">Add to Cart</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <Tabs defaultValue="details" className="mb-16">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
            <TabsTrigger
              value="details"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-black"
            >
              Product Details
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-black"
            >
              Rating & Reviews
            </TabsTrigger>
            <TabsTrigger
              value="faqs"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-black"
            >
              FAQs
            </TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="mt-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Product Description</h3>
              <p>
                The ONE LIFE GRAPHIC T-SHIRT is a premium quality, comfortable, and stylish t-shirt designed for everyday wear. 
                It features a unique graphic print that celebrates the essence of living life to the fullest.
              </p>
              <h3 className="text-lg font-semibold">Key Features</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>100% organic cotton for superior comfort and breathability</li>
                <li>Unique, high-quality graphic print</li>
                <li>Ribbed crew neck for durability</li>
                <li>Reinforced shoulder seams for added strength</li>
                <li>Available in multiple sizes and colors</li>
              </ul>
              <h3 className="text-lg font-semibold">Care Instructions</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Machine wash cold with like colors</li>
                <li>Do not bleach</li>
                <li>Tumble dry low</li>
                <li>Warm iron if needed</li>
                <li>Do not dry clean</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold">All Reviews (453)</h2>
              <Dialog open={isReviewModalOpen} onOpenChange={setIsReviewModalOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline">Write a Review</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Write a Review</DialogTitle>
                    <DialogDescription>
                      Share your thoughts about the ONE LIFE GRAPHIC T-SHIRT
                    </DialogDescription>
                  </DialogHeader>
                  <form className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input id="name" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="rating" className="text-right">
                        Rating
                      </Label>
                      <div className="flex col-span-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-5 h-5 fill-gray-200 stroke-gray-200 cursor-pointer hover:fill-yellow-400 hover:stroke-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="review" className="text-right">
                        Review
                      </Label>
                      <Textarea id="review" className="col-span-3" />
                    </div>
                    <div className="flex justify-end gap-4">
                      <Button type="button" variant="secondary" onClick={() => setIsReviewModalOpen(false)}>
                        Cancel
                      </Button>
                      <Button type="submit">Submit Review</Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
            <div className="space-y-8">
              {reviews.map((review) => (
                <div key={review.id} className="border-b pb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={cn(
                              "w-4 h-4",
                              star <= review.rating
                                ? "fill-yellow-400 stroke-yellow-400"
                                : "fill-gray-200 stroke-gray-200"
                            )}
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{review.author}</span>
                        {review.verified && (
                          <span className="text-green-500 text-sm">✓</span>
                        )}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-600">{review.content}</p>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-8">
              Load More Reviews
            </Button>
          </TabsContent>
          <TabsContent value="faqs" className="mt-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What sizes are available?</AccordionTrigger>
                <AccordionContent>
                  Our ONE LIFE GRAPHIC T-SHIRT is available in sizes Small, Medium, Large, and X-Large. Please refer to our size guide for detailed measurements to ensure the perfect fit.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do I care for my t-shirt?</AccordionTrigger>
                <AccordionContent>
                  To keep your t-shirt looking its best, machine wash cold with like colors, do not bleach, tumble dry low, and warm iron if needed. Avoid dry cleaning to maintain the print quality.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is this t-shirt true to size?</AccordionTrigger>
                <AccordionContent>
                  Yes, our ONE LIFE GRAPHIC T-SHIRT is designed to be true to size. However, if you're between sizes or prefer a looser fit, we recommend sizing up.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How long will shipping take?</AccordionTrigger>
                <AccordionContent>
                  Shipping times vary depending on your location. Typically, domestic orders are delivered within 3-5 business days, while international orders may take 7-14 business days. You'll receive a tracking number once your order ships.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What is your return policy?</AccordionTrigger>
                <AccordionContent>
                  We offer a 30-day return policy for unworn, unwashed items in their original condition with tags attached. Please visit our Returns page for more information on how to initiate a return.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">YOU MIGHT ALSO LIKE</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product, i) => (
              <Card key={i} className="border-0 shadow-none">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="font-medium mb-2">{product.name}</h3>
                  <div className="flex gap-2 mb-2">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">${product.price}</span>
                    {product?.oldPrice && (
                      <span className="text-gray-400 line-through">
                        ${product?.oldPrice}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-black">
          <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row justify-between items-center gap-8 rounded-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white max-w-md">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h2>
            <div className="w-full md:w-[400px] space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 pl-12 rounded-lg text-black"
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="#6C7275"/>
                  </svg>
                </div>
              </div>
              <button className="w-full bg-white text-black py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

