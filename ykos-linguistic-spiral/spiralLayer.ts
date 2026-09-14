// spiralLayer.ts

export type SpiralBubble = {
  id: string;
  ring: number;
  family: string;
  similarity: number;              // 0–1
  kok: 'full' | 'high' | 'medium' | 'low';
  damga: 'full' | 'high' | 'medium' | 'low';
  coords: { x: number; y: number; z: number };
  atlasNode: string;
  radius: number;
};

export const LinguisticSpiralLayer: {
  id: string;
  type: string;
  version: string;
  bubbles: SpiralBubble[];
} = {
  id: 'linguistic_spiral',
  type: 'semantic_spiral',
  version: '1.0.0',
  bubbles: []
};

function addRingBubble(
  ring: number,
  family: string,
  similarity: number,
  kok: SpiralBubble['kok'],
  damga: SpiralBubble['damga'],
  atlasNode: string,
  radius: number
) {
  LinguisticSpiralLayer.bubbles.push({
    id: `ring${ring}_${family.toLowerCase()}`,
    ring,
    family,
    similarity,
    kok,
    damga,
    coords: { x: radius, y: 0, z: 0 },
    atlasNode,
    radius
  });
}

// Çekirdek
LinguisticSpiralLayer.bubbles.push({
  id: 'core_turk',
  ring: 0,
  family: 'Türk Çekirdek',
  similarity: 1.0,
  kok: 'full',
  damga: 'full',
  coords: { x: 0, y: 0, z: 0 },
  atlasNode: 'core_sivas',
  radius: 0
});

// Halkalar
addRingBubble(1, 'Anadolu', 0.976, 'high', 'high', 'anchor_anadolu', 120);
addRingBubble(2, 'Ege-Akdeniz', 0.956, 'high', 'medium', 'anchor_ege', 180);
addRingBubble(3, 'Hint-Avrupa', 0.952, 'high', 'medium', 'anchor_hint', 240);
addRingBubble(4, 'Kuzey-Batı', 0.944, 'medium', 'medium', 'anchor_kuzey', 300);
addRingBubble(5, 'Sami', 0.916, 'low', 'low', 'anchor_sami', 360);
addRingBubble(6, 'Doğu Asya', 0.918, 'medium', 'high', 'anchor_dogu', 420);
