export default function BlogIcon() {
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
          <filter id="bi-glow-y" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="bi-glow-soft" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="14" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <radialGradient id="bi-bulb-grad" cx="50%" cy="40%" r="60%">
            <stop offset="0%"   stopColor="#FFDA1A" stopOpacity="0.95"/>
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.7"/>
          </radialGradient>
          <radialGradient id="bi-hub-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#1a6fd4"/>
            <stop offset="100%" stopColor="#001f5c"/>
          </radialGradient>
          <radialGradient id="bi-amb" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#FFDA1A" stopOpacity="0.15"/>
            <stop offset="100%" stopColor="#0051BA" stopOpacity="0"/>
          </radialGradient>
          <style>{`
            @keyframes bi-pulse {
              0%,100%{opacity:.15;r:90}  50%{opacity:.35;r:98}
            }
            @keyframes bi-pulse2 {
              0%,100%{opacity:.08;r:120} 50%{opacity:.2;r:130}
            }
            @keyframes bi-glow {
              0%,100%{filter:drop-shadow(0 0 8px #FFDA1A) drop-shadow(0 0 24px #FFDA1A)}
              50%    {filter:drop-shadow(0 0 18px #FFDA1A) drop-shadow(0 0 48px #FFDA1A)}
            }
            @keyframes bi-rise {
              0%  {transform:translateY(0)  scale(1);   opacity:1}
              100%{transform:translateY(-80px) scale(0.2); opacity:0}
            }
            @keyframes bi-spark {
              0%  {opacity:1;transform:translate(0,0) scale(1)}
              100%{opacity:0;transform:translate(var(--dx),var(--dy)) scale(0)}
            }
            @keyframes bi-card-float {
              0%,100%{transform:translateY(0)}
              50%    {transform:translateY(-5px)}
            }
            @keyframes bi-card-glow {
              0%,100%{filter:drop-shadow(0 0 3px #FFDA1A)}
              50%    {filter:drop-shadow(0 0 12px #FFDA1A)}
            }
            @keyframes bi-ring-spin {
              from{transform:rotate(0deg)} to{transform:rotate(360deg)}
            }
            @keyframes bi-dash {
              to{stroke-dashoffset:-40}
            }
            .bi-pulse1 { animation:bi-pulse  3s ease-in-out infinite }
            .bi-pulse2 { animation:bi-pulse2 3s ease-in-out infinite 1.5s }
            .bi-glow   { animation:bi-glow   2.5s ease-in-out infinite }
            .bi-p1 { animation:bi-rise 2s ease-out infinite }
            .bi-p2 { animation:bi-rise 2s ease-out infinite .5s }
            .bi-p3 { animation:bi-rise 2s ease-out infinite 1s }
            .bi-p4 { animation:bi-rise 2s ease-out infinite 1.5s }
            .bi-ring { transform-origin:240px 230px; animation:bi-ring-spin 20s linear infinite }
            .bi-dash1 { stroke-dasharray:10 8; animation:bi-dash 1.4s linear infinite }
            .bi-dash2 { stroke-dasharray:10 8; animation:bi-dash 1.4s linear infinite .35s }
            .bi-dash3 { stroke-dasharray:10 8; animation:bi-dash 1.4s linear infinite .7s }
            .bi-dash4 { stroke-dasharray:10 8; animation:bi-dash 1.4s linear infinite 1.05s }
            .bi-card  { animation:bi-card-float 3s ease-in-out infinite, bi-card-glow 3s ease-in-out infinite }
            .bi-c1    { animation:bi-card-float 3s ease-in-out infinite,    bi-card-glow 3s ease-in-out infinite }
            .bi-c2    { animation:bi-card-float 3s ease-in-out infinite .75s, bi-card-glow 3s ease-in-out infinite .75s }
            .bi-c3    { animation:bi-card-float 3s ease-in-out infinite 1.5s, bi-card-glow 3s ease-in-out infinite 1.5s }
            .bi-c4    { animation:bi-card-float 3s ease-in-out infinite 2.25s, bi-card-glow 3s ease-in-out infinite 2.25s }
          `}</style>
        </defs>

        {/* Ambient glow */}
        <ellipse cx="240" cy="230" rx="170" ry="140" fill="url(#bi-amb)"/>

        {/* Pulse rings */}
        <circle className="bi-pulse1" cx="240" cy="230" r="90" fill="none" stroke="#FFDA1A" strokeWidth="1.5" opacity=".15"/>
        <circle className="bi-pulse2" cx="240" cy="230" r="120" fill="none" stroke="#FFDA1A" strokeWidth="1" opacity=".08"/>

        {/* Outer orbit ring */}
        <circle className="bi-ring" cx="240" cy="230" r="150" fill="none" stroke="rgba(255,218,26,0.15)" strokeWidth="1" strokeDasharray="4 6"/>

        {/* Dashed spokes to cards */}
        <line x1="240" y1="148" x2="240" y2="78"  stroke="rgba(255,218,26,0.25)" strokeWidth="1.5" className="bi-dash1"/>
        <line x1="310" y1="200" x2="376" y2="168" stroke="rgba(255,218,26,0.25)" strokeWidth="1.5" className="bi-dash2"/>
        <line x1="310" y1="265" x2="376" y2="298" stroke="rgba(255,218,26,0.25)" strokeWidth="1.5" className="bi-dash3"/>
        <line x1="170" y1="200" x2="104" y2="168" stroke="rgba(255,218,26,0.25)" strokeWidth="1.5" className="bi-dash4"/>

        {/* ── Lightbulb body ── */}
        {/* Base cap */}
        <rect x="208" y="316" width="64" height="14" rx="5" fill="#1a3060" stroke="#FFDA1A" strokeWidth="1.5"/>
        <rect x="214" y="330" width="52" height="12" rx="4" fill="#1a3060" stroke="#FFDA1A" strokeWidth="1.2"/>
        <rect x="220" y="342" width="40" height="10" rx="3" fill="#1a3060" stroke="rgba(255,218,26,0.5)" strokeWidth="1"/>

        {/* Bulb glow */}
        <circle cx="240" cy="230" r="74" fill="#FFDA1A" filter="url(#bi-glow-soft)" opacity="0.25" className="bi-glow"/>

        {/* Bulb glass */}
        <path d="M188,240 Q180,195 200,170 Q215,145 240,140 Q265,145 280,170 Q300,195 292,240 Q290,260 280,272 Q270,285 260,292 L260,316 L220,316 L220,292 Q210,285 200,272 Q190,260 188,240 Z"
          fill="url(#bi-bulb-grad)" stroke="#f59e0b" strokeWidth="2" className="bi-glow"/>

        {/* Inner filament lines */}
        <path d="M240,178 L232,210 L248,210 L240,242 L232,242 L248,266" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeLinecap="round"/>

        {/* Shine highlight */}
        <ellipse cx="222" cy="180" rx="10" ry="18" fill="rgba(255,255,255,0.35)" transform="rotate(-20,222,180)"/>

        {/* Rising particles */}
        <circle className="bi-p1" cx="222" cy="250" r="3"   fill="#FFDA1A" opacity="0.9"/>
        <circle className="bi-p2" cx="258" cy="245" r="2"   fill="#fff"    opacity="0.7"/>
        <circle className="bi-p3" cx="236" cy="255" r="2.5" fill="#FFDA1A" opacity="0.8"/>
        <circle className="bi-p4" cx="252" cy="248" r="2"   fill="#fff"    opacity="0.6"/>

        {/* ── Floating insight cards ── */}

        {/* TOP */}
        <g className="bi-c1" style={{ transformOrigin: '240px 54px' }}>
          <rect x="196" y="32" width="88" height="44" rx="10" fill="url(#bi-hub-grad)" stroke="#FFDA1A" strokeWidth="1.5"/>
          <text x="240" y="50" textAnchor="middle" fontSize="14" fill="#FFDA1A" style={{ fontFamily: 'system-ui,sans-serif' }}>💡</text>
          <text x="240" y="67" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#fff" letterSpacing="0.5" style={{ fontFamily: 'system-ui,sans-serif' }}>INSIGHTS</text>
        </g>

        {/* RIGHT-TOP */}
        <g className="bi-c2" style={{ transformOrigin: '400px 148px' }}>
          <rect x="360" y="126" width="80" height="44" rx="10" fill="url(#bi-hub-grad)" stroke="#FFDA1A" strokeWidth="1.5"/>
          <text x="400" y="144" textAnchor="middle" fontSize="14" fill="#FFDA1A" style={{ fontFamily: 'system-ui,sans-serif' }}>📊</text>
          <text x="400" y="161" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#fff" letterSpacing="0.5" style={{ fontFamily: 'system-ui,sans-serif' }}>REPORTING</text>
        </g>

        {/* RIGHT-BOTTOM */}
        <g className="bi-c3" style={{ transformOrigin: '400px 278px' }}>
          <rect x="360" y="256" width="80" height="44" rx="10" fill="url(#bi-hub-grad)" stroke="#FFDA1A" strokeWidth="1.5"/>
          <text x="400" y="274" textAnchor="middle" fontSize="14" fill="#FFDA1A" style={{ fontFamily: 'system-ui,sans-serif' }}>⚡</text>
          <text x="400" y="291" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#fff" letterSpacing="0.5" style={{ fontFamily: 'system-ui,sans-serif' }}>AUTOMATE</text>
        </g>

        {/* LEFT */}
        <g className="bi-c4" style={{ transformOrigin: '64px 148px' }}>
          <rect x="24" y="126" width="80" height="44" rx="10" fill="url(#bi-hub-grad)" stroke="#FFDA1A" strokeWidth="1.5"/>
          <text x="64" y="144" textAnchor="middle" fontSize="14" fill="#FFDA1A" style={{ fontFamily: 'system-ui,sans-serif' }}>🔗</text>
          <text x="64" y="161" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#fff" letterSpacing="0.5" style={{ fontFamily: 'system-ui,sans-serif' }}>INTEGRATE</text>
        </g>

      </svg>
    </div>
  )
}
