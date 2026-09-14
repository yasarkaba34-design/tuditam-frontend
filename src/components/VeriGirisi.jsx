import React, { useMemo, useState } from "react";
import "../styles/verigirisi.css";
const STORAGE_KEY = "ykos_records_v1";

const initialForm = {
  type: "Ülke",
  title: "",
  country: "",
  city: "",
  archaeologicalSite: "",
  period: "",
  estimatedDate: "",
  description: "",
  symbols: "",
  source: "",
  imageUrl: "",
};

function getStoredRecords() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export default function VeriGirisi({
  searchQuery = "",
  activeFilter = "Hepsi",
  onRecordsChange,
}) {
  const [form, setForm] = useState(initialForm);
  const [records, setRecords] = useState(getStoredRecords);
  const [message, setMessage] = useState("");
  const [editingId, setEditingId] = useState(null);

  const filteredRecords = useMemo(() => {
    const query = searchQuery.trim().toLocaleLowerCase("tr-TR");

    return records.filter((record) => {
      const matchesFilter =
        activeFilter === "Hepsi" || record.type === activeFilter;

      const searchableText = [
        record.title,
        record.type,
        record.country,
        record.city,
        record.archaeologicalSite,
        record.period,
        record.estimatedDate,
        record.description,
        record.symbols,
        record.source,
      ]
        .filter(Boolean)
        .join(" ")
        .toLocaleLowerCase("tr-TR");

      const matchesSearch = !query || searchableText.includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [records, searchQuery, activeFilter]);

  function updateField(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function persistRecords(nextRecords) {
    setRecords(nextRecords);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextRecords));

    if (typeof onRecordsChange === "function") {
      onRecordsChange(nextRecords);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.title.trim()) {
      setMessage("Kayıt başlığı zorunludur.");
      return;
    }

    const now = new Date().toISOString();

    if (editingId) {
      const nextRecords = records.map((record) =>
        record.id === editingId
          ? {
              ...record,
              ...form,
              updatedAt: now,
            }
          : record
      );

      persistRecords(nextRecords);
      setMessage("Kayıt güncellendi.");
    } else {
      const newRecord = {
        id:
          typeof crypto !== "undefined" && crypto.randomUUID
            ? crypto.randomUUID()
            : `${Date.now()}-${Math.random()}`,
        ...form,
        createdAt: now,
        updatedAt: now,
      };

      persistRecords([newRecord, ...records]);
      setMessage("Yeni kayıt başarıyla eklendi.");
    }

    setForm(initialForm);
    setEditingId(null);
  }

  function startEditing(record) {
    setEditingId(record.id);

    setForm({
      type: record.type || "Ülke",
      title: record.title || "",
      country: record.country || "",
      city: record.city || "",
      archaeologicalSite: record.archaeologicalSite || "",
      period: record.period || "",
      estimatedDate: record.estimatedDate || "",
      description: record.description || "",
      symbols: record.symbols || "",
      source: record.source || "",
      imageUrl: record.imageUrl || "",
    });

    setMessage("Kayıt düzenleme moduna alındı.");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function cancelEditing() {
    setEditingId(null);
    setForm(initialForm);
    setMessage("Düzenleme iptal edildi.");
  }

  function deleteRecord(id) {
    const confirmed = window.confirm(
      "Bu kaydı silmek istediğinizden emin misiniz?"
    );

    if (!confirmed) return;

    const nextRecords = records.filter((record) => record.id !== id);
    persistRecords(nextRecords);

    if (editingId === id) {
      cancelEditing();
    }

    setMessage("Kayıt silindi.");
  }

  function clearAllRecords() {
    const confirmed = window.confirm(
      "Bütün yerel kayıtlar silinecek. Devam edilsin mi?"
    );

    if (!confirmed) return;

    persistRecords([]);
    setEditingId(null);
    setForm(initialForm);
    setMessage("Bütün yerel kayıtlar temizlendi.");
  }

  return (
    <section className="entry-module">
      <div className="entry-header">
        <div>
          <span className="eyebrow">YKOS YÖNETİM MODÜLÜ</span>
          <h2>{editingId ? "Kaydı Düzenle" : "Yeni Veri Girişi"}</h2>
          <p>
            Ülke, il, kadim merkez, damga, petroglif, yazıt ve höyük
            kayıtlarını standart biçimde sisteme ekleyin.
          </p>
        </div>

        <div className="entry-summary">
          <strong>{records.length}</strong>
          <span>Yerel kayıt</span>
        </div>
      </div>

      {message && (
        <div className="entry-message" role="status">
          {message}
        </div>
      )}

      <form className="entry-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label className="form-field">
            <span>Kayıt Türü</span>

            <select name="type" value={form.type} onChange={updateField}>
              <option>Ülke</option>
              <option>İl</option>
              <option>Antik Kent</option>
              <option>Damga</option>
              <option>Petroglif</option>
              <option>Yazıt</option>
              <option>Höyük</option>
              <option>Mağara</option>
              <option>Mühür</option>
              <option>Kadim Merkez</option>
            </select>
          </label>

          <label className="form-field form-field-wide">
            <span>Başlık *</span>

            <input
              name="title"
              value={form.title}
              onChange={updateField}
              placeholder="Örnek: Tamgalı Petroglif Alanı"
              required
            />
          </label>

          <label className="form-field">
            <span>Ülke</span>

            <input
              name="country"
              value={form.country}
              onChange={updateField}
              placeholder="Örnek: Kazakistan"
            />
          </label>

          <label className="form-field">
            <span>İl / Bölge</span>

            <input
              name="city"
              value={form.city}
              onChange={updateField}
              placeholder="Örnek: Almatı"
            />
          </label>

          <label className="form-field">
            <span>Arkeolojik Alan</span>

            <input
              name="archaeologicalSite"
              value={form.archaeologicalSite}
              onChange={updateField}
              placeholder="Alan, mağara veya höyük adı"
            />
          </label>

          <label className="form-field">
            <span>Dönem</span>

            <input
              name="period"
              value={form.period}
              onChange={updateField}
              placeholder="Paleolitik, Neolitik, Tunç Çağı..."
            />
          </label>

          <label className="form-field">
            <span>Tahmini Tarih</span>

            <input
              name="estimatedDate"
              value={form.estimatedDate}
              onChange={updateField}
              placeholder="Örnek: MÖ 9600–8000"
            />
          </label>

          <label className="form-field form-field-full">
            <span>Açıklama</span>

            <textarea
              name="description"
              value={form.description}
              onChange={updateField}
              placeholder="Kayıt hakkında tarihsel ve arkeolojik açıklama..."
              rows="5"
            />
          </label>

          <label className="form-field form-field-wide">
            <span>Sembol ve Etiketler</span>

            <input
              name="symbols"
              value={form.symbols}
              onChange={updateField}
              placeholder="güneş, spiral, el izi, tekne, dört kol..."
            />
          </label>

          <label className="form-field">
            <span>Kaynak</span>

            <input
              name="source"
              value={form.source}
              onChange={updateField}
              placeholder="Müze, kazı raporu veya yayın"
            />
          </label>

          <label className="form-field form-field-full">
            <span>Görsel Adresi</span>

            <input
              name="imageUrl"
              value={form.imageUrl}
              onChange={updateField}
              placeholder="/images/kayit-gorseli.jpg"
            />
          </label>
        </div>

        <div className="entry-actions">
          <button type="submit" className="primary-button entry-save-button">
            {editingId ? "Değişiklikleri Kaydet" : "Kaydı Sisteme Ekle"}
          </button>

          {editingId && (
            <button
              type="button"
              className="secondary-action-button"
              onClick={cancelEditing}
            >
              Düzenlemeyi İptal Et
            </button>
          )}

          <button
            type="button"
            className="danger-action-button"
            onClick={clearAllRecords}
            disabled={records.length === 0}
          >
            Yerel Kayıtları Temizle
          </button>
        </div>
      </form>

      <div className="records-section">
        <div className="records-heading">
          <div>
            <span className="eyebrow">KAYIT ARŞİVİ</span>
            <h3>Son Eklenen Veriler</h3>
          </div>

          <span>{filteredRecords.length} sonuç</span>
        </div>

        {filteredRecords.length === 0 ? (
          <div className="empty-records">
            Arama ve filtre ölçütlerine uygun kayıt bulunamadı.
          </div>
        ) : (
          <div className="records-grid">
            {filteredRecords.map((record) => (
              <article key={record.id} className="record-card">
                <div
                  className="record-image"
                  style={
                    record.imageUrl
                      ? {
                          backgroundImage: `linear-gradient(to top, rgba(0,0,0,.92), transparent), url("${record.imageUrl}")`,
                        }
                      : undefined
                  }
                >
                  <span>{record.type}</span>
                </div>

                <div className="record-card-body">
                  <div className="record-location">
                    {[record.country, record.city]
                      .filter(Boolean)
                      .join(" · ") || "Konum girilmedi"}
                  </div>

                  <h4>{record.title}</h4>

                  <div className="record-meta">
                    <span>{record.period || "Dönem belirtilmedi"}</span>
                    <strong>
                      {record.estimatedDate || "Tarih belirtilmedi"}
                    </strong>
                  </div>

                  {record.description && (
                    <p>{record.description}</p>
                  )}

                  {record.symbols && (
                    <div className="record-tags">
                      {record.symbols
                        .split(",")
                        .map((tag) => tag.trim())
                        .filter(Boolean)
                        .slice(0, 6)
                        .map((tag) => (
                          <span key={tag}>#{tag}</span>
                        ))}
                    </div>
                  )}

                  <div className="record-actions">
                    <button
                      type="button"
                      onClick={() => startEditing(record)}
                    >
                      Düzenle
                    </button>

                    <button
                      type="button"
                      onClick={() => deleteRecord(record.id)}
                    >
                      Sil
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}