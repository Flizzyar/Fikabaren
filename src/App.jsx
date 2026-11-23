import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import PromoBanner from './components/PromoBanner'
import CookieBanner from './components/CookieBanner'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Product from './pages/Product'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    if (window.FikaTracker) window.FikaTracker.track('navigate', { path: location.pathname })
  }, [location.pathname])

  return (
    <div className="app">
      <PromoBanner />
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meny" element={<Menu />} />
          <Route path="/meny/:id" element={<Product />} />
          <Route path="/om-oss" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/varukorg" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      <CookieBanner />
    </div>
  )
}
