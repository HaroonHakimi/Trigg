import { InstagramDuoToneBlue } from "@/icons";
import { Telegram } from "@/icons/telegram";
import { Whatsapp } from "@/icons/whatsapp";
import { XTwitter } from "@/icons/x-twitter";
import React from "react";

type Props = {
    title: string
    description: string
    icon: React.ReactNode
    strategy: 'INSTAGRAM' | 'TELEGRAM' | 'X' | 'WHATSAPP'    
}

export const INTEGRATION_CARDS: Props[] = [
  {
    title: "Connect Instagram",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam officia hic suscipit maiores exercitationem quis?",
    icon: <InstagramDuoToneBlue/>,
    strategy: 'INSTAGRAM'
  },
  {
    title: "Connect Telegram",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam officia hic suscipit maiores exercitationem quis?",
    icon: <Telegram/>,
    strategy: 'TELEGRAM'
  },
  {
    title: "Connect X (Twitter)",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam officia hic suscipit maiores exercitationem quis?",
    icon: <XTwitter/>,
    strategy: 'X'
  },
  {
    title: "Connect Whatsapp",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam officia hic suscipit maiores exercitationem quis?",
    icon: <Whatsapp/>,
    strategy: 'WHATSAPP'
  },
];
