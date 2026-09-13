import React from 'react';

export default function DilModulu() {
  return (
    <div className="bg-[#0d0d0d] p-10 rounded-xl border border-gray-800 shadow-lg max-w-4xl mx-auto my-6">
      
      {/* Üst Başlık Alanı */}
      <header className="mb-8 border-b border-gray-800 pb-6">
        <h1 className="text-3xl font-extrabold text-amber-500 mb-2 uppercase tracking-wide">
          Dil Modülü
        </h1>
        <p className="text-slate-400 text-sm tracking-wider">
          YKOS — Türkçe Yapısal Okuma Sistemi
        </p>
      </header>

      {/* İçerik Alanı */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-slate-200 mb-4">
          Modül İçeriği
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Kök-Hece Analizi", desc: "Türkçenin en eski yapı taşlarına inen matematiksel ve anlamsal kök çözümlemeleri." },
            { title: "Morfolojik Ağ", desc: "Eklerin ve kelime türetme yollarının yapısal matris üzerindeki bağlantı şeması." },
            { title: "Fonetik Süreklilik", desc: "Seslerin tarih boyunca uğradığı değişimleri ve coğrafi alanlardaki izlerini takip eden algoritma." }
          ].map((item, index) => (
            <div 
              key={index} 
              className="p-5 rounded-lg bg-[#141414] border border-gray-900 hover:border-amber-500/30 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-medium text-amber-500 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teori & Altyapı Notu */}
      <footer className="mt-8 pt-4 border-t border-gray-900 text-xs text-slate-500">
        <span>Buzul Çağından Yapay Zekâya uzanan dilsel süreklilik ve kök analiz altyapısı.</span>
      </footer>

    </div>
  );
}