/**
 * YKOS – Gerçek Zamanlı Motor Log Akışı (SSE)
 */

import { logBuffer } from './logBuffer';

export default function handler(req, res) {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  let lastIndex = 0;

  const interval = setInterval(() => {
    while (lastIndex < logBuffer.length) {
      const line = logBuffer[lastIndex];
      res.write(`data: ${line}\n\n`);
      lastIndex++;
    }
  }, 500);

  req.on("close", () => {
    clearInterval(interval);
  });
}
