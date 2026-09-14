import { YKOS_ROOTS } from "../data/ykos_roots";
import { YKOS_GEO } from "../data/ykos_geo";
import { YKOS_LAYERS } from "../components/LayerSystem";

export const YKOS_API = {
  root(kok) {
    const key = kok.toUpperCase();
    return {
      root: key,
      ...YKOS_ROOTS[key],
      geo: YKOS_GEO[key],
      layers: YKOS_LAYERS[key]
    };
  }
};
