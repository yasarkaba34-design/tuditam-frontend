import React from 'react';

export const DetailSidebar = ({ selectedNode, onClose }) => {
  if (!selectedNode) return null;

  return (
    <div style={{ position: 'fixed', top: 0, right: 0, height: '100%', width: '350px', backgroundColor: 'rgba(15, 23, 42, 0.95)', borderLeft: '1px solid #334155', color: '#fff', padding: '24px', boxSizing: 'border-box', zIndex: 50, overflowY: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155', paddingBottom: '12px', marginBottom: '24px' }}>
        <h3 style={{ margin: 0, color: '#22d3ee' }}>YKOS ÇÖZÜMLEME</h3>
        <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '20px' }}>✕</button>
      </div>
      <div>
        <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase' }}>Seçilen Eleman</span>
        <h2 style={{ color: '#f59e0b', marginTop: '4px', marginBottom: '16px' }}>{selectedNode.name}</h2>
        <div style={{ backgroundColor: '#020617', padding: '16px', borderRadius: '8px', border: '1px solid #1e293b' }}>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#cbd5e1', margin: 0 }}>
            {selectedNode.description || selectedNode.definition_tr || selectedNode.meaning_tr || "Seçilen düğümün detay analizi..."}
          </p>
        </div>
      </div>
    </div>
  );
};