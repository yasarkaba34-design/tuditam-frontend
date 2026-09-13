import React, { useState, useEffect } from 'react';

export default function YoneticiIcerikGirisi({ secilenVeri, onKayitTamamlandi }) {
  // 5 Temel İçerik / Kategori Türü
  const icerikTurleri = [
    "Araştırma yazısı",
    "Makale",
    "Arkeolojik bulgu",
    "Kök-hece incelemesi",
    "Damga/sembol araştırması"
  ];

  const [formData, setFormData] = useState({
    icerikTuru: "Araştırma yazısı",
    baslik: "",
    ulke: "Türkiye",
    ilceKoyMevki: "",
    arkeolojikAlan: "",
    koordinatlar: "",
    kaynakLink: "",
    fotografci: "",
    ykosKokHeceKodu: "",
    telifIzni: "Açık Kaynak (Serbest)",
    kapakGorseli: null,
    galeriGorselleri: [],
    videoUrl: "", // 🎥 Yeni: Video Bağlantı Alanı
    kisaOzet: "",
    kapsamliAnaliz: "",
    durum: "onaylandi", // Yönetici doğrudan girerse onaylı
    yazar: "Yaşar Kaba (Admin)"
  });

  // Havuzdan "İncele/Düzenle" dendiğinde formu doldur
  useEffect(() => {
    if (secilenVeri) {
      setFormData(prev => ({
        ...prev,
        ...secilenVeri,
        videoUrl: secilenVeri.videoUrl || "",
        durum: "onaylandi"
      }));
    }
  }, [secilenVeri]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGorselYukle = (e, tip) => {
    const files = e.target.files;
    if (tip === "kapak" && files[0]) {
      setFormData(prev => ({ ...prev, kapakGorseli: URL.createObjectURL(files[0]) }));
    } else if (tip === "galeri") {
      const gorselDizisi = Array.from(files).map(f => URL.createObjectURL(f));
      setFormData(prev => ({ ...prev, galeriGorselleri: [...prev.galeriGorselleri, ...gorselDizisi] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.baslik.trim()) {
      alert("Lütfen içerik başlığını giriniz!");
      return;
    }

    // Yerel veya sunucu havuzuna kaydet
    const mevcutVeriler = JSON.parse(localStorage.getItem("ykos_canli_havuz") || "[]");
    const guncelListe = [formData, ...mevcutVeriler.filter(item => item.baslik !== formData.baslik)];
    localStorage.setItem("ykos_canli_havuz", JSON.stringify(guncelListe));

    // Konuk bekleme listesinden düşür
    const beklemeHavuzu = JSON.parse(localStorage.getItem("ykos_konuk_havuzu") || "[]");
    const yeniBekleme = beklemeHavuzu.filter(item => item.baslik !== formData.baslik);
    localStorage.setItem("ykos_konuk_havuzu", JSON.stringify(yeniBekleme));

    alert("✓ Veri ve video başarıyla akademik veritabanına ve canlı akışa aktarıldı!");
    if (onKayitTamamlandi) onKayitTamamlandi();
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle.container}>
      
      {/* 1. İÇERİK TÜRÜ / KATEGORİ SEÇİMİ */}
      <div style={formStyle.section}>
        <label style={formStyle.label}>İÇERİK TÜRÜ & KATEGORİ</label>
        <select 
          name="icerikTuru" 
          value={formData.icerikTuru} 
          onChange={handleChange} 
          style={formStyle.select}
        >
          {icerikTurleri.map((tur, i) => (
            <option key={i} value={tur}>{tur}</option>
          ))}
        </select>
      </div>

      {/* 2. BAŞLIK */}
      <div style={formStyle.section}>
        <label style={formStyle.label}>BAŞLIK</label>
        <input 
          type="text" 
          name="baslik" 
          placeholder="İçerik, bulgu veya makale başlığı..." 
          value={formData.baslik} 
          onChange={handleChange} 
          style={formStyle.input} 
        />
      </div>

      {/* 3. COĞRAFİ KONUM VE ARKEOLOJİK ALAN */}
      <div style={formStyle.grid2}>
        <div>
          <label style={formStyle.label}>İlçe / Köy / Mevki</label>
          <input 
            type="text" 
            name="ilceKoyMevki" 
            placeholder="Örn: Beykoz / Anadolukavağı" 
            value={formData.ilceKoyMevki} 
            onChange={handleChange} 
            style={formStyle.input} 
          />
        </div>
        <div>
          <label style={formStyle.label}>Arkeolojik Alan</label>
          <input 
            type="text" 
            name="arkeolojikAlan" 
            placeholder="Örn: Yoros Kalesi" 
            value={formData.arkeolojikAlan} 
            onChange={handleChange} 
            style={formStyle.input} 
          />
        </div>
      </div>

      <div style={formStyle.section}>
        <label style={formStyle.label}>Koordinatlar (Enlem, Boylam)</label>
        <input 
          type="text" 
          name="koordinatlar" 
          placeholder="Örn: 41.1961, 29.0883" 
          value={formData.koordinatlar} 
          onChange={handleChange} 
          style={formStyle.input} 
        />
      </div>

      {/* 🎥 4. VİDEO BAĞLANTISI (YENİ) */}
      <div style={formStyle.section}>
        <label style={{ ...formStyle.label, color: '#38bdf8' }}>🎥 VİDEO BAĞLANTISI (YouTube / Video URL)</label>
        <input 
          type="text" 
          name="videoUrl" 
          placeholder="https://www.youtube.com/watch?v=..." 
          value={formData.videoUrl} 
          onChange={handleChange} 
          style={{ ...formStyle.input, borderColor: '#38bdf8' }} 
        />
      </div>

      {/* 5. GÖRSEL VE ÇOKLU FOTOĞRAF ARŞİVİ */}
      <div style={formStyle.section}>
        <label style={formStyle.label}>Ana Kapak Görseli</label>
        <input type="file" accept="image/*" onChange={(e) => handleGorselYukle(e, 'kapak')} style={formStyle.fileInput} />
        {formData.kapakGorseli && (
          <img src={formData.kapakGorseli} alt="Kapak" style={formStyle.previewImg} />
        )}
      </div>

      <div style={formStyle.section}>
        <label style={formStyle.label}>Çoklu Fotoğraflar (Galeriye Ekle)</label>
        <input type="file" multiple accept="image/*" onChange={(e) => handleGorselYukle(e, 'galeri')} style={formStyle.fileInput} />
      </div>

      {/* 6. METİN VE ANALİZ ALANLARI */}
      <div style={formStyle.section}>
        <label style={formStyle.label}>Kısa Özet</label>
        <textarea 
          name="kisaOzet" 
          rows="3" 
          placeholder="Bulgunun veya araştırmanın kısa özeti..." 
          value={formData.kisaOzet} 
          onChange={handleChange} 
          style={formStyle.textarea} 
        />
      </div>

      <div style={formStyle.section}>
        <label style={formStyle.label}>Kapsamlı Analiz / Makale İçeriği</label>
        <textarea 
          name="kapsamliAnaliz" 
          rows="8" 
          placeholder="Bulgunun arkeolojik, etimolojik ve kök-hece çözümleme metni..." 
          value={formData.kapsamliAnaliz} 
          onChange={handleChange} 
          style={formStyle.textarea} 
        />
      </div>

      {/* GÖNDER BUTONU */}
      <button type="submit" style={formStyle.submitBtn}>
        🚀 AKADEMİK VERİYİ VE VİDEOYU VERİTABANINA GÖNDER
      </button>

    </form>
  );
}

const formStyle = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    background: '#050608',
    padding: '24px',
    borderRadius: '10px',
    border: '1px solid #26262a',
    color: '#fff'
  },
  section: { display: 'flex', flexDirection: 'column', gap: '6px' },
  grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' },
  label: { fontSize: '11px', color: '#a0a0a0', fontWeight: 'bold', letterSpacing: '0.05em', textTransform: 'uppercase' },
  input: { padding: '12px', background: '#0b0c10', border: '1px solid #2a2a2a', color: '#fff', borderRadius: '6px', fontSize: '13px', outline: 'none' },
  select: { padding: '12px', background: '#0b0c10', border: '1px solid #ffd700', color: '#ffd700', borderRadius: '6px', fontSize: '13px', fontWeight: 'bold', outline: 'none' },
  textarea: { padding: '12px', background: '#0b0c10', border: '1px solid #2a2a2a', color: '#fff', borderRadius: '6px', fontSize: '13px', outline: 'none', resize: 'vertical' },
  fileInput: { padding: '8px', background: '#0b0c10', border: '1px dashed #ffd700', borderRadius: '6px', color: '#a0a0a0', fontSize: '12px' },
  previewImg: { width: '120px', height: '80px', objectFit: 'cover', borderRadius: '6px', marginTop: '8px', border: '1px solid #ffd700' },
  submitBtn: { padding: '16px', background: '#ffd700', color: '#000', border: 'none', borderRadius: '6px', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', marginTop: '10px' }
};
