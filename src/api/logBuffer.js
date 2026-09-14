// YKOS – Motor Log Buffer (Global)
export const logBuffer = [];
export function pushLog(line) {
  logBuffer.push(`[${new Date().toLocaleTimeString()}] ${line}`);
}
