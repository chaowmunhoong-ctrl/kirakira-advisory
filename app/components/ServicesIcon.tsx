export default function ServicesIcon() {
  const cx = 240, cy = 240
  const r = 148

  /* 4 outer nodes at cardinal positions */
  const nodes = [
    { angle: -90, icon: '⚡', label: 'AUTOMATE', color: '#FFDA1A' },
    { angle:   0, icon: '📊', label: 'REPORTS',  color: '#FFDA1A' },
    { angle:  90, icon: '📋', label: 'SHEETS',   color: '#FFDA1A' },
    { angle: 180, icon: '🔗', label: 'INTEGRATE',color: '#FFDA1A' },
  ]

  return (
    <div className="flex items-center justify-center w-full select-none">
      <svg viewBox="0 0 480 480" width="100%" style={{ maxWidth: 460 }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <filter id="sv-gy" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="7" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="sv-gb" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="sv-soft" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="18"/>
          </filter>
          <radialGradient id="sv-hub" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#1e5fc4"/>
            <stop offset="100%" stopColor="#001a50"/>
          </radialGradient>
          <radialGradient id="sv-node" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#1a6fd4"/>
            <stop offset="100%" stopColor="#002570"/>
          </radialGradient>
          <radialGradient id="sv-amb" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#FFDA1A" stopOpacity="0.18"/>
            <stop offset="100%" stopColor="#0051BA" stopOpacity="0"/>
          </radialGradient>
          <style>{`
            @keyframes sv-spin1 { from{transform:rotate(0deg)}   to{transform:rotate(360deg)} }
            @keyframes sv-spin2 { from{transform:rotate(0deg)}   to{transform:rotate(-360deg)} }
            @keyframes sv-spin3 { from{transform:rotate(0deg)}   to{transform:rotate(360deg)} }
            @keyframes sv-pulse {
              0%,100%{opacity:.15} 50%{opacity:.4}
            }
            @keyframes sv-core {
              0%,100%{opacity:.5} 50%{opacity:1}
            }
            @keyframes sv-dash {
              to{stroke-dashoffset:-60}
            }
            @keyframes sv-dot-flow {
              0%  {stroke-dashoffset:0;   opacity:1}
              90% {opacity:1}
              100%{stroke-dashoffset:-300;opacity:0}
            }
            @keyframes sv-node-glow {
              0%,100%{filter:drop-shadow(0 0 4px #FFDA1A)}
              50%    {filter:drop-shadow(0 0 18px #FFDA1A) drop-shadow(0 0 32px rgba(255,218,26,.4))}
            }
            @keyframes sv-particle {
              0%  {transform:translate(0,0)   opacity:1;r:4}
              100%{transform:translate(var(--px),var(--py)) opacity:0;r:1}
            }
            @keyframes sv-badge {
              0%,100%{transform:translateY(0)}
              50%    {transform:translateY(-6px)}
            }
            @keyframes sv-ring-pulse {
              0%,100%{r:68;opacity:.18} 50%{r:76;opacity:.4}
            }
            .sv-r1 { transform-origin:240px 240px; animation:sv-spin1 10s linear infinite }
            .sv-r2 { transform-origin:240px 240px; animation:sv-spin2 15s linear infinite }
            .sv-r3 { transform-origin:240px 240px; animation:sv-spin3  6s linear infinite }
            .sv-p1 { animation:sv-pulse 3s ease-in-out infinite }
            .sv-p2 { animation:sv-pulse 3s ease-in-out infinite 1s }
            .sv-p3 { animation:sv-pulse 3s ease-in-out infinite 2s }
            .sv-core { animation:sv-core 2.5s ease-in-out infinite }
            .sv-d1 { stroke-dasharray:18 10; animation:sv-dash 1.5s linear infinite }
            .sv-d2 { stroke-dasharray:18 10; animation:sv-dash 1.5s linear infinite .375s }
            .sv-d3 { stroke-dasharray:18 10; animation:sv-dash 1.5s linear infinite .75s }
            .sv-d4 { stroke-dasharray:18 10; animation:sv-dash 1.5s linear infinite 1.125s }
            .sv-ng  { animation:sv-node-glow 3s ease-in-out infinite }
            .sv-ng2 { animation:sv-node-glow 3s ease-in-out infinite .75s }
            .sv-ng3 { animation:sv-node-glow 3s ease-in-out infinite 1.5s }
            .sv-ng4 { animation:sv-node-glow 3s ease-in-out infinite 2.25s }
            .sv-b1  { animation:sv-badge 3s ease-in-out infinite }
            .sv-b2  { animation:sv-badge 3s ease-in-out infinite .75s }
            .sv-b3  { animation:sv-badge 3s ease-in-out infinite 1.5s }
            .sv-b4  { animation:sv-badge 3s ease-in-out infinite 2.25s }
          `}</style>
        </defs>

        {/* Ambient glow blob */}
        <circle cx="240" cy="240" r="160" fill="url(#sv-amb)"/>
        <circle cx="240" cy="240" r="80"  fill="#FFDA1A" opacity="0.06" filter="url(#sv-soft)"/>

        {/* Pulse rings */}
        <circle className="sv-p1" cx="240" cy="240" r="90"  fill="none" stroke="#FFDA1A" strokeWidth="1.5" opacity=".18"/>
        <circle className="sv-p2" cx="240" cy="240" r="118" fill="none" stroke="#FFDA1A" strokeWidth="1"   opacity=".12"/>
        <circle className="sv-p3" cx="240" cy="240" r="148" fill="none" stroke="#FFDA1A" strokeWidth=".8"  opacity=".07"/>

        {/* Orbit track */}
        <circle cx="240" cy="240" r={r} fill="none" stroke="rgba(255,218,26,0.12)" strokeWidth="1" strokeDasharray="4 6"/>

        {/* Spoke lines with animated dashes */}
        {nodes.map((n, i) => {
          const rad = (n.angle * Math.PI) / 180
          const nx = cx + r * Math.cos(rad)
          const ny = cy + r * Math.sin(rad)
          const cls = `sv-d${i + 1}`
          return (
            <line key={i}
              x1={cx + 62 * Math.cos(rad)} y1={cy + 62 * Math.sin(rad)}
              x2={nx - 42 * Math.cos(rad)} y2={ny - 42 * Math.sin(rad)}
              stroke="rgba(255,218,26,0.35)" strokeWidth="2" className={cls}
            />
          )
        })}

        {/* Outer rotating dashed rings */}
        <g className="sv-r1">
          <circle cx="240" cy="240" r="168" fill="none" stroke="rgba(255,218,26,0.25)" strokeWidth="1.5" strokeDasharray="22 14"/>
        </g>
        <g className="sv-r2">
          <circle cx="240" cy="240" r="185" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="8 20"/>
        </g>

        {/* 4 moving dots on orbit */}
        <g className="sv-r3">
          {[0, 90, 180, 270].map((deg, i) => {
            const rad = (deg * Math.PI) / 180
            return <circle key={i} cx={cx + r * Math.cos(rad)} cy={cy + r * Math.sin(rad)} r="5" fill="#FFDA1A" filter="url(#sv-gy)" opacity="0.9"/>
          })}
        </g>

        {/* 4 node cards */}
        {nodes.map((n, i) => {
          const rad = (n.angle * Math.PI) / 180
          const nx = cx + r * Math.cos(rad)
          const ny = cy + r * Math.sin(rad)
          const glowCls = ['sv-ng','sv-ng2','sv-ng3','sv-ng4'][i]
          const badgeCls = ['sv-b1','sv-b2','sv-b3','sv-b4'][i]
          return (
            <g key={i} className={`${glowCls} ${badgeCls}`} style={{ transformOrigin: `${nx}px ${ny}px` }}>
              <rect x={nx - 44} y={ny - 30} width="88" height="60" rx="14"
                fill="url(#sv-node)" stroke="#FFDA1A" strokeWidth="2"/>
              <text x={nx} y={ny - 8} textAnchor="middle" fontSize="22" style={{ fontFamily: 'system-ui,sans-serif' }}>{n.icon}</text>
              <text x={nx} y={ny + 20} textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff" letterSpacing="0.8" style={{ fontFamily: 'system-ui,sans-serif' }}>{n.label}</text>
            </g>
          )
        })}

        {/* ── Central hub ── */}
        {/* Outer glow */}
        <circle cx="240" cy="240" r="72" fill="none" stroke="#FFDA1A" strokeWidth="2.5" opacity="0.25" filter="url(#sv-gb)"/>
        {/* Hub body */}
        <circle cx="240" cy="240" r="64" fill="url(#sv-hub)" stroke="#FFDA1A" strokeWidth="2.5"/>
        {/* Inner spinning segmented ring */}
        <g className="sv-r1" style={{ transformOrigin: '240px 240px' }}>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
            const rad = (deg * Math.PI) / 180
            const x1 = cx + 45 * Math.cos(rad), y1 = cy + 45 * Math.sin(rad)
            const x2 = cx + 58 * Math.cos(rad), y2 = cy + 58 * Math.sin(rad)
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FFDA1A" strokeWidth="3.5" strokeLinecap="round" opacity="0.8"/>
          })}
        </g>
        {/* Inner circle */}
        <circle cx="240" cy="240" r="34" fill="#001540" stroke="rgba(255,218,26,0.5)" strokeWidth="1.5"/>
        {/* CCW inner ring decoration */}
        <g className="sv-r2" style={{ transformOrigin: '240px 240px' }}>
          {[0, 60, 120, 180, 240, 300].map((deg, i) => {
            const rad = (deg * Math.PI) / 180
            return <circle key={i} cx={cx + 26 * Math.cos(rad)} cy={cy + 26 * Math.sin(rad)} r="3" fill="#FFDA1A" opacity="0.5"/>
          })}
        </g>
        {/* Core symbol */}
        <text x="240" y="252" textAnchor="middle" fontSize="30" className="sv-core" filter="url(#sv-gy)" style={{ fontFamily: 'system-ui,sans-serif' }}>⚡</text>

        {/* Rising particles */}
        <circle cx="224" cy="242" r="3.5" fill="#FFDA1A" opacity="0.9" style={{ animation: 'sv-particle 2.2s ease-out infinite', '--px': '-14px', '--py': '-80px' } as React.CSSProperties}/>
        <circle cx="256" cy="246" r="2.5" fill="#fff"    opacity="0.7" style={{ animation: 'sv-particle 2.2s ease-out infinite .55s', '--px': '12px', '--py': '-70px' } as React.CSSProperties}/>
        <circle cx="238" cy="250" r="3"   fill="#FFDA1A" opacity="0.8" style={{ animation: 'sv-particle 2.2s ease-out infinite 1.1s', '--px': '-6px', '--py': '-75px' } as React.CSSProperties}/>
        <circle cx="250" cy="244" r="2"   fill="#fff"    opacity="0.6" style={{ animation: 'sv-particle 2.2s ease-out infinite 1.65s', '--px': '10px', '--py': '-65px' } as React.CSSProperties}/>

      </svg>
    </div>
  )
}
