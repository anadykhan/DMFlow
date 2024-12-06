"use client";
import { usePaths } from "@/hooks/user-nav";
import { cn } from "@/lib/utils";
import Link from "next/link";
import GradientButton from "../gradient-button";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

type Props = {};
const AutomationList = (props: Props) => {
  //WIP: Get the automation list data
  const { page, pathname } = usePaths();

  //WIP: If no automation exists, show no automation
  return (
    <div className="flex flex-col gap-y-3">
      <Link
        href={`${pathname}/123123123`}
        className="bg-[#1d1d1d] hover:opacity-80 transition duariton-100 rounded-xl p-5 border-[1px] border-[#545454] radial--gradient--automations flex"
      >
        <div className="flex flex-col flex-1 items-start">
          <h2 className="text-xl font-semibold">Automation name</h2>
          <p className="text-[#9b9ca0] text-sm font-light mb-2">
            This is from the comment
          </p>
          {/*WIP: Automation keywords*/}
          <div className="flex gap-x-2 flex-wrap mt-3">
            <div
              className={cn(
                "rounded-full px-4 py-1 capitalize",
                (0 + 1) % 1 == 0 &&
                  "bg-keyword-green/15 border-2 border-keyword-green",
                (1 + 1) % 2 == 0 &&
                  "bg-keyword-purple/15 border-2 border-keyword-purple",
                (2 + 1) % 3 == 0 &&
                  "bg-keyword-yellow/15 border-2 border-keyword-yellow",
                (3 + 1) % 4 == 0 &&
                  "bg-keyword-red/15 border-2 border-keyword-red"
              )}
            >
              Get started
            </div>
          </div>
          <div className="rounded-full border-2 mt-2 border-dashed border-white/60 px-3 py-1">
            <p className="text-sm text-[#bfc0c3]">No Keywords</p>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <p className="capitalize text-sm font-light text-[#9b9ca0]">
            {/*WIP: Attach real dates*/}
            October 5th, 2024
          </p>

          {/*WIP: Render the button based on the listener*/}
          <GradientButton
            type="BUTTON"
            className="w-full bg-background-80 text-white hover:bg-background-80"
          >
            SmartAI
          </GradientButton>
          <Button className="bg-background-80 hover:bg-background-80 text-white">
            Standard
          </Button>
        </div>
      </Link>
    </div>
  );
};
export default AutomationList;