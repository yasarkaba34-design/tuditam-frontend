import React, { useState } from "react";

const kadimMerkezlerData = {
  gobeklitepe: {
    baslik: "Göbeklitepe (M.Ö. 9600 - 7000)",
    altBaslik: "Sıfır Noktası ve İlk Görsel Algoritmalar",
    aciklama: "Göbeklitepe'deki dikili taşlar rastgele çizimler değil, Türkçenin görsel algoritmasının ilk piktografik mühürleridir. T-biçimli sütunlar ve üzerindeki hayvan rölyefleri, evrensel frekansların taş üzerine kodlanmış hafızasını taşır.",
    iliskiliMatris: "M1 (Damga Matrisi) & M2 (Kaya Resimleri Matrisi)",
    iliskiliAtlas: "A3 (Arkeoloji Atlası) & A4 (Anadolu Atlası)",
    kod: "N_204 / N_301"
  },
  catalhoyuk: {
    baslik: "Çatalhöyük (M.Ö. 7500 - 5700)",
    altBaslik: "Damga Mühürlerin ve Yerleşik Yaşamın Merkezi",
    aciklama: "Çatalhöyük, pişmiş toprak mühürlerin (damgaların) ve duvar resimlerinin en yoğunlaştığı merkezdir. Burada bulunan geometrik damgalar, mülkiyet sınırlarından ziyade toplumsal hafızanın hecesel sembolizmini korur.",
    iliskiliMatris: "M3 (Sembol Matrisi) & M5 (Kök-Hece Matrisi)",
    iliskiliAtlas: "A5 (Damga Atlası)",
    kod: "N_302 / AB_06"
  },
  hattusa: {
    baslik: "Hattuşa & Yazılıkaya (M.Ö. 1650)",
    altBaslik: "Anadolu Mühürleri ve Luvi Hiyeroglif Mimarisi",
    aciklama: "Yazılıkaya anıtlarındaki dizilim, kök-hece mantığının kaya üzerine işlenmiş yaşayan bir veritabanıdır. Hitit ve Luvi hiyeroglifleri, Türkçenin görsel işletim sistemi olan 'Damga' mantığının Anadolu'daki devasa tezahürleridir.",
    iliskiliMatris: "M6 (Dil Aileleri Matrisi) & M7 (Türk Dilleri Matrisi)",
    iliskiliAtlas: "A6 (Yazi Atlası)",
    kod: "N_203 / S_08"
  },
  alacahoyuk: {
    baslik: "Alacahöyük (M.Ö. 2000)",
    altBaslik: "Güneş Kursu ve Tunç Çağı Mühürleri",
    aciklama: "Alacahöyük, Hatti ve Hitit medeniyetlerinin kozmik sembollerinin (Güneş Kursu, geyik ve boğa damgalarının) maden sanatına işlendiği eşsiz bir hafıza merkezidir. YKOS sisteminde bu semboller, Anadolu'nun evrensel frekansları algılama biçimidir.",
    iliskiliMatris: "M8 (Kültür Katmanları Matrisi)",
    iliskiliAtlas: "A8 (Dünya Kültür Atlası)",
    kod: "T_01 / N_205"
  },
  troya: {
    baslik: "Troya (M.Ö. 3000)",
    altBaslik: "Dokuz Katmanlı Kültürel Direniş",
    aciklama: "Troya (Truva), sadece bir savaş alanı değil, Batı Anadolu'nun Asya ve Avrupa arasındaki stratejik düğüm noktasıdır. Üst üste binen 9 farklı arkeolojik katman, YKOS'un dikey veri akışı metodolojisinin canlı bir kanıtıdır.",
    iliskiliMatris: "M9 (Coğrafya Matrisi)",
    iliskiliAtlas: "A4 (Anadolu Atlası) & A8 (Dünya Kültür Atlası)",
    kod: "T_09 / Z_33"
  },
  efes: {
    baslik: "Efes (M.Ö. 600)",
    altBaslik: "Klasik Çağ ve Felsefi Kodlar",
    aciklama: "Kadim Artemis kültürünün ve İyonya düşüncesinin kalbi olan Efes, antik çağın bilgi entegrasyon merkezlerinden biridir. Kök-hece sisteminin kavramsal felsefeye dönüştüğü ve anıtsal mimaride vücut bulduğu dönemleri temsil eder.",
    iliskiliMatris: "M10 (Bilgi Entegrasyon Matrisi)",
    iliskiliAtlas: "A8 (Dünya Kültür Atlası)",
    kod: "E_06 / K_11"
  }
};

const styles = {
  container: { padding: "20px", color: "#f1f5f9", background: "#0f172a", borderRadius: "10px", marginTop: "20px" },
  title: { color: "#f59e0b", borderBottom: "2px solid #334155", paddingBottom: "10px" },
  layout: { display: "flex", gap: "20px", marginTop: "20px" },
  sidebar: { width: "30%", display: "flex", flexDirection: "column", gap: "10px" },
  button: { color: "#fff", border: "none", padding: "12px", borderRadius: "6px", cursor: "pointer", textAlign: "left", fontWeight: "bold" },
  detailCard: { width: "70%", padding: "20px", background: "#1e293b", borderRadius: "8px", border: "1px solid #334155" },
  detailTitle: { color: "#f59e0b", margin: "0 0 5px 0" },
  detailSubtitle: { color: "#38bdf8", margin: "0 0 15px 0", fontStyle: "italic" },
  desc: { lineHeight: "1.6", color: "#cbd5e1" },
  meta: { marginTop: "20px", borderTop: "1px solid #334155", paddingTop: "15px", fontSize: "14px", display: "flex", flexDirection: "column", gap: "8px" },
  code: { color: "#f59e0b", fontFamily: "monospace", fontWeight: "bold" }
};

export default function KadimMerkezler() {
  const [secilenMerkez, setSecilenMerkez] = useState("gobeklitepe");
  const aktifData = kadimMerkezlerData[secilenMerkez];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>YKOS 1000 — 5. Katman: Anadolu'nun Kadim Merkezleri</h2>
      
      <div style={styles.layout}>
        <div style={styles.sidebar}>
          {Object.keys(kadimMerkezlerData).map((key) => (
            <button
              key={key}
              onClick={() => setSecilenMerkez(key)}
              style={{
                ...styles.button,
                backgroundColor: secilenMerkez === key ? "#d97706" : "#1e293b"
              }}
            >
              {kadimMerkezlerData[key].baslik.split(" (")[0]}
            </button>
          ))}
        </div>

        <div style={styles.detailCard}>
          <h3 style={styles.detailTitle}>{aktifData.baslik}</h3>
          <h4 style={styles.detailSubtitle}>{aktifData.altBaslik}</h4>
          <p style={styles.desc}>{aktifData.aciklama}</p>
          
          <div style={styles.meta}>
            <div><strong>Sistem Kodu:</strong> <span style={styles.code}>{aktifData.kod}</span></div>
            <div><strong>İlişkili Matris:</strong> {aktifData.iliskiliMatris}</div>
            <div><strong>İlişkili Atlas:</strong> {aktifData.iliskiliAtlas}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
