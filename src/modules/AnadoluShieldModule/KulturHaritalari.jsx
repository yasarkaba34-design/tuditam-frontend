import React from 'react';

export default function KulturHaritalari() {
  return (
    <div className="bg-[#0d0d0d] p-10 rounded-xl border border-gray-800 shadow-lg max-w-4xl mx-auto my-6">
      
      {/* Üst Başlık Alanı */}
      <header className="mb-8 border-b border-gray-800 pb-6">
        <h1 className="text-3xl font-extrabold text-amber-500 mb-2 uppercase tracking-wide">
          Kültür Haritaları
        </h1>
        <p className="text-slate-400 text-sm tracking-wider">
          Coğrafi ve Kültürel Süreklilik Analizi
        </p>
      </header>

      {/* İçerik Alanı */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-slate-200 mb-4">
          Harita Türleri
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { 
              title: "Damga Yayılım Haritası", 
              desc: "Petroglif ve yazıtların dünya üzerindeki dağılım noktaları ve bölgesel yoğunluk analizleri." 
            },
            { 
              title: "Kültürel Süreklilik Haritası", 
              desc: "Anadolu merkezli olarak dışa doğru genişleyen medeniyet izlerinin ve sembollerin zamansal rotaları." 
            },
            { 
              title: "Fonetik Dağılım Haritası", 
              desc: "Ses bayraklarının, kök hecelerin ve arkaik dil akrabalıklarının coğrafi sınır grafikeri." 
            }
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

      {/* CBS ve Atlas Bağlantı Notu */}
      <footer className="mt-8 pt-4 border-t border-gray-900 flex justify-between items-center text-xs text-slate-500">
        <span>Anadolu Merkezli Kültürel Genişleme Modeli</span>
        <span className="text-amber-500/70 font-mono">Atlas Entegrasyonu: Aktif</span>
      </footer>

    </div>
  );
}