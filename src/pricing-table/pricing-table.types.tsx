export default interface PricingTableProps {
  plans?: Plan[]
  color: Color
  handleClick: (id: string) => void
}

interface Plan {
  id: string
  circle: string
  title: string
  subtitle: string
  price: string
  discount?: string
  buttonText: string
  popular?: boolean
  features: object
}

interface Color {
  main: string
  features: string
  font: string
  fontInverted: string
  background: string
  popular: string
  checkMark: string
}
