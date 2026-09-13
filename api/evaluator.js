// /api/evaluator.js

import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  try {
    const damgalar = req.body.damgalar;

    const corePath = path.join(process.cwd(), "data", "ykos_core.json");
    const coreData = JSON.parse(fs.readFileSync(corePath, "utf8"));

    const sözlük = coreData.damgalar;

    const chain = damgalar.map(id => {
      const d = sözlük.find(x => x.id === id);
      return d ? d.hece : id;
    });

    const concept = damgalar
      .map(id => sözlük.find(x => x.id === id)?.kavram)
      .filter(Boolean)
      .join(" → ");

    const cosmic = damgalar
      .map(id => sözlük.find(x => x.id === id)?.cosmic)
      .filter(Boolean)
      .join(" | ");

    const payload = {
      title: req.body.title || "Semiyotik Akış",
      root: chain[0],
      chain,
      concept,
      cosmic
    };

    res.status(200).json(payload);

  } catch (err) {
    res.status(500).json({ error: "Evaluator hata verdi", detail: err });
  }
}
