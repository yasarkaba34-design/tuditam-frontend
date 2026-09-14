import { useState } from "react";

export default function DataEntryPanel() {
  const [type, setType] = useState("damga");
  const [formData, setFormData] = useState({
    title: "",
    region: "",
    period: "",
    description: "",
    variants: "",
    source: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const endpoint = `/api/v1/${type}`;

    const payload = {
      ...formData,
      variants: formData.variants.split(",").map(v => v.trim())
    };

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    console.log("API Yanıtı:", data);
    alert(`Veri eklendi: ID = ${data.id}`);
  };

  return (
    <div className="data-entry-panel">
      <h3>📥 Veri Girişi Paneli</h3>

      <label>Veri Türü Seçin</label>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="ulke">Ülke</option>
        <option value="arastirma">Araştırma</option>
        <option value="damga">Damga</option>
        <option value="petroglif">Petroglif</option>
        <option value="yazit">Yazıt</option>
        <option value="kaynak">Kaynak</option>
        <option value="gorsel">Görsel</option>
      </select>

      <input name="title" placeholder="Başlık" onChange={handleChange} />
      <input name="region" placeholder="Coğrafya" onChange={handleChange} />
      <input name="period" placeholder="Dönem" onChange={handleChange} />
      <input name="source" placeholder="Kaynak" onChange={handleChange} />
      <textarea name="description" placeholder="Açıklama" onChange={handleChange} />
      <input name="variants" placeholder="Varyantlar (virgülle)" onChange={handleChange} />

      <button onClick={handleSubmit}>⬆️ Kaydet / Yükle</button>
    </div>
  );
}
