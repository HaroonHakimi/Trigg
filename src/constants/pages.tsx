import {
  AutomationDuoToneBlue,
  AutomationDuoToneWhite,
  ContactsDuoToneBlue,
  ContactsDuoToneWhite,
  HomeDuoToneBlue,
  HomeDuoToneWhite,
  RocketDuoToneBlue,
  RocketDuoToneWhite,
  SettingsDuoToneWhite,
} from "@/icons";

export const PAGE_BREAD_CRUMBS: string[] = [
  "contacts",
  "automations",
  "integrations",
  "settings",
];

type Props = {
  [page in string]: React.ReactNode;
};

export const PAGE_ICON: Props = {
  AUTOMATIONS: <AutomationDuoToneWhite />,
  CONTACTS: <ContactsDuoToneWhite />,
  INTEGRATIONS: <RocketDuoToneWhite />,
  SETTINGS: <SettingsDuoToneWhite />,
  HOME: <HomeDuoToneWhite />,
};
