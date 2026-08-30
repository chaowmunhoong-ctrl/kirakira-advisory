export default function WorkflowIcon() {
  const cx = 240, cy = 152
  // 6 tools placed around the hub
  const tools = [
    { angle: -90, name: 'SQL Account', short: 'SQL',    color: '#FFDA1A' },
    { angle: -30, name: 'AutoCount',   short: 'AUTO',   color: '#4fc3f7' },
    { angle:  30, name: 'Xero',        short: 'XERO',   color: '#13b5ea' },
    { angle:  90, name: 'Bukku',       short: 'BUKKU',  color: '#FFDA1A' },
    { angle: 150, name: 'Sheets',      short: 'SHEETS', color: '#34a853' },
    { angle: 210, name: 'Excel',       short: 'EXCEL',  color: '#217346' },
  ]
  const R = 108 // orbit radius

  return (
    <div className="flex items-center justify-center w-full select-none">
      <svg viewBox="0 0 480 300" width="100%" style={{ maxWidth: 480 }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <style>{`
            /* spoke packet travel toward center */
            @keyframes wf-in{0%{transform:translateX(0);opacity:0}10%{opacity:1}80%{opacity:1}100%{transform:translateX(var(--dx));opacity:0}}
            .wf-pk{will-change:transform,opacity}
            .wf-pk0{animation:wf-in 2s cubic-bezier(.4,0,.6,1) infinite 0s}
            .wf-pk1{animation:wf-in 2s cubic-bezier(.4,0,.6,1) infinite .33s}
            .wf-pk2{animation:wf-in 2s cubic-bezier(.4,0,.6,1) infinite .66s}
            .wf-pk3{animation:wf-in 2s cubic-bezier(.4,0,.6,1) infinite 1s}
            .wf-pk4{animation:wf-in 2s cubic-bezier(.4,0,.6,1) infinite 1.33s}
            .wf-pk5{animation:wf-in 2s cubic-bezier(.4,0,.6,1) infinite 1.66s}

            /* spoke dashes flow inward */
            @keyframes wf-flow{0%{stroke-dashoffset:0}100%{stroke-dashoffset:60}}
            .wf-sp{stroke-dasharray:8 8;will-change:auto}
            .wf-sp0{animation:wf-flow 1.4s linear infinite 0s}
            .wf-sp1{animation:wf-flow 1.4s linear infinite .23s}
            .wf-sp2{animation:wf-flow 1.4s linear infinite .46s}
            .wf-sp3{animation:wf-flow 1.4s linear infinite .7s}
            .wf-sp4{animation:wf-flow 1.4s linear infinite .93s}
            .wf-sp5{animation:wf-flow 1.4s linear infinite 1.16s}

            /* hub spin ring */
            @keyframes wf-spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}
            @keyframes wf-spinr{from{transform:rotate(0)}to{transform:rotate(-360deg)}}
            .wf-r1{animation:wf-spin  5s linear infinite;transform-origin:${cx}px ${cy}px;will-change:transform}
            .wf-r2{animation:wf-spinr 8s linear infinite;transform-origin:${cx}px ${cy}px;will-change:transform}

            /* hub core pulse */
            @keyframes wf-core{0%,100%{transform:scale(1);opacity:.9}50%{transform:scale(1.12);opacity:1}}
            .wf-core{animation:wf-core 1.8s ease-in-out infinite;transform-origin:${cx}px ${cy}px;will-change:transform,opacity}

            /* tool node float */
            @keyframes wf-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
            .wf-n0{animation:wf-float 3s ease-in-out infinite 0s;will-change:transform}
            .wf-n1{animation:wf-float 3s ease-in-out infinite .5s;will-change:transform}
            .wf-n2{animation:wf-float 3s ease-in-out infinite 1s;will-change:transform}
            .wf-n3{animation:wf-float 3s ease-in-out infinite 1.5s;will-change:transform}
            .wf-n4{animation:wf-float 3s ease-in-out infinite 2s;will-change:transform}
            .wf-n5{animation:wf-float 3s ease-in-out infinite 2.5s;will-change:transform}

            /* orbit track pulse */
            @keyframes wf-orb{0%,100%{opacity:.08}50%{opacity:.18}}
            .wf-orb{animation:wf-orb 3s ease-in-out infinite;will-change:opacity}

            /* output pulses from hub */
            @keyframes wf-out{0%{transform:scale(1);opacity:.7}100%{transform:scale(2.6);opacity:0}}
            .wf-out{animation:wf-out 2s ease-out infinite;transform-origin:${cx}px ${cy}px;will-change:transform,opacity}
            .wf-out2{animation:wf-out 2s ease-out infinite .66s;transform-origin:${cx}px ${cy}px;will-change:transform,opacity}
            .wf-out3{animation:wf-out 2s ease-out infinite 1.33s;transform-origin:${cx}px ${cy}px;will-change:transform,opacity}
          `}</style>
          <radialGradient id="wf-hub" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1e5fc4"/>
            <stop offset="100%" stopColor="#001a50"/>
          </radialGradient>
          <radialGradient id="wf-node" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1a5fc0"/>
            <stop offset="100%" stopColor="#002060"/>
          </radialGradient>
          <radialGradient id="wf-amb" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFDA1A" stopOpacity=".2"/>
            <stop offset="100%" stopColor="#0051BA" stopOpacity="0"/>
          </radialGradient>
        </defs>

        {/* ambient glow */}
        <circle className="wf-orb" cx={cx} cy={cy} r="160" fill="url(#wf-amb)"/>

        {/* orbit track */}
        <circle cx={cx} cy={cy} r={R} fill="none" stroke="rgba(255,218,26,.1)" strokeWidth="1" strokeDasharray="4 6"/>

        {/* ripple pulses from hub (processed output) */}
        <circle className="wf-out"  cx={cx} cy={cy} r="38" fill="none" stroke="rgba(255,218,26,.35)" strokeWidth="2"/>
        <circle className="wf-out2" cx={cx} cy={cy} r="38" fill="none" stroke="rgba(255,218,26,.35)" strokeWidth="2"/>
        <circle className="wf-out3" cx={cx} cy={cy} r="38" fill="none" stroke="rgba(255,218,26,.35)" strokeWidth="2"/>

        {/* spokes + packets */}
        {tools.map((t, i) => {
          const rad = (t.angle * Math.PI) / 180
          const nx = cx + R * Math.cos(rad)
          const ny = cy + R * Math.sin(rad)
          // spoke goes from node edge to hub edge
          const spokeStartX = cx + (R - 26) * Math.cos(rad)
          const spokeStartY = cy + (R - 26) * Math.sin(rad)
          const spokeEndX   = cx + 44 * Math.cos(rad)
          const spokeEndY   = cy + 44 * Math.sin(rad)
          // packet travels from near node toward hub
          const pkStartX = cx + (R - 22) * Math.cos(rad)
          const pkStartY = cy + (R - 22) * Math.sin(rad)
          const dx = (spokeEndX - pkStartX).toFixed(1)
          const dy = (spokeEndY - pkStartY).toFixed(1)

          return (
            <g key={i}>
              {/* spoke */}
              <line
                x1={spokeStartX} y1={spokeStartY}
                x2={spokeEndX}   y2={spokeEndY}
                stroke="rgba(255,218,26,.3)" strokeWidth="1.5"
                className={`wf-sp wf-sp${i}`}
              />
              {/* packet */}
              <g
                className={`wf-pk wf-pk${i}`}
                style={{ '--dx': `${dx}px`, '--dy': `${dy}px` } as React.CSSProperties}
              >
                <circle cx={pkStartX} cy={pkStartY} r="5" fill={t.color} opacity=".9"/>
              </g>
            </g>
          )
        })}

        {/* spinning outer dashed ring */}
        <g className="wf-r1">
          <circle cx={cx} cy={cy} r={R + 18} fill="none" stroke="rgba(255,218,26,.12)" strokeWidth="1.5" strokeDasharray="14 10"/>
        </g>
        <g className="wf-r2">
          <circle cx={cx} cy={cy} r={R + 34} fill="none" stroke="rgba(255,255,255,.05)" strokeWidth="1" strokeDasharray="5 16"/>
        </g>

        {/* tool node cards */}
        {tools.map((t, i) => {
          const rad = (t.angle * Math.PI) / 180
          const nx = cx + R * Math.cos(rad)
          const ny = cy + R * Math.sin(rad)
          return (
            <g key={i} className={`wf-n${i}`} style={{ transformOrigin: `${nx}px ${ny}px` }}>
              <rect x={nx - 34} y={ny - 16} width="68" height="32" rx="10"
                fill="url(#wf-node)" stroke={t.color} strokeWidth="1.8"/>
              <text x={nx} y={ny + 5} textAnchor="middle" fontSize="8.5" fontWeight="700"
                fill="white" letterSpacing=".6" style={{ fontFamily: 'system-ui,sans-serif' }}>{t.short}</text>
            </g>
          )
        })}

        {/* hub body */}
        <circle cx={cx} cy={cy} r="48" fill="url(#wf-hub)" stroke="rgba(255,218,26,.35)" strokeWidth="2.5"/>

        {/* hub spinning tick ring */}
        <g className="wf-r1">
          {[0,40,80,120,160,200,240,280,320].map((deg, i) => {
            const rad2 = (deg * Math.PI) / 180
            const x1 = cx + 32 * Math.cos(rad2), y1 = cy + 32 * Math.sin(rad2)
            const x2 = cx + 43 * Math.cos(rad2), y2 = cy + 43 * Math.sin(rad2)
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FFDA1A" strokeWidth="2.5" strokeLinecap="round" opacity=".6"/>
          })}
        </g>

        {/* inner dark ring */}
        <circle cx={cx} cy={cy} r="22" fill="#001540" stroke="rgba(255,218,26,.3)" strokeWidth="1.5"/>

        {/* core "A" for Automate */}
        <g className="wf-core">
          <text x={cx} y={cy + 7} textAnchor="middle" fontSize="20" fontWeight="900"
            fill="#FFDA1A" style={{ fontFamily: 'system-ui,sans-serif' }}>A</text>
        </g>

        {/* label below */}
        <text x={cx} y={cy + 76} textAnchor="middle" fontSize="8" fontWeight="700"
          fill="rgba(255,218,26,.55)" letterSpacing="2" style={{ fontFamily: 'system-ui,sans-serif' }}>AUTOMATE · INTEGRATE</text>

      </svg>
    </div>
  )
}
