import { useEffect, useState } from 'react'

export default function PromoBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Hämta veckans erbjudande (simulerad fördröjning från CMS)
    const t = setTimeout(() => setVisible(true), 1800)
    return () => clearTimeout(t)
  }, [])

  if (!visible) return null

  return (
    <div className="promo animate__animated animate__fadeInDown">
      <span>☕ Veckans erbjudande: Kaffe + kanelbulle för 59 kr! Gäller t.o.m. söndag.</span>
      <span className="promo-close" onClick={() => setVisible(false)}>✕</span>
    </div>
  )
}
