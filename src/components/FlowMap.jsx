// FILE: src/components/FlowMap.jsx
import { useContext, useEffect, useRef } from "react";
import { FluxContext } from "../context/FluxContext";
import * as THREE from "three";

export default function FlowMap() {
  const mountRef = useRef(null);
  const { tick, flux } = useContext(FluxContext);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(60, 1.6, 0.1, 1000);
    camera.position.set(0, 25, 45);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(800, 500);
    mountRef.current.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffd700, 1);
    light.position.set(0, 50, 50);
    scene.add(light);

    // === DALGA YÜZEYİ ===
    const geometry = new THREE.PlaneGeometry(60, 60, 80, 80);
    const material = new THREE.MeshPhongMaterial({
      color: 0x111111,
      emissive: 0x222222,
      side: THREE.DoubleSide,
      flatShading: true,
    });
    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI / 2;
    scene.add(plane);

    // === DAMGA SPRITE YÜKLEYİCİ ===
    const loader = new THREE.TextureLoader();
    const damgaTextures = [
      loader.load("/damgalar/OK.png"),
      loader.load("/damgalar/AT.png"),
      loader.load("/damgalar/ER.png"),
      loader.load("/damgalar/BAL.png"),
    ];

    // === KIVRIMLI ROTLAR ===
    const curveSouth = new THREE.CubicBezierCurve3(
      new THREE.Vector3(-10, 3, -10),
      new THREE.Vector3(0, 5, 5),
      new THREE.Vector3(15, 5, 10),
      new THREE.Vector3(25, 3, 0)
    );

    const curveWest = new THREE.CubicBezierCurve3(
      new THREE.Vector3(-25, 3, 5),
      new THREE.Vector3(-10, 5, 12),
      new THREE.Vector3(5, 5, 15),
      new THREE.Vector3(20, 3, 15)
    );

    // === GLOW + BLUR YOL KATMANLARI ===
    function createGlowAndBlur(curve) {
      const points = curve.getPoints(150);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);

      // Glow çizgisi
      const glowMaterial = new THREE.LineBasicMaterial({
        color: flux >= 0 ? 0xffd700 : 0xa020f0,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
      });

      const glowLine = new THREE.Line(geometry, glowMaterial);
      scene.add(glowLine);

      // Blur çizgisi (daha geniş, daha yumuşak)
      const blurMaterial = new THREE.LineBasicMaterial({
        color: flux >= 0 ? 0xffe066 : 0xc060ff,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending,
      });

      const blurLine = new THREE.Line(geometry, blurMaterial);
      blurLine.scale.set(1.05, 1.05, 1.05); // hafif genişlik
      scene.add(blurLine);

      return { glowLine, blurLine };
    }

    const southLines = createGlowAndBlur(curveSouth);
    const westLines = createGlowAndBlur(curveWest);

    // === DAMGA PARTİKÜLLERİ ===
    const damgaCount = 40 + Math.floor(Math.abs(flux) * 60);
    const damgaSouth = [];
    const damgaWest = [];

    function createDamga(curve, list) {
      for (let i = 0; i < damgaCount; i++) {
        const texture = damgaTextures[i % damgaTextures.length];
        const spriteMaterial = new THREE.SpriteMaterial({
          map: texture,
          color: flux >= 0 ? 0xffd700 : 0xa020f0,
          transparent: true,
          opacity: 0.9,
        });

        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.scale.set(3, 3, 1);

        const start = curve.getPoint(0);
        sprite.position.copy(start);

        scene.add(sprite);
        list.push({ sprite, t: Math.random() });
      }
    }

    createDamga(curveSouth, damgaSouth);
    createDamga(curveWest, damgaWest);

    // === ANİMASYON ===
    function animate() {
      // Dalga yüzeyi
      const pos = geometry.attributes.position;
      const count = pos.count;

      for (let i = 0; i < count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        const z =
          Math.sin((x + tick) * 0.15) *
          Math.cos((y + tick) * 0.15) *
          (flux * 4);
        pos.setZ(i, z);
      }
      pos.needsUpdate = true;

      // Damga partikülleri
      damgaSouth.forEach((obj) => {
        obj.t += 0.002 + flux * 0.001 + tick * 0.00001;
        if (obj.t > 1) obj.t = 0;
        obj.sprite.position.copy(curveSouth.getPoint(obj.t));
      });

      damgaWest.forEach((obj) => {
        obj.t += 0.002 + flux * 0.001 + tick * 0.00001;
        if (obj.t > 1) obj.t = 0;
        obj.sprite.position.copy(curveWest.getPoint(obj.t));
      });

      // === GLOW + BLUR + PULSE ===
      const pulse = 0.7 + Math.sin(tick * 0.1) * (0.3 + Math.abs(flux) * 0.2);

      southLines.glowLine.material.opacity = pulse;
      southLines.blurLine.material.opacity = pulse * 0.5;

      westLines.glowLine.material.opacity = pulse;
      westLines.blurLine.material.opacity = pulse * 0.5;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    animate();
  }, [tick, flux]);

  return <div ref={mountRef}></div>;
}
