/**
 * Icônes d'interface — SVG inline sur `currentColor`, tracé régulier dans
 * l'esprit Phosphor (design system Nocturne, §Icons). Aucune dépendance.
 */
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
  'aria-hidden': true,
  focusable: false,
};

export const IconHome = (p) => (
  <svg {...base} width={p.size ?? 19} height={p.size ?? 19} strokeWidth={p.weight ?? 1.7}>
    <path d="M4 11l8-6 8 6v8H4z" />
  </svg>
);

export const IconGraph = (p) => (
  <svg {...base} width={p.size ?? 19} height={p.size ?? 19} strokeWidth={p.weight ?? 1.7}>
    <path d="M12 4v5m0 0l-6 4m6-4l6 4M4 17h4v3H4zm12 0h4v3h-4z" />
  </svg>
);

export const IconSearch = (p) => (
  <svg {...base} width={p.size ?? 19} height={p.size ?? 19} strokeWidth={p.weight ?? 1.9}>
    <circle cx="11" cy="11" r="6" />
    <path d="M16 16l4 4" />
  </svg>
);

export const IconStar = (p) => (
  <svg
    {...base}
    width={p.size ?? 19}
    height={p.size ?? 19}
    strokeWidth={p.weight ?? 1.6}
    fill={p.filled ? 'currentColor' : 'none'}
  >
    <path d="M12 4.5l2.4 5 5.3.8-3.85 3.75.95 5.3-4.8-2.7-4.8 2.7.95-5.3L4.3 10.3l5.3-.8z" />
  </svg>
);

export const IconBack = (p) => (
  <svg {...base} width={p.size ?? 16} height={p.size ?? 16} strokeWidth={p.weight ?? 1.8}>
    <path d="M15 5l-7 7 7 7" />
  </svg>
);

export const IconShare = (p) => (
  <svg {...base} width={p.size ?? 15} height={p.size ?? 15} strokeWidth={p.weight ?? 1.7}>
    <path d="M12 15V4m0 0L8.6 7.4M12 4l3.4 3.4" />
    <path d="M5.5 13v6h13v-6" />
  </svg>
);

export const IconDownload = (p) => (
  <svg {...base} width={p.size ?? 13} height={p.size ?? 13} strokeWidth={p.weight ?? 2}>
    <path d="M12 4v10m0 0l-4-4m4 4l4-4M5 19h14" />
  </svg>
);

export const IconBook = (p) => (
  <svg {...base} width={p.size ?? 19} height={p.size ?? 19} strokeWidth={p.weight ?? 1.7}>
    <path d="M4 5.5A1.5 1.5 0 015.5 4H10a2 2 0 012 2v13a2 2 0 00-2-2H4z" />
    <path d="M20 5.5A1.5 1.5 0 0018.5 4H14a2 2 0 00-2 2v13a2 2 0 012-2h6z" />
  </svg>
);

export const IconGear = (p) => (
  <svg {...base} width={p.size ?? 19} height={p.size ?? 19} strokeWidth={p.weight ?? 1.6}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 3.5l1.3 2.2 2.5-.5.6 2.5 2.2 1.3-1.3 2.2 1.3 2.2-2.2 1.3-.6 2.5-2.5-.5L12 20.5l-1.3-2.2-2.5.5-.6-2.5-2.2-1.3L6.7 12 5.4 9.8l2.2-1.3.6-2.5 2.5.5z" />
  </svg>
);

export const IconChevron = (p) => (
  <svg {...base} width={p.size ?? 14} height={p.size ?? 14} strokeWidth={p.weight ?? 2}>
    <path d="M9 5l7 7-7 7" />
  </svg>
);

export const IconMenu = (p) => (
  <svg {...base} width={p.size ?? 18} height={p.size ?? 18} strokeWidth={p.weight ?? 1.8}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const IconClose = (p) => (
  <svg {...base} width={p.size ?? 16} height={p.size ?? 16} strokeWidth={p.weight ?? 1.8}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const IconOffline = (p) => (
  <svg {...base} width={p.size ?? 14} height={p.size ?? 14} strokeWidth={p.weight ?? 1.8}>
    <path d="M3 3l18 18" />
    <path d="M6.5 10.5A6 6 0 0114 8.2M17.5 11a4.5 4.5 0 011.2 8.3H8" />
  </svg>
);
