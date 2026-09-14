// src/components/Matris.jsx
import React, { useState, useMemo } from "react";
import ykosRoots from "../data/ykos_roots";

const MODULES = [
  { id: "kok", label: "Kök" },
  { id: "hece", label: "Hece" },
  { id: "kelime", label: "Kelime" },
  { id: "ses", label: "Ses" },
  { id: "dil", label: "Dil" },
  { id: "damga", label: "Damga" },
];

function normalizeArray(value) {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function getTextValue(item, keys) {
  if (!item || typeof item !== "object") return "";

  for (const key of keys) {
    const value = item[key];

    if (typeof value === "string" || typeof value === "number") {
      return String(value);
    }
  }

  return "";
}

function normalizeRootRecord(item, index) {
  if (typeof item === "string") {
    return {
      id: `root-${index}`,
      kok: item,
      heceler: [],
      kelimeler: [],
      sesler: [],
      diller: [],
      damgalar: [],
      petroglifler: [],
      yazitlar: [],
      konumlar: [],
      aciklama: "",
      kaynaklar: [],
    };
  }

  const kok =
    getTextValue(item, [
      "root",
      "kok",
      "kök",
      "name",
      "baslik",
      "title",
    ]) || `Kök ${index + 1}`;

  return {
    id: item.id ?? `root-${index}`,
    kok,

    heceler: normalizeArray(
      item.syllables ?? item.heceler ?? item.hece
    ),

    kelimeler: normalizeArray(
      item.words ?? item.kelimeler ?? item.kelime
    ),

    sesler: normalizeArray(
      item.sounds ?? item.sesler ?? item.ses
    ),

    diller: normalizeArray(
      item.languages ?? item.diller ?? item.dil
    ),

    damgalar: normalizeArray(
      item.symbols ?? item.damgalar ?? item.damga
    ),

    petroglifler: normalizeArray(
      item.petroglyphs ?? item.petroglifler ?? item.petroglyph
    ),

    yazitlar: normalizeArray(
      item.inscriptions ?? item.yazitlar
    ),

    konumlar: normalizeArray(
      item.locations ?? item.konumlar
    ),

    aciklama: item.description ?? item.aciklama ?? "",

    kaynaklar: normalizeArray(
      item.sources ?? item.kaynaklar
    ),
  };
}

function itemToText(item) {
  if (typeof item === "string" || typeof item === "number") {
    return String(item);
  }

  if (item && typeof item === "object") {
    const country = item.country ?? item.ulke;
    const city = item.city ?? item.il ?? item.yer;

    if (country || city) {
      return [country, city].filter(Boolean).join(" / ");
    }

    return (
      getTextValue(item, [
        "ad",
        "name",
        "baslik",
        "title",
        "deger",
        "value",
        "kod",
        "code",
      ]) || JSON.stringify(item)
    );
  }

  return "";
}

export default function Matris({
  query = "",
  filter = "all",
  matrixType = "m8",
}) {
  const [activeModule, setActiveModule] = useState("kok");
  const [selectedRootId, setSelectedRootId] = useState(null);

  const records = useMemo(() => {
    const source = Array.isArray(ykosRoots)
      ? ykosRoots
      : ykosRoots?.roots ?? ykosRoots?.data ?? [];

    return source.map(normalizeRootRecord);
  }, []);

  const filteredRecords = useMemo(() => {
    const normalizedQuery = query
      .trim()
      .toLocaleLowerCase("tr-TR");

    if (!normalizedQuery) return records;

    return records.filter((record) => {
      const searchableText = [
        record.kok,
        ...record.heceler.map(itemToText),
        ...record.kelimeler.map(itemToText),
        ...record.sesler.map(itemToText),
        ...record.diller.map(itemToText),
        ...record.damgalar.map(itemToText),
        ...record.petroglifler.map(itemToText),
        ...record.yazitlar.map(itemToText),
        ...record.konumlar.map(itemToText),
        record.aciklama,
        ...record.kaynaklar.map(itemToText),
      ]
        .join(" ")
        .toLocaleLowerCase("tr-TR");

      return searchableText.includes(normalizedQuery);
    });
  }, [query, records]);

  const selectedRoot =
    filteredRecords.find(
      (record) => record.id === selectedRootId
    ) ??
    filteredRecords[0] ??
    null;

  function getModuleItems() {
    if (activeModule === "kok") {
      return filteredRecords.map((record) => ({
        id: record.id,
        label: record.kok,
      }));
    }

    if (!selectedRoot) return [];

    const fieldMap = {
      hece: "heceler",
      kelime: "kelimeler",
      ses: "sesler",
      dil: "diller",
      damga: "damgalar",
    };

    const fieldName = fieldMap[activeModule];
    const values = selectedRoot[fieldName] ?? [];

    return values.map((item, index) => ({
      id: `${activeModule}-${index}`,
      label: itemToText(item),
    }));
  }

  function handleItemClick(item) {
    if (activeModule === "kok") {
      setSelectedRootId(item.id);
      setActiveModule("hece");
    }
  }

  const moduleItems = getModuleItems();

  return (
    <section style={styles.container}>
      <div style={styles.headingRow}>
        <div>
          <h2 style={styles.title}>Matris Modülü</h2>

          <p style={styles.text}>
            {matrixType.toUpperCase()} matrisi üzerinden kök, hece,
            kelime, ses, dil ve damga ilişkilerini inceleyin.
          </p>
        </div>

        <div style={styles.infoBadge}>
          {filteredRecords.length} kök
        </div>
      </div>

      <div style={styles.grid}>
        {MODULES.map((module) => {
          const isActive = activeModule === module.id;

          return (
            <button
              key={module.id}
              type="button"
              onClick={() => setActiveModule(module.id)}
              style={{
                ...styles.card,
                ...(isActive ? styles.activeCard : {}),
              }}
            >
              {module.label}
            </button>
          );
        })}
      </div>

      <div style={styles.resultPanel}>
        <div style={styles.resultHeader}>
          <div>
            <span style={styles.resultLabel}>Seçili bölüm</span>

            <h3 style={styles.resultTitle}>
              {
                MODULES.find(
                  (item) => item.id === activeModule
                )?.label
              }
            </h3>
          </div>

          {selectedRoot && activeModule !== "kok" && (
            <div style={styles.selectedRoot}>
              Kök: <strong>{selectedRoot.kok}</strong>
            </div>
          )}
        </div>

        {filter !== "all" && (
          <div style={styles.filterNotice}>
            Aktif filtre: {filter}
          </div>
        )}

        {moduleItems.length > 0 ? (
          <div style={styles.itemGrid}>
            {moduleItems.map((item) => {
              const isSelected =
                activeModule === "kok" &&
                selectedRoot?.id === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleItemClick(item)}
                  style={{
                    ...styles.itemButton,
                    ...(isSelected
                      ? styles.selectedItem
                      : {}),
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        ) : (
          <div style={styles.emptyState}>
            Bu bölüm için henüz kayıt bulunmuyor.
          </div>
        )}

        {selectedRoot && (
          <div style={styles.detailPanel}>
            <div>
              <strong>Açıklama:</strong>{" "}
              {selectedRoot.aciklama || "Henüz açıklama yok."}
            </div>

            <div>
              <strong>Petroglif:</strong>{" "}
              {selectedRoot.petroglifler?.length > 0
                ? selectedRoot.petroglifler.map(itemToText).join(", ")
                : "Yok"}
            </div>

            <div>
              <strong>Yazıt:</strong>{" "}
              {selectedRoot.yazitlar?.length > 0
                ? selectedRoot.yazitlar.map(itemToText).join(", ")
                : "Yok"}
            </div>

            <div>
              <strong>Konum:</strong>{" "}
              {selectedRoot.konumlar?.length > 0
                ? selectedRoot.konumlar.map(itemToText).join(", ")
                : "Yok"}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

const styles = {
  container: {
    padding: "20px",
    background: "#0f0f0f",
    color: "#fff",
    borderRadius: "10px",
    border: "1px solid #222",
  },
  headingRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "16px",
  },
// FILE: src/components/Matris.jsx

import React from "react";

export default function Matris() {
  return (
    <div
      style={{
        background: "#111",
        padding: "20px",
        borderRadius: "10px",
        color: "#fff",
        marginTop: "20px"
      }}
    >
      <h2 style={{ color: "#d4af37" }}>Matris Bileşeni</h2>

      <p>
        Bu bileşen YKOS Matris modülünün temel görüntü alanıdır.
        Şu anda statik çalışıyor, istersen veri akışı bağlayabiliriz.
      </p>

      <div
        style={{
          marginTop: "15px",
          padding: "10px",
          background: "#222",
          borderRadius: "8px"
        }}
      >
        <strong>Matris Alanı</strong>
      </div>
    </div>
  );
}
// FILE: src/components/Matris.jsx

import React from "react";
import { sendFeedback } from "../mega/YKOSFeedback.js";

export default function Matris() {
  return (
    <div style={{ background: "#111", padding: "20px", borderRadius: "10px", color: "#fff" }}>
      <h2 style={{ color: "#d4af37" }}>Matris Bileşeni</h2>

      <button
        onClick={() => sendFeedback("layerA_plus", 5)}
        style={{ marginRight: "10px" }}
      >
        Layer A +5
      </button>

      <button
        onClick={() => sendFeedback("layerA_minus", 5)}
      >
        Layer A -5
      </button>
    </div>
  );
}
// FILE: src/components/Matris.jsx

import { sendCrossSignal } from "../mega/CrossModuleRouter.js";

<button onClick={() => sendCrossSignal("kalkan", 3)}>
  Kalkan LayerB +3
</button>
