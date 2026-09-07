export default function SocialIcon() {
  const cx = 240, cy = 158
  // 6 platforms placed around the hub
  const platforms = [
    { angle: -90, name: 'Instagram', short: 'IG',    color: '#e1306c' },
    { angle: -30, name: 'Facebook',  short: 'FB',    color: '#1877f2' },
    { angle:  30, name: 'LinkedIn',  short: 'IN',    color: '#0a66c2' },
    { angle:  90, name: 'TikTok',    short: 'TT',    color: '#25f4ee' },
    { angle: 150, name: 'Blog',      short: 'BLOG',  color: '#FFDA1A' },
    { angle: 210, name: 'Google',    short: 'SEO',   color: '#34a853' },
  ]
  const R = 128 // orbit radius

  return (
    <div className="flex items-center justify-center w-full select-none">
      <svg viewBox="0 0 480 320" width="100%" style={{ maxWidth: 560 }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <style>{`
            /* spoke packet travel outward (published content reaching platforms) */
            @keyframes sc-out{0%{transform:translateX(0);opacity:0}10%{opacity:1}80%{opacity:1}100%{transform:translateX(var(--dx));opacity:0}}
            .sc-pk{will-change:transform,opacity}
            .sc-pk0{animation:sc-out 2s cubic-bezier(.4,0,.6,1) infinite 0s}
            .sc-pk1{animation:sc-out 2s cubic-bezier(.4,0,.6,1) infinite .33s}
            .sc-pk2{animation:sc-out 2s cubic-bezier(.4,0,.6,1) infinite .66s}
            .sc-pk3{animation:sc-out 2s cubic-bezier(.4,0,.6,1) infinite 1s}
            .sc-pk4{animation:sc-out 2s cubic-bezier(.4,0,.6,1) infinite 1.33s}
            .sc-pk5{animation:sc-out 2s cubic-bezier(.4,0,.6,1) infinite 1.66s}

            /* spoke dashes flow outward */
            @keyframes sc-flow{0%{stroke-dashoffset:60}100%{stroke-dashoffset:0}}
            .sc-sp{stroke-dasharray:8 8;will-change:auto}
            .sc-sp0{animation:sc-flow 1.4s linear infinite 0s}
            .sc-sp1{animation:sc-flow 1.4s linear infinite .23s}
            .sc-sp2{animation:sc-flow 1.4s linear infinite .46s}
            .sc-sp3{animation:sc-flow 1.4s linear infinite .7s}
            .sc-sp4{animation:sc-flow 1.4s linear infinite .93s}
            .sc-sp5{animation:sc-flow 1.4s linear infinite 1.16s}

            /* hub spin ring */
            @keyframes sc-spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}
            @keyframes sc-spinr{from{transform:rotate(0)}to{transform:rotate(-360deg)}}
            .sc-r1{animation:sc-spin  5s linear infinite;transform-origin:240px 158px;will-change:transform}
            .sc-r2{animation:sc-spinr 8s linear infinite;transform-origin:240px 158px;will-change:transform}

            /* hub core pulse */
            @keyframes sc-core{0%,100%{transform:scale(1);opacity:.9}50%{transform:scale(1.12);opacity:1}}
            .sc-core{animation:sc-core 1.8s ease-in-out infinite;transform-origin:240px 158px;will-change:transform,opacity}

            /* platform node float */
            @keyframes sc-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
            .sc-n0{animation:sc-float 3s ease-in-out infinite 0s;will-change:transform}
            .sc-n1{animation:sc-float 3s ease-in-out infinite .5s;will-change:transform}
            .sc-n2{animation:sc-float 3s ease-in-out infinite 1s;will-change:transform}
            .sc-n3{animation:sc-float 3s ease-in-out infinite 1.5s;will-change:transform}
            .sc-n4{animation:sc-float 3s ease-in-out infinite 2s;will-change:transform}
            .sc-n5{animation:sc-float 3s ease-in-out infinite 2.5s;will-change:transform}

            /* orbit track pulse */
            @keyframes sc-orb{0%,100%{opacity:.08}50%{opacity:.18}}
            .sc-orb{animation:sc-orb 3s ease-in-out infinite;will-change:opacity}

            /* engagement ripple pulses from hub */
            @keyframes sc-out2{0%{transform:scale(1);opacity:.7}100%{transform:scale(2.6);opacity:0}}
            .sc-rpl{animation:sc-out2 2s ease-out infinite;transform-origin:240px 158px;will-change:transform,opacity}
            .sc-rpl2{animation:sc-out2 2s ease-out infinite .66s;transform-origin:240px 158px;will-change:transform,opacity}
            .sc-rpl3{animation:sc-out2 2s ease-out infinite 1.33s;transform-origin:240px 158px;will-change:transform,opacity}

            /* like heart pop */
            @keyframes sc-like{0%,100%{transform:scale(1)}50%{transform:scale(1.3)}}
            .sc-like{animation:sc-like 1.6s ease-in-out infinite;transform-origin:center;will-change:transform}
          `}</style>
          <radialGradient id="sc-hub" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1e5fc4"/>
            <stop offset="100%" stopColor="#001a50"/>
          </radialGradient>
          <radialGradient id="sc-node" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1a5fc0"/>
            <stop offset="100%" stopColor="#002060"/>
          </radialGradient>
          <radialGradient id="sc-amb" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFDA1A" stopOpacity=".2"/>
            <stop offset="100%" stopColor="#0051BA" stopOpacity="0"/>
          </radialGradient>
        </defs>

        {/* ambient glow */}
        <circle className="sc-orb" cx={cx} cy={cy} r="160" fill="url(#sc-amb)"/>

        {/* orbit track */}
        <circle cx={cx} cy={cy} r={R} fill="none" stroke="rgba(255,218,26,.1)" strokeWidth="1" strokeDasharray="4 6"/>

        {/* engagement ripples from hub */}
        <circle className="sc-rpl"  cx={cx} cy={cy} r="48" fill="none" stroke="rgba(255,218,26,.35)" strokeWidth="2"/>
        <circle className="sc-rpl2" cx={cx} cy={cy} r="48" fill="none" stroke="rgba(255,218,26,.35)" strokeWidth="2"/>
        <circle className="sc-rpl3" cx={cx} cy={cy} r="48" fill="none" stroke="rgba(255,218,26,.35)" strokeWidth="2"/>

        {/* spokes + packets (content publishing outward) */}
        {platforms.map((p, i) => {
          const rad = (p.angle * Math.PI) / 180
          const spokeStartX = Number((cx + 44 * Math.cos(rad)).toFixed(3))
          const spokeStartY = Number((cy + 44 * Math.sin(rad)).toFixed(3))
          const spokeEndX   = Number((cx + (R - 26) * Math.cos(rad)).toFixed(3))
          const spokeEndY   = Number((cy + (R - 26) * Math.sin(rad)).toFixed(3))
          const dx = (spokeEndX - spokeStartX).toFixed(1)
          const dy = (spokeEndY - spokeStartY).toFixed(1)

          return (
            <g key={i}>
              {/* spoke */}
              <line
                x1={spokeStartX} y1={spokeStartY}
                x2={spokeEndX}   y2={spokeEndY}
                stroke="rgba(255,218,26,.3)" strokeWidth="1.5"
                className={`sc-sp sc-sp${i}`}
              />
              {/* packet */}
              <g
                className={`sc-pk sc-pk${i}`}
                style={{ '--dx': `${dx}px`, '--dy': `${dy}px` } as React.CSSProperties}
              >
                <circle cx={spokeStartX} cy={spokeStartY} r="5" fill={p.color} opacity=".9"/>
              </g>
            </g>
          )
        })}

        {/* spinning outer dashed ring */}
        <g className="sc-r1">
          <circle cx={cx} cy={cy} r={R + 18} fill="none" stroke="rgba(255,218,26,.12)" strokeWidth="1.5" strokeDasharray="14 10"/>
        </g>
        <g className="sc-r2">
          <circle cx={cx} cy={cy} r={R + 34} fill="none" stroke="rgba(255,255,255,.05)" strokeWidth="1" strokeDasharray="5 16"/>
        </g>

        {/* platform node cards */}
        {platforms.map((p, i) => {
          const rad = (p.angle * Math.PI) / 180
          const nx = Number((cx + R * Math.cos(rad)).toFixed(3))
          const ny = Number((cy + R * Math.sin(rad)).toFixed(3))
          return (
            <g key={i} className={`sc-n${i}`} style={{ transformOrigin: `${nx}px ${ny}px` }}>
              <rect x={nx - 34} y={ny - 16} width="68" height="32" rx="10"
                fill="url(#sc-node)" stroke={p.color} strokeWidth="1.8"/>
              <text x={nx} y={ny + 5} textAnchor="middle" fontSize="8.5" fontWeight="700"
                fill="white" letterSpacing=".6" style={{ fontFamily: 'system-ui,sans-serif' }}>{p.short}</text>
            </g>
          )
        })}

        {/* hub body */}
        <circle cx={cx} cy={cy} r="58" fill="url(#sc-hub)" stroke="rgba(255,218,26,.35)" strokeWidth="2.5"/>

        {/* hub spinning tick ring */}
        <g className="sc-r1">
          {[0,40,80,120,160,200,240,280,320].map((deg, i) => {
            const rad2 = (deg * Math.PI) / 180
            const x1 = Number((cx + 40 * Math.cos(rad2)).toFixed(3)), y1 = Number((cy + 40 * Math.sin(rad2)).toFixed(3))
            const x2 = Number((cx + 53 * Math.cos(rad2)).toFixed(3)), y2 = Number((cy + 53 * Math.sin(rad2)).toFixed(3))
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FFDA1A" strokeWidth="2.5" strokeLinecap="round" opacity=".6"/>
          })}
        </g>

        {/* inner dark ring */}
        <circle cx={cx} cy={cy} r="28" fill="#001540" stroke="rgba(255,218,26,.3)" strokeWidth="1.5"/>

        {/* core megaphone for Publish */}
        <g className="sc-core">
          <text x={cx} y={cy + 9} textAnchor="middle" fontSize="24" fontWeight="900"
            fill="#FFDA1A" style={{ fontFamily: 'system-ui,sans-serif' }}>📣</text>
        </g>

        {/* floating like heart */}
        <g className="sc-like" style={{ transformOrigin: `${cx + 40}px ${cy - 46}px` }}>
          <circle cx={cx + 40} cy={cy - 46} r="13" fill="#e1306c"/>
          <text x={cx + 40} y={cy - 42} textAnchor="middle" fontSize="12" style={{ fontFamily: 'system-ui,sans-serif' }}>❤</text>
        </g>

        {/* label below */}
        <text x={cx} y={cy + 90} textAnchor="middle" fontSize="8" fontWeight="700"
          fill="rgba(255,218,26,.55)" letterSpacing="2" style={{ fontFamily: 'system-ui,sans-serif' }}>CREATE · PUBLISH · GROW</text>

      </svg>
    </div>
  )
}
