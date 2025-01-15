import AnimatedBackground from "@/components/global/animated-background";
import LandingPage from "@/components/global/landing-page/landing-page";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const plans = [
    {
      name: "Free Plan",
      description: "Perfect for getting started",
      price: "$0",
      features: [
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
    <main className="relative min-h-screen flex items-center justify-center">
      {/* <AnimatedBackground /> */}
      <LandingPage />
    </main>
  );
}
