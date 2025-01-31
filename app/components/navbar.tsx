"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <nav
        className={`
          max-w-7xl mx-auto rounded-full transition-all duration-300 
          bg-white/70 backdrop-blur-md shadow-lg
        `}
      >
        <div className="container mx-auto flex justify-between items-center p-2">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            SmartFlow
          </Link>
          <div className="space-x-2">
            <Button asChild variant="ghost" className="text-gray-700 hover:text-blue-600">
              <Link href="/#features">Features</Link>
            </Button>
            <Button asChild variant="ghost" className="text-gray-700 hover:text-blue-600">
              <Link href="/#benefits">Benefits</Link>
            </Button>
            <Button asChild variant="outline" className="bg-blue-600 text-white hover:bg-blue-700">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </nav>
    </div>
  )
}

