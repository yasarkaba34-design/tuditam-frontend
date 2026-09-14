import React from "react";
import "../styles/topmenu.css";

const MENU_ITEMS = [
  "Ana Sayfa",
  "Hakkında",
  "Metodoloji",
  "Atlas",
  "Araştırmacılar",
  "Kurumsal İşbirlikleri",
  "İletişim",
];

export default function TopMenu({
  activeItem,
  onItemSelect,
}) {
  return (
    <nav className="ykos-top-menu" aria-label="Ana menü">
      {MENU_ITEMS.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onItemSelect(item)}
          className={
            activeItem === item
              ? "ykos-top-menu-button active"
              : "ykos-top-menu-button"
          }
        >
          {item}
        </button>
      ))}
    </nav>
  );
}