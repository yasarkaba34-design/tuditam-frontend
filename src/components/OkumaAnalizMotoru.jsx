import React, { useState } from "react";

export default function OkumaAnalizMotoru() {
  const [inputKok, setInputKok] = useState("");
  const [analizSonucu, setAnalizSonucu] = useState({
    kok: "YOL",
    anlam: "Akış, hareket, yönelim ve zaman süreci",
    katman: "Origin / Hareket",
    izah: "Anadolu petrogliflerinde ve Orhun yazıtlarında yön ve erek bildiren temel kök hece."
  });

  // Kapsamlı Örnek Analitik Kök Veritabanı
  const analizMatrisi = {
    "YOL": { anlam: "Akış, hareket, yönelim ve zaman süreci", katman: "Origin / Hareket", izah: "Anadolu petrogliflerinde ve Orhun yazıtlarında yön ve erek bildiren temel kök hece." },
    "TUR": { anlam: "Denge, yapı kurma, merkezî tutunma", katman: "Structure / Kurulum", izah: "Toplumsal ve mekânsal yerleşimin, türetken dil yapısının temel taşı." },
    "KUR": { anlam: "Yaratım, inşa, sistem oluşturma", katman: "Creation / Yaratım", izah: "Anadolu'dan dünyaya yayılan kök dil kodlarında kurucu eylem." },
    "BAR": { anlam: "Varlık, duruş, kalıcılık", katman: "Formation / Varlık", izah: "Kadim merkezlerde ve höyük katmanlarında süreklilik ifadesi." },
    "GÖK": { anlam: "Yüksek katman, kozmik düzen ve sonsuzluk", katman: "Cosmic / Uzay", izah: "Göksel damgaların ve astronomik petrogliflerin semantik kökü." }
  };

  const handleAnalizEt = (e) => {
    e.preventDefault();
    const temizKok = inputKok.trim().toUpperCase();
    if (!temizKok) return;

    const sonuc = analizMatrisi[temizKok] || {
      anlam: "Genelleştirilmiş kök hece analizi ve semantik kodlama",
      katman: "Cosmic / Derin Katman",
      izah: "Bu kök-hece, Anadolu kökenli ses uyumu ve damga matrisi içinde fonetik süreklilik arz eder."
    };

    setAnalizSonucu({ kok: temizKok, ...sonuc });
  };

  return (
    <div style={{ backgroundColor: "#171717", color: "#fff", padding: "24px", borderRadius: "8px", border: "1px solid #444", animation: "fadeIn 0.4s ease" }}>
      <div style={{ marginBottom: "20px", borderBottom: "1px solid #333", paddingBottom: "12px" }}>
        <h2 style={{ color: "#ffd700", fontSize: "22px", margin: 0 }}>Okuma & Analiz Motoru</h2>
        <p style={{ color: "#aaa", fontSize: "13px", margin: "4px 0 0 0" }}>
          Anadolu kök-hece matrisi ve damga sürekliliği üzerinden analitik çözüme ulaşın.
        </p>
      </div>

      <form onSubmit={handleAnalizEt} style={{ display: "flex", gap: "10px", marginBottom: "25px" }}>
        <input
          type="text"
          placeholder="Kök girin (Örn: YOL, TUR, KUR, BAR, GÖK)..."
          value={inputKok}
          onChange={(e) => setInputKok(e.target.value)}
          style={{
            flex: 1,
            padding: "12px 16px",
            backgroundColor: "#0b0c10",
            border: "1px solid #444",
            borderRadius: "6px",
            color: "#fff",
            fontSize: "14px",
            outline: "none"
          }}
        />
        <button
          type="submit"
          style={{
            padding: "12px 24px",
            backgroundColor: "#ffd700",
            color: "#000",
            border: "none",
            borderRadius: "6px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          KÖKÜ ÇÖZÜMLE
        </button>
      </form>

      {analizSonucu && (
        <div style={{ backgroundColor: "#0b0c10", border: "1.5px solid #ffd700", borderRadius: "8px", padding: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
            <span style={{ backgroundColor: "#ffd700", color: "#000", padding: "4px 12px", borderRadius: "4px", fontWeight: "bold", fontSize: "0.8rem" }}>
              KÖK: {analizSonucu.kok}
            </span>
            <span style={{ color: "#888", fontSize: "0.8rem", fontFamily: "monospace" }}>{analizSonucu.katman}</span>
          </div>
          <h3 style={{ color: "#fff", fontSize: "1.2rem", margin: "0 0 10px 0" }}>{analizSonucu.anlam}</h3>
          <p style={{ color: "#ccc", fontSize: "0.9rem", lineHeight: "1.6", margin: 0 }}>{analizSonucu.izah}</p>
        </div>
      )}
    </div>
  );
}