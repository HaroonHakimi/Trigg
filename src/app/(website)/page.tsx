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
import { useEffect } from "react";
import gsap from "gsap";
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
    <main className="">
      <div className="absolute top-[50px] inset-0 justify-center inline-flex flex-row mt-24">
        <div className="absolute top-[50px] inset-0 justify-center inline-flex flex-row">
          <div className="bg-[#f89e04] w-[400px] h-[400px] rounded-[9999px] relative bg-1 opacity-50 bg-blur"></div>
          <div className="bg-[#e15300] w-[300px] h-[300px] rounded-[9999px] relative bg-2 opacity-50 bg-blur"></div>
          <div className="bg-[#ff0000] w-[400px] h-[400px] rounded-[9999px] relative bg-1 opacity-50 bg-blur"></div>
        </div>
        <LandingPage />
      </div>
    </main>
  );
}
