import { Button } from "@/components/ui/button"
import Loader from "../loader"
import { ActiveAutomation } from "@/icons/active-automation"

type Props = {}
const ActivateAutomationButton = (props: Props) => {
    //WIP: Setpu optimistic UI
    //WIP: Fetch some automation data
  return (
    <Button
    className="lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352cc] font-medium to-[#1c2d70] mx-4"
    >
        <Loader state={false}>
            <ActiveAutomation/>
            <p className="lg:inline hidden">Activate</p>
        </Loader>
    </Button>
  )
}
export default ActivateAutomationButton