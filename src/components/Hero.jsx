import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const navigate = useNavigate()

  return (
    <div className="hero" style={{ backgroundImage: 'url(/images/hero.jpg)' }}>
      <div className="hero-overlay">
        <div className="hero-title animate__animated animate__fadeInUp">Välkommen till Fikabaren</div>
        <p className="hero-text">Nybakat, nybryggt och alltid lika mysigt. Slå dig ner för en riktig svensk fika.</p>
        <div className="btn btn-primary" onClick={() => navigate('/meny')}>Se menyn</div>
      </div>
    </div>
  )
}
