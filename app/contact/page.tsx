import { ContactForm } from "../components/contact-form"
import Image from "next/image"

export default function Contact() {
  return (
    <div className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0">
        <Image src="/contact-background.jpg" alt="Contact background" layout="fill" objectFit="cover" quality={100} />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70" />
      </div>
      <div className="relative z-10 max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg animate-fade-in">
        <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
        <ContactForm />
      </div>
    </div>
  )
}

