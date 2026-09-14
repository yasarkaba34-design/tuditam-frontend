import React, { useState, useEffect } from 'react';

export default function CanliVeriHavuzu({ onVeriSec }) {
  const [sekme, setSekme] = useState("bekleyen"); // "tumu", "bekleyen", "onayli"
  const [liste, setListe] = useState([]);

  useEffect(() => {
    // Bekleyen konuk gönderilerini ve onaylıları yükle
    const beklemede = JSON.parse(localStorage.getItem("ykos_konuk_havuzu") || "[]");
    const onayli = JSON.parse(localStorage.getItem("ykos_canli_havuz") || "[]");

    if (sekme === "bekleyen") {
      setListe(beklemede);
    } else if (sekme === "onayli") {
      setListe(onayli);
    } else {
      setListe([...beklemede, ...onayli]);
    }
  }, [sekme]);

  const kayitSil = (baslik) => {
    const yeniBekleme = JSON.parse(localStorage.getItem("ykos_konuk_havuzu") || "[]").filter(i => i.baslik !== baslik);
    const yeniOnayli = JSON.parse(localStorage.getItem("ykos_canli_havuz") || "[]").filter(i => i.baslik !== baslik);
    localStorage.setItem("ykos_konuk_havuzu", JSON.stringify(yeniBekleme));
    localStorage.setItem("ykos_canli_havuz", JSON.stringify(yeniOnayli));
    setListe(prev => prev.filter(i => i.baslik !== baslik));
  };

  return (
    <div style={havuzStyle.container}>
      <div style={havuzStyle.head}>
        <span style={havuzStyle.title}>📍 Canlı Veri Havuzu & Onay Merkezi</span>
        <div style={havuzStyle.tabs}>
          <button style={sekme === "tumu" ? havuzStyle.tabActive : havuzStyle.tab} onClick={() => setSekme("tumu")}>Tümü</button>
          <button style={sekme === "bekleyen" ? havuzStyle.tabActive : havuzStyle.tab} onClick={() => setSekme("bekleyen")}>Bekleyen</button>
          <button style={sekme === "onayli" ? havuzStyle.tabActive : havuzStyle.tab} onClick={() => setSekme("onayli")}>Onaylı</button>
        </div>
      </div>

      {liste.length === 0 ? (
        <div style={havuzStyle.empty}>Bu kategoride kayıt bulunmuyor.</div>
      ) : (
        liste.map((item, idx) => (
          <div key={idx} style={havuzStyle.card}>
            <div style={havuzStyle.cardTop}>
              <strong style={{ color: '#fff', fontSize: '13px' }}>📜 {item.baslik}</strong>
              <span style={{ color: item.durum === 'onaylandi' ? '#00ff66' : '#ffd700', fontSize: '11px', fontWeight: 'bold' }}>
                ● {item.durum === 'onaylandi' ? 'ONAYLI' : 'ONAY BEKLİYOR'}
              </span>
            </div>
            <div style={{ fontSize: '11px', color: '#a0a0a0', margin: '4px 0' }}>
              📍 {item.ilceKoyMevki || 'Konum belirtilmedi'} | 👤 {item.yazar || 'Konuk Katkısı'}
            </div>
            <div style={havuzStyle.btnRow}>
              <button style={havuzStyle.btnIncele} onClick={() => onVeriSec(item)}>🖊️ İncele / Düzenle</button>
              <button style={havuzStyle.btnSil} onClick={() => kayitSil(item.baslik)}>🗑️ Sil</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

const havuzStyle = {
  container: { background: '#050608', border: '1px solid #26262a', borderRadius: '10px', padding: '16px', color: '#fff' },
  head: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', borderBottom: '1px solid #26262a', paddingBottom: '10px' },
  title: { fontSize: '12px', fontWeight: 'bold', color: '#ffd700' },
  tabs: { display: 'flex', gap: '6px' },
  tab: { background: '#0b0c10', border: '1px solid #2a2a2a', color: '#a0a0a0', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', cursor: 'pointer' },
  tabActive: { background: '#ffd700', border: '1px solid #ffd700', color: '#000', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer' },
  empty: { textAlign: 'center', padding: '20px', color: '#666', fontSize: '12px' },
  card: { background: '#0b0c10', border: '1px solid #26262a', padding: '12px', borderRadius: '6px', marginBottom: '10px' },
  cardTop: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  btnRow: { display: 'flex', gap: '8px', marginTop: '8px' },
  btnIncele: { flex: 1, padding: '6px', background: 'transparent', border: '1px solid #ffd700', color: '#ffd700', borderRadius: '4px', fontSize: '11px', cursor: 'pointer', fontWeight: 'bold' },
  btnSil: { padding: '6px 12px', background: 'transparent', border: '1px solid #ff4444', color: '#ff4444', borderRadius: '4px', fontSize: '11px', cursor: 'pointer' }
};