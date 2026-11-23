import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page">
      <div className="page-title">404 – Här fanns ingen fika</div>
      <p>Sidan du letar efter finns inte. <Link to="/">Gå till startsidan</Link></p>
    </div>
  )
}
