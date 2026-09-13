import React, { useState } from 'react';
import { Database, Eye, Grid } from 'lucide-react';

export default function YKOSDamgaAtlas() {
  const [selectedCategory, setSelectedCategory] = useState('ANADOLU');

  const damgalar = {
    'ANADOLU': [
      { name: 'Koç Boynuzu Damgası', meaning: 'Bereket, güç ve ata ocağı', region: 'Hitit / Frigya' },
      { name: 'Hayat Ağacı Damgası', meaning: 'Yeraltı, yeryüzü ve gök ekseni', region: 'Hattice / Luvi' },
      { name: 'Çift Başlı Kartal', meaning: 'İlahi yetke ve yönetsel egemenlik', region: 'Anadolu Selçuklu / Arkaik Kök' }
    ],
    'AVRASYA': [
      { name: 'Oğok (Ok ve Yay) Damgası', meaning: 'Egemenlik, askeri güç ve boy birliği', region: 'Göktürk / Altay' },
      { name: 'Tarak Damgası', meaning: 'Soy aidiyeti ve mülkiyet tescili', region: 'Kıpçak / Karadeniz Kuzeyi' },
      { name: 'Tamga (Mühür-İmza)', meaning: 'Evrensel iletişim ve ticaret ağı', region: 'Saymalıtaş Petroglifleri' }
    ]
  };

  return (
    <div className="min-h-[450px] bg-black text-[#D4AF37] p-6 font-mono border border-[#D4AF37]/30 rounded-xl shadow-2xl my-4">
      <div className="flex items-center justify-between border-b border-[#D4AF37]/40 pb-4 mb-6">
        <div className="flex items-center space-x-3">
          <Database className="w-8 h-8 text-[#D4AF37]" />
          <div>
            <h2 className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#B8860B]">
              YKOS DAMGA ATLASI
            </h2>
            <p className="text-xs text-[#D4AF37]/60 tracking-wider">
              EPİGRAFİK ÇİZGİSEL MÜHÜRLER VE BOY TAMGALARI KATALOĞU
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={() => setSelectedCategory('ANADOLU')}
            className={`px-4 py-2 rounded text-xs tracking-wider border transition-all cursor-pointer ${
              selectedCategory === 'ANADOLU' ? 'bg-[#D4AF37] text-black font-bold border-[#FFD700]' : 'bg-black text-[#D4AF37] border-[#D4AF37]/40'
            }`}
          >
            ANADOLU
          </button>
          <button 
            onClick={() => setSelectedCategory('AVRASYA')}
            className={`px-4 py-2 rounded text-xs tracking-wider border transition-all cursor-pointer ${
              selectedCategory === 'AVRASYA' ? 'bg-[#D4AF37] text-black font-bold border-[#FFD700]' : 'bg-black text-[#D4AF37] border-[#D4AF37]/40'
            }`}
          >
            AVRASYA
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {damgalar[selectedCategory].map((item, idx) => (
          <div key={idx} className="bg-[#111111] border border-[#D4AF37]/30 p-5 rounded-lg flex flex-col justify-between hover:border-[#FFD700] transition-all group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#FFD700] px-2 py-0.5 rounded">
                  {item.region}
                </span>
                <Grid className="w-4 h-4 text-[#D4AF37]/40 group-hover:text-[#FFD700] transition-colors" />
              </div>
              <h3 className="text-sm font-bold text-white mb-2">{item.name}</h3>
              <p className="text-xs text-[#D4AF37]/80 leading-relaxed">{item.meaning}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between text-[10px] text-[#D4AF37]/50">
              <span>YKOS-DMG-0{idx + 1}</span>
              <span className="flex items-center space-x-1 text-[#FFD700]">
                <Eye className="w-3 h-3" />
                <span>Kayıtlı</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}