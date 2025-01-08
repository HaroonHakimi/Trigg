import React from "react";
import PaymentButton from "../payment-button";
import Link from "next/link";

type Props = {
  slug: string;
};

const UpgradeCard = ({ slug }: Props) => {
  return (
    <div
      // href={`/dashboard/${slug}/settings`}
      className="bg-[#252525] p-3 rounded-2xl flex flex-col gap-y-3"
    >
      <span className="text-sm ">
        Upgrade To
        <span
          className="bg-gradient-to-r from
            from-[#FFDBBB] to-[#FF8C00]
            font-bold bg-clip-text text-transparent"
        >
          Smart AI
        </span>
      </span>
      <p className="text-[#989CA0] front-light text-sm">
        Unlock all features <br /> including AI and more
      </p>

      <PaymentButton></PaymentButton>
    </div>
  );
};

export default UpgradeCard;
