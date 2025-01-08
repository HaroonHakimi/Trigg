import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const PaymentButton = (props: Props) => {
  // WIP get subscription details
  // WIP loading state
  return (
    <Button
      className="bg-gradient-to-br text-white/90  font-bold
    rounded-full from-[#6d60a3] via-[#9434e6] to-[#CC3BD4]"
    >
      Upgrade
    </Button>
  );
};

export default PaymentButton;
