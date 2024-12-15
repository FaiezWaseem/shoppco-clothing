

import Image from "next/image"
import Link from "next/link"

import { Star} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {

  const testimonials = [
    {
      content: "The clothes are great quality and the prices are even better. I love how they have new arrivals every week. The shipping is also very fast!",
      author: "Sarah M.",
      title: "Verified Buyer"
    },
    {
      content: "I'm impressed with the variety of styles available. The website is easy to navigate, and the customer service is top-notch!",
      author: "John D.",
      title: "Loyal Customer"
    },
    {
      content: "SHOP.CO has become my go-to for fashion. The clothes are trendy, comfortable, and affordable. Highly recommend!",
      author: "Emily R.",
      title: "Fashion Enthusiast"
    }
  ]
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Banner */}
      <div className="bg-black text-white text-center text-sm py-2">
        Sign up and get 20% off to your first order. <Link href="#" className="underline">Sign Up Now</Link>
      </div>

      {/* Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative bg-[#F2F0F1] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center min-h-[600px] py-12 my-3">
              <div className="absolute inset-0 overflow-hidden">
                <Star className="absolute text-yellow-400 w-8 h-8 top-1/4 left-1/4 animate-pulse" />
                <Star className="absolute text-yellow-400 w-6 h-6 top-1/3 right-1/4 animate-pulse" />
                <Star className="absolute text-yellow-400 w-4 h-4 bottom-1/4 left-1/3 animate-pulse" />
              </div>
              <div className="flex-1 z-20 space-y-6 max-w-xl">
                <h1 className="text-4xl md:text-6xl font-bold">
                  FIND CLOTHES THAT MATCHES YOUR STYLE
                </h1>
                <p className="text-gray-600">
                  Browse through our diverse range of meticulously crafted garments, designed 
                  to bring out your individuality and cater to your sense of style.
                </p>
                <Button className="w-full md:w-auto rounded-full">Shop Now</Button>
                <div className="grid grid-cols-3 gap-4 pt-8">
                  <div>
                    <div className="text-2xl font-bold">200+</div>
                    <div className="text-sm text-gray-600">International Brands</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">2,000+</div>
                    <div className="text-sm text-gray-600">High-Quality Products</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">30,000+</div>
                    <div className="text-sm text-gray-600">Happy Customers</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative min-h-[0px] lg:min-h-[600px] w-full">
                <Image
                  src="/hero-1.png"
                  alt="Fashion Models"
                  fill
                  className="object-contain object-right hidden sm:block"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Brands */}
        <div className="bg-black">
          <div className="max-w-7xl mx-auto px-4 py-8 flex flex-wrap justify-between items-center gap-8">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/versace-zBhMf02CCcGnf38TSsMRpfQTspZeW0.png" 
              alt="Versace" 
              width={120} 
              height={40} 
              className="brightness-0 invert" 
            />
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zara-glmea7Wn5XCpdfOHX2ngJip2XkKREt.png" 
              alt="Zara" 
              width={120} 
              height={40} 
              className="brightness-0 invert" 
            />
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gucci-3MdHnniEkpq97vXLckiUjIglIolXat.png" 
              alt="Gucci" 
              width={120} 
              height={40} 
              className="brightness-0 invert" 
            />
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prada-r8GGhXsAXhjTmJrZxrh33q57QUQul0.png" 
              alt="Prada" 
              width={120} 
              height={40} 
              className="brightness-0 invert" 
            />
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/calvenkaln-0UF0KlOxbgPpOjDfXlaayp4J8vFFzD.png" 
              alt="Calvin Klein" 
              width={120} 
              height={40} 
              className="brightness-0 invert" 
            />
          </div>
        </div>

        {/* New Arrivals */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-8 text-center">NEW ARRIVALS</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "New Rules Black T-shirt",
                price: 120,
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/T-Shirt-OR47PL8dHu07Vct6hIxxJaILjBR6SR.png",
                rating: 4.5,
              },
              {
                name: "Skinny Fit Jeans",
                price: 240,
                oldPrice: 260,
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/skinny-jeans-lzhhSbd9YeZMOkDlk7MjZmyRu4T3PW.png",
                rating: 4.5,
              },
              {
                name: "Checkered Red Shirt",
                price: 180,
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/checked-shirt-IDe1UCBsH859WaiI6aUb8dgbzzQpgv.png",
                rating: 4.5,
              },
              {
                name: "Sleeve Striped T-shirt",
                price: 130,
                oldPrice: 160,
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sleeve-shirt-673FGsSE06U0gGaoSnuVdcFPNwGc1M.png",
                rating: 4.5,
              },
            ].map((product, i) => (
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
                  <h3 className="font-medium">{product.name}</h3>
                  <div className="flex gap-2">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">${product.price}</span>
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through">${product.oldPrice}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/shop/casual">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
        </section>

        {/* Top Selling */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-8">TOP SELLING</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Black Fade Slim Jeans",
                price: 212,
                oldPrice: 232,
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2038-bO2x6sP1O0TvFKWNd9v6J49BhNFiHh.png",
                rating: 4.5,
              },
              {
                name: "Orange Striped T-shirt",
                price: 145,
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sleeve-shirt-NSYPmHoMjWV3fjERNmXgBYpOFAaGuR.png",
                rating: 4.5,
              },
              {
                name: "Denim Bermuda Shorts",
                price: 180,
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2034-daaqJI9Od0odOjtRi6f7cIh91VcwKW.png",
                rating: 4.5,
              },
              {
                name: "Green Striped Shirt",
                price: 210,
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2032%20(1)-OH64c0JPo6wy0hZeXhB8a8UX8PGMr9.png",
                rating: 4.5,
              },
            ].map((product, i) => (
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
                  <h3 className="font-medium">{product.name}</h3>
                  <div className="flex gap-2">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">${product.price}</span>
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through">${product.oldPrice}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/shop/casual">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
        </section>

        {/* Browse by Style */}
        <section className="max-w-7xl mx-auto px-4 py-16 bg-[#F0F0F0]">
          <h2 className="text-4xl font-bold mb-8 text-center">BROWSE BY DRESS STYLE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid grid-cols-2 gap-6">
              <Link href="#" className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/casual-TrsrbQ9EuaH6timWBv327JFkErGCqH.png"
                  alt="Casual"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors" />
                <div className="absolute bottom-4 left-4 text-white font-bold text-xl">
                  Casual
                </div>
              </Link>
              <Link href="#" className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/formal-ZWgSOozvwXHLqctgTSo2P7HwfPkT8o.png"
                  alt="Formal"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors" />
                <div className="absolute bottom-4 left-4 text-white font-bold text-xl">
                  Formal
                </div>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Link href="#" className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/party-RPckLNuP7A5bq2AjOcxwy4PbQMzNV9.png"
                  alt="Party"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors" />
                <div className="absolute bottom-4 left-4 text-white font-bold text-xl">
                  Party
                </div>
              </Link>
              <Link href="#" className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gym-mAfW987Fzd2XoDtKCTWeZ7mcU4nebC.png"
                  alt="Gym"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors" />
                <div className="absolute bottom-4 left-4 text-white font-bold text-xl">
                  Gym
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-8">OUR HAPPY CUSTOMERS</h2>
          <div className="relative">
            <div className="hidden md:flex gap-6 overflow-x-visible pb-4">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="flex-none w-full md:w-1/2 lg:w-1/3 p-6 bg-gray-50 rounded-lg">
                  <div className="flex gap-2">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                    ))}
                  </div>
                  <p className="mt-4">{testimonial.content}</p>
                  <div className="mt-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200" />
                    <div>
                      <div className="font-medium">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Carousel className="md:hidden">
              <CarouselContent>
                {testimonials.map((testimonial, i) => (
                  <CarouselItem key={i}>
                    <div className="p-6 bg-gray-50 rounded-lg">
                      <div className="flex gap-2">
                        {Array(5).fill(0).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                        ))}
                      </div>
                      <p className="mt-4">{testimonial.content}</p>
                      <div className="mt-4 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-200" />
                        <div>
                          <div className="font-medium">{testimonial.author}</div>
                          <div className="text-sm text-gray-500">{testimonial.title}</div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 py-16 text-center">
            <h2 className="text-2xl font-bold mb-4">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
            <div className="max-w-md mx-auto flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white"
              />
              <Button>Subscribe to Newsletter</Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  )
}

