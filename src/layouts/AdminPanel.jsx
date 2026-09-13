// src/layouts/AdminPanel.jsx
import React, { useState, useEffect } from "react";

export default function AdminPanel({ onLogout, userRole = "admin" }) {
  const [records, setRecords] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Form Alanları
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Damga & Epigrafi");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [galleryImages, setGalleryImages] = useState([]);
  const [videoUrl, setVideoUrl] = useState(""); // 🎥 Yeni: Video URL alanı

  // Sayfalama
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;

  const categories = [
    "Damga & Epigrafi",
    "Kozmik & Kozmolojik Katman",
    "Dil Katmanı & Evreleri",
    "Kaya Resmi & Petroglif",
    "Arkeolojik Rapor & Bildiri",
    "Külliyat & Makale"
  ];

  const loadRecords = () => {
    try {
      const saved = JSON.parse(localStorage.getItem("ykos_admin_records") || "[]");
      setRecords(saved);
    } catch (e) {
      console.error("Kayıtlar yüklenirken hata oluştu:", e);
      setRecords([]);
    }
  };

  useEffect(() => {
    loadRecords();
  }, []);

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setMainImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleGalleryChange = (e) => {
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
    if (!title || !title.trim()) {
      alert("Lütfen geçerli bir başlık giriniz.");
      return;
    }

    const existing = JSON.parse(localStorage.getItem("ykos_admin_records") || "[]");

    if (editingId) {
      const updated = existing.map((r) =>
        r.id === editingId
          ? {
              ...r,
              title: title.trim(),
              category,
              summary: summary.trim(),
              content: content.trim(),
              image: mainImage || r.image,
              gallery: galleryImages.length > 0 ? galleryImages : (r.gallery || []),
              videoUrl: videoUrl.trim() // Güncelleme
            }
          : r
      );
      localStorage.setItem("ykos_admin_records", JSON.stringify(updated));
      setEditingId(null);
    } else {
      const newRecord = {
        id: "YKOS-" + Date.now(),
        title: title.trim(),
        category,
        summary: summary.trim(),
        content: content.trim(),
        image: mainImage,
        gallery: galleryImages,
        videoUrl: videoUrl.trim(), // Yeni kayıt video URL
        status: "published",
        durum: "onaylandi",
        date: new Date().toLocaleDateString("tr-TR")
      };
      existing.unshift(newRecord);
      localStorage.setItem("ykos_admin_records", JSON.stringify(existing));
    }

    // Formu sıfırla
    setTitle("");
    setSummary("");
    setContent("");
    setMainImage("");
    setGalleryImages([]);
    setVideoUrl("");
    loadRecords();
  };

  const handleApprove = (id) => {
    const updated = records.map((r) => {
      if (r.id === id) {
        return { ...r, status: "published", durum: "onaylandi" };
      }
      return r;
    });
    localStorage.setItem("ykos_admin_records", JSON.stringify(updated));
    setRecords(updated);
  };

  const handleEdit = (record) => {
    setEditingId(record.id);
    setTitle(record.title || record.baslik || "");
    setCategory(record.category || record.kategori || categories[0]);
    setSummary(record.summary || record.ozet || "");
    setContent(record.content || record.icerik || "");
    setMainImage(record.image || record.mansetGorsel || "");
    setGalleryImages(record.gallery || record.galeri || []);
    setVideoUrl(record.videoUrl || record.video || "");
  };

  const handleDelete = (id) => {
    if (window.confirm("Bu kaydı kalıcı olarak silmek istediğinize emin misiniz?")) {
      const updated = records.filter((r) => r.id !== id);
      localStorage.setItem("ykos_admin_records", JSON.stringify(updated));
      loadRecords();
    }
  };

  const pendingRecords = records.filter(
    (r) => r.status === "pending" || r.durum === "beklemede"
  );
  const publishedRecords = records.filter(
    (r) => r.status !== "pending" && r.durum !== "beklemede"
  );

  const totalPages = Math.ceil(publishedRecords.length / itemsPerPage) || 1;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPublishedRecords = publishedRecords.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div style={{ maxWidth: "1350px", margin: "0 auto", padding: "12px", color: "#fff" }}>
      
      {/* ÜST BAŞLIK BARI */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1.5px solid #ffd700", paddingBottom: "8px", marginBottom: "12px" }}>
        <div>
          <h1 style={{ color: "#ffd700", margin: "0 0 2px 0", fontSize: "1.25rem", letterSpacing: "1px", fontWeight: "900" }}>
            ⚙️ YKOS İÇERİK & YÖNETİM MERKEZİ
          </h1>
          <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>
            Yetki: <b style={{ color: "#00ff7f" }}>{userRole.toUpperCase()}</b> | Toplam Arşiv: <b>{records.length}</b> | Onay Bekleyen: <b style={{ color: "#eab308" }}>{pendingRecords.length}</b>
          </div>
        </div>
        <button
          onClick={onLogout}
          style={{ background: "#dc2626", color: "#fff", border: "none", padding: "6px 16px", borderRadius: "5px", fontWeight: "bold", cursor: "pointer", fontSize: "0.8rem" }}
        >
          Çıkış Yap
        </button>
      </div>

      {/* 2 SÜTUNLU GÖVDE */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: "16px", alignItems: "start" }}>
        
        {/* SOL SÜTUN */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          
          {/* 1. ÜST: ONAY BEKLEYENLER */}
          <div style={{ background: "rgba(234, 179, 8, 0.03)", border: "1.5px solid #eab308", borderRadius: "8px", padding: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(234, 179, 8, 0.3)", paddingBottom: "4px", marginBottom: "8px" }}>
              <h3 style={{ color: "#eab308", margin: 0, fontSize: "0.85rem" }}>
                ⏳ ONAY BEKLEYEN VERİLER ({pendingRecords.length})
              </h3>
              <span style={{ fontSize: "0.68rem", color: "#aaa" }}>İncele & Yayına Al</span>
            </div>

            {pendingRecords.length === 0 ? (
              <div style={{ padding: "12px", textAlign: "center", color: "#64748b", fontSize: "0.75rem" }}>
                Şu anda onay bekleyen yeni kayıt bulunmuyor.
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", maxHeight: "200px", overflowY: "auto", paddingRight: "4px" }}>
                {pendingRecords.map((item) => (
                  <div key={item.id} style={{ background: "#0c101d", border: "1px solid rgba(234, 179, 8, 0.4)", borderRadius: "6px", padding: "8px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "3px" }}>
                      <div style={{ fontWeight: "bold", fontSize: "0.8rem", color: "#ffd700" }}>{item.title || item.baslik}</div>
                      <span style={{ background: "#eab308", color: "#000", fontSize: "0.6rem", padding: "1px 4px", borderRadius: "2px", fontWeight: "900" }}>ONAY BEKLİYOR</span>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px dashed #334155", paddingTop: "5px" }}>
                      <span style={{ fontSize: "0.65rem", color: "#94a3b8" }}>
                        {item.image ? "📸 Manşet Var" : "Görsel Yok"} {item.videoUrl ? "| 🎥 Video Var" : ""}
                      </span>
                      <div style={{ display: "flex", gap: "4px" }}>
                        <button onClick={() => handleApprove(item.id)} style={{ background: "#22c55e", color: "#000", border: "none", padding: "3px 8px", borderRadius: "3px", fontSize: "0.72rem", fontWeight: "900", cursor: "pointer" }}>
                          ✓ ONAYLA
                        </button>
                        <button onClick={() => handleEdit(item)} style={{ background: "#0284c7", color: "#fff", border: "none", padding: "3px 6px", borderRadius: "3px", fontSize: "0.72rem", cursor: "pointer" }}>
                          ✏️ Düzenle
                        </button>
                        <button onClick={() => handleDelete(item.id)} style={{ background: "#ef4444", color: "#fff", border: "none", padding: "3px 6px", borderRadius: "3px", fontSize: "0.72rem", cursor: "pointer" }}>
                          🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 2. ALT: VERİ & HABER GİRİŞ FORMU */}
          <div style={{ background: "rgba(255, 215, 0, 0.02)", border: "1.5px solid rgba(255, 215, 0, 0.35)", borderRadius: "8px", padding: "12px" }}>
            <h3 style={{ color: "#ffd700", marginTop: 0, fontSize: "0.88rem", borderBottom: "1px solid #333", paddingBottom: "4px", marginBottom: "8px" }}>
              {editingId ? "✏️ Kaydı Güncelle" : "➕ Yeni İçerik & Video Girişi"}
            </h3>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.7rem", color: "#ffd700", marginBottom: "2px" }}>Kategori</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ width: "100%", padding: "6px", background: "#060913", border: "1px solid #334155", color: "#fff", borderRadius: "4px", fontSize: "0.78rem" }}>
                  {categories.map((c, i) => (
                    <option key={i} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.7rem", color: "#ffd700", marginBottom: "2px" }}>Başlık *</label>
                <input type="text" required placeholder="İçerik başlığı..." value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: "100%", padding: "6px", background: "#060913", border: "1px solid #334155", color: "#fff", borderRadius: "4px", fontSize: "0.78rem", boxSizing: "border-box" }} />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.7rem", color: "#ffd700", marginBottom: "2px" }}>Özet</label>
                <textarea rows="2" placeholder="Kısa özet..." value={summary} onChange={(e) => setSummary(e.target.value)} style={{ width: "100%", padding: "6px", background: "#060913", border: "1px solid #334155", color: "#fff", borderRadius: "4px", fontSize: "0.78rem", boxSizing: "border-box" }} />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.7rem", color: "#ffd700", marginBottom: "2px" }}>İçerik (Makale Metni)</label>
                <textarea rows="4" placeholder="Detaylı açıklama..." value={content} onChange={(e) => setContent(e.target.value)} style={{ width: "100%", padding: "6px", background: "#060913", border: "1px solid #334155", color: "#fff", borderRadius: "4px", fontSize: "0.78rem", boxSizing: "border-box" }} />
              </div>

              {/* 🎥 VİDEO URL ALANI */}
              <div>
                <label style={{ display: "block", fontSize: "0.7rem", color: "#38bdf8", marginBottom: "2px" }}>🎥 Video Bağlantısı (YouTube / Video URL)</label>
                <input type="text" placeholder="https://www.youtube.com/watch?v=..." value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} style={{ width: "100%", padding: "6px", background: "#060913", border: "1px solid #334155", color: "#fff", borderRadius: "4px", fontSize: "0.78rem", boxSizing: "border-box" }} />
              </div>

              <div style={{ background: "rgba(0,0,0,0.3)", padding: "8px", borderRadius: "5px", border: "1px solid #27272a" }}>
                <div style={{ marginBottom: "6px" }}>
                  <label style={{ display: "block", fontSize: "0.68rem", color: "#ffd700", marginBottom: "2px" }}>📸 Manşet Görsel</label>
                  <input type="file" accept="image/*" onChange={handleMainImageChange} style={{ fontSize: "0.7rem", color: "#94a3b8" }} />
                  {mainImage && <img src={mainImage} alt="Önizleme" style={{ height: "40px", marginTop: "4px", borderRadius: "3px", border: "1px solid #ffd700" }} />}
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.68rem", color: "#38bdf8", marginBottom: "2px" }}>🖼️ Çoklu Fotoğraf / Galeri</label>
                  <input type="file" accept="image/*" multiple onChange={handleGalleryChange} style={{ fontSize: "0.7rem", color: "#94a3b8" }} />
                  {galleryImages.length > 0 && (
                    <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", marginTop: "4px" }}>
                      {galleryImages.map((img, i) => (
                        <div key={i} style={{ position: "relative" }}>
                          <img src={img} alt={`Galeri ${i}`} style={{ width: "36px", height: "36px", objectFit: "cover", borderRadius: "3px", border: "1px solid #38bdf8" }} />
                          <button type="button" onClick={() => removeGalleryImage(i)} style={{ position: "absolute", top: "-3px", right: "-3px", background: "#ef4444", color: "#fff", border: "none", borderRadius: "50%", width: "14px", height: "14px", fontSize: "8px", cursor: "pointer" }}>✕</button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div style={{ display: "flex", gap: "6px", marginTop: "2px" }}>
                <button type="submit" style={{ flex: 1, background: "#ffd700", color: "#000", border: "none", padding: "9px", borderRadius: "5px", fontWeight: "900", cursor: "pointer", fontSize: "0.82rem" }}>
                  {editingId ? "GÜNCELLEMEYİ KAYDET" : "⚡ DİREKT YAYINLA"}
                </button>
                {editingId && (
                  <button type="button" onClick={() => { setEditingId(null); setTitle(""); setSummary(""); setContent(""); setMainImage(""); setGalleryImages([]); setVideoUrl(""); }} style={{ background: "#475569", color: "#fff", border: "none", padding: "9px", borderRadius: "5px", cursor: "pointer" }}>
                    İptal
                  </button>
                )}
              </div>
            </form>
          </div>

        </div>

        {/* SAĞ SÜTUN: YAYINLANAN TÜM İÇERİKLER */}
        <div style={{ background: "rgba(255, 255, 255, 0.01)", border: "1.5px solid rgba(255, 215, 0, 0.25)", borderRadius: "8px", padding: "12px", display: "flex", flexDirection: "column" }}>
          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1.5px solid #ffd700", paddingBottom: "6px", marginBottom: "8px" }}>
            <h3 style={{ color: "#ffd700", margin: 0, fontSize: "0.9rem" }}>
              📑 YAYINLANAN TÜM İÇERİKLER ({publishedRecords.length})
            </h3>
            <span style={{ fontSize: "0.68rem", color: "#94a3b8" }}>
              Sayfa {currentPage} / {totalPages} (Her Sayfada 25 Kayıt)
            </span>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.75rem" }}>
              <thead>
                <tr style={{ borderBottom: "1.5px solid #334155", color: "#ffd700", textAlign: "left" }}>
                  <th style={{ padding: "6px 4px" }}>Durum</th>
                  <th style={{ padding: "6px 4px" }}>Başlık</th>
                  <th style={{ padding: "6px 4px" }}>Kategori</th>
                  <th style={{ padding: "6px 4px" }}>Medya</th>
                  <th style={{ padding: "6px 4px" }}>Tarih</th>
                  <th style={{ padding: "6px 4px", textAlign: "center" }}>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {currentPublishedRecords.map((r) => {
                  const galleryCount = (r.gallery && r.gallery.length) || 0;
                  return (
                    <tr key={r.id} style={{ borderBottom: "1px solid #1e293b" }}>
                      <td style={{ padding: "6px 4px" }}>
                        <span style={{ background: "#22c55e", color: "#000", padding: "1px 5px", borderRadius: "2px", fontSize: "0.62rem", fontWeight: "900" }}>
                          ✓ AKTİF
                        </span>
                      </td>
                      <td style={{ padding: "6px 4px", fontWeight: "bold", maxWidth: "160px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {r.title || r.baslik}
                      </td>
                      <td style={{ padding: "6px 4px", color: "#94a3b8" }}>
                        {r.category || r.kategori || "Damga"}
                      </td>
                      <td style={{ padding: "6px 4px", color: "#38bdf8", fontSize: "0.68rem" }}>
                        {r.image ? "🖼️" : ""} {galleryCount > 0 ? `+${galleryCount}` : ""} {r.videoUrl ? "🎥 Video" : ""}
                      </td>
                      <td style={{ padding: "6px 4px", color: "#64748b", fontSize: "0.68rem" }}>
                        {r.date || r.tarih || "Bugün"}
                      </td>
                      <td style={{ padding: "6px 4px", textAlign: "center" }}>
                        <div style={{ display: "flex", gap: "3px", justifyContent: "center" }}>
                          <button onClick={() => handleEdit(r)} title="Düzenle" style={{ background: "#0284c7", color: "#fff", border: "none", borderRadius: "3px", padding: "3px 6px", cursor: "pointer" }}>
                            ✏️
                          </button>
                          <button onClick={() => handleDelete(r.id)} title="Sil" style={{ background: "#ef4444", color: "#fff", border: "none", borderRadius: "3px", padding: "3px 6px", cursor: "pointer" }}>
                            🗑️
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {totalPages > 1 && (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "4px", marginTop: "12px", borderTop: "1px solid #27272a", paddingTop: "8px" }}>
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                style={{ background: currentPage === 1 ? "#1e293b" : "#0c101d", color: currentPage === 1 ? "#64748b" : "#ffd700", border: "1px solid #334155", padding: "4px 8px", borderRadius: "3px", cursor: currentPage === 1 ? "not-allowed" : "pointer", fontSize: "0.7rem" }}
              >
                ◀ Önceki
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <button
                  key={number}
                  onClick={() => setCurrentPage(number)}
                  style={{
                    background: currentPage === number ? "#ffd700" : "#0c101d",
                    color: currentPage === number ? "#000" : "#fff",
                    border: currentPage === number ? "1px solid #ffd700" : "1px solid #334155",
                    padding: "4px 8px",
                    borderRadius: "3px",
                    cursor: "pointer",
                    fontSize: "0.7rem",
                    fontWeight: "bold"
                  }}
                >
                  {number}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                style={{ background: currentPage === totalPages ? "#1e293b" : "#0c101d", color: currentPage === totalPages ? "#64748b" : "#ffd700", border: "1px solid #334155", padding: "4px 8px", borderRadius: "3px", cursor: currentPage === totalPages ? "not-allowed" : "pointer", fontSize: "0.7rem" }}
              >
                Sonraki ▶
              </button>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}