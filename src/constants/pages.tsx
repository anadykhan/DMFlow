import { AutomationDuoToneBlue, ContactsDuoToneBlue, HomeDuoToneBlue, RocketDuoToneBlue, SettingsDuoToneWhite } from "@/icons";

export const PAGE_BREAD_CRUMBS: string[] = [
  "contacts",
  "automations",
  "integrations",
  "settings",
];

type PageIconProps = {
  [page in string]: React.ReactNode;
}

export const PAGE_ICON: PageIconProps = {
  AUTOMATIONS: <AutomationDuoToneBlue/>,
  CONTACTS: <ContactsDuoToneBlue/>,
  INTEGRATIONS: <RocketDuoToneBlue/>,
  SETTINGS: <SettingsDuoToneWhite/>,
  HOME: <HomeDuoToneBlue/>
}