import React from 'react';

export default function DijitalArsiv() {
  return (
    <div className="bg-[#0d0d0d] p-10 rounded-xl border border-gray-800 shadow-lg max-w-4xl mx-auto my-6">
      
      {/* Üst Başlık Alanı */}
      <header className="mb-8 border-b border-gray-800 pb-6">
        <h1 className="text-3xl font-extrabold text-amber-500 mb-2 uppercase tracking-wide">
          Dijital Arşiv
        </h1>
        <p className="text-slate-400 text-sm tracking-wider">
          912 Dijital Kayıt — Görsel, Metin, Harita
        </p>
      </header>

      {/* İçerik Alanı */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-slate-200 mb-4">
          Arşiv Kategorileri
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Görsel Arşiv", desc: "Petroglif fotoğrafları, damga çizimleri ve yapı görselleri." },
            { title: "Metin Arşivi", desc: "Epigrafik çözümlemeler, yapı raporları ve literatür taramaları." },
            { title: "Harita Arşivi", desc: "Coğrafi yayılım şemaları ve bölgesel fonetik haritalar." }
          ].map((item, index) => (
            <div 
              key={index} 
              className="p-5 rounded-lg bg-[#141414] border border-gray-900 hover:border-amber-500/30 transition-all duration-200"
            >
              <h3 className="text-lg font-medium text-amber-500 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* İstatistik Alanı */}
      <footer className="mt-8 pt-4 border-t border-gray-900 flex justify-between items-center text-xs text-slate-500">
        <span>YKOS Veri Depolama Altyapısı</span>
        <span className="text-amber-500/70 font-mono">Aktif Kayıt: 912</span>
      </footer>

    </div>
  );
}