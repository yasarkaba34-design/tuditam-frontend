import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const OpenDataPortal = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    category: "",
    period: "",
    country: "",
    region: "",
    coordinates: "",
    sourceLink: "",
    imageUrl: "",
    ykosCode: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    if (!form.name.trim()) return "İsim gerekli.";
    if (!form.email.trim()) return "E‑posta gerekli.";
    if (!form.title.trim()) return "Başlık gerekli.";
    if (!form.category.trim()) return "Kategori gerekli.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      alert(error);
      return;
    }

    try {
      await addDoc(collection(db, "ykos_open_data"), {
        ...form,
        createdAt: new Date(),
        evaluatorReady: {
          code: form.ykosCode,
          geo: form.coordinates,
          country: form.country,
          period: form.period
        }
      });

      alert("Veri başarıyla gönderildi!");
      setForm({
        name: "",
        email: "",
        title: "",
        category: "",
        period: "",
        country: "",
        region: "",
        coordinates: "",
        sourceLink: "",
        imageUrl: "",
        ykosCode: ""
      });
    } catch (err) {
      console.error("Gönderim hatası:", err);
      alert("Gönderim sırasında hata oluştu.");
    }
  };

  return (
    <div className="open-data-container">
      <h1>YKOS Açık Veri Katkı Portalı</h1>

      <form onSubmit={handleSubmit} className="open-data-form">

        <label>İsim</label>
        <input name="name" value={form.name} onChange={handleChange} />

        <label>E‑posta</label>
        <input name="email" value={form.email} onChange={handleChange} />

        <label>Başlık</label>
        <input name="title" value={form.title} onChange={handleChange} />

        <label>Kategori</label>
        <select name="category" value={form.category} onChange={handleChange}>
          <option value="">Seçiniz</option>
          <option value="damga">Damga</option>
          <option value="petroglif">Petroglif</option>
          <option value="hece">Kök‑Hece</option>
          <option value="arkeolojik">Arkeolojik Veri</option>
        </select>

        <label>Dönem / Kronoloji</label>
        <input name="period" value={form.period} onChange={handleChange} />

        <label>Ülke</label>
        <input name="country" value={form.country} onChange={handleChange} />

        <label>Bölge</label>
        <input name="region" value={form.region} onChange={handleChange} />

        <label>Koordinatlar (Enlem, Boylam)</label>
        <input name="coordinates" value={form.coordinates} onChange={handleChange} />

        <label>Kaynak Linki</label>
        <input name="sourceLink" value={form.sourceLink} onChange={handleChange} />

        <label>Görsel URL</label>
        <input name="imageUrl" value={form.imageUrl} onChange={handleChange} />

        <label>YKOS Kök‑Hece / Damga Kodu</label>
        <input name="ykosCode" value={form.ykosCode} onChange={handleChange} />

        <button type="submit">Sisteme Gönder</button>
      </form>
    </div>
  );
};

export default OpenDataPortal;
