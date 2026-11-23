import { Bar, Line } from 'react-chartjs-2'
import 'chart.js/auto'

const team = [
  { name: 'Birgitta Lind', role: 'Grundare & bagare', image: '/images/about/team-1.png' },
  { name: 'Jonas Ek', role: 'Konditor', image: '/images/about/team-2.png' },
  { name: 'Amira Haddad', role: 'Barista', image: '/images/about/team-3.png' },
  { name: 'Pelle Sundin', role: 'Kafévärd', image: '/images/about/team-4.png' },
]

const years = ['2019', '2020', '2021', '2022', '2023', '2024', '2025']

export default function About() {
  return (
    <div className="page">
      <div className="page-title">Om Fikabaren</div>
      <img src="/images/about/interior.png" className="about-hero" />

      <div className="about-text">
        <p>
          Fikabaren startades 1998 av Birgitta Lind i en gammal mjölkbutik. Det som började med en ugn
          och tre sorters bullar har vuxit till ett av stadens mest älskade kaféer.
        </p>
        <p>
          Vi tror på enkla råvaror, långa jäsningar och att fika är något man ska ta sig tid för. Därför
          har vi inga take away-muggar i plast och vi skänker allt som blir över till det lokala härbärget.
        </p>
      </div>

      <h3>Fikabaren i siffror</h3>
      <div className="charts">
        <div className="chart">
          <Bar
            data={{
              labels: years,
              datasets: [{ label: 'Bakade kanelbullar (tusental)', data: [42, 38, 51, 64, 71, 80, 92], backgroundColor: '#c7a17a' }],
            }}
          />
        </div>
        <div className="chart">
          <Line
            data={{
              labels: years,
              datasets: [{ label: 'Koppar kaffe per dag', data: [180, 120, 210, 260, 300, 320, 355], borderColor: '#6b4226' }],
            }}
          />
        </div>
      </div>

      <h3>Vi som jobbar här</h3>
      <div className="team">
        {team.map((m) => (
          <div key={m.name} className="team-member">
            <img src={m.image} />
            <div className="team-name">{m.name}</div>
            <div className="muted">{m.role}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
