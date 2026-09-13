import { useEffect } from 'react';
import FluxEngine from '@/flux/FluxEngine';

function SpiralDiagram() {
  useEffect(() => {
    FluxEngine.start();   // motoru başlat
    return () => FluxEngine.stop(); // bileşen kapandığında motoru durdur
  }, []);

  return (
    <svg id="spiral-diagram">
      {/* Spiral halkalar burada çiziliyor */}
    </svg>
  );
}

export default SpiralDiagram;
