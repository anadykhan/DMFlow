import { ChevronRight, PencilIcon } from "lucide-react";
import ActivateAutomationButton from "../activate-automation-button";

type Props = {
  id: string;
};
const AutomationBreadCrumb = ({ id }: Props) => {
  //WIP: Get some automation data
  //   WIP: User mutation stuff to update the automation
  return (
    <div className="rounded-full w-full p-5 bg-[#18181b1a] flex justify-between items-center">
      <div className="flex items-center gap-x-3 min-w-0">
        <p className="text-[#9b9ca0] truncate">Automations</p>
        <ChevronRight color="#9b9ca0" className="flex-shrink-0"></ChevronRight>
        <span className="flex gap-3 items-center min-w-0">
          {/*She the editing data*/}
          <p className="text-[#9b9ca0] truncate">
            This is the automation title
          </p>
          <span className="cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0 mr-4">
            <PencilIcon size={14}></PencilIcon>
          </span>
        </span>
      </div>
      <div className="flex items-center gap-x-5 ml-auto">
        <p className="hidden md:block text-text-secondary/60 text-sm truncate min-w-0">
          All updates are automatically saved
        </p>
        <div className="flex gap-x-5 flex-shrink-0">
          <p className="text-text-secondary text-sm truncate min-w-0">
            Changes saved
          </p>
        </div>
      </div>
      <ActivateAutomationButton />
    </div>
  );
};
export default AutomationBreadCrumb;
