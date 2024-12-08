import AutomationBreadCrumb from "@/components/global/automations-bread-crumb";
import Trigger from "@/components/global/trigger";
import { Warning } from "@/icons";

type Props = {
  params: { id: string };
};

//WIP: Set metadata
const Page = ({ params }: Props) => {
  //WIP: Prefetch user automation data
  return (
    <div className="flex flex-col items-center gap-y-20">
      <AutomationBreadCrumb id={params.id}></AutomationBreadCrumb>
      <div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1d1d1d] gap-y-3">
        <div className="flex gap-x-2">
          <Warning />
          When...
        </div>
        <Trigger id={params.id}></Trigger>
      </div>
    </div>
  );
};
export default Page;
