import { ChevronRight } from "lucide-react";
import React from "react";

type Props = {};

const AutomationBreadCrumb = (props: Props) => {
  // WIP: get automation data
  return (
    <div
      className="rounded-full w-full p-5 bg-[#18181b1a] flex
    justify-between items-center"
    >
      <div className="flex items-center gap-x-3">
        <p className="text-[#9b9ca0]">Automations</p>
        <ChevronRight color='#9b9ca0'/>
      </div>
    </div>
  );
};

export default AutomationBreadCrumb;
