export default function WorkflowIcon() {
  return (
    <div className="flex items-center justify-center w-full select-none">
      <svg viewBox="0 0 480 480" width="100%" style={{ maxWidth: 460 }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <filter id="wf-gy"   x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="wf-gb"   x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="wf-soft" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="22"/>
          </filter>
          <radialGradient id="wf-eng" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#1e5fc4"/>
            <stop offset="100%" stopColor="#001545"/>
          </radialGradient>
          <radialGradient id="wf-node" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#1a6fd4"/>
            <stop offset="100%" stopColor="#002570"/>
          </radialGradient>
          <radialGradient id="wf-sat" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#0d4b9e"/>
            <stop offset="100%" stopColor="#001a50"/>
          </radialGradient>
          <linearGradient id="wf-pipe" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#FFDA1A" stopOpacity="0.4"/>
            <stop offset="50%"  stopColor="#FFDA1A" stopOpacity="0.7"/>
            <stop offset="100%" stopColor="#FFDA1A" stopOpacity="0.4"/>
          </linearGradient>
          <radialGradient id="wf-amb" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#FFDA1A" stopOpacity="0.14"/>
            <stop offset="100%" stopColor="#0051BA" stopOpacity="0"/>
          </radialGradient>
          <style>{`
            @keyframes wf-spin  { from{transform:rotate(0deg)}  to{transform:rotate(360deg)} }
            @keyframes wf-spinr { from{transform:rotate(0deg)}  to{transform:rotate(-360deg)} }
            @keyframes wf-pulse {
              0%,100%{opacity:.18;transform:scale(1)}
              50%    {opacity:.45;transform:scale(1.07)}
            }
            @keyframes wf-core {
              0%,100%{opacity:.5} 50%{opacity:1}
            }
            @keyframes wf-node-glow {
              0%,100%{filter:drop-shadow(0 0 4px #FFDA1A)}
              50%    {filter:drop-shadow(0 0 16px #FFDA1A) drop-shadow(0 0 30px rgba(255,218,26,.4))}
            }
            @keyframes wf-sat-glow {
              0%,100%{filter:drop-shadow(0 0 3px #FFDA1A)}
              50%    {filter:drop-shadow(0 0 10px #FFDA1A)}
            }
            /* Data packet moving left→right along pipe */
            @keyframes wf-pkt1 {
              0%   {transform:translateX(-155px); opacity:0}
              8%   {opacity:1}
              92%  {opacity:1}
              100% {transform:translateX(155px);  opacity:0}
            }
            @keyframes wf-pkt2 {
              0%   {transform:translateX(-155px); opacity:0}
              8%   {opacity:1}
              92%  {opacity:1}
              100% {transform:translateX(155px);  opacity:0}
            }
            /* Data packet moving along spoke paths */
            @keyframes wf-spoke-flow {
              0%  {stroke-dashoffset:0}
              100%{stroke-dashoffset:-80}
            }
            /* Satellite float */
            @keyframes wf-float {
              0%,100%{transform:translateY(0)}
              50%    {transform:translateY(-6px)}
            }
            /* Step label pulse */
            @keyframes wf-step-in {
              0%,100%{opacity:.7} 50%{opacity:1}
            }
            /* Checkmark appear */
            @keyframes wf-check {
              0%,60%{opacity:0;transform:scale(.5)}
              80%   {opacity:1;transform:scale(1.2)}
              100%  {opacity:1;transform:scale(1)}
            }

            .wf-spin1 { transform-origin:240px 240px; animation:wf-spin  8s linear infinite }
            .wf-spin2 { transform-origin:240px 240px; animation:wf-spinr 12s linear infinite }
            .wf-spin3 { transform-origin:240px 240px; animation:wf-spin  5s linear infinite }
            .wf-pulse1{ transform-origin:240px 240px; animation:wf-pulse 3s ease-in-out infinite }
            .wf-pulse2{ transform-origin:240px 240px; animation:wf-pulse 3s ease-in-out infinite 1s }
            .wf-core  { animation:wf-core 2.5s ease-in-out infinite }
            .wf-p1    { animation:wf-pkt1 2.2s ease-in-out infinite }
            .wf-p2    { animation:wf-pkt2 2.2s ease-in-out infinite 1.1s }
            .wf-ng1   { animation:wf-node-glow 3s ease-in-out infinite }
            .wf-ng2   { animation:wf-node-glow 3s ease-in-out infinite 1.5s }
            .wf-sg1   { animation:wf-sat-glow 3s ease-in-out infinite }
            .wf-sg2   { animation:wf-sat-glow 3s ease-in-out infinite .75s }
            .wf-sg3   { animation:wf-sat-glow 3s ease-in-out infinite 1.5s }
            .wf-sg4   { animation:wf-sat-glow 3s ease-in-out infinite 2.25s }
            .wf-fl1   { animation:wf-float 3s ease-in-out infinite }
            .wf-fl2   { animation:wf-float 3s ease-in-out infinite .75s }
            .wf-fl3   { animation:wf-float 3s ease-in-out infinite 1.5s }
            .wf-fl4   { animation:wf-float 3s ease-in-out infinite 2.25s }
            .wf-sp    { stroke-dasharray:12 8; animation:wf-spoke-flow 1.4s linear infinite }
            .wf-sp2   { stroke-dasharray:12 8; animation:wf-spoke-flow 1.4s linear infinite .35s }
            .wf-sp3   { stroke-dasharray:12 8; animation:wf-spoke-flow 1.4s linear infinite .7s }
            .wf-sp4   { stroke-dasharray:12 8; animation:wf-spoke-flow 1.4s linear infinite 1.05s }
          `}</style>
        </defs>

        {/* Ambient background glow */}
        <circle cx="240" cy="240" r="170" fill="url(#wf-amb)"/>
        <circle cx="240" cy="240" r="80"  fill="#FFDA1A" opacity="0.05" filter="url(#wf-soft)"/>

        {/* ── Pulse rings behind engine ── */}
        <circle className="wf-pulse1" cx="240" cy="240" r="82"  fill="none" stroke="#FFDA1A" strokeWidth="1.5" opacity=".18"/>
        <circle className="wf-pulse2" cx="240" cy="240" r="108" fill="none" stroke="#FFDA1A" strokeWidth="1"   opacity=".1"/>

        {/* ══ MAIN PIPELINE TUBE ══ */}
        {/* Track */}
        <rect x="68" y="229" width="344" height="22" rx="11" fill="rgba(0,30,80,0.7)" stroke="rgba(255,218,26,0.2)" strokeWidth="1"/>
        {/* Gradient fill showing flow */}
        <rect x="68" y="231" width="344" height="18" rx="9" fill="url(#wf-pipe)" opacity="0.18"/>
        {/* Flow line */}
        <line x1="68" y1="240" x2="412" y2="240" stroke="rgba(255,218,26,0.15)" strokeWidth="2"/>

        {/* Animated data packets along pipe */}
        <g className="wf-p1" style={{ transformOrigin: '240px 240px' }}>
          <rect x="222" y="233" width="36" height="14" rx="7" fill="#FFDA1A" opacity="0.9" filter="url(#wf-gy)"/>
        </g>
        <g className="wf-p2" style={{ transformOrigin: '240px 240px' }}>
          <rect x="228" y="235" width="24" height="10" rx="5" fill="#fff" opacity="0.7"/>
        </g>

        {/* ══ INPUT NODE (left) ══ */}
        <g className="wf-ng1 wf-fl1" style={{ transformOrigin: '100px 240px' }}>
          {/* Outer glow ring */}
          <circle cx="100" cy="240" r="46" fill="none" stroke="#FFDA1A" strokeWidth="1.5" opacity="0.2" filter="url(#wf-gb)"/>
          {/* Node body */}
          <circle cx="100" cy="240" r="40" fill="url(#wf-node)" stroke="#FFDA1A" strokeWidth="2"/>
          <circle cx="100" cy="240" r="26" fill="#001540" stroke="rgba(255,218,26,0.35)" strokeWidth="1.2"/>
          {/* Icon */}
          <text x="100" y="250" textAnchor="middle" fontSize="22" style={{ fontFamily: 'system-ui,sans-serif' }}>📥</text>
          {/* Label */}
          <rect x="66" y="288" width="68" height="22" rx="6" fill="rgba(0,30,80,0.8)" stroke="rgba(255,218,26,0.3)" strokeWidth="1"/>
          <text x="100" y="303" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#FFDA1A" letterSpacing=".8" style={{ fontFamily: 'system-ui,sans-serif' }}>INPUT</text>
          {/* Step badge */}
          <circle cx="100" cy="196" r="12" fill="#FFDA1A"/>
          <text x="100" y="200" textAnchor="middle" fontSize="9" fontWeight="800" fill="#002060" style={{ fontFamily: 'system-ui,sans-serif' }}>01</text>
        </g>

        {/* Arrow: input → engine */}
        <polygon points="163,236 175,240 163,244" fill="#FFDA1A" opacity="0.6"/>

        {/* ══ AUTOMATION ENGINE (centre) ══ */}
        {/* Outer decorative ring — spinning */}
        <g className="wf-spin1">
          <circle cx="240" cy="240" r="74" fill="none" stroke="rgba(255,218,26,0.3)" strokeWidth="1.5" strokeDasharray="18 10"/>
        </g>
        <g className="wf-spin2">
          <circle cx="240" cy="240" r="84" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="8 18"/>
        </g>

        {/* Engine glow */}
        <circle cx="240" cy="240" r="66" fill="none" stroke="#FFDA1A" strokeWidth="2" opacity="0.2" filter="url(#wf-gb)"/>
        {/* Engine body */}
        <circle cx="240" cy="240" r="60" fill="url(#wf-eng)" stroke="#FFDA1A" strokeWidth="2.5"/>

        {/* Inner spinning segmented ring */}
        <g className="wf-spin3" style={{ transformOrigin: '240px 240px' }}>
          {[0,40,80,120,160,200,240,280,320].map((deg, i) => {
            const rad = (deg * Math.PI) / 180
            const x1 = 240 + 42 * Math.cos(rad), y1 = 240 + 42 * Math.sin(rad)
            const x2 = 240 + 55 * Math.cos(rad), y2 = 240 + 55 * Math.sin(rad)
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FFDA1A" strokeWidth="3" strokeLinecap="round" opacity="0.85"/>
          })}
        </g>

        {/* Inner circle */}
        <circle cx="240" cy="240" r="32" fill="#001030" stroke="rgba(255,218,26,0.5)" strokeWidth="1.5"/>
        {/* CCW decoration dots */}
        <g className="wf-spin2" style={{ transformOrigin: '240px 240px' }}>
          {[0,72,144,216,288].map((deg, i) => {
            const rad = (deg * Math.PI) / 180
            return <circle key={i} cx={240 + 24 * Math.cos(rad)} cy={240 + 24 * Math.sin(rad)} r="3" fill="#FFDA1A" opacity="0.6"/>
          })}
        </g>
        {/* Core icon */}
        <text x="240" y="252" textAnchor="middle" fontSize="28" className="wf-core" filter="url(#wf-gy)" style={{ fontFamily: 'system-ui,sans-serif' }}>⚡</text>

        {/* Engine label */}
        <rect x="192" y="306" width="96" height="24" rx="8" fill="rgba(0,20,60,0.9)" stroke="rgba(255,218,26,0.4)" strokeWidth="1.2"/>
        <text x="240" y="322" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#FFDA1A" letterSpacing=".8" style={{ fontFamily: 'system-ui,sans-serif' }}>AUTOMATE</text>
        {/* Step badge */}
        <circle cx="240" cy="175" r="13" fill="#FFDA1A"/>
        <text x="240" y="179" textAnchor="middle" fontSize="9" fontWeight="800" fill="#002060" style={{ fontFamily: 'system-ui,sans-serif' }}>02</text>

        {/* Arrow: engine → output */}
        <polygon points="305,236 317,240 305,244" fill="#FFDA1A" opacity="0.6"/>

        {/* ══ OUTPUT NODE (right) ══ */}
        <g className="wf-ng2 wf-fl2" style={{ transformOrigin: '380px 240px' }}>
          <circle cx="380" cy="240" r="46" fill="none" stroke="#FFDA1A" strokeWidth="1.5" opacity="0.2" filter="url(#wf-gb)"/>
          <circle cx="380" cy="240" r="40" fill="url(#wf-node)" stroke="#FFDA1A" strokeWidth="2"/>
          <circle cx="380" cy="240" r="26" fill="#001540" stroke="rgba(255,218,26,0.35)" strokeWidth="1.2"/>
          <text x="380" y="250" textAnchor="middle" fontSize="22" style={{ fontFamily: 'system-ui,sans-serif' }}>📊</text>
          <rect x="346" y="288" width="68" height="22" rx="6" fill="rgba(0,30,80,0.8)" stroke="rgba(255,218,26,0.3)" strokeWidth="1"/>
          <text x="380" y="303" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#FFDA1A" letterSpacing=".8" style={{ fontFamily: 'system-ui,sans-serif' }}>REPORT</text>
          <circle cx="380" cy="196" r="12" fill="#FFDA1A"/>
          <text x="380" y="200" textAnchor="middle" fontSize="9" fontWeight="800" fill="#002060" style={{ fontFamily: 'system-ui,sans-serif' }}>03</text>
        </g>

        {/* ══ 4 SATELLITE TASK NODES around engine ══ */}
        {/* Spoke lines with animated dashes */}
        {/* Top */}
        <line x1="240" y1="176" x2="240" y2="110" stroke="rgba(255,218,26,0.3)" strokeWidth="1.5" className="wf-sp"/>
        {/* Bottom */}
        <line x1="240" y1="304" x2="240" y2="370" stroke="rgba(255,218,26,0.3)" strokeWidth="1.5" className="wf-sp2"/>
        {/* Top-left diagonal */}
        <line x1="197" y1="200" x2="152" y2="148" stroke="rgba(255,218,26,0.25)" strokeWidth="1.5" className="wf-sp3"/>
        {/* Top-right diagonal */}
        <line x1="283" y1="200" x2="328" y2="148" stroke="rgba(255,218,26,0.25)" strokeWidth="1.5" className="wf-sp4"/>

        {/* TOP satellite — Schedule */}
        <g className="wf-sg1 wf-fl1" style={{ transformOrigin: '240px 86px' }}>
          <rect x="208" y="64" width="64" height="50" rx="12" fill="url(#wf-sat)" stroke="#FFDA1A" strokeWidth="1.5"/>
          <text x="240" y="83" textAnchor="middle" fontSize="18" style={{ fontFamily: 'system-ui,sans-serif' }}>⏰</text>
          <text x="240" y="103" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#FFDA1A" letterSpacing=".5" style={{ fontFamily: 'system-ui,sans-serif' }}>SCHEDULE</text>
        </g>

        {/* BOTTOM satellite — Verify */}
        <g className="wf-sg2 wf-fl2" style={{ transformOrigin: '240px 394px' }}>
          <rect x="208" y="372" width="64" height="50" rx="12" fill="url(#wf-sat)" stroke="#FFDA1A" strokeWidth="1.5"/>
          <text x="240" y="391" textAnchor="middle" fontSize="18" style={{ fontFamily: 'system-ui,sans-serif' }}>✅</text>
          <text x="240" y="411" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#FFDA1A" letterSpacing=".5" style={{ fontFamily: 'system-ui,sans-serif' }}>VERIFY</text>
        </g>

        {/* TOP-LEFT satellite — Collect */}
        <g className="wf-sg3 wf-fl3" style={{ transformOrigin: '136px 124px' }}>
          <rect x="104" y="102" width="64" height="50" rx="12" fill="url(#wf-sat)" stroke="#FFDA1A" strokeWidth="1.5"/>
          <text x="136" y="121" textAnchor="middle" fontSize="18" style={{ fontFamily: 'system-ui,sans-serif' }}>📋</text>
          <text x="136" y="141" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#FFDA1A" letterSpacing=".5" style={{ fontFamily: 'system-ui,sans-serif' }}>COLLECT</text>
        </g>

        {/* TOP-RIGHT satellite — Sync */}
        <g className="wf-sg4 wf-fl4" style={{ transformOrigin: '344px 124px' }}>
          <rect x="312" y="102" width="64" height="50" rx="12" fill="url(#wf-sat)" stroke="#FFDA1A" strokeWidth="1.5"/>
          <text x="344" y="121" textAnchor="middle" fontSize="18" style={{ fontFamily: 'system-ui,sans-serif' }}>🔗</text>
          <text x="344" y="141" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#FFDA1A" letterSpacing=".5" style={{ fontFamily: 'system-ui,sans-serif' }}>SYNC</text>
        </g>

      </svg>
    </div>
  )
}
