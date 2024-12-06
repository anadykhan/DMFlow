"use client";

import { usePaths } from "@/hooks/user-nav";

import Items from "./Items";
import { Separator } from "@/components/ui/separator";
import ClerkAuthState from "../clerk-auth-state";
import { HelpDuoToneWhite } from "@/icons";
import SubscriptionPlan from "../subscription-plan";
import UpgradeCard from "./upgrade-card";
import { LogoSmall } from "@/svgs/logo-small";

type Props = {
  slug: string;
};
const Sidebar = ({ slug }: Props) => {
  const { page } = usePaths();
  return (
    <div className="hidden w-[250px] border-[1px] radial fixed left-0  border-[#545454] bg-gradient-to-b from-[#768bdd] via-[#0e0e0e] to-[#768bdd] lg:inline-block bottom-0 top-0 m-3 rounded-3xl overflow-hidden">
      <div className="flex flex-col gap-y-5 w-full h-full p-3 bg-[#171717] bg-opacity-90 bg-clip-padding backdrop--blur__safari backdrop-blur-3xl">
        <div className="flex gap-x-2 items-center justify-center p-5">
          <LogoSmall></LogoSmall>
        </div>
        <div className="flex flex-col py-3">
          <Items page={page} slug={slug}></Items>
        </div>
        <div className="px-16">
          <Separator
            orientation="horizontal"
            className="bg-[#333336]"
          ></Separator>
        </div>
        <div className="px-3 flex flex-col gap-y-5">
          <div className="flex gap-x-3 items-center">
            <ClerkAuthState></ClerkAuthState>
            <p className="text-[#9b9ca0]">Profile</p>
          </div>
          <div className="flex gap-x-3 items-center">
            <HelpDuoToneWhite></HelpDuoToneWhite>
            <p className="text-[#9b9ca0]">Help</p>
          </div>
        </div>
        <SubscriptionPlan type="FREE">
          <div className="flex-1 flex flex-col justify-end h-full">
            <UpgradeCard></UpgradeCard>
          </div>
        </SubscriptionPlan>
      </div>
    </div>
  );
};
export default Sidebar;
