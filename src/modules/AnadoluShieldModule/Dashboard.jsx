import "./Dashboard.css";

const stats = [
  { icon: "🌍", title: "Ülkeler", value: "214" },
  { icon: "🏛️", title: "Araştırmalar", value: "248" },
  { icon: "🔷", title: "Damgalar", value: "9.870" },
  { icon: "🪨", title: "Petroglifler", value: "18.420" },
  { icon: "📜", title: "Yazıtlar", value: "4.132" },
  { icon: "📚", title: "Kaynaklar", value: "12.580" },
  { icon: "📷", title: "Görseller", value: "46.900" },
  { icon: "🗺️", title: "Atlaslar", value: "58" },
];

const latest = [
  "YKOS-34-001 Yoros Kalesi",
  "Göbeklitepe",
  "Tamgalı",
  "Saymalıtaş",
  "Hierapolis",
];

export default function Dashboard() {
  return (
    <div className="dashboard">

      <section className="hero">

        <div>

          <h1>YKOS Bilgi Sistemi</h1>

          <p>
            Kültürel mirasın dijital araştırma platformu.
            Arkeoloji, dil, damga, yazıt ve kültürel verileri
            ortak bir bilgi ağı içinde ilişkilendirir.
          </p>

        </div>

        <div className="systemBox">

          <span>Sistem Durumu</span>

          <h2>AKTİF</h2>

          <small>YKOS v1.0 Beta</small>

        </div>

      </section>

      <section className="statsGrid">

        {stats.map((item) => (

          <div className="statCard" key={item.title}>

            <div className="icon">{item.icon}</div>

            <div>

              <h3>{item.value}</h3>

              <p>{item.title}</p>

            </div>

          </div>

        ))}

      </section>

      <section className="bottomGrid">

        <div className="panel">

          <h2>Son Eklenen Araştırmalar</h2>

          <ul>

            {latest.map((item) => (
              <li key={item}>{item}</li>
            ))}

          </ul>

        </div>

        <div className="panel">

          <h2>Hızlı Erişim</h2>

          <div className="quickGrid">

            <button>Araştırmalar</button>

            <button>Atlaslar</button>

            <button>Akademik</button>

            <button>Dijital Arşiv</button>

          </div>

        </div>

      </section>

    </div>
  );
}