// ---------------------------------------------------------
// 1) MOTOR STATE (Canlı akış)
// ---------------------------------------------------------
export const motorState = {
  flux: 0,
  tick: 0,
  entropy: 0,
  quantumField: 0,
  cosmicField: 0
};

// Motor güncelleme (her saniye)
export function updateMotor() {
  motorState.tick += 1;
  motorState.flux = (Math.random() * 2 - 1).toFixed(4);
  motorState.entropy = Math.random().toFixed(4);
  motorState.quantumField = (Math.random() * 2 - 1).toFixed(4);
  motorState.cosmicField = (Math.random() * 2 - 1).toFixed(4);
}

// ---------------------------------------------------------
// 2) MATRIX STATE (Baloncuklar)
// ---------------------------------------------------------
export let matrixState = [
  // Örnek baloncuklar — senin gerçek kök hece verilerin buraya gelecek
  { root: "A", damga: "𐤀", kavram: "ilk", rota: "Anadolu", position: {x: 0, y: 0}, resonanceBase: 0.5 },
  { root: "KA", damga: "𐤊", kavram: "taş", rota: "Göbeklitepe", position: {x: 1, y: 1}, resonanceBase: 0.7 },
];

// Motor → Matris entegrasyonu
export function updateMatrixWithMotor() {
  matrixState = matrixState.map(bubble => {
    const flux = Number(motorState.flux);
    const entropy = Number(motorState.entropy);
    const quantum = Number(motorState.quantumField);
    const cosmic = Number(motorState.cosmicField);

    return {
      ...bubble,

      // Hareket
      position: {
        x: bubble.position.x + flux * 0.4,
        y: bubble.position.y + flux * -0.3
      },

      // Renk yoğunluğu
      colorEntropy: Math.max(0, 1 - entropy),

      // Halo
      haloIntensity: Math.abs(quantum) * 0.8,

      // Rezonans
      resonance: bubble.resonanceBase * (1 + cosmic)
    };
  });
}

// ---------------------------------------------------------
// 3) ANALYSIS TABLE (Çözümleme Tablosu)
// ---------------------------------------------------------
export let analysisTable = [];

export function generateAnalysisRow() {
  const bubble = matrixState[Math.floor(Math.random() * matrixState.length)];

  analysisTable.push({
    root: bubble.root,
    damga: bubble.damga,
    kavram: bubble.kavram,
    rota: bubble.rota,
    entropyScore: Number(motorState.entropy).toFixed(4),
    resonanceScore: Number(bubble.resonance).toFixed(4),
    timestamp: Date.now()
  });
}

// ---------------------------------------------------------
// 4) ANA DÖNGÜ (Motor → Matris → Tablo)
// ---------------------------------------------------------
export function startYKOSLiveEngine(callback) {
  setInterval(() => {
    updateMotor();
    updateMatrixWithMotor();
    generateAnalysisRow();

    if (callback) callback({
      motorState,
      matrixState,
      analysisTable
    });

  }, 1000);
}
