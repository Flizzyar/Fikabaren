import { useCallback, useState } from 'react'
import _ from 'lodash'
import ProductCard from '../components/ProductCard'
import products, { categories } from '../data/products'

export default function Menu() {
  const [query, setQuery] = useState('')
  const [input, setInput] = useState('')
  const [category, setCategory] = useState('alla')
  const [sort, setSort] = useState('popular')

  const updateQuery = useCallback(_.debounce((q) => setQuery(q), 250), [])

  let filtered = products.filter(
    (p) =>
      (category === 'alla' || p.category === category) &&
      (p.name.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase()))
  )
  if (sort === 'price-asc') filtered = _.sortBy(filtered, 'price')
  if (sort === 'price-desc') filtered = _.reverse(_.sortBy(filtered, 'price'))
  if (sort === 'popular') filtered = _.sortBy(filtered, (p) => (p.popular ? 0 : 1))

  const grouped = _.groupBy(filtered, 'category')

  return (
    <div className="page">
      <div className="page-title">Vår meny</div>
      <p className="muted">Allt bakas på plats varje morgon. Fråga personalen om allergener.</p>

      <div className="filters">
        <input
          className="search"
          placeholder="Sök bland bakverk och drycker..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
            updateQuery(e.target.value)
          }}
        />
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="popular">Populärast</option>
          <option value="price-asc">Pris: lägst först</option>
          <option value="price-desc">Pris: högst först</option>
        </select>
      </div>

      <div className="chips">
        {['alla', ...Object.keys(categories)].map((c) => (
          <div key={c} className={`chip ${category === c ? 'chip-active' : ''}`} onClick={() => setCategory(c)}>
            {c === 'alla' ? 'Alla' : categories[c]}
          </div>
        ))}
      </div>

      {filtered.length === 0 && <p>Inga produkter matchade din sökning.</p>}

      {Object.keys(grouped).map((cat) => (
        <div key={cat} className="menu-group">
          <h4>{categories[cat]}</h4>
          <div className="grid">
            {grouped[cat].map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
