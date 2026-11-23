import { createContext, useContext, useEffect, useState } from 'react'
import _ from 'lodash'
import products from '../data/products'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('fikabaren-cart')) || []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('fikabaren-cart', JSON.stringify(items))
  }, [items])

  const add = (id) => {
    setItems((prev) => {
      const existing = _.find(prev, { id })
      if (existing) return _.map(prev, (i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i))
      return [...prev, { id, qty: 1 }]
    })
  }

  const remove = (id) => setItems((prev) => _.reject(prev, { id }))

  const setQty = (id, qty) =>
    setItems((prev) => _.compact(_.map(prev, (i) => (i.id === id ? (qty > 0 ? { ...i, qty } : null) : i))))

  const clear = () => setItems([])

  const detailed = _.map(items, (i) => ({ ...i, product: _.find(products, { id: i.id }) })).filter((i) => i.product)
  const count = _.sumBy(items, 'qty')
  const total = _.sumBy(detailed, (i) => i.qty * i.product.price)

  return (
    <CartContext.Provider value={{ items: detailed, add, remove, setQty, clear, count, total }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
