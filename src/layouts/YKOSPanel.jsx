import { useYKOS } from "../../hooks/useYKOS";

import { useState } from "react";

export const YKOSPanel = () => {
  const ykos = useYKOS();
  const [activeMode, setActiveMode] = useState("static");

  const handleModeChange = (modeFn, modeName) => {
    modeFn();
    setActiveMode(modeName);
  };

  return (
    <div className="ykos-panel">
      {["Static", "Flow", "Pulse", "FullCycle"].map((mode) => (
        <button
          key={mode}
          onClick={() => handleModeChange(ykos[`set${mode}`], mode.toLowerCase())}
          className={activeMode === mode.toLowerCase() ? "active" : ""}
        >
          {mode}
        </button>
      ))}
    </div>
  );
};
<button
  className="visualize-btn"
  onClick={() => ykos.setFullCycle()}
>
  BALONCUK MATRİSİNİ GÖRSELLEŞTİR
</button>
