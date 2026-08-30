export default function ServicesIcon() {
  return (
    <div className="flex items-center justify-center w-full select-none">
      <svg
        viewBox="0 0 480 480"
        width="100%"
        style={{ maxWidth: 400 }}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <filter id="sg-glow-y" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="sg-glow-b" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <radialGradient id="sg-hub-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#1a6fd4"/>
            <stop offset="100%" stopColor="#001f5c"/>
          </radialGradient>
          <radialGradient id="sg-amb" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#FFDA1A" stopOpacity="0.12"/>
            <stop offset="100%" stopColor="#0051BA" stopOpacity="0"/>
          </radialGradient>
          <style>{`
            @keyframes sg-spinCW  { from{transform:rotate(0deg)}   to{transform:rotate(360deg)} }
            @keyframes sg-spinCCW { from{transform:rotate(0deg)}   to{transform:rotate(-360deg)} }
            @keyframes sg-spinCW3 { from{transform:rotate(0deg)}   to{transform:rotate(360deg)} }
            @keyframes sg-pulse {
              0%,100%{opacity:.18;r:10} 50%{opacity:.45;r:14}
            }
            @keyframes sg-flow {
              0%  {stroke-dashoffset:0}
              100%{stroke-dashoffset:-80}
            }
            @keyframes sg-dot {
              0%  {offset-distance:0%   ;opacity:1}
              90% {opacity:1}
              100%{offset-distance:100%;opacity:0}
            }
            @keyframes sg-card-glow {
              0%,100%{filter:drop-shadow(0 0 3px #FFDA1A)}
              50%    {filter:drop-shadow(0 0 10px #FFDA1A)}
            }
            @keyframes sg-badge-float {
              0%,100%{transform:translateY(0)}
              50%    {transform:translateY(-4px)}
            }
            .sg-cw  { transform-origin:240px 220px; animation:sg-spinCW  7s linear infinite }
            .sg-ccw { transform-origin:340px 300px; animation:sg-spinCCW 5s linear infinite }
            .sg-cw3 { transform-origin:150px 310px; animation:sg-spinCW3 9s linear infinite }
            .sg-flow1 { stroke-dasharray:14 8; animation:sg-flow 1.2s linear infinite }
            .sg-flow2 { stroke-dasharray:14 8; animation:sg-flow 1.2s linear infinite 0.4s }
            .sg-flow3 { stroke-dasharray:14 8; animation:sg-flow 1.2s linear infinite 0.8s }
            .sg-card  { animation:sg-card-glow 3s ease-in-out infinite }
            .sg-b1    { animation:sg-badge-float 3s ease-in-out infinite }
            .sg-b2    { animation:sg-badge-float 3s ease-in-out infinite 1s }
            .sg-b3    { animation:sg-badge-float 3s ease-in-out infinite 2s }
            .sg-b4    { animation:sg-badge-float 3s ease-in-out infinite 1.5s }
          `}</style>
        </defs>

        {/* Ambient glow */}
        <ellipse cx="240" cy="260" rx="200" ry="160" fill="url(#sg-amb)"/>

        {/* ── Flow lines between gears ── */}
        {/* Large to small-right */}
        <path d="M285,220 Q320,240 320,280" fill="none" stroke="rgba(255,218,26,0.3)" strokeWidth="2" className="sg-flow1"/>
        {/* Large to small-left */}
        <path d="M195,228 Q165,250 170,290" fill="none" stroke="rgba(255,218,26,0.3)" strokeWidth="2" className="sg-flow2"/>
        {/* small-right to small-left (bottom) */}
        <path d="M310,330 Q240,370 190,330" fill="none" stroke="rgba(255,218,26,0.3)" strokeWidth="2" className="sg-flow3"/>

        {/* ── Large centre gear ── */}
        <g className="sg-cw">
          {/* Gear teeth (8 teeth) */}
          {[0,45,90,135,180,225,270,315].map((deg, i) => {
            const rad = (deg * Math.PI) / 180
            const cx = 240, cy = 220, r = 58
            const x1 = cx + (r - 10) * Math.cos(rad)
            const y1 = cy + (r - 10) * Math.sin(rad)
            const x2 = cx + (r + 10) * Math.cos(rad)
            const y2 = cy + (r + 10) * Math.sin(rad)
            return <rect key={i}
              x={x2 - 7} y={y2 - 7} width="14" height="14" rx="3"
              fill="#0051BA" stroke="#FFDA1A" strokeWidth="1.5"
              transform={`rotate(${deg}, ${x2}, ${y2})`}
            />
          })}
          {/* Gear body */}
          <circle cx="240" cy="220" r="54" fill="url(#sg-hub-grad)" stroke="#FFDA1A" strokeWidth="2"/>
          <circle cx="240" cy="220" r="28" fill="#001540" stroke="rgba(255,218,26,0.4)" strokeWidth="1.5"/>
          {/* Bolt holes */}
          {[0,120,240].map((deg, i) => {
            const rad = (deg * Math.PI) / 180
            return <circle key={i} cx={240 + 18 * Math.cos(rad)} cy={220 + 18 * Math.sin(rad)} r="4" fill="#FFDA1A" opacity="0.6"/>
          })}
        </g>

        {/* ── Small right gear ── */}
        <g className="sg-ccw">
          {[0,60,120,180,240,300].map((deg, i) => {
            const rad = (deg * Math.PI) / 180
            const cx = 340, cy = 300, r = 38
            const x2 = cx + (r + 7) * Math.cos(rad)
            const y2 = cy + (r + 7) * Math.sin(rad)
            return <rect key={i}
              x={x2 - 5} y={y2 - 5} width="10" height="10" rx="2"
              fill="#0051BA" stroke="#FFDA1A" strokeWidth="1.2"
              transform={`rotate(${deg}, ${x2}, ${y2})`}
            />
          })}
          <circle cx="340" cy="300" r="35" fill="url(#sg-hub-grad)" stroke="#FFDA1A" strokeWidth="1.8"/>
          <circle cx="340" cy="300" r="18" fill="#001540" stroke="rgba(255,218,26,0.35)" strokeWidth="1.2"/>
          {[0,120,240].map((deg, i) => {
            const rad = (deg * Math.PI) / 180
            return <circle key={i} cx={340 + 11 * Math.cos(rad)} cy={300 + 11 * Math.sin(rad)} r="3" fill="#FFDA1A" opacity="0.6"/>
          })}
        </g>

        {/* ── Small left gear ── */}
        <g className="sg-cw3">
          {[0,60,120,180,240,300].map((deg, i) => {
            const rad = (deg * Math.PI) / 180
            const cx = 150, cy = 310, r = 34
            const x2 = cx + (r + 7) * Math.cos(rad)
            const y2 = cy + (r + 7) * Math.sin(rad)
            return <rect key={i}
              x={x2 - 5} y={y2 - 5} width="10" height="10" rx="2"
              fill="#0051BA" stroke="#FFDA1A" strokeWidth="1.2"
              transform={`rotate(${deg}, ${x2}, ${y2})`}
            />
          })}
          <circle cx="150" cy="310" r="31" fill="url(#sg-hub-grad)" stroke="#FFDA1A" strokeWidth="1.8"/>
          <circle cx="150" cy="310" r="15" fill="#001540" stroke="rgba(255,218,26,0.35)" strokeWidth="1.2"/>
          {[0,120,240].map((deg, i) => {
            const rad = (deg * Math.PI) / 180
            return <circle key={i} cx={150 + 9 * Math.cos(rad)} cy={310 + 9 * Math.sin(rad)} r="2.5" fill="#FFDA1A" opacity="0.6"/>
          })}
        </g>

        {/* ── Icon in centre gear ── */}
        <text x="240" y="228" textAnchor="middle" fontSize="28" style={{ fontFamily: 'system-ui,sans-serif', pointerEvents: 'none' }}>⚡</text>

        {/* ── Floating service badges ── */}
        {/* Top left */}
        <g className="sg-b1 sg-card" style={{ transformOrigin: '78px 130px' }}>
          <rect x="38" y="108" width="80" height="44" rx="10" fill="url(#sg-hub-grad)" stroke="#FFDA1A" strokeWidth="1.5"/>
          <text x="78" y="127" textAnchor="middle" fontSize="13" fill="#FFDA1A" style={{ fontFamily: 'system-ui,sans-serif' }}>📋</text>
          <text x="78" y="143" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#fff" letterSpacing="0.5" style={{ fontFamily: 'system-ui,sans-serif' }}>AUTOMATE</text>
        </g>

        {/* Top right */}
        <g className="sg-b2 sg-card" style={{ transformOrigin: '390px 118px' }}>
          <rect x="350" y="96" width="80" height="44" rx="10" fill="url(#sg-hub-grad)" stroke="#FFDA1A" strokeWidth="1.5"/>
          <text x="390" y="115" textAnchor="middle" fontSize="13" fill="#FFDA1A" style={{ fontFamily: 'system-ui,sans-serif' }}>📊</text>
          <text x="390" y="131" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#fff" letterSpacing="0.5" style={{ fontFamily: 'system-ui,sans-serif' }}>REPORTS</text>
        </g>

        {/* Bottom right */}
        <g className="sg-b3 sg-card" style={{ transformOrigin: '404px 368px' }}>
          <rect x="364" y="346" width="80" height="44" rx="10" fill="url(#sg-hub-grad)" stroke="#FFDA1A" strokeWidth="1.5"/>
          <text x="404" y="365" textAnchor="middle" fontSize="13" fill="#FFDA1A" style={{ fontFamily: 'system-ui,sans-serif' }}>🔗</text>
          <text x="404" y="381" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#fff" letterSpacing="0.5" style={{ fontFamily: 'system-ui,sans-serif' }}>INTEGRATE</text>
        </g>

        {/* Bottom left */}
        <g className="sg-b4 sg-card" style={{ transformOrigin: '54px 388px' }}>
          <rect x="14" y="366" width="80" height="44" rx="10" fill="url(#sg-hub-grad)" stroke="#FFDA1A" strokeWidth="1.5"/>
          <text x="54" y="385" textAnchor="middle" fontSize="13" fill="#FFDA1A" style={{ fontFamily: 'system-ui,sans-serif' }}>📋</text>
          <text x="54" y="401" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#fff" letterSpacing="0.5" style={{ fontFamily: 'system-ui,sans-serif' }}>SHEETS</text>
        </g>

      </svg>
    </div>
  )
}
