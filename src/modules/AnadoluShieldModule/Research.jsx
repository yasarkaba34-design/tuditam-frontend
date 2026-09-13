import { useMemo, useState } from "react";
import "./Research.css";

const researchItems = [
  {
    id: 1,
    title: "Göbeklitepe",
    country: "Türkiye",
    location: "Şanlıurfa",
    category: "Arkeoloji",
    icon: "🏛️",
    description:
      "Neolitik dönemin yapı düzeni, sembolleri ve kültürel katmanları üzerine araştırma dosyası.",
  },
  {
    id: 2,
    title: "Karahantepe",
    country: "Türkiye",
    location: "Şanlıurfa",
    category: "Arkeoloji",
    icon: "🗿",
    description:
      "Taş Tepeler araştırmaları kapsamında mimari, figür ve sembol incelemeleri.",
  },
  {
    id: 3,
    title: "Tamgalı",
    country: "Kazakistan",
    location: "Almatı",
    category: "Petroglif",
    icon: "🪨",
    description:
      "Orta Asya kaya sanatı, güneş başlı figürler ve tarihsel kültür katmanları.",
  },
  {
    id: 4,
    title: "Saymalıtaş",
    country: "Kırgızistan",
    location: "Celal-Abad",
    category: "Petroglif",
    icon: "⛰️",
    description:
      "Yüksek dağlık alanda bulunan binlerce kaya resmi üzerine karşılaştırmalı inceleme.",
  },
  {
    id: 5,
    title: "Yazılıkaya",
    country: "Türkiye",
    location: "Çorum",
    category: "Kaya Anıtı",
    icon: "📜",
    description:
      "Hitit dönemi kaya kabartmaları, işaretler ve tören düzeni üzerine araştırma.",
  },
  {
    id: 6,
    title: "Alacahöyük",
    country: "Türkiye",
    location: "Çorum",
    category: "Arkeoloji",
    icon: "☀️",
    description:
      "Güneş kursları, mezar buluntuları ve Anadolu kültür katmanlarının incelenmesi.",
  },
  {
    id: 7,
    title: "Orhun Yazıtları",
    country: "Moğolistan",
    location: "Orhun Vadisi",
    category: "Yazıt",
    icon: "碑",
    description:
      "Türk dili, devlet anlayışı ve tarihsel bellek bakımından temel yazılı kaynaklar.",
  },
  {
    id: 8,
    title: "Yoros Kalesi",
    country: "Türkiye",
    location: "İstanbul",
    category: "Kültürel Miras",
    icon: "🏰",
    description:
      "İstanbul Boğazı’nın Karadeniz girişindeki tarihî savunma ve gözetleme yapısı.",
  },
];

function Research() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const categories = [
    "Tümü",
    ...new Set(researchItems.map((item) => item.category)),
  ];

  const filteredItems = useMemo(() => {
    return researchItems.filter((item) => {
      const searchText = searchTerm.toLocaleLowerCase("tr-TR");

      const matchesSearch =
        item.title.toLocaleLowerCase("tr-TR").includes(searchText) ||
        item.country.toLocaleLowerCase("tr-TR").includes(searchText) ||
        item.location.toLocaleLowerCase("tr-TR").includes(searchText) ||
        item.description.toLocaleLowerCase("tr-TR").includes(searchText);

      const matchesCategory =
        activeCategory === "Tümü" || item.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <main className="research-page">
      <section className="research-hero">
        <div className="research-hero-content">
          <span className="research-eyebrow">YKOS BİLGİ SİSTEMİ</span>

          <h1>Araştırmalar</h1>

          <p>
            Kültürel verileri arkeoloji, dil, damga, yazıt, yer adı ve tarihsel
            kaynaklar üzerinden birlikte değerlendiren araştırma dosyaları.
          </p>

          <div className="research-search">
            <span aria-hidden="true">🔍</span>

            <input
              type="search"
              placeholder="Araştırma, ülke veya yer ara..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              aria-label="Araştırmalarda ara"
            />
          </div>
        </div>

        <div className="research-hero-panel">
          <span>Aktif Araştırma Dosyası</span>
          <strong>{researchItems.length}</strong>
          <small>YKOS veri sistemi büyümeye devam ediyor.</small>
        </div>
      </section>

      <section className="research-content">
        <div className="research-toolbar">
          <div className="category-buttons">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "category-button active"
                    : "category-button"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <span className="result-count">
            {filteredItems.length} araştırma gösteriliyor
          </span>
        </div>

        {filteredItems.length > 0 ? (
          <div className="research-grid">
            {filteredItems.map((item) => (
              <article className="research-card" key={item.id}>
                <div className="research-card-icon" aria-hidden="true">
                  {item.icon}
                </div>

                <div className="research-card-body">
                  <div className="research-card-meta">
                    <span>{item.category}</span>
                    <span>{item.country}</span>
                  </div>

                  <h2>{item.title}</h2>

                  <p>{item.description}</p>

                  <div className="research-card-footer">
                    <span>📍 {item.location}</span>

                    <button
                      type="button"
                      onClick={() =>
                        console.log(`${item.title} araştırması açılıyor`)
                      }
                    >
                      Dosyayı Aç
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="research-empty">
            <span>🔎</span>
            <h2>Sonuç bulunamadı</h2>
            <p>Arama ifadesini veya kategori seçimini değiştirebilirsiniz.</p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Research;