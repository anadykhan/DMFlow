import AutomationBreadCrumb from "@/components/global/automations-bread-crumb";

type Props = {
  params: { id: string };
};

//WIP: Set metadata
const Page = ({params}: Props) => {
  //WIP: Prefetch user automation data
  return (
    <div className="flex flex-col items-center gap-y-20">
      <AutomationBreadCrumb id={params.id}></AutomationBreadCrumb>
    </div>
  );
};
export default Page;
