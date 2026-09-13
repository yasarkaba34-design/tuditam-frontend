import { useState } from "react";
import AtlasMap from "@/mega/AtlasMap";
import { ykosCore } from "@/mega/ykos-core";

export default function Home() {
  const [bubble, setBubble] = useState(null);

  ykosCore.updateBubbleMatrix = (evaluated) => {
    const atlasData = bindAtlas(evaluated);
    const fluxValue = ykosFlux.value;

    const newBubble = createBubble(evaluated, atlasData, fluxValue);
    setBubble(newBubble);
  };

  return <AtlasMap bubble={bubble} />;
}
