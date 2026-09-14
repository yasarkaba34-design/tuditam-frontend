// protoMatrix.ts

export type KokHeceSample = {
  id: string;
  ring: number;
  proto: string;
  derived: string;
  lang: string;
  note?: string;
};

export const ProtoMatrix: KokHeceSample[] = [];

function addKokSample(
  ring: number,
  proto: string,
  derived: string,
  lang: string,
  note?: string
) {
  ProtoMatrix.push({
    id: `k${ring}_${proto.toLowerCase()}`,
    ring,
    proto,
    derived,
    lang,
    note
  });
}

// 1. Anadolu
addKokSample(1, 'SU', 'ŠU', 'Hititçe', 'Anlam ve fonetik süreklilik yüksek');

// 2. Ege-Akdeniz
addKokSample(2, 'ANA', 'ANNA', 'Latince', 'Anne/ana kök-hece sürekliliği');

// 3. Hint-Avrupa
addKokSample(3, 'AG', 'AGNI', 'Sanskritçe', 'Ateş/enerji kök tözü');

// 4. Kuzey-Batı
addKokSample(4, 'BER', 'BEAR', 'Eski İngilizce', 'Taşıma/katlanma kökü');

// 5. Sami
addKokSample(5, 'EL', 'AL', 'Arapça', 'Yükseklik/ilahi kök');

// 6. Doğu Asya
addKokSample(6, 'OK', '玉 (Yù)', 'Eski Çince', 'Yuvarlak/çekirdek damga bağı');
