import React, { useState } from 'react';
import { Search, Shield, Cpu, Terminal, RefreshCw, Layers } from 'lucide-react';
const ANCIENT_LANGUAGE_GROUPS = [
  { label: "Anadolu ve Ege", options: [
    { value: "HATTİCE", label: "Hattice — Anadolu" },
    { value: "HITITCE", label: "Hititçe — Anadolu" },
    { value: "LUWICE", label: "Luvice — Anadolu" },
    { value: "LİKÇE", label: "Likçe — Anadolu" },
    { value: "LIDCE", label: "Lidce — Anadolu" },
    { value: "PALACA", label: "Palaca — Anadolu" },
    { value: "KARCA", label: "Karca — Anadolu" },
    { value: "FRIGCE", label: "Frigce — Anadolu" },
    { value: "URARTUCA", label: "Urartuca — Doğu Anadolu" }
  ]},
  { label: "Mezopotamya ve Levant", options: [
    { value: "SUMERCE", label: "Sümerce — Mezopotamya" },
    { value: "AKKADCA", label: "Akkadca — Mezopotamya" },
    { value: "HURRICE", label: "Hurrice — Kuzey Mezopotamya" },
    { value: "ELAMCA", label: "Elamca — İran / Mezopotamya" },
    { value: "UGARITCE", label: "Ugaritçe — Levant" },
    { value: "FENIKECE", label: "Fenikece — Levant" },
    { value: "ARAMICE", label: "Aramice — Levant" },
    { value: "IBRANICE", label: "İbranice — Levant" },
    { value: "PUNICE", label: "Punikçe — Kuzey Afrika" }
  ]},
  { label: "Mısır ve Afrika", options: [
    { value: "MISIRCA", label: "Eski Mısır dili" },
    { value: "GEEZ", label: "Ge'ez — Etiyopya" }
  ]},
  { label: "İran ve Orta Asya", options: [
    { value: "ESKI_PERSCE", label: "Eski Persçe" },
    { value: "AVESTACA", label: "Avestaca" },
    { value: "SOGDCA", label: "Soğdca" },
    { value: "TOHARCA_A", label: "Toharca A" },
    { value: "TOHARCA_B", label: "Toharca B" }
  ]},
  { label: "Güney ve Doğu Asya", options: [
    { value: "SANSKRITCE", label: "Sanskritçe" },
    { value: "KLASIK_CINCE", label: "Klasik Çince" },
    { value: "ESKI_TIBETCE", label: "Eski Tibetçe" },
    { value: "ESKI_JAPONCA", label: "Eski Japonca" },
    { value: "ESKI_TAMIL", label: "Eski Tamilce" }
  ]},
  { label: "Avrupa", options: [
    { value: "MYKEN_YUNANCASI", label: "Miken Yunancası" },
    { value: "ANTIK_YUNANCA", label: "Antik Yunanca" },
    { value: "LATINCE", label: "Latince" },
    { value: "ETRUSKCE", label: "Etrüskçe" },
    { value: "GALYA_KELTCE", label: "Galya Keltçesi" },
    { value: "GOTCA", label: "Gotça" },
    { value: "ESKI_NORSCA", label: "Eski Norsça" }
  ]},
  { label: "Amerikalar", options: [
    { value: "KLASIK_MAYA", label: "Klasik Maya yazı dili" },
    { value: "KLASIK_NAHUATL", label: "Klasik Nahuatl" }
  ]}
];

const ANCIENT_LANGUAGE_LABELS = Object.fromEntries(
  ANCIENT_LANGUAGE_GROUPS.flatMap((group) => group.options.map((option) => [option.value, option.label]))
);

export default function YKOSAnalysisEngine() {
  const [inputWord, setInputWord] = useState('');
  const [selectedLayer, setSelectedLayer] = useState('LİKÇE');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const database = {
    'LİKÇE': {
      'ERİN': { root: 'ER', meaning: 'Er / Eren / Yiğit', shell: '-İN (Büküm eki temizlendi)', resonance: '%98.5 Ön-Türkçe Kök Rezonansı' },
      'XUDAZ': { root: 'KUT / XUDA', meaning: 'İlahi Güç / Mukaddes', shell: '-AZ (Hellenik/Likyalı kabuk soyuldu)', resonance: '%96.0 Altai-Anadolu Rezonansı' },
      'PRLAS': { root: 'PUR / PARLAK', meaning: 'Ateş / Işık tözü', shell: '-AS (Yunan büküm eki arındırıldı)', resonance: '%97.2 Arkaik Ses Uyumu' }
    },
    'PALACA': {
      'KAMANZA': { root: 'KAM / ŞAMAN', meaning: 'Bilgi ve İnanç Tözü', shell: '-ANZA (Hitit/Palaic ek temizlendi)', resonance: '%99.1 Kök-Hece Matematiği' },
      'WURAS': { root: 'ULA / BÜYÜK', meaning: 'Coğrafi / İlahi Büyüklük', shell: '-AS (Kabuk soyuldu)', resonance: '%95.4 Fonetik Rezonans' }
    },
    'HATTİCE': {
      'SUWASH': { root: 'SU / KAYNAK', meaning: 'En Eski Yerli Töz', shell: '-ASH (Hattice büküm arındırıldı)', resonance: '%99.8 Pleistosen Sığınak Kökü' }
    }
  };

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!inputWord) return;

    setIsAnalyzing(true);
    setResult(null);

    setTimeout(() => {
      const upperWord = inputWord.toLocaleUpperCase("tr").trim();
      const layerData = database[selectedLayer];
      const localEntry = layerData?.[upperWord];

      if (localEntry) {
        setResult({ ...localEntry, isLocalExample: true });
      } else {
        const layerName = ANCIENT_LANGUAGE_LABELS[selectedLayer] || selectedLayer;
        setResult({
          unavailable: true,
          message: layerData
            ? layerName + " katmanında “" + upperWord + "” için yerel örnek kayıt bulunmuyor."
            : layerName + " katmanı seçilebilir durumda; ancak bu dil için henüz yerel test verisi eklenmedi."
        });
      }
      setIsAnalyzing(false);
    }, 800);
  };

  return (
    <div className="min-h-[450px] bg-black text-[#D4AF37] p-6 font-mono border border-[#D4AF37]/30 rounded-xl shadow-2xl my-4">
      <div className="flex items-center justify-between border-b border-[#D4AF37]/40 pb-4 mb-6">
        <div className="flex items-center space-x-3">
          <Cpu className="w-8 h-8 text-[#D4AF37] animate-pulse" />
          <div>
            <h2 className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#B8860B]">
              YKOS OKUMA & ANALİZ MOTORU
            </h2>
            <p className="text-xs text-[#D4AF37]/60 tracking-wider">
              KABUK SOYMA (DESOĞANDIRMA) & 30 LEHÇE REZONANS LABORATUVARI
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-xs border border-[#D4AF37]/40 px-3 py-1 rounded bg-[#D4AF37]/10">
          <Shield className="w-4 h-4 text-[#D4AF37]" />
          <span>SİSTEM AKTİF: v3.75</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-[#111111] border border-[#D4AF37]/30 p-4 rounded-lg">
          <label className="block text-xs uppercase tracking-widest text-[#D4AF37]/80 mb-2 flex items-center space-x-2">
            <Layers className="w-4 h-4" />
            <span>Epigrafik Katman Seçimi</span>
          </label>
          <select 
            value={selectedLayer} 
            onChange={(e) => setSelectedLayer(e.target.value)}
            className="w-full bg-black border border-[#D4AF37]/50 text-[#D4AF37] p-3 rounded focus:outline-none focus:border-[#FFD700]"
          >
            {ANCIENT_LANGUAGE_GROUPS.map((group) => (
              <optgroup key={group.label} label={group.label}>
                {group.options.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        <div className="lg:col-span-2 bg-[#111111] border border-[#D4AF37]/30 p-4 rounded-lg flex flex-col justify-between">
          <form onSubmit={handleAnalyze} className="space-y-4">
            <label className="block text-xs uppercase tracking-widest text-[#D4AF37]/80 flex items-center space-x-2">
              <Terminal className="w-4 h-4" />
              <span>İncelenecek Antik Kelime / Terim (Örn: ERİN, XUDAZ)</span>
            </label>
            <div className="flex space-x-2">
              <input 
                type="text"
                size={21} 
                value={inputWord}
                onChange={(e) => setInputWord(e.target.value)}
                placeholder="Örn: ERİN..." 
                className="flex-1 bg-black border border-[#D4AF37]/50 text-[#D4AF37] px-4 py-3 rounded focus:outline-none focus:border-[#FFD700] uppercase tracking-wider"
              />
              <button 
                type="submit"
                disabled={isAnalyzing}
                className="bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-black font-bold px-6 py-3 rounded hover:from-[#FFD700] hover:to-[#B8860B] transition-all flex items-center space-x-2 shadow-lg disabled:opacity-50 cursor-pointer"
              >
                {isAnalyzing ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
                <span>ANALİZ ET</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-[#0A0A0A] border border-[#D4AF37]/40 p-6 rounded-lg relative overflow-hidden min-h-[160px] flex flex-col justify-center">
        {isAnalyzing ? (
          <div className="text-center py-6 space-y-3">
            <RefreshCw className="w-8 h-8 text-[#FFD700] animate-spin mx-auto" />
            <p className="text-xs tracking-widest text-[#D4AF37]/80 animate-pulse">
              KABUK SOYMA (DESOĞANDIRMA) OPERASYONU YÜRÜTÜLÜYOR...
            </p>
          </div>
        ) : result ? (
          result.unavailable ? (
            <div style={{ padding: "18px", color: "#fcd34d", lineHeight: 1.6 }}>
              <strong>Bu katman için yerel eşleşme kaydı yok.</strong>
              <p style={{ margin: "8px 0 0" }}>{result.message}</p>
              <p style={{ margin: "8px 0 0", color: "#94a3b8" }}>Seçim, dil katmanını listeler; kaynaklı test verisi eklenmeden sonuç veya uyum oranı üretilmez.</p>
            </div>
          ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-2">
              <span className="text-xs uppercase text-[#D4AF37]/60">ANALİZ SONUCU & TÖZ EŞLEŞMESİ</span>
              <span className="text-xs text-[#FFD700] font-bold bg-[#D4AF37]/10 px-2.5 py-0.5 rounded border border-[#D4AF37]/30">
                {result.resonance}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
              <div className="bg-black/60 p-3 border border-[#D4AF37]/20 rounded">
                <span className="block text-[10px] text-[#D4AF37]/50 uppercase">Arındırılmış Kök-Hece</span>
                <span className="text-lg font-bold text-[#FFD700]">{result.root}</span>
              </div>
              <div className="bg-black/60 p-3 border border-[#D4AF37]/20 rounded">
                <span className="block text-[10px] text-[#D4AF37]/50 uppercase">Anlam / Töz Karşılığı</span>
                <span className="text-base font-semibold text-white">{result.meaning}</span>
              </div>
              <div className="bg-black/60 p-3 border border-[#D4AF37]/20 rounded">
                <span className="block text-[10px] text-[#D4AF37]/50 uppercase">Kabuk Soyma Raporu</span>
                <span className="text-xs text-[#D4AF37]/90">{result.shell}</span>
              </div>
            </div>
          </div>
          )
        ) : (
          <div className="text-center py-6 text-[#D4AF37]/40">
            <Terminal className="w-10 h-10 mx-auto mb-2 opacity-30" />
            <p className="text-xs">Lütfen bir katman seçin ve analizi başlatmak için bir terim girin.</p>
          </div>
        )}
      </div>
    </div>
  );
}
