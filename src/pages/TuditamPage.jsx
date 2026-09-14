// src/pages/TuditamPage.jsx
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";

const TuditamPage = () => {
  const { t } = useTranslation();

  return (
    <div className="tuditam-layout">
      {/* Üst bar */}
      <header>
        <h1>{t("title")}</h1>
        <p>{t("subtitle")}</p>
        <LanguageSwitcher />
      </header>

      <main className="tuditam-main">
        {/* Sol içerik */}
        <section className="left-panel">
          <h2>{t("verified")}</h2>
          <p>{t("anadolu_layers")}</p>
          {/* diğer metinler: t("...") */}
        </section>

        {/* Sağ sütun – siteyle birlikte çevrilen bölüm */}
        <aside className="right-panel">
          <h3>{t("right_column_title")}</h3>
          <div className="card">
            <span className="label">{t("cave_image")}</span>
            <button>{t("view")}</button>
          </div>

          {/* başka kartlar, hepsi t("...") ile */}
        </aside>
      </main>
    </div>
  );
};

export default TuditamPage;
