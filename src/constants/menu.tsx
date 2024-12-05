import { AutomationDuoToneWhite, HomeDuoToneWhite, RocketDuoToneWhite, SettingsDuoToneWhite } from "@/icons";
import {v4 as uuid} from "uuid"

type FieldProps = {
    label: string;
    id: string;
}

type SideBarProps = FieldProps & {
    icon: React.ReactNode;
}

export const SIDEBAR_MENU: SideBarProps[] = [
  {
    id: uuid(),
    label: "Home",
    icon: <HomeDuoToneWhite></HomeDuoToneWhite>,
  },
  {
    id: uuid(),
    label: "Automation",
    icon: <AutomationDuoToneWhite></AutomationDuoToneWhite>,
  },
  {
    id: uuid(),
    label: "Integration",
    icon: <RocketDuoToneWhite></RocketDuoToneWhite>,
  },
  {
    id: uuid(),
    label: "Settings",
    icon: <SettingsDuoToneWhite></SettingsDuoToneWhite>,
  },
];