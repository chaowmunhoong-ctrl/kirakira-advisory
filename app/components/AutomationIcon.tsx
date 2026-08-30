export default function AutomationIcon() {
  return (
    <div className="flex items-center justify-center w-full select-none">
      <svg
        viewBox="0 0 480 480"
        width="100%"
        style={{ maxWidth: 440 }}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Glows */}
          <filter id="glow-yellow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="glow-blue" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="glow-soft" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>

          {/* Gradients */}
          <radialGradient id="core-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#FFDA1A" stopOpacity="0.35"/>
            <stop offset="100%" stopColor="#0051BA" stopOpacity="0"/>
          </radialGradient>
          <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#FFDA1A"/>
            <stop offset="50%"  stopColor="#fff" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#FFDA1A" stopOpacity="0"/>
          </linearGradient>
          <radialGradient id="node-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#1a6fd4"/>
            <stop offset="100%" stopColor="#003080"/>
          </radialGradient>

          {/* Orbit paths for animateMotion */}
          <path id="orbit1" d="M240,240 m-130,0 a130,130 0 1,1 260,0 a130,130 0 1,1 -260,0" fill="none"/>
          <path id="orbit2" d="M240,240 m-130,0 a130,130 0 1,0 260,0 a130,130 0 1,0 -260,0" fill="none"/>

          <style>{`
            @keyframes spinCW  { from{transform:rotate(0deg)}  to{transform:rotate(360deg)} }
            @keyframes spinCCW { from{transform:rotate(0deg)}  to{transform:rotate(-360deg)} }
            @keyframes pulseRing {
              0%,100%{opacity:.18;transform:scale(1)}
              50%    {opacity:.45;transform:scale(1.06)}
            }
            @keyframes corePulse {
              0%,100%{opacity:.5}
              50%    {opacity:1}
            }
            @keyframes blink {
              0%,100%{opacity:1} 50%{opacity:.3}
            }
            @keyframes particleRise {
              0%  {transform:translateY(0)  scale(1);   opacity:.9}
              100%{transform:translateY(-70px) scale(0); opacity:0}
            }
            @keyframes dashFlow {
              to{stroke-dashoffset:-40}
            }
            @keyframes nodeGlow {
              0%,100%{filter:drop-shadow(0 0 4px #FFDA1A)}
              50%    {filter:drop-shadow(0 0 14px #FFDA1A)}
            }
            .ring-cw  {transform-origin:240px 240px; animation:spinCW  12s linear infinite}
            .ring-ccw {transform-origin:240px 240px; animation:spinCCW 18s linear infinite}
            .ring-cw2 {transform-origin:240px 240px; animation:spinCW  8s linear infinite}
            .pulse1   {transform-origin:240px 240px; animation:pulseRing 3s ease-in-out infinite}
            .pulse2   {transform-origin:240px 240px; animation:pulseRing 3s ease-in-out infinite 1s}
            .pulse3   {transform-origin:240px 240px; animation:pulseRing 3s ease-in-out infinite 2s}
            .core-glow{animation:corePulse 2.5s ease-in-out infinite}
            .dash1 {stroke-dasharray:12 8; animation:dashFlow 1.4s linear infinite}
            .dash2 {stroke-dasharray:12 8; animation:dashFlow 1.4s linear infinite .35s}
            .dash3 {stroke-dasharray:12 8; animation:dashFlow 1.4s linear infinite .7s}
            .dash4 {stroke-dasharray:12 8; animation:dashFlow 1.4s linear infinite 1.05s}
            .node-icon{animation:nodeGlow 3s ease-in-out infinite}
            .p1{animation:particleRise 2.2s ease-out infinite}
            .p2{animation:particleRise 2.2s ease-out infinite .55s}
            .p3{animation:particleRise 2.2s ease-out infinite 1.1s}
            .p4{animation:particleRise 2.2s ease-out infinite 1.65s}
          `}</style>
        </defs>

        {/* ── Background ambient glow ── */}
        <circle cx="240" cy="240" r="190" fill="url(#core-grad)" />

        {/* ── Pulse rings ── */}
        <circle className="pulse1" cx="240" cy="240" r="80"  fill="none" stroke="#FFDA1A" strokeWidth="1.5" opacity=".18"/>
        <circle className="pulse2" cx="240" cy="240" r="110" fill="none" stroke="#FFDA1A" strokeWidth="1"   opacity=".12"/>
        <circle className="pulse3" cx="240" cy="240" r="140" fill="none" stroke="#FFDA1A" strokeWidth="0.8" opacity=".08"/>

        {/* ── Orbit track ── */}
        <circle cx="240" cy="240" r="130" fill="none" stroke="rgba(255,218,26,0.12)" strokeWidth="1" strokeDasharray="3 5"/>

        {/* ── Dashed spoke lines (static) to node positions ── */}
        {/* top */}
        <line x1="240" y1="190" x2="240" y2="110" stroke="rgba(255,218,26,0.25)" strokeWidth="1.5" className="dash1"/>
        {/* right */}
        <line x1="290" y1="240" x2="370" y2="240" stroke="rgba(255,218,26,0.25)" strokeWidth="1.5" className="dash2"/>
        {/* bottom */}
        <line x1="240" y1="290" x2="240" y2="370" stroke="rgba(255,218,26,0.25)" strokeWidth="1.5" className="dash3"/>
        {/* left */}
        <line x1="190" y1="240" x2="110" y2="240" stroke="rgba(255,218,26,0.25)" strokeWidth="1.5" className="dash4"/>

        {/* ── Outer rotating ring (dashed arc) ── */}
        <g className="ring-cw">
          <circle cx="240" cy="240" r="155" fill="none" stroke="rgba(255,218,26,0.3)" strokeWidth="1.5" strokeDasharray="20 12"/>
        </g>
        <g className="ring-ccw">
          <circle cx="240" cy="240" r="168" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="8 18"/>
        </g>

        {/* ── 4 Orbiting dot nodes on the track ── */}
        {/* They sit at cardinal positions on orbit r=130; we animate a marker */}
        <g className="ring-cw2">
          {[0,90,180,270].map((deg, i) => {
            const rad = (deg * Math.PI) / 180
            const x = 240 + 130 * Math.cos(rad)
            const y = 240 + 130 * Math.sin(rad)
            return (
              <circle key={i} cx={x} cy={y} r="6" fill="#FFDA1A" filter="url(#glow-yellow)" opacity="0.9"/>
            )
          })}
        </g>

        {/* ── 4 Static node cards (fixed positions) ── */}

        {/* TOP — Automation */}
        <g className="node-icon">
          <rect x="196" y="54" width="88" height="52" rx="12" fill="url(#node-grad)" stroke="#FFDA1A" strokeWidth="1.5"/>
          <text x="240" y="74" textAnchor="middle" fontSize="18" fill="#FFDA1A" style={{fontFamily:'system-ui,sans-serif'}}>⚡</text>
          <text x="240" y="96" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#fff" letterSpacing="0.5" style={{fontFamily:'system-ui,sans-serif'}}>AUTOMATE</text>
        </g>

        {/* RIGHT — Reporting */}
        <g className="node-icon" style={{animationDelay:'0.75s'}}>
          <rect x="378" y="214" width="88" height="52" rx="12" fill="url(#node-grad)" stroke="#FFDA1A" strokeWidth="1.5"/>
          <text x="422" y="234" textAnchor="middle" fontSize="18" fill="#FFDA1A" style={{fontFamily:'system-ui,sans-serif'}}>📊</text>
          <text x="422" y="256" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#fff" letterSpacing="0.5" style={{fontFamily:'system-ui,sans-serif'}}>REPORTS</text>
        </g>

        {/* BOTTOM — Spreadsheets */}
        <g className="node-icon" style={{animationDelay:'1.5s'}}>
          <rect x="196" y="374" width="88" height="52" rx="12" fill="url(#node-grad)" stroke="#FFDA1A" strokeWidth="1.5"/>
          <text x="240" y="394" textAnchor="middle" fontSize="18" fill="#FFDA1A" style={{fontFamily:'system-ui,sans-serif'}}>📋</text>
          <text x="240" y="416" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#fff" letterSpacing="0.5" style={{fontFamily:'system-ui,sans-serif'}}>SHEETS</text>
        </g>

        {/* LEFT — Integration */}
        <g className="node-icon" style={{animationDelay:'2.25s'}}>
          <rect x="14" y="214" width="88" height="52" rx="12" fill="url(#node-grad)" stroke="#FFDA1A" strokeWidth="1.5"/>
          <text x="58" y="234" textAnchor="middle" fontSize="18" fill="#FFDA1A" style={{fontFamily:'system-ui,sans-serif'}}>🔗</text>
          <text x="58" y="256" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#fff" letterSpacing="0.5" style={{fontFamily:'system-ui,sans-serif'}}>INTEGRATE</text>
        </g>

        {/* ── Central hub ── */}
        {/* Outer glow ring */}
        <circle cx="240" cy="240" r="62" fill="none" stroke="#FFDA1A" strokeWidth="2" opacity="0.3" filter="url(#glow-soft)"/>
        {/* Hub body */}
        <circle cx="240" cy="240" r="55" fill="#002060" stroke="#FFDA1A" strokeWidth="2.5"/>
        {/* Inner rotating segmented ring */}
        <g className="ring-cw" style={{transformOrigin:'240px 240px'}}>
          {[0,60,120,180,240,300].map((deg, i) => {
            const rad = (deg * Math.PI) / 180
            const x1 = 240 + 38 * Math.cos(rad)
            const y1 = 240 + 38 * Math.sin(rad)
            const x2 = 240 + 50 * Math.cos(rad)
            const y2 = 240 + 50 * Math.sin(rad)
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FFDA1A" strokeWidth="3" strokeLinecap="round" opacity="0.8"/>
          })}
        </g>
        {/* Inner circle */}
        <circle cx="240" cy="240" r="30" fill="#001540" stroke="rgba(255,218,26,0.4)" strokeWidth="1.5"/>
        {/* Lightning bolt */}
        <text x="240" y="251" textAnchor="middle" fontSize="26" className="core-glow" filter="url(#glow-yellow)" style={{fontFamily:'system-ui,sans-serif'}}>⚡</text>

        {/* ── Rising particles ── */}
        <circle className="p1" cx="220" cy="240" r="3" fill="#FFDA1A" opacity="0.9"/>
        <circle className="p2" cx="255" cy="245" r="2" fill="#fff"    opacity="0.7"/>
        <circle className="p3" cx="235" cy="248" r="2.5" fill="#FFDA1A" opacity="0.8"/>
        <circle className="p4" cx="248" cy="242" r="2" fill="#fff"    opacity="0.6"/>

      </svg>
    </div>
  )
}
