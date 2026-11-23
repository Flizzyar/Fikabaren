import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/format'
import Icon from '../components/Icon'

export default function Cart() {
  const { items, setQty, remove, total, clear } = useCart()
  const [ordered, setOrdered] = useState(false)

  if (ordered) {
    return (
      <div className="page">
        <div className="page-title">Tack för din beställning!</div>
        <p>Din fika är redo att hämtas i kassan om ca 10 minuter.</p>
        <Link to="/">Till startsidan</Link>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="page-title">Varukorg</div>
      {items.length === 0 ? (
        <p>
          Varukorgen är tom. <Link to="/meny">Till menyn</Link>
        </p>
      ) : (
        <>
          <div className="cart">
            {items.map(({ id, qty, product }) => (
              <div key={id} className="cart-row">
                <img src={product.image} className="cart-img" />
                <div className="cart-name">{product.name}</div>
                <div className="qty">
                  <div className="btn btn-icon" onClick={() => setQty(id, qty - 1)}><Icon name="Minus" size={16} /></div>
                  <span>{qty}</span>
                  <div className="btn btn-icon" onClick={() => setQty(id, qty + 1)}><Icon name="Plus" size={16} /></div>
                </div>
                <div className="price">{formatPrice(qty * product.price)}</div>
                <div className="remove" onClick={() => remove(id)}><Icon name="Trash2" size={18} /></div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            Totalt: <span className="price big">{formatPrice(total)}</span>
          </div>
          <div className="btn btn-primary" onClick={() => { clear(); setOrdered(true) }}>Beställ för upphämtning</div>
        </>
      )}
    </div>
  )
}
