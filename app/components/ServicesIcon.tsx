export default function ServicesIcon() {
  const cx = 240, cy = 156
  const r = 118
  const nodes = [
    { angle: -90, label: 'AUTOMATE', sub: 'Workflows', color: '#FFDA1A',  icon: '⚡' },
    { angle:   0, label: 'REPORTS',  sub: 'Live data',  color: '#4caf50',  icon: '📊' },
    { angle:  90, label: 'INTEGRATE',sub: 'All tools',  color: '#2196f3',  icon: '🔗' },
    { angle: 180, label: 'OPTIMISE', sub: 'Spreadsheets',color: '#ff9800', icon: '📑' },
  ]

  return (
    <div className="flex items-center justify-center w-full select-none">
      <svg viewBox="0 0 480 300" width="100%" style={{ maxWidth: 480 }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <style>{`
            /* spin */
            @keyframes sv-spin {from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
            @keyframes sv-spin-r{from{transform:rotate(0deg)}to{transform:rotate(-360deg)}}
            .sv-r1{animation:sv-spin   9s linear infinite;transform-origin:240px 156px;will-change:transform}
            .sv-r2{animation:sv-spin-r 14s linear infinite;transform-origin:240px 156px;will-change:transform}
            .sv-r3{animation:sv-spin   5s linear infinite;transform-origin:240px 156px;will-change:transform}

            /* hub core pulse */
            @keyframes sv-core{0%,100%{transform:scale(1);opacity:.85}50%{transform:scale(1.1);opacity:1}}
            .sv-core{animation:sv-core 2.2s cubic-bezier(.4,0,.6,1) infinite;transform-origin:240px 156px;will-change:transform,opacity}

            /* spoke data flow */
            @keyframes sv-flow{0%{stroke-dashoffset:0}100%{stroke-dashoffset:-60}}
            .sv-sp0{stroke-dasharray:10 10;animation:sv-flow 1.2s linear infinite;will-change:auto}
            .sv-sp1{stroke-dasharray:10 10;animation:sv-flow 1.2s linear infinite .3s;will-change:auto}
            .sv-sp2{stroke-dasharray:10 10;animation:sv-flow 1.2s linear infinite .6s;will-change:auto}
            .sv-sp3{stroke-dasharray:10 10;animation:sv-flow 1.2s linear infinite .9s;will-change:auto}

            /* node cards float + glow */
            @keyframes sv-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
            @keyframes sv-glow{0%,100%{opacity:.7}50%{opacity:1}}
            .sv-n0{animation:sv-float 3s cubic-bezier(.4,0,.6,1) infinite,sv-glow 3s ease-in-out infinite;will-change:transform,opacity}
            .sv-n1{animation:sv-float 3s cubic-bezier(.4,0,.6,1) infinite .75s,sv-glow 3s ease-in-out infinite .75s;will-change:transform,opacity}
            .sv-n2{animation:sv-float 3s cubic-bezier(.4,0,.6,1) infinite 1.5s,sv-glow 3s ease-in-out infinite 1.5s;will-change:transform,opacity}
            .sv-n3{animation:sv-float 3s cubic-bezier(.4,0,.6,1) infinite 2.25s,sv-glow 3s ease-in-out infinite 2.25s;will-change:transform,opacity}

            /* data dot orbiting */
            @keyframes sv-dot{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
            .sv-dot{animation:sv-dot 4s linear infinite;transform-origin:240px 156px;will-change:transform}
            .sv-dot2{animation:sv-dot 6s linear infinite reverse;transform-origin:240px 156px;will-change:transform}

            /* ambient pulse */
            @keyframes sv-amb{0%,100%{opacity:.06}50%{opacity:.16}}
            .sv-amb{animation:sv-amb 3s ease-in-out infinite;will-change:opacity}
          `}</style>
          <radialGradient id="sv-hub" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="#1e5fc4"/>
            <stop offset="100%" stopColor="#001a50"/>
          </radialGradient>
          <radialGradient id="sv-amb" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="#FFDA1A" stopOpacity=".25"/>
            <stop offset="100%" stopColor="#0051BA" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="sv-node" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="#1a5fc0"/>
            <stop offset="100%" stopColor="#002060"/>
          </radialGradient>
        </defs>

        {/* ambient glow */}
        <circle className="sv-amb" cx={cx} cy={cy} r="170" fill="url(#sv-amb)"/>

        {/* orbit track */}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,218,26,.1)" strokeWidth="1" strokeDasharray="4 6"/>

        {/* animated spokes */}
        {nodes.map((n, i) => {
          const rad = (n.angle * Math.PI) / 180
          const nx = cx + r * Math.cos(rad), ny = cy + r * Math.sin(rad)
          const ix = cx + 52 * Math.cos(rad), iy = cy + 52 * Math.sin(rad)
          const ex = cx + (r - 38) * Math.cos(rad), ey = cy + (r - 38) * Math.sin(rad)
          return (
            <line key={i} x1={ix} y1={iy} x2={ex} y2={ey}
              stroke="rgba(255,218,26,.4)" strokeWidth="2"
              className={`sv-sp${i}`}/>
          )
        })}

        {/* outer rotating dashed ring */}
        <g className="sv-r1">
          <circle cx={cx} cy={cy} r={r + 22} fill="none" stroke="rgba(255,218,26,.18)" strokeWidth="1.5" strokeDasharray="18 12"/>
        </g>
        <g className="sv-r2">
          <circle cx={cx} cy={cy} r={r + 40} fill="none" stroke="rgba(255,255,255,.07)" strokeWidth="1" strokeDasharray="6 18"/>
        </g>

        {/* orbiting dots (4 at cardinal, rotate together) */}
        <g className="sv-dot">
          {[0, 90, 180, 270].map((deg, i) => {
            const rad = (deg * Math.PI) / 180
            return <circle key={i} cx={cx + r * Math.cos(rad)} cy={cy + r * Math.sin(rad)} r="6" fill="#FFDA1A" opacity=".85"/>
          })}
        </g>
        <g className="sv-dot2">
          {[45, 135, 225, 315].map((deg, i) => {
            const rad = (deg * Math.PI) / 180
            return <circle key={i} cx={cx + (r + 22) * Math.cos(rad)} cy={cy + (r + 22) * Math.sin(rad)} r="3.5" fill="white" opacity=".4"/>
          })}
        </g>

        {/* node cards */}
        {nodes.map((n, i) => {
          const rad = (n.angle * Math.PI) / 180
          const nx = cx + r * Math.cos(rad), ny = cy + r * Math.sin(rad)
          const cls = `sv-n${i}`
          return (
            <g key={i} className={cls} style={{ transformOrigin: `${nx}px ${ny}px` }}>
              <rect x={nx - 44} y={ny - 32} width="88" height="64" rx="14"
                fill="url(#sv-node)" stroke={n.color} strokeWidth="2.5"/>
              <text x={nx} y={ny - 8} textAnchor="middle" fontSize="22" style={{ fontFamily: 'system-ui,sans-serif' }}>{n.icon}</text>
              <text x={nx} y={ny + 12} textAnchor="middle" fontSize="8" fontWeight="700" fill="white" letterSpacing=".8" style={{ fontFamily: 'system-ui,sans-serif' }}>{n.label}</text>
              <text x={nx} y={ny + 24} textAnchor="middle" fontSize="7" fill="rgba(255,255,255,.55)" style={{ fontFamily: 'system-ui,sans-serif' }}>{n.sub}</text>
            </g>
          )
        })}

        {/* hub */}
        <circle cx={cx} cy={cy} r="56" fill="none" stroke="#FFDA1A" strokeWidth="2" opacity=".2"/>
        <circle cx={cx} cy={cy} r="50" fill="url(#sv-hub)" stroke="#FFDA1A" strokeWidth="2.5"/>

        {/* spinning inner ring */}
        <g className="sv-r3">
          {[0,40,80,120,160,200,240,280,320].map((deg, i) => {
            const rad = (deg * Math.PI) / 180
            const x1 = cx + 34 * Math.cos(rad), y1 = cy + 34 * Math.sin(rad)
            const x2 = cx + 46 * Math.cos(rad), y2 = cy + 46 * Math.sin(rad)
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FFDA1A" strokeWidth="3" strokeLinecap="round" opacity=".7"/>
          })}
        </g>

        {/* inner circle */}
        <circle cx={cx} cy={cy} r="24" fill="#001540" stroke="rgba(255,218,26,.4)" strokeWidth="1.5"/>

        {/* core: pulsing K */}
        <g className="sv-core">
          <text x={cx} y={cy + 6} textAnchor="middle" fontSize="22" fontWeight="900" fill="#FFDA1A" style={{ fontFamily: 'system-ui,sans-serif' }}>K</text>
        </g>

      </svg>
    </div>
  )
}
