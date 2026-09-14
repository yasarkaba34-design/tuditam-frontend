import React from 'react';

export default function DamgaAtlasi() {
  return (
    <div className="bg-[#0d0d0d] p-10 rounded-xl border border-gray-800 shadow-lg max-w-4xl mx-auto my-6">
      
      {/* Üst Başlık Alanı */}
      <header className="mb-8 border-b border-gray-800 pb-6">
        <h1 className="text-3xl font-extrabold text-amber-500 mb-2 uppercase tracking-wide">
          Damga Atlası
        </h1>
        <p className="text-slate-400 text-sm tracking-wider">
          3401 Damga — Tipoloji, Fonetik, Coğrafi Yayılım
        </p>
      </header>

      {/* İçerik Alanı */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-slate-200 mb-2">
          Atlas İçeriği
        </h2>
        <p className="text-slate-300 leading-relaxed text-base">
          Damga tipolojisi, fonetik karşılıklar, kültürel süreklilik ve coğrafi dağılım analizleri.
        </p>

        {/* Gösterge Paneli / İstatistik Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 rounded-lg bg-[#141414] border border-gray-900">
            <span className="text-xs text-slate-500 block uppercase tracking-wider mb-1">Toplam Damga</span>
            <span className="text-2xl font-bold text-amber-500">3.401</span>
          </div>
          <div className="p-4 rounded-lg bg-[#141414] border border-gray-900">
            <span className="text-xs text-slate-500 block uppercase tracking-wider mb-1">Analiz Metodu</span>
            <span className="text-sm font-medium text-slate-300">Tipoloji & Fonetik</span>
          </div>
          <div className="p-4 rounded-lg bg-[#141414] border border-gray-900">
            <span className="text-xs text-slate-500 block uppercase tracking-wider mb-1">Yayılım Odağı</span>
            <span className="text-sm font-medium text-slate-300">Kültürel Süreklilik</span>
          </div>
        </div>
      </section>

      {/* Mimari Notu */}
      <footer className="mt-8 pt-4 border-t border-gray-900">
        <span className="text-xs text-slate-500 block">
          Bu veriler YKOS matris ve atlas altyapısı ile doğrudan entegre çalışmaktadır.
        </span>
      </footer>

    </div>
  );
}
