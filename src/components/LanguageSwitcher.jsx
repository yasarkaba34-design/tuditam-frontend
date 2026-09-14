// src/components/LanguageSwitcher.jsx
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // TÜM siteyi çevirir (sağ sütun dahil)
  };

  return (
    <div className="lang-switcher">
      <button onClick={() => changeLanguage("tr")}>TR</button>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("ja")}>JA</button>
    </div>
  );
};

export default LanguageSwitcher;
