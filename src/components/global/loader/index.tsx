import { cn } from "@/lib/utils";
import React from "react";
import { Spinner } from "./spinner";

type Props = {
  state: boolean;
  className?: string ;
  children: React.ReactNode;
  colour?: string ;
};

const Loader = ({ state, className, children, colour }: Props) => {
  return state ? (
    <div className={cn(className)}>
      <Spinner color={colour} />
    </div>
  ) : (
    <>{children}</>
  );
};

export default Loader;
