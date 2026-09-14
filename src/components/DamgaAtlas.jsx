import React, { useMemo, useState } from "react";
import damgalar from "../data/damgalar";
export const damgalar = [
  {
    id: "ykos-dmg-01",
    kod: "YOK-01",
    ad: "Ok Damgası (Yön ve Hareket)",
    aciklama: "Anadolu ve Orta Asya petrogliflerinde yön, akış ve erek bildiren temel kök damga formu.",
    kokler: ["YOK", "YÖK", "YOL"],
    petroglifler: ["Tamgalı Say", "Yazılıkaya"],
    yazitlar: ["Orhun Yazıtları", "Eski Anadolu Kaya Çizimleri"],
    ulkeler: ["Türkiye", "Kazakistan", "Kırgızistan"],
    gorsel: ""
  },
  {
    id: "ykos-dmg-02",
    kod: "TUR-02",
    ad: "Tut/Kur Damgası (Yapı ve Bağlantı)",
    aciklama: "Toplumsal ve yapısal bağ kurma, denge ve merkezî tutunma anlamlarını taşıyan sembol.",
    kokler: ["TUR", "KUR", "TUT"],
    petroglifler: ["Göbeklitepe Stelleri", "Saymalıtaş"],
    yazitlar: ["Yenisey Yazıtları"],
    ulkeler: ["Türkiye", "Moğolistan"],
    gorsel: ""
  }
];

export default function DamgaAtlas({ query = "" }) {
  const [selectedId, setSelectedId] = useState(damgalar[0]?.id ?? null);

  const filteredDamgalar = useMemo(() => {
    const normalizedQuery = query
      .trim()
      .toLocaleLowerCase("tr-TR");

    if (!normalizedQuery) return damgalar;

    return damgalar.filter((damga) => {
      const searchableText = [
        damga.ad,
        damga.kod,
        damga.aciklama,
        ...(damga.kokler ?? []),
        ...(damga.petroglifler ?? []),
        ...(damga.yazitlar ?? []),
        ...(damga.ulkeler ?? []),
      ]
        .join(" ")
        .toLocaleLowerCase("tr-TR");

      return searchableText.includes(normalizedQuery);
    });
  }, [query]);

  const selectedDamga =
    filteredDamgalar.find((damga) => damga.id === selectedId) ??
    filteredDamgalar[0] ??
    null;

  return (
    <section style={styles.container}>
      <div style={styles.header}>
        <div>
          <h2 style={styles.title}>Damga Atlası</h2>
          <p style={styles.text}>
            Damga kayıtlarını kök, petroglif, yazıt ve ülke ilişkileriyle inceleyin.
          </p>
        </div>

        <div style={styles.badge}>
          {filteredDamgalar.length} damga
        </div>
      </div>

      <div style={styles.layout}>
        <div style={styles.listPanel}>
          {filteredDamgalar.length > 0 ? (
            filteredDamgalar.map((damga) => {
              const isActive = selectedDamga?.id === damga.id;

              return (
                <button
                  key={damga.id}
                  type="button"
                  onClick={() => setSelectedId(damga.id)}
                  style={{
                    ...styles.listButton,
                    ...(isActive ? styles.activeButton : {}),
                  }}
                >
                  <strong>{damga.kod}</strong>
                  <span>{damga.ad}</span>
                </button>
              );
            })
          ) : (
            <div style={styles.emptyState}>
              Aramaya uygun damga kaydı bulunamadı.
            </div>
          )}
        </div>

        <div style={styles.detailPanel}>
          {selectedDamga ? (
            <>
              <div style={styles.symbolBox}>
                {selectedDamga.gorsel ? (
                  <img
                    src={selectedDamga.gorsel}
                    alt={selectedDamga.ad}
                    style={styles.image}
                  />
                ) : (
                  <div style={styles.placeholderSymbol}>
                    {selectedDamga.kod}
                  </div>
                )}
              </div>

              <h3 style={styles.detailTitle}>
                {selectedDamga.ad}
              </h3>

              <p style={styles.description}>
                {selectedDamga.aciklama}
              </p>

              <div style={styles.infoGrid}>
                <InfoRow
                  label="Kökler"
                  values={selectedDamga.kokler}
                />

                <InfoRow
                  label="Petroglifler"
                  values={selectedDamga.petroglifler}
                />

                <InfoRow
                  label="Yazıtlar"
                  values={selectedDamga.yazitlar}
                />

                <InfoRow
                  label="Ülkeler"
                  values={selectedDamga.ulkeler}
                />
              </div>
            </>
          ) : (
            <div style={styles.emptyState}>
              Gösterilecek damga kaydı bulunmuyor.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, values = [] }) {
  return (
    <div style={styles.infoRow}>
      <div style={styles.infoLabel}>{label}</div>

      <div style={styles.tags}>
        {values.length > 0 ? (
          values.map((value) => (
            <span key={value} style={styles.tag}>
              {value}
            </span>
          ))
        ) : (
          <span style={styles.muted}>Kayıt yok</span>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#222",
    color: "#fff",
    padding: "24px",
    borderRadius: "8px",
    border: "1px solid #444",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    marginBottom: "22px",
  },

  title: {
    color: "#f5c400",
    fontSize: "24px",
    margin: 0,
  },

  text: {
    color: "#ccc",
    marginBottom: 0,
  },

  badge: {
    color: "#f5c400",
    border: "1px solid #6f5a00",
    borderRadius: "999px",
    padding: "8px 14px",
    height: "fit-content",
  },

  layout: {
    display: "grid",
    gridTemplateColumns: "280px minmax(0, 1fr)",
    gap: "18px",
  },

  listPanel: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  listButton: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    backgroundColor: "#171717",
    color: "#fff",
    border: "1px solid #4a4a4a",
    borderRadius: "8px",
    padding: "14px",
    textAlign: "left",
    cursor: "pointer",
  },

  activeButton: {
    backgroundColor: "#f5c400",
    color: "#111",
    borderColor: "#f5c400",
  },

  detailPanel: {
    backgroundColor: "#171717",
    border: "1px solid #444",
    borderRadius: "8px",
    padding: "20px",
  },

  symbolBox: {
    width: "120px",
    height: "120px",
    border: "1px solid #555",
    borderRadius: "8px",
    backgroundColor: "#0f0f0f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  placeholderSymbol: {
    color: "#f5c400",
    fontSize: "24px",
    fontWeight: "700",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },

  detailTitle: {
    color: "#f5c400",
    fontSize: "22px",
    marginBottom: "8px",
  },

  description: {
    color: "#ddd",
    lineHeight: 1.6,
  },

  infoGrid: {
    display: "grid",
    gap: "14px",
    marginTop: "20px",
  },

  infoRow: {
    display: "grid",
    gridTemplateColumns: "130px minmax(0, 1fr)",
    gap: "12px",
    borderTop: "1px solid #333",
    paddingTop: "12px",
  },

  infoLabel: {
    color: "#f5c400",
    fontWeight: "700",
  },

  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },

  tag: {
    backgroundColor: "#252525",
    border: "1px solid #444",
    borderRadius: "999px",
    padding: "6px 10px",
  },

  muted: {
    color: "#888",
  },

  emptyState: {
    color: "#aaa",
    border: "1px dashed #444",
    borderRadius: "8px",
    padding: "24px",
    textAlign: "center",
  },
};