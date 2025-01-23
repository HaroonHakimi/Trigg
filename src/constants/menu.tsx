import {
  AutomationDuoToneWhite,
  HomeDuoToneWhite,
  RocketDuoToneWhite,
  SettingsDuoToneWhite,
} from "@/icons";
import { ShieldQuestion } from "lucide-react";
import { v4 as uuid } from "uuid";

export type FieldProps = {
  label: string;
  id: string;
};

type SidebarProps = {
  icon: React.ReactNode;
} & FieldProps;
export const SIDEBAR_MENU: SidebarProps[] = [
  {
    id: uuid(),
    label: "home",
    icon: <HomeDuoToneWhite />,
  },
  {
    id: uuid(),
    label: "tutorial",
    icon: <ShieldQuestion/>,
  },
  {
    id: uuid(),
    label: "automations",
    icon: <AutomationDuoToneWhite />,
  },
  {
    id: uuid(),
    label: "integrations",
    icon: <RocketDuoToneWhite />,
  },
  {
    id: uuid(),
    label: "settings",
    icon: <SettingsDuoToneWhite />,
  },
];
