import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: 'bestallning', message: '' })

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  return (
    <div className="page">
      <div className="page-title">Kontakta oss</div>
      <div className="contact">
        <div>
          <p>Vill du beställa tårta, boka lokalen eller bara säga hej? Fyll i formuläret så svarar vi inom ett dygn.</p>
          {sent ? (
            <div className="success">Tack för ditt meddelande, {form.name}! Vi återkommer snart.</div>
          ) : (
            <div className="form">
              <input id="field" placeholder="Namn" value={form.name} onChange={update('name')} />
              <input id="field" placeholder="E-post" value={form.email} onChange={update('email')} />
              <select value={form.subject} onChange={update('subject')}>
                <option value="bestallning">Tårtbeställning</option>
                <option value="bokning">Boka lokalen</option>
                <option value="ovrigt">Övrigt</option>
              </select>
              <textarea placeholder="Meddelande" rows={6} value={form.message} onChange={update('message')} />
              <div className="btn btn-primary" onClick={() => form.name && form.email && setSent(true)}>Skicka</div>
            </div>
          )}
        </div>
        <div>
          <p><b>Adress:</b> Kanelgatan 12, 123 45 Bullerby</p>
          <p><b>Telefon:</b> 012-345 67 89</p>
          <p><b>E-post:</b> hej@fikabaren.se</p>
          <iframe
            className="map"
            src="https://www.google.com/maps?q=Stortorget%20Stockholm&output=embed"
          />
        </div>
      </div>
    </div>
  )
}
