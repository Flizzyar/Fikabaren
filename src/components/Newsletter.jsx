import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  return (
    <div className="newsletter">
      <h4>Få veckans bakverk i inkorgen</h4>
      {done ? (
        <p>Tack! Vi hör av oss snart.</p>
      ) : (
        <div className="newsletter-form">
          <input
            tabIndex={1}
            placeholder="Din e-postadress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="btn btn-primary" onClick={() => email && setDone(true)}>Prenumerera</div>
        </div>
      )}
    </div>
  )
}
