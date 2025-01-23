import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const Pricing = (props: Props) => {
  const plans = [
    {
      name: "Free Plan",
      description: "Perfect for getting started",
      price: "$0",
      features: [
        "Unlimited automations",
        "Boost engagement with target responses",
        "Automate comment replies to enhance audience interaction",
        "Turn followers into customers with targeted messaging",
      ],
      cta: "Get Started",
    },
    {
      name: "Smart AI Plan",
      description: "Advanced features for power users",
      price: "$99",
      features: [
        "All features from Free Plan",
        "AI-powered response generation",
        "Advanced analytics and insights",
        "Priority customer support",
        "Custom branding options",
      ],
      cta: "Upgrade Now",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 md:gap-8 container">
      {plans.map((plan, index) => (
        <Card key={index} className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle>{plan.name}</CardTitle>
            <CardDescription>{plan.description}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="text-4xl font-bold">
              {plan.price}
              <span className="text-lg font-normal text-muted-foreground">
                /month
              </span>
            </div>
            <ul className="space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="w-full">
            <Link href="/dashboard" className="w-full">
              <Button className="w-full from-[#ff8c00] to-[#653801] bg-gradient-to-tr text-white">{plan.cta}</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Pricing;
