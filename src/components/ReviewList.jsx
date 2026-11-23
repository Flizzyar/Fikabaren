import { fromNow } from '../utils/format'
import Icon from './Icon'

export default function ReviewList({ reviews }) {
  return (
    <div className="reviews">
      {reviews.map((r) => (
        <div key={r.id} className="review">
          <div className="stars" style={{ color: '#f2c94c' }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon key={i} name="Star" size={16} fill={i < r.rating ? 'currentColor' : 'none'} />
            ))}
          </div>
          <p className="review-text">”{r.text}”</p>
          <div className="review-meta">
            {r.author} · {fromNow(r.date)}
          </div>
        </div>
      ))}
    </div>
  )
}
