import express from "express";
const app = express();

app.get("/api/ykos-flux", (req, res) => {
  const flux = Math.random();
  const tick = Date.now() % 1000;
  res.json({ flux, tick });
});

app.listen(5173, () => console.log("YKOS Flux API aktif"));
