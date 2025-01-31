import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

const plans = [
  { name: "Basic", price: 19.99, description: "5 gallons per week" },
  { name: "Standard", price: 29.99, description: "10 gallons per week" },
  { name: "Premium", price: 39.99, description: "15 gallons per week" },
]

export default function Plans() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Subscription Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card key={plan.name}>
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>${plan.price}/month</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{plan.description}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Subscribe</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

