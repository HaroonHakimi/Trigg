import { Button } from "@/components/ui/button";
import React from "react";
import Loader from "../loader";
import { ActiveAutomation } from "@/icons/active-automation";
import { useQueryAutomation } from "@/hooks/use-queries";
import { useMutationData } from "@/hooks/use-mutation-data";
import { activateAutomation } from "@/actions/automations";
import { Loader2 } from "lucide-react";

type Props = {
  id: string;
};

const ActivateAutomationButton = ({ id }: Props) => {
  const { data } = useQueryAutomation(id);
  const { mutate, isPending } = useMutationData(
    ["activate"],
    (data: { state: boolean }) => activateAutomation(id, data.state),
    "automation-info"
  );

  return (
    <Button
      onClick={() => mutate({ state: !data?.data?.active })}
      disabled={isPending}
      className="lg:px-10 bg-gradient-to-br hover:opacity-80 text-white
    rounded-full from-[#ff8c00] to-[#653801] font-medium ml-4"
    >
      
      
        {isPending ? <Loader2 className="animate-spin"/>  : <ActiveAutomation /> }
        <p className="lg:inline hidden">
          {data?.data?.active ? 'Disable' : 'Activate'} 
        </p>
    </Button>
  );
};

export default ActivateAutomationButton;
