// FILE: src/mega/InterModuleFlow.jsx

import React, { useState, useEffect } from "react";
import { generateChainStep } from "./Chain.jsx";
import { quantumProcess } from "./QuantumEngine.jsx";
import { layerResolve } from "./LayerSystem.jsx";

export default function InterModuleFlow() {
  const [step, setStep] = useState(0);
  const [chainValue, setChainValue] = useState("");
  const [quantum, setQuantum] = useState({});
  const [layers, setLayers] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const chain = generateChainStep(step);
      const q = quantumProcess(chain);
      const l = layerResolve(q);

      setChainValue(chain);
      setQuantum(q);
      setLayers(l);

      setStep((s) => s + 1);
    }, 1500);

    return () => clearInterval(interval);
  }, [step]);

  return (
    <div style={{ padding: "20px", background: "#111", color: "#fff", borderRadius: "10px" }}>
      <h2 style={{ color: "#d4af37" }}>🔄 YKOS Inter‑Module Flow</h2>

      <p>Chain: <strong>{chainValue}</strong></p>
      <p>Quantum OmniField: <strong>{quantum.omniField}</strong></p>
      <p>Quantum Flux: <strong>{quantum.flux}</strong></p>
      <p>Layer A: <strong>{layers.layerA}</strong></p>
      <p>Layer B: <strong>{layers.layerB}</strong></p>
      <p>Layer C: <strong>{layers.layerC}</strong></p>
    </div>
  );
}
// FILE: src/mega/InterModuleFlow.jsx

useEffect(() => {
  const interval = setInterval(() => {
    const feedback = window.__YKOS_FEEDBACK__;

    if (feedback) {
      if (feedback.type === "layerA_plus") {
        setLayers((prev) => ({
          ...prev,
          layerA: prev.layerA + feedback.value
        }));
      }

      if (feedback.type === "layerA_minus") {
        setLayers((prev) => ({
          ...prev,
          layerA: prev.layerA - feedback.value
        }));
      }

      window.__YKOS_FEEDBACK__ = null;
    }
  }, 300);

  return () => clearInterval(interval);
}, []);
// FILE: src/mega/InterModuleFlow.jsx

useEffect(() => {
  const interval = setInterval(() => {
    const cross = window.__YKOS_CROSS__;

    if (cross) {
      if (cross.target === "kalkan") {
        setLayers((prev) => ({
          ...prev,
          layerB: prev.layerB + cross.payload
        }));
      }

      if (cross.target === "goc") {
        setQuantum((prev) => ({
          ...prev,
          flux: prev.flux + cross.payload
        }));
      }

      if (cross.target === "atlas") {
        setQuantum((prev) => ({
          ...prev,
          omniField: prev.omniField + cross.payload
        }));
      }

      window.__YKOS_CROSS__ = null;
    }
  }, 300);

  return () => clearInterval(interval);
}, []);
// FILE: src/mega/InterModuleFlow.jsx

import { autoDecision } from "./AutoDecisionCore.js";
import { sendCrossSignal } from "./CrossModuleRouter.js";

useEffect(() => {
  const interval = setInterval(() => {
    const decision = autoDecision({
      chain: chainValue,
      quantum,
      layers
    });

    if (decision) {
      sendCrossSignal(decision.target, decision.payload);
    }
  }, 2000);

  return () => clearInterval(interval);
}, [chainValue, quantum, layers]);
// FILE: src/mega/InterModuleFlow.jsx

import { openYKOS } from "./FinalStabilizer.js";

useEffect(() => {
  if (window.__YKOS_FLOW_ACTIVE__ === true) {
    console.log("YKOS akışı yeniden açıldı.");
  }
}, []);
// FILE: src/mega/InterModuleFlow.jsx

import { autoExpand } from "./AutoDecisionCore.js";

useEffect(() => {
  const interval = setInterval(() => {
    const expansion = autoExpand({
      chain: chainValue,
      quantum,
      layers
    });

    if (expansion) {
      if (expansion.target === "quantum") {
        setQuantum((prev) => ({
          ...prev,
          omniField: prev.omniField + expansion.payload
        }));
      }

      if (expansion.target === "chain") {
        setChainValue((prev) => prev + expansion.payload);
      }
    }
  }, 2500);

  return () => clearInterval(interval);
}, [chainValue, quantum, layers]);
// FILE: src/mega/InterModuleFlow.jsx

useEffect(() => {
  const interval = setInterval(() => {
    const quantumData = computeQuantum(chainValue);
    setQuantum(quantumData);
  }, 1500);

  return () => clearInterval(interval);
}, [chainValue]);
