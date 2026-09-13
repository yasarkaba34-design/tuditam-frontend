// atlasAnchors.ts

export type AtlasNode = {
  id: string;
  label: string;
  lat: number;
  lon: number;
  role: 'core' | 'ring_anchor';
  ring?: number;
};

export const SpiralAnchors: AtlasNode[] = [
  {
    id: 'core_sivas',
    label: 'Sivas Merkez',
    lat: 39.75,
    lon: 37.02,
    role: 'core'
  },
  {
    id: 'anchor_anadolu',
    label: 'Anadolu Kadim',
    lat: 38.7,
    lon: 35.5,
    role: 'ring_anchor',
    ring: 1
  },
  {
    id: 'anchor_ege',
    label: 'Ege-Akdeniz',
    lat: 37.9,
    lon: 23.7,
    role: 'ring_anchor',
    ring: 2
  },
  {
    id: 'anchor_hint',
    label: 'Hint-Avrupa',
    lat: 28.6,
    lon: 77.2,
    role: 'ring_anchor',
    ring: 3
  },
  {
    id: 'anchor_kuzey',
    label: 'Kuzey-Batı',
    lat: 52.5,
    lon: 13.4,
    role: 'ring_anchor',
    ring: 4
  },
  {
    id: 'anchor_sami',
    label: 'Sami',
    lat: 24.7,
    lon: 46.7,
    role: 'ring_anchor',
    ring: 5
  },
  {
    id: 'anchor_dogu',
    label: 'Doğu Asya',
    lat: 35.6,
    lon: 139.7,
    role: 'ring_anchor',
    ring: 6
  }
];
