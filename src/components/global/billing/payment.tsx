import { Button } from "@/components/ui/button";
import { PLANS } from "@/constants/pages";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import React from "react";

type Props = {
  label: string;
  current: "PRO" | "FREE";
  landing?: boolean;
};

const PaymentCard = ({ label, current, landing }: Props) => {
  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden",
        label !== current
          ? "bg-background-90" // Matches the background color of the page
          : "p-[2px] bg-gradient-to-b from-[#6d60a3] via-[#9434e6] to-[#CC3BD4]"
      )}
    >
      <div
        className={cn(
          landing && "radial--gradient--pink ",
          "flex flex-col rounded-xl pl-5 py-5 pr-10 bg-background-90"
        )}
      >
        {landing ? (
          <h2 className="text-2xl">
            {label === "PRO" && "Premium Plan"}
            {label === "FREE" && "Standard"}
          </h2>
        ) : (
          <h2 className="text-2xl">
            {label === current
              ? "Your Current Plan"
              : current === "PRO"
              ? "Downgrade"
              : "Upgrade"}
          </h2>
        )}
        <p className="text-text-secondary text-sm ">
          Focus on content creation and let us take care of the rest!
        </p>
        {label === "PRO" ? (
          <p
            className="bg-gradient-to-r text-3xl from-[#FFDBBB] via-[#FFA500] to-[#FF8C00]
            font-bold bg-clip-text text-transparent"
          >
            Smart AI
          </p>
        ) : (
          <p className="font-bold mt-2  text-text-secondary">Standard</p>
        )}
        {label === "PRO" ? (
          <p className="mb-2">
            <b className="text-3xl">$99.99</b>/month
          </p>
        ) : (
          <p className="text-xl mb-2">Free</p>
        )}
        {PLANS[label === "PRO" ? 1 : 0].features.map((plan) => (
          <p className="mt-2 clas text-muted-foreground flex gap-2" key={plan}>
            <CircleCheck className="text-[#FFA500]" />
            {plan}
          </p>
        ))}
        {landing ? (
          <Button
            className={cn(
              "rounded-full mt-5 cursor-pointer",
              label === "PRO"
                ? "bg-gradient-r from-[#FFDBBB] via-[#FFA500] to-[#FF8C00] text-white"
                : "bg-background-80 text-white hover:text-background-80"
            )}
          >
            {label === current
              ? "Get Started"
              : current === "PRO"
              ? "Free"
              : "Get Started"}
          </Button>
        ) : (
          <Button
            className="rounded-full mt-5 bg-background-80 text-white cursor-pointer hover:text-background-80"
            disabled={label === current}
          >
            {label === current
              ? "Active"
              : current === "PRO"
              ? "Downgrade"
              : "Upgrade"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default PaymentCard;
