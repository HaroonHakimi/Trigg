import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = {};

const SectionBorder = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={twMerge(
        "border-l border-r border-white/20",
        props.className
      )}
      {...props}
    />
  );
};

export default SectionBorder;
//40.28