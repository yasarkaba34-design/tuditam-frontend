import { useState } from "react";
import "./ArchivePanel.css";

/**
 * ArchivePanel
 * YKOS Canlı Arşiv verilerini gösteren panel.
 * Props:
 *  - archive: arşiv listesi (id, title, type, date, description, file)
 *  - onClose: paneli kapatma işlevi
 */
export default function ArchivePanel({ archive, onClose }) {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="archive-panel">
      <div className="archive-header">
        <h2>Canlı Arşiv</h2>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>

      <div className="archive-list">
        {archive.map(item => (
          <div
            key={item.id}
            className={`archive-item ${activeItem?.id === item.id ? "active" : ""}`}
            onClick={() => setActiveItem(item)}
          >
            <h3>{item.title}</h3>
            <p className="archive-type">{item.type}</p>
            <p className="archive-date">{item.date}</p>
          </div>
        ))}
      </div>

      <div className="archive-details">
        {activeItem ? (
          <>
            <h3>{activeItem.title}</h3>
            <p className="archive-description">{activeItem.description}</p>

            {activeItem.file && (
              <a
                className="download-btn"
                href={activeItem.file}
                download
              >
                Dosyayı İndir
              </a>
            )}
          </>
        ) : (
          <p className="placeholder">Bir arşiv kaydı seçiniz.</p>
        )}
      </div>
    </div>
  );
}
