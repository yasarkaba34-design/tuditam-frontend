import React, { useState } from 'react';

const YKOSLabMatrix = () => {
  const [activeTab, setActiveTab] = useState('methodology');

  const languagesData = [
    { id: 1, name: "Hattice", root: "Suwa / Su", target: "Su", ratio: 100, desc: "Anadolu'nun en eski yerli tözü" },
    { id: 2, name: "Hurrice", root: "Eni", target: "Ana", ratio: 100, desc: "Kuzey Mezopotamya ve Doğu Anadolu hafızası" },
    { id: 3, name: "Urartuca", root: "Bari", target: "Bar-han / Bor", ratio: 90, desc: "Doğu Anadolu dağlık ve kaya tözleri" },
    { id: 4, name: "Hititçe", root: "Wat", target: "Bat-mak / Bar-mak", ratio: 95, desc: "Çivi yazılı ilk siyasi bellek" },
    { id: 5, name: "Luvice", root: "Tarhun", target: "Tar-ı / Tanrı", ratio: 100, desc: "Geniş coğrafi hiyeroglif hafıza" },
    { id: 6, name: "Palaca", root: "Kama", target: "Kam (Şaman)", ratio: 95, desc: "Orta Anadolu arkaik inanç dili" },
    { id: 7, name: "Likçe (A)", root: "Eri", target: "Er / Eren", ratio: 100, desc: "Teke Yarımadası kaya mezarları" },
    { id: 8, name: "Milyasça (B)", root: "Tep-e", target: "Tep-mek / Tepe", ratio: 95, desc: "Epik ve şiirsel formlar" },
    { id: 9, name: "Karca", root: "Qıl", target: "Kıl-mak", ratio: 100, desc: "Batı Anadolu ve Mısır grafitileri" },
    { id: 10, name: "Lidce", root: "Bay", target: "Bay / Bey", ratio: 100, desc: "Sardes ve Gediz vadisi ticaret dili" },
    { id: 11, name: "Antik Yunanca", root: "Gelá-ō", target: "Gül-mek", ratio: 100, desc: "Pelasgik / Anadolu alt tabakası" },
    { id: 12, name: "Arapça", root: "Hal / Hala", target: "Kıl-mak / Hal-k", ratio: 95, desc: "Buzul sonrası ortak havza tözleri" },
    { id: 13, name: "Farsça", root: "Ser", target: "Baş / Ser", ratio: 90, desc: "Pers ve İranî coğrafya kök sesleri" },
    { id: 14, name: "Rusça", root: "Voda", target: "Su", ratio: 90, desc: "Kuzey stepleri ortak tözleri" },
    { id: 15, name: "İtalyanca", root: "Acqua", target: "Ak-mak / Su", ratio: 90, desc: "Akdeniz ve Latince alt tabakası" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 font-sans">
      {/* Başlık Paneli */}
      <div className="max-w-6xl mx-auto text-center py-8 border-b border-slate-800">
        <h1 className="text-4xl font-extrabold tracking-wider text-amber-500 mb-2">
          YKOS LABORATUVAR MATRİSİ
        </h1>
        <p className="text-slate-400 text-lg">
          Sıfır Noktası: Anadolu | Geçmiş Tanımlardan Uzak, "Ne Çıkarsa Odur" Prensibi
        </p>
      </div>

      {/* Navigasyon Sekmeleri */}
      <div className="max-w-6xl mx-auto flex justify-center gap-4 my-6">
        <button
          onClick={() => setActiveTab('methodology')}
          className={`px-6 py-2.5 rounded-lg font-semibold transition-all ${
            activeTab === 'methodology'
              ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
              : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
          }`}
        >
          Test Metodolojisi
        </button>
        <button
          onClick={() => setActiveTab('matrix')}
          className={`px-6 py-2.5 rounded-lg font-semibold transition-all ${
            activeTab === 'matrix'
              ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
              : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
          }`}
        >
          15 Dil Karşılaştırma Matrisi
        </button>
      </div>

      {/* İçerik Alanı */}
      <div className="max-w-6xl mx-auto mt-6">
        {activeTab === 'methodology' ? (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-xl">
              <h3 className="text-xl font-bold text-amber-400 mb-3">1. Kabuk Soyma (Desoğandırma)</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                İncelenen kelimenin sonradan eklenmiş tüm dilsel büküm ekleri jilet gibi sıyrılır. Geçmiş tanımların arkasındaki yabancı kabuk atılır.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-xl">
              <h3 className="text-xl font-bold text-amber-400 mb-3">2. Fonetik Töz İndirgeme</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Kelime, buzul sonrası ilk ses havzasındaki ham fonetik karşılığına indirgenir. Damak, diş ve dudak uyumları tarafsızca değerlendirilir.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-xl">
              <h3 className="text-xl font-bold text-amber-400 mb-3">3. Oranlı Karşılaştırma</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Elde edilen ham kök-hece, YKOS Türkçe öz kök havuzuyla karşılaştırılır. Anlam ve töz tutarlılığı yüzdesel olarak oranlanır.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-xl">
              <h3 className="text-xl font-bold text-amber-400 mb-3">4. Nihai Tescil ("Ne Çıkarsa Odur")</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Önyargısız test sonucunda ortaya çıkan tablo tescillenir. Dogmalar değil, test sonucundaki saf hakikat esas alınır.
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-950 text-amber-500 border-b border-slate-800 text-sm uppercase">
                    <th className="p-4">Katman / Dil</th>
                    <th className="p-4">Açıklama</th>
                    <th className="p-4">Ham Kök</th>
                    <th className="p-4">YKOS Karşılığı</th>
                    <th className="p-4">Uyum Oranı</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-sm">
                  {languagesData.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-850 transition-colors">
                      <td className="p-4 font-bold text-white">{item.name}</td>
                      <td className="p-4 text-slate-400 text-xs">{item.desc}</td>
                      <td className="p-4 font-mono text-amber-300">{item.root}</td>
                      <td className="p-4 font-mono text-emerald-400">{item.target}</td>
                      <td className="p-4">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          %{item.ratio}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Alt Bilgi */}
      <div className="max-w-6xl mx-auto text-center mt-12 text-slate-500 text-xs">
        © YKOS (Yaşar Kaba Okuma Sistemi) — Tüm Hakları Saklıdır. Sıfır Noktası: Anadolu.
      </div>
    </div>
  );
};

export default YKOSLabMatrix;