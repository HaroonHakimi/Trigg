import { Button } from "@/components/ui/button";
import React from "react";
import Loader from "../loader";
import { AutomationDuoToneWhite } from "@/icons";

type Props = {};

const CreateAutomationButton = (props: Props) => {
    // WIP: Create automation server action functin
  return (
    <Button className="lg:px-10 py-6 bg-gradient-to-br hover:opacity-80
    text-black/70 rounded-full from-[#FFDBBB] font-medium to-[#FF8C00]">
        <Loader
        state={false}
        >
            {/* <AutomationDuoToneWhite/> */}
            
            <p className="">Create an Automation</p>
        </Loader>
    </Button>
  );
};

export default CreateAutomationButton;
