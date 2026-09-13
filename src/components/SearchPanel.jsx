import React from "react";
import "../styles/searchpanel.css";

const FILTERS = [
  "Hepsi",
  "Ülke",
  "İl",
  "Antik Kent",
  "Damga",
  "Petroglif",
  "Yazıt",
  "Höyük",
];

export default function SearchPanel({
  searchQuery,
  onSearchChange,
  activeFilter,
  onFilterChange,
}) {
  return (
    <section className="ykos-search-panel">
      <div className="ykos-search-row">
        <span className="ykos-search-icon">⌕</span>

        <input
          type="search"
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Damga, kök hece, ülke, il veya kadim merkez ara..."
        />

        {searchQuery && (
          <button
            type="button"
            className="ykos-search-clear"
            onClick={() => onSearchChange("")}
            aria-label="Aramayı temizle"
          >
            ×
          </button>
        )}
      </div>

      <div className="ykos-filter-row">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => onFilterChange(filter)}
            className={
              activeFilter === filter
                ? "ykos-filter-button active"
                : "ykos-filter-button"
            }
          >
            {filter}
          </button>
        ))}
      </div>
    </section>
  );
}