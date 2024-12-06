"use client";
import { usePaths } from "@/hooks/user-nav";
import { PAGE_BREAD_CRUMBS } from "@/constants/pages";
import Sheet from "../sheet";
import { Menu } from "lucide-react";
import { LogoSmall } from "@/svgs/logo-small";
import Items from "../Sidebar/Items";
import { Separator } from "@/components/ui/separator";
import ClerkAuthState from "../clerk-auth-state";
import { HelpDuoToneWhite } from "@/icons";
import SubscriptionPlan from "../subscription-plan";
import UpgradeCard from "../Sidebar/upgrade-card";
import CreateAutmation from "../create-automation";
import Search from "../search";
import Notifications from "./notifications";
import MainBreadCrumb from "../main-bread-crumb";
type Props = {
  slug: string;
};
const Navbar = ({ slug }: Props) => {
  const { page } = usePaths();
  console.log("Navbar: ", slug, page)
  const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page == slug;
  return (
    currentPage && (
      <div className="flex flex-col">
        <div className="flex gap-x-3 lg:gap-x-5 justify-end items-center">
          <span className="lg:hidden flex items-center flex-1 gap-x-2">
            <Sheet side="left" trigger={<Menu />} className="lg:hidden">
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
            </Sheet>
          </span>
          <Search></Search>
          <CreateAutmation></CreateAutmation>
          <Notifications></Notifications>
        </div>
        <MainBreadCrumb slug={slug} page={page === slug ? "Home" : page}
        ></MainBreadCrumb>
      </div>
    )
  );
};
export default Navbar;
