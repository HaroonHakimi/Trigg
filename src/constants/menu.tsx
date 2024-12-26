import {
  AutomationDuoToneWhite,
  HomeDuoToneWhite,
  RocketDuoToneWhite,
  SettingsDuoToneWhite,
} from "@/icons";
import { v4 as uuid } from "uuid";

type FieldProps = {
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
    label: "Settings",
    icon: <SettingsDuoToneWhite />,
  },
];
