import { ChevronRight, PencilIcon } from "lucide-react";
import React from "react";
import ActivateAutomationButton from "../../activate-automation-button";

type Props = {
  id: string;
};

const AutomationBreadCrumb = ({ id }: Props) => {
  // WIP: get automation data
  return (
    <div
      className="rounded-full w-full p-5 bg-[#18181b1a] flex
    justify-between items-center"
    >
      <div className="flex items-center gap-x-3 min-w-0">
        <p className="text-[#9b9ca0] truncate">Automations</p>
        <ChevronRight color="#9b9ca0 flex-shrink-0" />
        <span className="flex gap-x-3 items-center min-w-0">
          {/* Showign the editing data */}
          <p className="text-[#9b9ca0] truncate">
            This is the automation title
          </p>
          <span
            // onClick={enableEdit}
            className="cursor-pointer mr-4 hover:opacity-75 duration-100 transition flex-shrink-0"
          >
            <PencilIcon size={14} />
          </span>
        </span>
      </div>
      <div className="flex gap-x-5 ml-auto">
        <p className="hidden md:block text-text-secondary/60 text-sm truncate min-w-0">
          All updates are automatically saved
        </p>
        <div className="flex gap-x-5 flex-shrink-0">
          <p className="text-text-secondary text-sm truncate min-w-0">
            Changes Saved
          </p>
        </div>
      </div>
      <ActivateAutomationButton />
    </div>
  );
};

export default AutomationBreadCrumb;
