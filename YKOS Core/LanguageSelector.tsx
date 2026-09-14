import { YKOS_LANGUAGES } from "../YKOS Core/languages";
{YKOS_LANGUAGES.map(lang => (
  <option key={lang.code} value={lang.code}>
    {lang.name}
  </option>
))}
