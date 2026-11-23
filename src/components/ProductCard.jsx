import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/format'
import Icon from './Icon'

export default function ProductCard({ product }) {
  const { add } = useCart()

  return (
    <div className="card">
      <Link to={`/meny/${product.id}`}>
        <img src={product.image} className="card-img" />
      </Link>
      <div className="card-body">
        <div className="card-title">{product.name}</div>
        <p className="card-desc">{product.description}</p>
        <div className="card-footer">
          <span className="price">{formatPrice(product.price)}</span>
          <div className="btn btn-icon" onClick={() => add(product.id)}>
            <Icon name="Plus" size={18} />
          </div>
        </div>
        <Link to={`/meny/${product.id}`} className="read-more">Läs mer</Link>
      </div>
    </div>
  )
}
