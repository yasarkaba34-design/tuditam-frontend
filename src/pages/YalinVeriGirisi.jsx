// src/pages/YalinVeriGirisi.jsx
import React, { useState } from "react";

export default function YalinVeriGirisi({ onGoHome }) {
  const [researcherName, setResearcherName] = useState("");
  const [researcherEmail, setResearcherEmail] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Damga & Sembol");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  
  // Manşet ve Çoklu Galeri Görselleri
  const [mainImage, setMainImage] = useState("");
  const [galleryImages, setGalleryImages] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  // Tekil Manşet Görseli
  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setMainImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Çoklu Fotoğraf / Galeri Yükleme
  const handleGalleryImagesChange = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setGalleryImages((prev) => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeGalleryImage = (index) => {
    setGalleryImages(galleryImages.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!researcherName.trim() || !researcherEmail.trim() || !title.trim()) {
      alert("Lütfen İsim-Soyisim, E-Posta ve Başlık alanlarını eksiksiz doldurunuz.");
      return;
    }

    const newRecord = {
      id: "GUEST-" + Date.now(),
      researcher: {
        name: researcherName,
        email: researcherEmail,
      },
      title,
      category,
      location,
      summary: `${researcherName} (${location || "Konum Belirtilmedi"}) tarafından iletilen açık veri bulgusu.`,
      content: description,
      image: mainImage,
      gallery: galleryImages,
      status: "pending", // Yönetici Onayını Bekler
      durum: "beklemede",
      date: new Date().toLocaleDateString("tr-TR")
    };

    try {
      const existing = JSON.parse(localStorage.getItem("ykos_admin_records") || "[]");
      existing.unshift(newRecord);
      localStorage.setItem("ykos_admin_records", JSON.stringify(existing));
      
      setIsSuccess(true);
      setTitle("");
      setLocation("");
      setDescription("");
      setMainImage("");
      setGalleryImages([]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ maxWidth: "780px", margin: "0 auto", padding: "20px", background: "#060913", border: "1.5px solid #ffd700", borderRadius: "10px", color: "#fff" }}>
      
      <div style={{ textAlign: "center", borderBottom: "1px solid rgba(255,215,0,0.3)", paddingBottom: "12px", marginBottom: "16px" }}>
        <h2 style={{ color: "#ffd700", margin: "0 0 4px 0", fontSize: "1.3rem", letterSpacing: "1px" }}>
          🌐 AÇIK VERİ & KONUK BULGU GİRİŞİ
        </h2>
        <p style={{ color: "#94a3b8", fontSize: "0.8rem", margin: 0 }}>
          Gönderilen bulgular TÜDİTAM Bilim Kurulu onayından sonra canlı arşive aktarılacaktır.
        </p>
      </div>

      {isSuccess && (
        <div style={{ background: "rgba(34, 197, 94, 0.15)", border: "1px solid #22c55e", color: "#22c55e", padding: "12px", borderRadius: "6px", marginBottom: "14px", fontSize: "0.85rem", textAlign: "center" }}>
          ✓ Bulgularınız ve fotoğraflarınız başarıyla yüklendi! Yönetici onay havuzuna iletildi.
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        
        {/* ARAŞTIRMACI BİLGİLERİ */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", background: "rgba(255, 215, 0, 0.03)", padding: "12px", borderRadius: "8px", border: "1px dashed rgba(255, 215, 0, 0.3)" }}>
          <div>
            <label style={{ display: "block", fontSize: "0.75rem", color: "#ffd700", fontWeight: "bold", marginBottom: "4px" }}>👤 İSİM SOYİSİM *</label>
            <input type="text" required placeholder="Örn: Yaşar Kaba" value={researcherName} onChange={(e) => setResearcherName(e.target.value)} style={{ width: "100%", padding: "8px", background: "#0c101d", border: "1px solid #334155", borderRadius: "5px", color: "#fff", fontSize: "0.85rem", boxSizing: "border-box" }} />
          </div>
          <div>
            <label style={{ display: "block", fontSize: "0.75rem", color: "#ffd700", fontWeight: "bold", marginBottom: "4px" }}>✉️ E-POSTA *</label>
            <input type="email" required placeholder="ornek@eposta.com" value={researcherEmail} onChange={(e) => setResearcherEmail(e.target.value)} style={{ width: "100%", padding: "8px", background: "#0c101d", border: "1px solid #334155", borderRadius: "5px", color: "#fff", fontSize: "0.85rem", boxSizing: "border-box" }} />
          </div>
        </div>

        {/* BAŞLIK & KATEGORİ */}
        <div>
          <label style={{ display: "block", fontSize: "0.75rem", color: "#e2e8f0", fontWeight: "bold", marginBottom: "4px" }}>📌 BULGU BAŞLIĞI *</label>
          <input type="text" required placeholder="Örn: Göbeklitepe T-Sütunu Çizgi Analizi" value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: "100%", padding: "8px", background: "#0c101d", border: "1px solid #334155", borderRadius: "5px", color: "#fff", fontSize: "0.85rem", boxSizing: "border-box" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          <div>
            <label style={{ display: "block", fontSize: "0.75rem", color: "#e2e8f0", fontWeight: "bold", marginBottom: "4px" }}>🏷️ KATEGORİ</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ width: "100%", padding: "8px", background: "#0c101d", border: "1px solid #334155", borderRadius: "5px", color: "#fff", fontSize: "0.85rem", boxSizing: "border-box" }}>
              <option value="Damga & Sembol">Damga & Sembol</option>
              <option value="Kaya Resmi & Petroglif">Kaya Resmi & Petroglif</option>
              <option value="Epigrafik Yazıt">Epigrafik Yazıt</option>
              <option value="Kök Hece & Dilbilim">Kök Hece & Dilbilim</option>
              <option value="Arkeolojik Rapor">Arkeolojik Rapor</option>
            </select>
          </div>
          <div>
            <label style={{ display: "block", fontSize: "0.75rem", color: "#e2e8f0", fontWeight: "bold", marginBottom: "4px" }}>📍 BULGU BÖLGESİ</label>
            <input type="text" placeholder="Örn: Şanlıurfa / Göbeklitepe" value={location} onChange={(e) => setLocation(e.target.value)} style={{ width: "100%", padding: "8px", background: "#0c101d", border: "1px solid #334155", borderRadius: "5px", color: "#fff", fontSize: "0.85rem", boxSizing: "border-box" }} />
          </div>
        </div>

        <div>
          <label style={{ display: "block", fontSize: "0.75rem", color: "#e2e8f0", fontWeight: "bold", marginBottom: "4px" }}>📝 BULGU AÇIKLAMASI & OKUMA ANALİZİ</label>
          <textarea rows="4" placeholder="Bulgunun detayları, morfolojik yapısı ve kaynaklar..." value={description} onChange={(e) => setDescription(e.target.value)} style={{ width: "100%", padding: "8px", background: "#0c101d", border: "1px solid #334155", borderRadius: "5px", color: "#fff", fontSize: "0.85rem", boxSizing: "border-box", resize: "vertical" }} />
        </div>

        {/* FOTOĞRAF YÜKLEME ALANI */}
        <div style={{ background: "rgba(255,255,255,0.02)", padding: "12px", borderRadius: "8px", border: "1px solid #334155" }}>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", fontSize: "0.75rem", color: "#ffd700", fontWeight: "bold", marginBottom: "4px" }}>📸 MANŞET KAPAK GÖRSELİ</label>
            <input type="file" accept="image/*" onChange={handleMainImageChange} style={{ fontSize: "0.75rem", color: "#94a3b8" }} />
            {mainImage && <img src={mainImage} alt="Manşet" style={{ height: "60px", marginTop: "6px", borderRadius: "4px", border: "1px solid #ffd700" }} />}
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.75rem", color: "#38bdf8", fontWeight: "bold", marginBottom: "4px" }}>🖼️ ÇOKLU DETAY FOTOĞRAFLARI (GALERİ)</label>
            <input type="file" accept="image/*" multiple onChange={handleGalleryImagesChange} style={{ fontSize: "0.75rem", color: "#94a3b8" }} />
            
            {galleryImages.length > 0 && (
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "8px" }}>
                {galleryImages.map((img, i) => (
                  <div key={i} style={{ position: "relative" }}>
                    <img src={img} alt={`Galeri ${i}`} style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "4px", border: "1px solid #38bdf8" }} />
                    <button type="button" onClick={() => removeGalleryImage(i)} style={{ position: "absolute", top: "-5px", right: "-5px", background: "#ef4444", color: "#fff", border: "none", borderRadius: "50%", width: "18px", height: "18px", fontSize: "10px", cursor: "pointer" }}>✕</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <button type="submit" style={{ background: "linear-gradient(135deg, #ffd700, #b8860b)", color: "#000", border: "none", padding: "12px", borderRadius: "6px", fontWeight: "900", fontSize: "0.95rem", cursor: "pointer", marginTop: "4px" }}>
          BULGUYU TÜDİTAM KURUL ONAYINA GÖNDER
        </button>
      </form>
    </div>
  );
}
