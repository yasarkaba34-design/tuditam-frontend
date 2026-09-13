import React, { useState } from 'react';
import { db } from '../data/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { uploadImageToImgBB } from '../api/imageService';

const AcikVeriPortali = () => {
  const initialFormState = {
    title: "", category: "Damga", country: "Türkiye", city: "",
    districtOrVillage: "", archaeologicalSite: "", coordinates: "", 
    periodStart: "", periodEnd: "",
    referenceSource: "", photographer: "", copyright: "",
    ykosCode: "", similarRecords: "", summary: "", imagePreview: null,
    contributor: "", email: ""
  };

  const [formData, setFormData] = useState(initialFormState);
  const [yukleniyor, setYukleniyor] = useState(false);
  const [resimYukleniyor, setResimYukleniyor] = useState(false);

  const categories = ["Damga", "Petroglif", "Yazıt", "Tamga", "Kurgan", "Saha Gözlemi", "Diğer"];
  const copyrights = [
    "Lütfen telif durumunu seçiniz", 
    "Açık Kaynak (İzinli)", 
    "Telif Hakkı Saklı", 
    "Araştırmacı İzni Gerekli", 
    "Bilinmiyor"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setResimYukleniyor(true);
    try {
      const url = await uploadImageToImgBB(file);
      if (url) {
        setFormData(prev => ({ ...prev, imagePreview: url }));
        alert("Görsel başarıyla yüklendi!");
      } else {
        alert("Görsel yüklenirken bir hata oluştu.");
      }
    } catch (error) {
      console.error("Görsel yükleme hatası:", error);
      alert("Görsel yüklenemedi.");
    } finally {
      setResimYukleniyor(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.copyright === "Lütfen telif durumunu seçiniz" || !formData.copyright) {
      return alert("⚠️ Lütfen geçerli bir telif ve kullanım izni seçiniz.");
    }

    if (!formData.contributor.trim()) return alert("Lütfen Adınızı ve Soyadınızı giriniz.");
    if (!formData.email.trim() || !formData.email.includes("@")) return alert("Lütfen geçerli e-posta adresi giriniz.");
    if (!formData.title.trim()) return alert("Lütfen bulgu başlığını giriniz.");
    if (!formData.imagePreview) return alert("Lütfen bir görsel yükleyiniz.");

    setYukleniyor(true);

    try {
      await addDoc(collection(db, "ykos_findings"), {
        ...formData,
        status: "draft", // Yönetici onayına düşmesi için
        source: "guest",
        eklenmeTarihi: serverTimestamp()
      });

      alert("🎉 Katkınız başarıyla alındı! Yönetici incelemesinin ardından sistemde yayınlanacaktır. YKOS'a desteğiniz için teşekkür ederiz.");
      
      setFormData(initialFormState);

    } catch (error) {
      console.error("Veri gönderilirken hata oluştu: ", error);
      alert("Bir hata oluştu. Lütfen bağlantınızı kontrol edip tekrar deneyin.");
    } finally {
      setYukleniyor(false);
    }
  };

  const inputStyle = { width: '100%', padding: '10px', backgroundColor: '#222', color: '#fff', border: '1px solid #444', borderRadius: '4px', boxSizing: 'border-box', marginTop: '5px' };
  const sectionTitleStyle = { color: "#b8860b", fontSize: "0.95rem", margin: "20px 0 10px 0", borderBottom: "1px dashed rgba(184,134,11,0.4)", paddingBottom: "5px", textTransform: "uppercase" };

  return (
    <div style={{ backgroundColor: '#111', color: '#fff', minHeight: '100vh', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '750px', margin: '0 auto', backgroundColor: '#1a1a1a', border: '1px solid #FFD700', borderRadius: '8px', padding: '30px' }}>
        
        <h2 style={{ color: '#FFD700', textAlign: 'center', marginBottom: '10px', borderBottom: '1px solid #333', paddingBottom: '15px' }}>
          YKOS AÇIK VERİ KATKI PORTALI
        </h2>
        <p style={{ textAlign: 'center', color: '#ccc', fontSize: '14px', marginBottom: '25px' }}>
          Anadolu ve dünya genelindeki antik tamga, petroglif ve kök-hece bulgularını detaylarıyla ekleyerek YKOS veritabanına katkıda bulunun.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          
          {/* Gönderen Bilgileri */}
          <div style={{ background: "rgba(0,255,127,0.05)", padding: "15px", borderRadius: "8px", border: "1px solid rgba(0,255,127,0.2)" }}>
            <div style={{ marginBottom: "10px" }}>
              <label style={{ fontSize: "0.85rem", color: "#00ff7f", fontWeight: "bold" }}>Adınız Soyadınız / Kurum (Zorunlu)</label>
              <input type="text" name="contributor" value={formData.contributor} onChange={handleChange} placeholder="Adınız Soyadınız..." style={inputStyle} required />
            </div>
            <div>
              <label style={{ fontSize: "0.85rem", color: "#00ff7f", fontWeight: "bold" }}>E-posta Adresiniz (Zorunlu - Gizli Tutulur)</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="ornek@email.com" style={inputStyle} required />
            </div>
          </div>

          {/* 1. Temel Bilgiler */}
          <h3 style={sectionTitleStyle}>1. Temel Bilgiler ve Kronoloji</h3>
          <div>
            <label style={{ display: 'block', color: '#FFD700', fontSize: '14px' }}>Bulgu Başlığı (Zorunlu)</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} required placeholder="Örn: Antalya Karain Mağarası İşaretleri" style={inputStyle} />
          </div>

          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <label style={{ display: 'block', color: '#FFD700', fontSize: '14px' }}>Kategori</label>
              <select name="category" value={formData.category} onChange={handleChange} style={inputStyle}>
                {categories.map((c, i) => <option key={i} value={c}>{c}</option>)}
              </select>
            </div>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <label style={{ display: 'block', color: '#FFD700', fontSize: '14px' }}>Başlangıç Tarihi / Dönemi</label>
              <input type="text" name="periodStart" value={formData.periodStart} onChange={handleChange} placeholder="Örn: MÖ 12.000 veya Paleolitik" style={inputStyle} />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', color: '#FFD700', fontSize: '14px' }}>Bitiş Tarihi / Dönemi (Opsiyonel)</label>
            <input type="text" name="periodEnd" value={formData.periodEnd} onChange={handleChange} placeholder="Örn: MÖ 10.000 (Tek dönemsel ise boş bırakın)" style={inputStyle} />
          </div>

          {/* 2. Coğrafi Konum */}
          <h3 style={sectionTitleStyle}>2. Coğrafi Konum (Atlas İçin)</h3>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <label style={{ display: 'block', color: '#FFD700', fontSize: '14px' }}>Ülke</label>
              <input type="text" name="country" value={formData.country} onChange={handleChange} style={inputStyle} />
            </div>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <label style={{ display: 'block', color: '#FFD700', fontSize: '14px' }}>İl / Bölge</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Örn: Antalya" style={inputStyle} />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <label style={{ display: 'block', color: '#FFD700', fontSize: '14px' }}>İlçe / Köy / Mevki</label>
              <input type="text" name="districtOrVillage" value={formData.districtOrVillage} onChange={handleChange} placeholder="Örn: Yağcılar Köyü" style={inputStyle} />
            </div>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <label style={{ display: 'block', color: '#FFD700', fontSize: '14px' }}>Arkeolojik Alan / Buluntu Yeri</label>
              <input type="text" name="archaeologicalSite" value={formData.archaeologicalSite} onChange={handleChange} placeholder="Örn: Karain Mağarası B Mağarası" style={inputStyle} />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', color: '#FFD700', fontSize: '14px' }}>Koordinatlar (Enlem, Boylam)</label>
            <input type="text" name="coordinates" value={formData.coordinates} onChange={handleChange} placeholder="Örn: 37.2232, 38.9225" style={inputStyle} />
          </div>

          {/* 3. Kaynak ve YKOS */}
          <h3 style={sectionTitleStyle}>3. Kaynak ve YKOS Metodolojisi</h3>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <label style={{ display: 'block', color: '#FFD700', fontSize: '14px' }}>Kaynak / Yayın Linki</label>
              <input type="text" name="referenceSource" value={formData.referenceSource} onChange={handleChange} placeholder="Makale URL veya Kitap Adı" style={inputStyle} />
            </div>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <label style={{ display: 'block', color: '#FFD700', fontSize: '14px' }}>Fotoğrafçı / Araştırmacı</label>
              <input type="text" name="photographer" value={formData.photographer} onChange={handleChange} placeholder="Görsel kime ait?" style={inputStyle} />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <label style={{ display: 'block', color: '#FFD700', fontSize: '14px' }}>YKOS Kök-Hece / Damga Kodu</label>
              <input type="text" name="ykosCode" value={formData.ykosCode} onChange={handleChange} placeholder="Örn: YKOS-DMG-01" style={inputStyle} />
            </div>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <label style={{ display: 'block', color: '#FFD700', fontSize: '14px' }}>Telif ve Kullanım İzni (Zorunlu)</label>
              <select name="copyright" value={formData.copyright} onChange={handleChange} style={inputStyle}>
                {copyrights.map((c, i) => <option key={i} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          {/* 4. Görsel ve Açıklama */}
          <h3 style={sectionTitleStyle}>4. Görsel, Açıklama ve Bağlantılar</h3>
          <div>
            <label style={{ display: 'block', color: '#FFD700', marginBottom: '5px', fontSize: '14px' }}>Bulgu Görseli (Zorunlu)</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} style={{ width: '100%', padding: '8px', backgroundColor: '#222', color: '#fff', border: '1px solid #444', borderRadius: '4px', boxSizing: 'border-box' }} />
            {resimYukleniyor && <p style={{ color: '#00ff7f', fontSize: '12px', marginTop: '5px' }}>Görsel buluta yükleniyor, lütfen bekleyin...</p>}
            
            {formData.imagePreview && (
              <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={formData.imagePreview} alt="Önizleme" style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #FFD700' }} />
                <span style={{ color: '#00ff7f', fontSize: '12px' }}>Görsel başarıyla eklendi!</span>
              </div>
            )}
          </div>

          <div>
            <label style={{ display: 'block', color: '#FFD700', fontSize: '14px' }}>Detaylı İnceleme ve Açıklama</label>
            <textarea name="summary" value={formData.summary} onChange={handleChange} rows="4" placeholder="Bulgunun özellikleri ve analizi..." style={{ ...inputStyle, resize: 'vertical' }}></textarea>
          </div>

          <div>
            <label style={{ display: 'block', color: '#FFD700', fontSize: '14px' }}>Benzer YKOS Kaydı / Bağlantısı (İsteğe bağlı)</label>
            <input type="text" name="similarRecords" value={formData.similarRecords} onChange={handleChange} placeholder="Örn: YKOS-DMG-12" style={inputStyle} />
          </div>

          <button 
            type="submit" 
            disabled={yukleniyor || resimYukleniyor}
            style={{ 
              marginTop: '15px', 
              padding: '14px', 
              backgroundColor: (yukleniyor || resimYukleniyor) ? '#666' : '#FFD700', 
              color: '#000', 
              border: 'none', 
              borderRadius: '6px', 
              fontWeight: 'bold', 
              cursor: (yukleniyor || resimYukleniyor) ? 'wait' : 'pointer',
              fontSize: '16px'
            }}
          >
            {yukleniyor ? 'SİSTEME GÖNDERİLİYOR...' : '🚀 AKADEMİK VERİYİ SİSTEME GÖNDER'}
          </button>

        </form>
      </div>
    </div>
  );
};

export default AcikVeriPortali;
