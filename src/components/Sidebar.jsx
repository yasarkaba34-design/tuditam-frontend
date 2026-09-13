import React from "react";
import "../styles/sidebar.css";

const MENU_GROUPS = [
  {
    title: "ANALİZ MERKEZİ",
    isMatrices: true,
    items: [
      {
        id: "m8",
        label: "m8 Matrisi",
        icon: "◆",
      },
      {
        id: "m11",
        label: "m11 Matrisi",
        icon: "◇",
      },
      {
        id: "m12",
        label: "m12 Matrisi",
        icon: "○",
      },
      {
        id: "matrix-network",
        label: "YKOS Matris",
        icon: "🕸️",
        external: true,
        url: "https://www.ykos.org/",
      },
    ],
  },
  {
    title: "VERİ ATLASLARI",
    items: [
      {
        id: "dunya",
        label: "Dünya Atlası",
        icon: "🌍",
      },
      {
        id: "turkiye",
        label: "Türkiye Atlası",
        icon: "🇹🇷",
      },
      {
        id: "damga-atlasi",
        label: "Damga Atlası",
        icon: "◆",
      },
      {
        id: "petroglif",
        label: "Petroglif Atlası",
        icon: "🪨",
      },
    ],
  },
  {
    title: "SİSTEM",
    items: [
      {
        id: "veri-girisi",
        label: "Veri Girişi",
        icon: "➕",
      },
    ],
  },
];

export default function Sidebar({ activeTab, onTabSelect }) {
  const handleItemClick = (item) => {
    if (item.external && item.url) {
      window.open(item.url, "_blank", "noopener,noreferrer");
      return;
    }

    if (typeof onTabSelect === "function") {
      onTabSelect(item.id);
    }
  };

  const handleKeyDown = (event, item) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleItemClick(item);
    }
  };

  return (
    <aside className="ykos-sidebar" aria-label="YKOS ana menüsü">
      <div className="ykos-sidebar-brand">
        <div className="ykos-sidebar-logo" aria-hidden="true">
          YKOS
        </div>

        <div className="ykos-sidebar-brand-text">
          <strong>YKOS</strong>
          <small>Bilgi Sistemi</small>
        </div>
      </div>

      <div className="ykos-sidebar-content">
        <nav className="ykos-sidebar-nav">
          {MENU_GROUPS.map((group) => (
            <section
              key={group.title}
              className={[
                "ykos-sidebar-section",
                group.isMatrices
                  ? "ykos-sidebar-section--matrices"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
              aria-labelledby={`sidebar-${group.title
                .toLocaleLowerCase("tr-TR")
                .replaceAll(" ", "-")}`}
            >
              <div
                id={`sidebar-${group.title
                  .toLocaleLowerCase("tr-TR")
                  .replaceAll(" ", "-")}`}
                className="ykos-sidebar-group-title"
              >
                {group.title}
              </div>

              <div className="ykos-sidebar-items">
                {group.items.map((item) => {
                  const isActive =
                    !item.external && activeTab === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      className={[
                        "ykos-sidebar-item",
                        isActive ? "active" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      onClick={() => handleItemClick(item)}
                      onKeyDown={(event) =>
                        handleKeyDown(event, item)
                      }
                      aria-current={isActive ? "page" : undefined}
                      aria-label={
                        item.external
                          ? `${item.label} yeni sekmede açılır`
                          : item.label
                      }
                      title={
                        item.external
                          ? `${item.label} — yeni sekmede aç`
                          : item.label
                      }
                    >
                      <span
                        className="ykos-sidebar-icon"
                        aria-hidden="true"
                      >
                        {item.icon}
                      </span>

                      <span className="ykos-sidebar-label">
                        {item.label}
                      </span>

                      {item.external && (
                        <span
                          className="ykos-sidebar-external-icon"
                          aria-hidden="true"
                        >
                          ↗
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </section>
          ))}
        </nav>
      </div>

      <footer className="ykos-sidebar-footer">
        <div className="ykos-sidebar-status">
          <span
            className="ykos-sidebar-status-dot"
            aria-hidden="true"
          />
          <span>Sistem Aktif</span>
        </div>

        <div className="ykos-sidebar-version">
          YKOS v1.0 Beta
        </div>
      </footer>
    </aside>
  );
}