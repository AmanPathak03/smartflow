import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Droplet, Brain, Activity, AlertTriangle } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="animate-fade-in">
      <section className="relative text-center py-40 mb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://media.istockphoto.com/id/488964620/video/underwater-sun-rays-in-the-ocean.jpg?s=640x640&k=20&c=70R1hN64sZpmjZBWy57N6cLCgetUgptVLvP6c9qyrxI="
            alt="Water background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-blue-600 bg-opacity-50" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-white">Smart Water Management for Smart Cities</h1>
          <p className="text-xl mb-8 text-white">Revolutionizing water distribution with IoT and AI</p>
          <Button size="lg" className="animate-slide-up">
            Learn More <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      <section id="features" className="mb-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Droplet className="mr-2" /> IoT-Based Monitoring
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our advanced IoT devices provide real-time monitoring of water distribution networks, promptly detecting
                leaks and tracking water usage across the city.
              </p>
            </CardContent>
          </Card>
          <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="mr-2" /> AI-Driven Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Utilizing cutting-edge AI algorithms, we analyze data from IoT sensors to optimize water supply
                management, predict demand patterns, and identify areas for efficiency improvements.
              </p>
            </CardContent>
          </Card>
          <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="mr-2" /> Smart Meter
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Show transparent and real-time data usage, empowering consumers and utilities with accurate, up-to-date
                information on water consumption patterns.
              </p>
            </CardContent>
          </Card>
          <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="mr-2" /> Leaks and Unauthorized Usage Detection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Detect any leak and unauthorized usage by identifying pressure changes in the water distribution system,
                ensuring efficient resource management and reducing water loss.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="benefits" className="relative py-16 mb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://cdn.vanderbilt.edu/vu-news/files/20190417233949/water-droplet-585x298.jpg"
            alt="Water droplet background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-70" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Leak Detection", "Demand Forecasting", "Efficiency Optimization"].map((benefit, index) => (
              <Card
                key={benefit}
                className={`transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle>{benefit}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{getBenefitDescription(benefit)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="text-center container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-4">Ready to Revolutionize Your Water Management?</h2>
        <Button size="lg" asChild className="animate-slide-up">
          <a href="/contact">Contact Us Today</a>
        </Button>
      </section>
    </div>
  )
}

function getBenefitDescription(benefit: string): string {
  switch (benefit) {
    case "Leak Detection":
      return "Quickly identify and locate leaks in the water distribution system, reducing water loss and infrastructure damage."
    case "Demand Forecasting":
      return "Accurately predict water demand patterns, enabling better resource allocation and reducing overuse."
    case "Efficiency Optimization":
      return "Identify areas for improvement in the water distribution network, leading to significant cost savings and resource conservation."
    default:
      return ""
  }
}

