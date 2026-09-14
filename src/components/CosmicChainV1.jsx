import React, { useState, useEffect } from "react";

export default function CosmicChainV1() {
  const [state, setState] = useState({
    tick: 0,
    flow: [],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setState((prev) => ({
        tick: prev.tick + 1,
        flow: [...prev.flow, `V1-${prev.tick}`],
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <h2>CosmicChain V1</h2>

      <div style={styles.block}>
        <strong>Tick:</strong> {state.tick}
      </div>

      <div style={styles.block}>
        <strong>Akış:</strong> {state.flow.join(" → ")}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    background: "#0f0f0f",
    color: "#fff",
    borderRadius: "10px",
    border: "1px solid #222",
    marginTop: "20px",
  },
  block: {
    marginTop: "10px",
    padding: "10px",
    background: "#151515",
    borderRadius: "6px",
    border: "1px solid #333",
  },
};
