type Props = {
    type: "FREE" | "PRO"
    children: React.ReactNode
}

const SubscriptionPlan = ({children, type}: Props) => {
  return (
    <div className="h-full">
        {children}
    </div>
  )
}
export default SubscriptionPlan