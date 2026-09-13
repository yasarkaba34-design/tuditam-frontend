import { useState } from "react";
import AtlasImportDropzone from "@/components/AtlasImportDropzone";
import AtlasLabel from "@/components/AtlasLabel";

import { YKOSDetectRegion, YKOSRegionLabel, YKOSRegionIcon } from "@/ykos-core/Core";
import { emitRezonanceWave } from "@/atlas/AtlasCamera";
import { animateSpiralFlow } from "@/ykos-linguistic-spiral/LinguisticSpiralLayer";

function AtlasMap() {
  const [label, setLabel] = useState("");
  const [icon, setIcon] = useState("");

  const handleLoad = (payload) => {
    LinguisticSpiralLayer.load(payload.spiral);
    AtlasMap.load(payload.atlas);
    BubbleMatrix.load(payload.bubbleMatrix);
    FluxEngine.restore(payload.flux);

    const region = YKOSDetectRegion(payload);

    if (region) {
      AtlasCamera.zoomTo(region.lat, region.lon, 2.5);
      emitRezonanceWave(region.lat, region.lon);
      animateSpiralFlow(region.lat, region.lon);

      const labelText = YKOSRegionLabel(region);
      const iconSymbol = YKOSRegionIcon(region);

      setLabel(labelText);
      setIcon(iconSymbol);

      console.log("Atlas zoom + rezonans + spiral akışı + etiket + ikon:", labelText, iconSymbol);
    }
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <AtlasCanvas />
      <AtlasImportDropzone onLoad={handleLoad} />

      {label && <AtlasLabel text={label} icon={icon} duration={3000} />}
    </div>
  );
}

export default AtlasMap;
