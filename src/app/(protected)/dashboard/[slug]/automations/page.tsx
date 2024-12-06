import AutomationList from "@/components/global/automations-list";
import CreateAutmation from "@/components/global/create-automation"
import { Check } from "lucide-react"

type Props = {}
const Page = (props: Props) => {
  //WIP: Connect real automation state
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
      <div className="lg:col-span-4">
        <AutomationList />
      </div>
      <div className="lg:col-span-2">
        <div className="flex flex-col rounded-xl bg-background-80 gap-y-6 p-5 border-[1px] border-in-active overflow-hidden">
          <div>
            <h2 className="text-xl">Automations</h2>
            <p className="text-text-secondary">
              Your live automations will show here
            </p>
          </div>
          <div>
            {[1, 2, 3].map((data, index) => (
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">
                    Direct traffic towards website
                  </h3>
                  <p className="text-text-secondary text-sm">
                    October 5th 2024
                  </p>
                </div>
                <Check />
              </div>
            ))}
          </div>
          <CreateAutmation></CreateAutmation>
        </div>
      </div>
    </div>
  );
}
export default Page