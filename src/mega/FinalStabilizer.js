// FILE: src/mega/FinalStabilizer.js

export function stabilizeYKOS() {
  window.__YKOS_FLOW_ACTIVE__ = false;
  window.__YKOS_FEEDBACK__ = null;
  window.__YKOS_CROSS__ = null;
}
// FILE: src/mega/FinalStabilizer.js

export function openYKOS() {
  window.__YKOS_FLOW_ACTIVE__ = true;
}
