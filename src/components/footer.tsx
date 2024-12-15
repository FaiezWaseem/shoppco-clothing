
import Image from "next/image"
import Link from "next/link"
import { Twitter, Facebook, Instagram, Github } from 'lucide-react'

export default function Footer() {
    return <footer className="border-t">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <Link href="/" className="text-2xl font-bold">SHOP.CO</Link>
          <p className="mt-4 text-gray-600">
            We have clothes that suits your style and which you're proud to wear. From women to men.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="#" className="text-gray-600 hover:text-black">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black">
              <Github className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-4">COMPANY</h3>
          <div className="space-y-3">
            <Link href="#" className="block text-gray-600 hover:text-black">About</Link>
            <Link href="#" className="block text-gray-600 hover:text-black">Features</Link>
            <Link href="#" className="block text-gray-600 hover:text-black">Works</Link>
            <Link href="#" className="block text-gray-600 hover:text-black">Career</Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-4">HELP</h3>
          <div className="space-y-3">
            <Link href="#" className="block text-gray-600 hover:text-black">Customer Support</Link>
            <Link href="#" className="block text-gray-600 hover:text-black">Delivery Details</Link>
            <Link href="#" className="block text-gray-600 hover:text-black">Terms & Conditions</Link>
            <Link href="#" className="block text-gray-600 hover:text-black">Privacy Policy</Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-4">FAQ</h3>
          <div className="space-y-3">
            <Link href="#" className="block text-gray-600 hover:text-black">Account</Link>
            <Link href="#" className="block text-gray-600 hover:text-black">Manage Deliveries</Link>
            <Link href="#" className="block text-gray-600 hover:text-black">Orders</Link>
            <Link href="#" className="block text-gray-600 hover:text-black">Payments</Link>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">
            Shop.co © 2000-2023, All Rights Reserved
          </div>
          <div className="flex gap-4">
          <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Badge-tksRHaaY4Mz7ERioBtxA4g8YZZm8pP.png" alt="Visa" width={48} height={32} />
          <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Badge%20(1)-QCGAnacmDVyhSPWF2C6xJuPfFa2cHR.png" alt="Mastercard" width={48} height={32} />
          <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Badge%20(2)-O04IVUqaoqF2bvMj8OEz3L913SDltA.png" alt="PayPal" width={48} height={32} />
          <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Badge%20(3)-sbbXEJuTbv8tkvKHGLWiUesyBzq7cT.png" alt="Apple Pay" width={48} height={32} />
          <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Badge%20(4)-tvNmBhD1jKcC0ZK4R8k5HkFp1oSnqK.png" alt="Google Pay" width={48} height={32} />
        </div>
        </div>
      </div>
    </div>
  </footer>
}