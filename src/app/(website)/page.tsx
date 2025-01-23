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
