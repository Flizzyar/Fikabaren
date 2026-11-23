import * as Icons from 'lucide-react'

// Generisk ikonkomponent så att vi kan skriva <Icon name="Coffee" />
export default function Icon({ name, size = 20, ...props }) {
  const Component = Icons[name] || Icons.HelpCircle
  return <Component size={size} {...props} />
}
