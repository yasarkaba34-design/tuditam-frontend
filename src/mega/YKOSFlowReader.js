// FILE: src/mega/YKOSFlowReader.js

export function readYKOSFlow() {
  return window.__YKOS_FLOW__ || null;
}
// FILE: src/mega/YKOSFeedback.js

export function sendFeedback(type, value) {
  window.__YKOS_FEEDBACK__ = { type, value };
}
