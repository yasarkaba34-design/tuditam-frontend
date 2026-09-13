export default function handler(req, res) {
  const { query, found, count } = req.body;

  const RMV = {
    query,
    found,
    count,
    mode: found ? "active" : "missing",
    timestamp: Date.now()
  };

  // Burada RMV verisi YKOS çekirdeğine aktarılacak
  // Örn: arşiv okuma, atlas rezonansı, flux geri besleme

  res.status(200).json({ rmv: RMV });
}
