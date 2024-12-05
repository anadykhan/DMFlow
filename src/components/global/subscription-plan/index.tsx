type Props = {
    type: "FREE" | "PRO"
    children: React.ReactNode
}

const SubscriptionPlan = ({children, type}: Props) => {
  return (
    <div>
        {children}
    </div>
  )
}
export default SubscriptionPlan