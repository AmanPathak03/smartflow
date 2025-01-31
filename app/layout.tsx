import "./globals.css"
import { Inter } from "next/font/google"
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "SmartFlow: Smart Water Management",
  description: "IoT and AI-powered water management solutions for smart cities",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-20">{children}</main> {/* Adjusted padding-top */}
        <Footer />
      </body>
    </html>
  )
}

