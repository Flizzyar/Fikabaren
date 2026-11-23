import { Link, useParams } from 'react-router-dom'
import _ from 'lodash'
import products, { categories } from '../data/products'
import reviews from '../data/reviews.json'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/format'
import ReviewList from '../components/ReviewList'
import ProductCard from '../components/ProductCard'
import Icon from '../components/Icon'

export default function Product() {
  const { id } = useParams()
  const { add } = useCart()
  const product = _.find(products, { id })

  if (!product) {
    return (
      <div className="page">
        <div className="page-title">Produkten hittades inte</div>
        <Link to="/meny">Tillbaka till menyn</Link>
      </div>
    )
  }

  const productReviews = _.orderBy(_.filter(reviews, { productId: id }), ['date'], ['desc'])
  const avg = _.round(_.meanBy(productReviews, 'rating'), 1)
  const related = _.sampleSize(_.filter(products, (p) => p.category === product.category && p.id !== id), 3)

  return (
    <div className="page">
      <Link to="/meny" className="back"><Icon name="ArrowLeft" size={16} /> Tillbaka</Link>
      <div className="product">
        <img src={product.image} className="product-img" />
        <div className="product-info">
          <div className="page-title">{product.name}</div>
          <div className="muted">{categories[product.category]} · ★ {avg} ({productReviews.length} omdömen)</div>
          <p className="product-desc">{product.description}</p>
          <div className="price big">{formatPrice(product.price)}</div>
          {product.allergens.length > 0 && (
            <p className="allergens">Innehåller: {product.allergens.join(', ')}</p>
          )}
          <div className="btn btn-primary" onClick={() => add(product.id)}>
            <Icon name="ShoppingBag" size={18} /> Lägg i varukorgen
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="section">
          <h5>Du kanske också gillar</h5>
          <div className="grid">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

      <div className="section">
        <h5>Omdömen</h5>
        <ReviewList reviews={productReviews.slice(0, 5)} />
      </div>
    </div>
  )
}
