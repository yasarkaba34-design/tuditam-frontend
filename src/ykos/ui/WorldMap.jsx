import { MapContainer, TileLayer, Marker, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function WorldMap({ bubbles, centers, heatmap, onBubbleClick }) {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {bubbles.map((b, i) => (
        <Marker
          key={i}
          position={[b.lat, b.lng]}
          eventHandlers={{
            click: () => onBubbleClick(b)
          }}
        />
      ))}

      {centers.map((c, i) => (
        <Circle
          key={i}
          center={[c.lat, c.lng]}
          radius={500000}
          pathOptions={{ color: "yellow" }}
        />
      ))}

      {heatmap.map((h, i) => (
        <Circle
          key={i}
          center={[h.lat, h.lng]}
          radius={200000}
          pathOptions={{
            color: "red",
            fillOpacity: h.intensity
          }}
        />
      ))}
    </MapContainer>
  );
}
