// FILE: src/mega/CrossModuleRouter.js

export function sendCrossSignal(target, payload) {
  window.__YKOS_CROSS__ = { target, payload };
}
