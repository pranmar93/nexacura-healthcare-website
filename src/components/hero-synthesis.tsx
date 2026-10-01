const nodes = [
  { id: "cv", label: "Cardiovascular", x: 160, y: 32 },
  { id: "sleep", label: "Sleep", x: 40, y: 108 },
  { id: "met", label: "Metabolism", x: 280, y: 108 },
  { id: "act", label: "Activity", x: 70, y: 220 },
  { id: "psy", label: "Psychology", x: 250, y: 220 },
] as const;

const edges: Array<[number, number]> = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 4],
  [1, 2],
  [3, 4],
  [0, 3],
  [0, 4],
];

export function HeroSynthesis() {
  return (
    <figure className="relative overflow-hidden rounded-xl bg-paper shadow-border">
      <svg
        viewBox="0 0 320 268"
        className="h-auto w-full"
        role="img"
        aria-label="Five physiological systems connecting through the NexaCura Healthcare mark"
      >
        <rect width="320" height="268" fill="var(--color-paper)" />
        {edges.map(([a, b], i) => {
          const from = nodes[a];
          const to = nodes[b];
          return (
            <line
              key={`${from.id}-${to.id}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="var(--color-mist)"
              strokeWidth="1"
              className="origin-center opacity-0 [animation:edge-in_900ms_var(--ease-clinical)_forwards]"
              style={{ animationDelay: `${180 + i * 120}ms` }}
            />
          );
        })}
        {nodes.map((node, i) => (
          <g
            key={node.id}
            className="opacity-0 [animation:node-in_700ms_var(--ease-clinical)_forwards]"
            style={{ animationDelay: `${80 + i * 90}ms` }}
          >
            <circle
              cx={node.x}
              cy={node.y}
              r="7"
              fill="var(--color-paper)"
              stroke="var(--color-primary)"
              strokeWidth="1.5"
            />
            <circle
              cx={node.x}
              cy={node.y}
              r="2.4"
              fill="var(--color-cyan)"
              className="[animation:pulse-dot_1.6s_ease-in-out_infinite]"
            />
            <text
              x={node.x}
              y={node.y + 22}
              textAnchor="middle"
              fill="var(--color-ink-soft)"
              fontSize="9"
              fontFamily="Inter, sans-serif"
              letterSpacing="0.04em"
            >
              {node.label}
            </text>
          </g>
        ))}
        <g
          className="opacity-0 [animation:node-in_800ms_var(--ease-clinical)_forwards]"
          style={{ animationDelay: "1280ms" }}
        >
          <image href="/logo.png" x="128" y="98" width="64" height="64" />
        </g>
      </svg>
      <figcaption className="border-t border-border px-4 py-3 text-xs leading-relaxed text-muted-foreground">
        Independent signals connect. The overlapping circles are the point:
        two systems meeting, one evidence-backed reading.
      </figcaption>
      <style>{`
        @keyframes edge-in {
          from { opacity: 0; }
          to { opacity: 0.9; }
        }
        @keyframes node-in {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
      `}</style>
    </figure>
  );
}
