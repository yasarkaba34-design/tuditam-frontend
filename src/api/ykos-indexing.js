import fs from 'fs';
import path from 'path';
import { getActivePosts, updatePostIndexFields } from './db';
import { logBuffer, pushLog } from './logBuffer';

// JSON yükleme
function loadIndexJson() {
  const filePath = path.join(process.cwd(), 'src', 'api', 'ykos-indexes.json');
  const raw = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(raw);

  const map = new Map();
  data.indexes.forEach(entry => {
    map.set(entry.symbol.toLowerCase(), entry);
  });

  return map;
}

const indexMap = loadIndexJson();

// Sembol listesi
const SYMBOL_CANDIDATES = [
  "spiral", "güneş kursu", "ok ucu", "üçgen form", "dalgalı çizgi",
  "el damgası", "balık motifi", "göz motifi", "ana tanrıça", "koç başı",
  "boğa başı", "yıldırım motifi", "çentik dizisi", "kare form",
  "zigzag", "tarak motifi", "çapraz çizgi", "yıldız formu",
  "ayak izi", "kuş figürü", "dağ motifi", "nehir motifi",
  "çiçek formu", "yaprak formu", "kalkan motifi", "mızrak ucu",
  "çift çizgi", "üç çizgi", "dairesel nokta", "merkez nokta",
  "çift daire", "üç daire", "kare içinde haç", "daire içinde nokta",
  "güneş ışını", "hilal formu", "çift hilal", "üç kollu form",
  "beş kollu form", "sekiz kollu form", "çark motifi", "çift çark",
  "insan figürü", "hayvan figürü"
];

// Motor
export async function runAutoIndexing() {
  const posts = await getActivePosts();
  let updatedCount = 0;

  pushLog(`Motor başlatıldı. Toplam içerik: ${posts.length}`);

  for (const post of posts) {
    pushLog(`İçerik #${post.id} taranıyor...`);

    const title = (post.title || '').toLowerCase();
    let matchedSymbol = null;

    for (const symbol of SYMBOL_CANDIDATES) {
      if (title.includes(symbol)) {
        matchedSymbol = symbol;
        break;
      }
    }

    if (!matchedSymbol) {
      pushLog(`İçerik #${post.id}: Sembol bulunamadı.`);
      continue;
    }

    pushLog(`İçerik #${post.id}: Sembol algılandı → ${matchedSymbol}`);

    const indexEntry = indexMap.get(matchedSymbol.toLowerCase());
    if (!indexEntry) {
      pushLog(`İçerik #${post.id}: JSON eşleşmesi bulunamadı.`);
      continue;
    }

    await updatePostIndexFields(post.id, {
      description: indexEntry.template,
      atlas_code: indexEntry.atlas_code,
      root_phase: indexEntry.root_phase,
      chronology: indexEntry.chronology
    });

    updatedCount++;
    pushLog(`İçerik #${post.id}: Güncellendi → ${indexEntry.atlas_code}`);
  }

  pushLog(`Motor tamamlandı. Güncellenen içerik: ${updatedCount}`);

  return updatedCount;
}

// API endpoint
export default async function handler(req, res) {
  try {
    const count = await runAutoIndexing();
    res.status(200).json({
      status: "ok",
      updated: count,
      message: "YKOS otomatik indeksleme tamamlandı."
    });
  } catch (err) {
    pushLog(`Motor hatası: ${err.message}`);
    res.status(500).json({
      status: "error",
      message: "İndeksleme sırasında hata oluştu."
    });
  }
}
