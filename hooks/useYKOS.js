// useYKOS.js
import { useEffect } from "react";
import { YKOS } from "../YKOS Core/YKOSPublicInterface";


export const useYKOS = () => {

  // YKOS döngüsünü başlat/durdur
  useEffect(() => {
    YKOS.startLoop();
    return () => YKOS.stopLoop();
  }, []);

  // UI tarafında kullanılacak hazır fonksiyonlar
  return {
    ...YKOS,

    // -------------------------------
    // MODE SHORTCUTS
    // -------------------------------
    setStatic: () => YKOS.setMode("static"),
    setBreathing: () => YKOS.setMode("breathing"),
    setFlow: () => YKOS.setMode("flow"),
    setPulse: () => YKOS.setMode("pulse"),
    setFullCycle: () => YKOS.setMode("fullcycle"),

    // -------------------------------
    // TRANSITIONS
    // -------------------------------
    fadeToFlow: () => YKOS.fadeTo("flow", 1.2),
    fadeToPulse: () => YKOS.fadeTo("pulse", 1.0),
    fadeToFull: () => YKOS.fadeTo("fullcycle", 1.5),

    blendToFlow: () => YKOS.blendTo("flow", 1.0),
    blendToPulse: () => YKOS.blendTo("pulse", 1.0),

    // -------------------------------
    // FLOW CONTROL
    // -------------------------------
    boostFlow: () => YKOS.setFlow(1.3),
    calmFlow: () => YKOS.setFlow(0.7),
    neutralFlow: () => YKOS.setFlow(1.0),

    // -------------------------------
    // PHASE CONTROL
    // -------------------------------
    resetPhase: () => YKOS.setPhase(0),
    halfPhase: () => YKOS.setPhase(Math.PI / 2),
    fullPhase: () => YKOS.setPhase(Math.PI * 2),

    // -------------------------------
    // COLOR CONTROL
    // -------------------------------
    warmColors: () => YKOS.setColor("warm", 1.1, 0.9),
    coldColors: () => YKOS.setColor("cold", 1.0, 1.2),
    neutralColors: () => YKOS.setColor("neutral", 1.0, 1.0),

    // -------------------------------
    // BUBBLE / FLUX TRIGGERS
    // -------------------------------
    pulseBubbles: () => YKOS.setMode("pulse"),
    flowBubbles: () => YKOS.setMode("flow"),

    // -------------------------------
    // SYSTEM STATE
    // -------------------------------
    getState: () => YKOS.getState(),
    setState: (s) => YKOS.setState(s),
  };
};
