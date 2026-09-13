// FluxSurface3D.jsx (GÜNCEL)
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function FluxSurface3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(60, 1.6, 0.1, 1000);
    camera.position.set(0, 20, 40);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(800, 500);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(60, 60, 80, 80);
    const material = new THREE.MeshPhongMaterial({
      color: 0x111111,
      emissive: 0x222222,
      side: THREE.DoubleSide,
    });
    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI / 2;
    scene.add(plane);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    let tick = 0;
    let flux = 0;

    async function fetchFlux() {
      try {
        const res = await fetch("/api/ykos-flux");
        const data = await res.json();
        tick = data.tick;
        flux = parseFloat(data.flux);
      } catch (e) {
        console.log("Flux API bağlantı hatası");
      }
    }

    function animate() {
      geometry.vertices.forEach((v) => {
        v.z =
          Math.sin((v.x + tick) * 0.15) *
          Math.cos((v.y + tick) * 0.15) *
          (flux * 4); // 3D dalga yüksekliği = flux
      });

      geometry.verticesNeedUpdate = true;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    const interval = setInterval(fetchFlux, 500);
    animate();

    return () => clearInterval(interval);
  }, []);

  return <div ref={mountRef}></div>;
}
