export default function WaveBackdrop({ variant = 'blue' }: { variant?: 'blue' | 'gold' }) {
  const c1 = variant === 'blue' ? 'rgba(56, 189, 248, 0.16)' : 'rgba(200, 164, 93, 0.14)';
  const c2 = variant === 'blue' ? 'rgba(14, 165, 233, 0.12)' : 'rgba(16, 43, 78, 0.08)';
  const c3 = variant === 'blue' ? 'rgba(200, 164, 93, 0.11)' : 'rgba(56, 189, 248, 0.12)';

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {/* Upper sweeping wave ribbon */}
      <svg
        viewBox="0 0 1440 360"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          top: '40px',
          left: 0,
          width: '100%',
          height: '380px',
        }}
      >
        <path
          d="M0,120 C280,260 560,20 920,160 C1160,250 1320,110 1440,140 L1440,260 C1220,210 980,320 680,220 C380,120 180,290 0,210 Z"
          fill={c1}
        />
        <path
          d="M0,200 C320,80 640,290 1020,130 C1230,45 1350,150 1440,120 L1440,290 C1180,330 920,170 580,270 C300,350 140,240 0,280 Z"
          fill={c2}
        />
        <path
          d="M0,250 C400,150 760,310 1120,190 C1290,135 1380,210 1440,195 L1440,220 C1340,245 1240,175 1080,225 C740,335 380,185 0,275 Z"
          fill={c3}
        />
      </svg>

      {/* Lower sweeping wave ribbon */}
      <svg
        viewBox="0 0 1440 360"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          bottom: '40px',
          left: 0,
          width: '100%',
          height: '380px',
          transform: 'scaleX(-1)',
        }}
      >
        <path
          d="M0,120 C280,260 560,20 920,160 C1160,250 1320,110 1440,140 L1440,260 C1220,210 980,320 680,220 C380,120 180,290 0,210 Z"
          fill={c1}
        />
        <path
          d="M0,200 C320,80 640,290 1020,130 C1230,45 1350,150 1440,120 L1440,290 C1180,330 920,170 580,270 C300,350 140,240 0,280 Z"
          fill={c2}
        />
        <path
          d="M0,250 C400,150 760,310 1120,190 C1290,135 1380,210 1440,195 L1440,220 C1340,245 1240,175 1080,225 C740,335 380,185 0,275 Z"
          fill={c3}
        />
      </svg>
    </div>
  );
}
