const points = [
  { x: 48, v: 68, label: "24h" },
  { x: 128, v: 70, label: "Day 2" },
  { x: 208, v: 76, label: "Day 3" },
  { x: 288, v: 84, label: "Day 4" },
] as const;

function y(value: number) {
  return 158 - (value - 60) * 3.4;
}

const line = points.map((point) => `${point.x},${y(point.v)}`).join(" ");
const area = `48,${y(68)} ${line} 288,${y(68)}`;

export function BaselineDrift() {
  const base = y(68);
  return (
    <svg
      viewBox="0 0 360 200"
      className="aspect-[16/10] w-full bg-ice"
      role="img"
      aria-label="Heart rate stays on this person's own baseline after 24 hours, then drifts above it over the following days"
    >
      <text x="20" y="28" fill="var(--color-ink)" fontSize="14" fontFamily="Inter, sans-serif">
        Heart rate
      </text>
      <text x="96" y="28" fill="var(--color-mist-deep)" fontSize="13" fontFamily="Inter, sans-serif">
        against your baseline
      </text>

      <line
        x1="36"
        x2="324"
        y1={base}
        y2={base}
        stroke="var(--color-mist-deep)"
        strokeDasharray="4 4"
      />
      <text x="36" y={base - 8} fill="var(--color-mist-deep)" fontSize="11" fontFamily="Inter, sans-serif">
        Your baseline · 68
      </text>

      <polygon points={area} fill="var(--color-cyan)" opacity="0.18" />
      <polyline
        points={line}
        fill="none"
        stroke="var(--color-cyan)"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {points.map((point) => (
        <g key={point.label}>
          <circle cx={point.x} cy={y(point.v)} r="4" fill="var(--color-primary)" />
          <text
            x={point.x}
            y="186"
            textAnchor="middle"
            fill="var(--color-ink-soft)"
            fontSize="12"
            fontFamily="Inter, sans-serif"
          >
            {point.label}
          </text>
        </g>
      ))}
      <text
        x="288"
        y={y(84) - 12}
        textAnchor="end"
        fill="var(--color-primary)"
        fontSize="12"
        fontFamily="Inter, sans-serif"
      >
        84 · above usual
      </text>
    </svg>
  );
}
