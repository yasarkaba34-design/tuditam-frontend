import React from "react";
import data from "../data/data.json";
import "../styles/semantic.css";

export default function SemanticArea() {
  const { QuantumFlux, OmniField, CosmicField, Atlas, damgalar } = data;

  return (
    <div className="semantic-area">
      <h2>Semantik Okuma Sonucu</h2>

      <div className="semantic-header">
        <p><strong>QuantumFlux:</strong> {QuantumFlux}</p>
        <p><strong>OmniField:</strong> {OmniField}</p>
        <p><strong>CosmicField:</strong> {CosmicField}</p>
        <p><strong>Atlas:</strong> {Atlas}</p>
      </div>

      <div className="semantic-list">
        {damgalar.map((item) => (
          <div key={item.id} className="semantic-item">
            <h3>{item.hece}</h3>
            <p>{item.kavram}</p>
            <small>{item.cosmic}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
