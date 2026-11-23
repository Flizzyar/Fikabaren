import { useState } from 'react'

export default function CookieBanner() {
  const [accepted, setAccepted] = useState(() => localStorage.getItem('fikabaren-cookies') === 'ok')

  if (accepted) return null

  const accept = () => {
    localStorage.setItem('fikabaren-cookies', 'ok')
    setAccepted(true)
  }

  return (
    <div className="cookie-banner">
      <p>Vi använder kakor 🍪 (både de digitala och de goda) för att förbättra din upplevelse.</p>
      <div className="btn btn-small" onClick={accept}>Okej!</div>
    </div>
  )
}
