import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Icon from './Icon'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { count } = useCart()
  const navigate = useNavigate()

  return (
    <div className="header">
      <div className="header-inner">
        <div className="logo" onClick={() => navigate('/')}>
          <img src="/images/logo.png" />
        </div>

        <div className={`nav ${open ? 'nav-open' : ''}`}>
          <NavLink to="/" end onClick={() => setOpen(false)}>Hem</NavLink>
          <NavLink to="/meny" onClick={() => setOpen(false)}>Meny</NavLink>
          <NavLink to="/om-oss" onClick={() => setOpen(false)}>Om oss</NavLink>
          <NavLink to="/kontakt" onClick={() => setOpen(false)}>Kontakt</NavLink>
        </div>

        <div className="header-actions">
          <Link to="/varukorg" className="cart-link">
            <Icon name="ShoppingBag" size={22} />
            {count > 0 && <span className="cart-count">{count}</span>}
          </Link>
          <button className="menu-toggle" onClick={() => setOpen(!open)}>
            <Icon name={open ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}
