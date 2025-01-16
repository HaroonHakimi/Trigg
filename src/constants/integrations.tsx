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
    soon: boolean
}

export const INTEGRATION_CARDS: Props[] = [
  {
    title: "Connect Instagram",
    description:
      "Simple, easy connection",
    icon: <InstagramDuoToneBlue/>,
    strategy: 'INSTAGRAM',
    soon: false
  },
  {
    title: "Connect Telegram",
    description:
      "Simple, easy connection",
    icon: <Telegram/>,
    strategy: 'TELEGRAM',
    soon: true
  },
  {
    title: "Connect X (Twitter)",
    description:
      "Simple, easy connection",
    icon: <XTwitter/>,
    strategy: 'X',
    soon: true
  },
  {
    title: "Connect Whatsapp",
    description:
      "Simple, easy connection",
    icon: <Whatsapp/>,
    strategy: 'WHATSAPP',
    soon: true
  },
];
