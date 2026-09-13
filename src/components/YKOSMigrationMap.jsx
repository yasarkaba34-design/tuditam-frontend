import React, { useState } from 'react';
import { Compass, MapPin, Navigation, ArrowRight } from 'lucide-react';

export default function YKOSMigrationMap() {
  const [selectedRoute, setSelectedRoute] = useState('ROUTE_01');

  const routes = {
    'ROUTE_01': {
      title: 'Anadolu Refugium (Sıfır Noktası) → Zagros & Mezopotamya',
      epoch: 'MÖ 12.000 - MÖ 4.000',
      description: 'Buzul çağlarının kırılma anında Anadolu sığınağından güneydoğu ve doğu havzalarına yayılan ilk kök-hece ve tarım-ekonomi damgaları.',
      markers: ['Göbeklitepe', 'Çayönü', 'Uruk Çekirdeği']
    },
    'ROUTE_02': {
      title: 'Anadolu Akışı → Kafkaslar & Asya Stepleri (Saymalıtaş / Altay)',
      epoch: 'MÖ 5.000 - MÖ 2.000',
      description: 'Anadolu kökenli damga ve petroglif dilinin, kuzey ve doğu akış hatlarıyla Asya’nın içlerine (Saymalıtaş’a) taşıdığı runik semiyoloji.',
      markers: ['Kafkas Geçitleri', 'İdil-Ural', 'Saymalıtaş Petroglifleri']
    },
    'ROUTE_03': {
      title: 'Akdeniz & Avrupa Kolu (Etrüsk & Glozel Kesişimi)',
      epoch: 'MÖ 3.000 - MÖ 500',
      description: 'Anadolu’dan deniz yolu ve Ege kıyıları üzerinden Batı’ya sızan Ön-Türkçe kök katmanlarının Glozel ve Etrüsk yazıtlarıyla buluşma hattı.',
      markers: ['Ege Adaları', 'Etruria (İtalya)', 'Glozel (Fransa)']
    }
  };

  const currentRoute = routes[selectedRoute];

  return (
    <div className="min-h-[450px] bg-black text-[#D4AF37] p-6 font-mono border border-[#D4AF37]/30 rounded-xl shadow-2xl my-4">
      <div className="flex items-center justify-between border-b border-[#D4AF37]/40 pb-4 mb-6">
        <div className="flex items-center space-x-3">
          <Compass className="w-8 h-8 text-[#D4AF37]" />
          <div>
            <h2 className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#B8860B]">
              YKOS GÖÇ & AKIŞ HARİTASI
            </h2>
            <p className="text-xs text-[#D4AF37]/60 tracking-wider">
              ANADOLU'DAN AVRASYA'YA DAMGA VEKTÖRLERİ VE JEOPOLİTİK KÖK HATLARI
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-[#111111] border border-[#D4AF37]/30 p-4 rounded-lg space-y-3">
          <label className="block text-xs uppercase tracking-widest text-[#D4AF37]/80 mb-2 flex items-center space-x-2">
            <Navigation className="w-4 h-4" />
            <span>Akış Vektörleri Seçimi</span>
          </label>
          
          {Object.keys(routes).map((key, idx) => (
            <button
              key={key}
              onClick={() => setSelectedRoute(key)}
              className={`w-full text-left p-3 rounded border text-xs tracking-wider transition-all flex items-center justify-between cursor-pointer ${
                selectedRoute === key 
                  ? 'bg-[#D4AF37]/20 border-[#FFD700] text-[#FFD700] font-bold shadow-lg' 
                  : 'bg-black border-[#D4AF37]/20 text-[#D4AF37]/70 hover:border-[#D4AF37]/60'
              }`}
            >
              <span>Vektör #{idx + 1}: {key.replace('ROUTE_', 'Hat ')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ))}
        </div>

        <div className="lg:col-span-2 bg-[#0A0A0A] border border-[#D4AF37]/40 p-6 rounded-lg relative flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-2">
              <span className="text-xs uppercase text-[#D4AF37]/60">JEOPOLİTİK ZAMAN DİLİMİ</span>
              <span className="text-xs text-[#FFD700] font-bold bg-[#D4AF37]/10 px-2.5 py-1 rounded border border-[#D4AF37]/30">
                {currentRoute.epoch}
              </span>
            </div>

            <h3 className="text-base font-bold text-white tracking-wide">{currentRoute.title}</h3>
            <p className="text-xs text-[#D4AF37]/80 leading-relaxed bg-black/50 p-4 rounded border border-[#D4AF37]/20">
              {currentRoute.description}
            </p>

            <div>
              <span className="block text-[10px] uppercase text-[#D4AF37]/50 mb-2">Kritik Duraklar ve Damga Noktaları</span>
              <div className="flex flex-wrap gap-2">
                {currentRoute.markers.map((marker, i) => (
                  <span key={i} className="flex items-center space-x-1 bg-[#D4AF37]/10 border border-[#D4AF37]/40 px-3 py-1.5 rounded text-xs text-[#FFD700]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{marker}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}