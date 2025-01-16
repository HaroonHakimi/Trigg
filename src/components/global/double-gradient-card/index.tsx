"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  label: string;
  subLabel: string;
  description: string;
  link: string;
};

const DoubleGradientCard = ({ label, subLabel, description, link }: Props) => {
  const pathname = usePathname();

  return (
    <Link href={`${pathname}/${link}`} className="cursor-pointer">
      <div
        className="relative border-[1px] border-in-active/50 p-5 rounded-xl flex
      flex-col gap-y-20 overflow-hidden"
      >
        <div className="flex flex-col z-40">
          <h2 className="text-2xl font-medium">{label}</h2>
          <p className="text-text-secondary text-sm">{subLabel}</p>
        </div>
        <div>
          <p className="text-text-secondary text-sm">{description}</p>
          <Button className="rounded-full mt-2 bg-[#FFC067] w-10 h-10">
            <ArrowRight color="white" />
          </Button>
        </div>
        <div className="w-6/12 h-full absolute radial--double--gradient--cards--top top-0 left-0 z-10" />
        <div className="w-6/12 h-full absolute radial--double--gradient--cards--bottom top-0 left-1/2 right-0 z-0" />
      </div>
    </Link>
  );
};

export default DoubleGradientCard;
