import { Button } from "@/components/ui/button"
import Loader from "../loader"
import { AutomationDuoToneWhite } from "@/icons"

type Props = {}
const CreateAutmation = (props: Props) => {
  return (
    //WIP: Create the automation in the database using mutate
    <Button className="py-6 bg-gradient-to-br hover:opacity-80 rounded-full from-[#3353cc] to-[#1c2d70] text-white font-medium">
        <Loader state={false}>
            <AutomationDuoToneWhite/>
            <p className="hidden lg:inline">Create an automation</p>
        </Loader>
    </Button>
  )
}
export default CreateAutmation