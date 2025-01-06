import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  trigger: JSX.Element;
  children: React.ReactNode;
  className?: string;
};

const PopOver = ({ trigger, children, className }: Props) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent
        className={cn("bg-[#1d1d1d] shadow-lg mt-5 ", className)}
        // align="end"
        side="bottom"
      >
        {children}
      </PopoverContent>
    </Popover>
  );
};

export default PopOver;
