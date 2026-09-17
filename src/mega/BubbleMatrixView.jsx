import { useEffect, useState } from "react";
import WorldMap from "./WorldMap";
import BubbleInfoPanel from "./BubbleInfoPanel";

export default function BubbleMatrixView({ db }) {
  const [geoBubbles, setGeoBubbles] = useState([]);
  const [geoCenters, setGeoCenters] = useState([]);
  const [geoHeatmap, setGeoHeatmap] = useState([]);
  const [selectedBubble, setSelectedBubble] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function load() {
      const { bubbleMatrix, bubbleFlux, clusterEngine, atlasMap } = await bootstrapYKOS(db);

      const rows = await bubbleMatrix.getBubbles();
      const normalized = rows.map(r => r.bubble).filter(Boolean);

      const clusters = clusterEngine.cluster(normalized);

      const centers = clusters.map(cluster => {
        const cx = cluster.reduce((sum, b) => sum + b.x, 0) / cluster.length;
        const cy = cluster.reduce((sum, b) => sum + b.y, 0) / cluster.length;
        return { x: cx, y: cy };
      });

      setGeoBubbles(normalized.map(b => atlasMap.toGeo(b)));
      setGeoCenters(centers.map(c => atlasMap.centerToGeo(c)));
      setGeoHeatmap(
        normalized.map(b => ({
          ...atlasMap.toGeo(b),
          intensity: b.weight || Math.random()
        }))
      );

      setInterval(() => {
        const flux = {
          dx: Math.random() - 0.5,
          dy: Math.random() - 0.5,
          intensity: Math.random()
        };

        const updated = normalized.map(b => bubbleFlux.applyFlux(b, flux));
        const updatedClusters = clusterEngine.cluster(updated);

        const updatedCenters = updatedClusters.map(cluster => {
          const cx = cluster.reduce((sum, b) => sum + b.x, 0) / cluster.length;
          const cy = cluster.reduce((sum, b) => sum + b.y, 0) / cluster.length;
          return { x: cx, y: cy };
        });

        setGeoBubbles(updated.map(b => atlasMap.toGeo(b)));
        setGeoCenters(updatedCenters.map(c => atlasMap.centerToGeo(c)));
        setGeoHeatmap(
          updated.map(b => ({
            ...atlasMap.toGeo(b),
            intensity: b.weight || Math.random()
          }))
        );
      }, 200);
    }

    load();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <WorldMap
        bubbles={geoBubbles}
        centers={geoCenters}
        heatmap={geoHeatmap}
        onBubbleClick={setSelectedBubble}
      />

      <BubbleInfoPanel
        bubble={selectedBubble}
        onClose={() => setSelectedBubble(null)}
      />
    </div>
  );
}
