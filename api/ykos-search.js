export default function handler(req, res) {
  const { q } = req.query;

  // Arama boşsa tüm sonuçları döndür
  if (!q || q.trim() === "") {
    return res.status(200).json({ results: [] });
  }

  // YKOS örnek veri (sen bunu YKOS indeksinden çekeceksin)
  const DATA = [
    { id: 1, name: "OK", type: "kök hece", group: "Dil" },
    { id: 2, name: "AT", type: "kök hece", group: "Dil" },
    { id: 3, name: "ER", type: "kök hece", group: "Dil" },
    { id: 4, name: "EL", type: "kök hece", group: "Dil" },
    { id: 5, name: "Tamga", type: "damga", group: "Sembol" },
    { id: 6, name: "Petroglif", type: "damga", group: "Sembol" }
  ];

  // Arama işlemi
  const results = DATA.filter(item =>
    item.name.toLowerCase().includes(q.toLowerCase())
  );

  // JSON yanıtı
  res.status(200).json({ results });
}
const newBubbles = results.map(r => ({
  id: r.id,
  x: Math.random() * 300,
  y: Math.random() * 300,
  size: 40,
  flux: flux,
  label: r.name
}));
