import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import ReviewList from '../components/ReviewList'
import Newsletter from '../components/Newsletter'
import products from '../data/products'
import reviews from '../data/reviews.json'
import { scoreProducts, latestReviews } from '../utils/recommendations'

export default function Home() {
  const [shownReviews, setShownReviews] = useState([])

  // Räknas om vid varje rendering
  const favorites = scoreProducts(products, reviews).slice(0, 6)

  useEffect(() => {
    const t = setTimeout(() => setShownReviews(latestReviews(reviews, 3)), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <div>
      <Hero />

      <div className="section intro">
        <h3>Bakat med kärlek sedan 1998</h3>
        <p className="lead">
          Fikabaren är ett litet hantverksbageri mitt i stan. Vi bakar på riktigt smör, mal vår egen
          kardemumma och brygger kaffe från ett lokalt rosteri. Varmt välkommen in!
        </p>
      </div>

      <div className="section">
        <h3>Veckans favoriter</h3>
        <p className="muted">Utvalda av våra gäster baserat på {reviews.length} recensioner.</p>
        <div className="grid">
          {favorites.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <Link to="/meny" className="read-more">Läs mer</Link>
      </div>

      <div className="section split">
        <img src="/images/about/interior.png" className="split-img" />
        <div>
          <h3>Ett vardagsrum för hela kvarteret</h3>
          <p>
            Hos oss får du gärna sitta kvar. Med 40 sittplatser, gratis wifi och påtår på bryggkaffet
            har Fikabaren blivit ett andra vardagsrum för både studenter, barnfamiljer och pensionärer.
          </p>
          <Link to="/om-oss">Läs mer</Link>
        </div>
      </div>

      <div className="section">
        <h3>Från vårt Instagram</h3>
        <div className="gallery">
          {products.slice(0, 8).map((p) => (
            <img key={p.id} src={p.image} />
          ))}
        </div>
      </div>

      <div className="section">
        <h3>Det här säger våra gäster</h3>
        <ReviewList reviews={shownReviews} />
      </div>

      <div className="section">
        <Newsletter />
      </div>
    </div>
  )
}
