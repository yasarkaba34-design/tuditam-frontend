import matrixData from "../../data/atlas/matrix/matrixData.json";
import ykosCore from "../../data/ykos_core.json";

export function indexYouTubeVideo(video) {
  const text = `
    ${video.title}
    ${video.description}
    ${video.tags.join(" ")}
  `.toLowerCase();

  const matches = [];

  // 1) Kök hece eşleşmeleri
  matrixData.forEach(entry => {
    if (text.includes(entry.root.toLowerCase())) {
      matches.push({
        type: "kök_hece",
        value: entry.root,
        kavram: entry.kavram,
        rota: entry.rota
      });
    }
  });

  // 2) Kavram eşleşmeleri
  ykosCore.kavramlar.forEach(k => {
    if (text.includes(k.ad.toLowerCase())) {
      matches.push({
        type: "kavram",
        value: k.ad,
        kategori: k.kategori
      });
    }
  });

  // 3) Damga eşleşmeleri (metinsel karşılık)
  ykosCore.damgalar.forEach(d => {
    if (text.includes(d.ad.toLowerCase())) {
      matches.push({
        type: "damga",
        value: d.ad,
        anlam: d.anlam
      });
    }
  });

  return {
    videoId: video.id,
    title: video.title,
    semanticProfile: matches
  };
}
