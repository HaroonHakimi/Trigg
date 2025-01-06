import { useListener } from "@/hooks/use-automation";
import React from "react";
import TriggerButton from "../trigger-button";

type Props = {
  id: string;
};

const ThenAction = ({ id }: Props) => {
  const {
    onSetListener,
    listener: Listener,
    onFormSubmit,
    register,
    isPending,
  } = useListener(id);

  return <TriggerButton label='Then'>Children</TriggerButton>
};

export default ThenAction;
