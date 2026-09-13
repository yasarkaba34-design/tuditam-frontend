import React from 'react';

export default function ArastirmaMerkezi() {
  return (
    <div className="bg-[#0d0d0d] p-10 rounded-xl border border-gray-800 shadow-lg max-w-4xl mx-auto my-6">
      
      {/* Üst Başlık Alanı */}
      <header className="mb-8 border-b border-gray-800 pb-6">
        <h1 className="text-3xl font-extrabold text-amber-500 mb-2 uppercase tracking-wide">
          Araştırma Merkezi
        </h1>
        <p className="text-slate-400 text-sm tracking-wider">
          Disiplinler Arası Analiz ve Veri İşleme
        </p>
      </header>

      {/* İçerik Alanı */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-slate-200 mb-4">
          Son Araştırmalar
        </h2>
        
        <ul className="space-y-3">
          {[
            "Yoros — Dört Kol Damga Analizi",
            "Hattuşa — Koruyucu Figür Tipolojisi",
            "Anadolu Fonetik Süreklilik Haritası"
          ].map((item, index) => (
            <li 
              key={index} 
              className="flex items-center gap-3 p-4 rounded-lg bg-[#141414] border border-gray-900 text-slate-300 hover:border-amber-500/30 transition-all duration-200"
            >
              <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
              <span className="text-base font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Mimari Notu */}
      <footer className="mt-8 pt-4 border-t border-gray-900">
        <span className="text-xs text-slate-500 block">
          Bu araştırma verileri YKOS dijital organizasyon altyapısı tarafından işlenmektedir.
        </span>
      </footer>

    </div>
  );
}
