import express from "express";
const app = express();

app.get("/api/ykos-flux", (req, res) => {
  const flux = (Math.sin(Date.now() / 1000) * 0.8).toFixed(4); // dalgalı veri
  const tick = Math.floor(Date.now() / 1000);
  res.json({ flux, tick });
});

app.listen(5173, () => console.log("YKOS Flux API aktif"));
// /pages/api/ykos-flux.js

export default function handler(req, res) {
  // Sistem zamanı → tick üretimi
  const tick = Math.floor(Date.now() / 1000);

  // Flux dalgası → canlı veri akışı
  const flux = Number((Math.sin(Date.now() / 900) * 0.8).toFixed(4));

  // JSON yanıtı
  res.status(200).json({
    flux,
    tick
  });
}
