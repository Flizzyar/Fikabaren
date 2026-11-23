import { Link } from 'react-router-dom'
import { today, isOpenNow } from '../utils/format'
import Icon from './Icon'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-title">Fikabaren</div>
          <p className="muted">Hantverksbageri och kafé sedan 1998. Vi bakar allt från grunden, varje dag.</p>
        </div>
        <div>
          <div className="footer-title">Öppettider</div>
          <p className="muted">Mån–fre 07–19<br />Lör–sön 09–17</p>
          <p className="muted small">
            {today()}: {isOpenNow() ? <span className="open">Öppet nu</span> : <span className="closed">Stängt</span>}
          </p>
        </div>
        <div>
          <div className="footer-title">Hitta hit</div>
          <p className="muted">Kanelgatan 12<br />123 45 Bullerby</p>
          <Link to="/kontakt" className="muted">Läs mer</Link>
        </div>
        <div>
          <div className="footer-title">Följ oss</div>
          <div className="social">
            <a href="https://instagram.com" target="_blank"><Icon name="Camera" /></a>
            <a href="https://facebook.com" target="_blank"><Icon name="Users" /></a>
            <a href="https://x.com" target="_blank"><Icon name="AtSign" /></a>
          </div>
        </div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Fikabaren AB</p>
    </div>
  )
}
