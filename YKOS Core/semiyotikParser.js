// /ykos-core/semiyotikParser.js

export async function semiyotikParser(damgaListesi) {
  // 1) Veri havuzunu yükle
  const core = await fetch("/data/ykos_core.json").then(r => r.json());
  const sözlük = core.damgalar;

  // 2) Damga → Hece eşleme
  const chain = damgaListesi.map(id => {
    const d = sözlük.find(x => x.id === id);
    return d ? d.hece : id;
  });

  // 3) Damga → Kavram eşleme
  const concept = damgaListesi
    .map(id => sözlük.find(x => x.id === id)?.kavram)
    .filter(Boolean)
    .join(" → ");

  // 4) Damga → Kozmolojik yorum
  const cosmic = damgaListesi
    .map(id => sözlük.find(x => x.id === id)?.cosmic)
    .filter(Boolean)
    .join(" | ");

  // 5) Tam semiyotik paket
  return {
    chain,
    concept,
    cosmic,
    root: chain[0]
  };
}
