export default function ServicesIcon() {
  return (
    <div className="flex items-center justify-center w-full select-none">
      <svg viewBox="0 0 480 320" width="100%" style={{ maxWidth: 520 }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <style>{`
            /* ── card pulse ── */
            @keyframes sv-card{0%,100%{opacity:.9}50%{opacity:1}}
            .sv-card{animation:sv-card 3s ease-in-out infinite;will-change:opacity}

            /* ── SOCIAL sub-icon: post + engagement ── */
            @keyframes sv-heart{0%,100%{transform:scale(1)}50%{transform:scale(1.35)}}
            .sv-heart{animation:sv-heart 1.6s ease-in-out infinite;transform-origin:center;will-change:transform}
            @keyframes sv-cmt{0%,100%{transform:scale(1);opacity:.85}50%{transform:scale(1.2);opacity:1}}
            .sv-cmt{animation:sv-cmt 1.8s ease-in-out infinite .3s;transform-origin:center;will-change:transform,opacity}
            @keyframes sv-postglow{0%,100%{opacity:.7}50%{opacity:1}}
            .sv-postglow{animation:sv-postglow 2.4s ease-in-out infinite;will-change:opacity}
            @keyframes sv-cap{0%,5%{transform:scaleX(0);opacity:0}25%,90%{transform:scaleX(1);opacity:1}100%{transform:scaleX(0);opacity:0}}
            .sv-cap{animation:sv-cap 3s ease-out infinite;transform-origin:left;will-change:transform,opacity}

            /* ── WEBSITE sub-icon: browser + globe ── */
            @keyframes sv-globe{from{transform:rotate(0)}to{transform:rotate(360deg)}}
            .sv-globe{animation:sv-globe 9s linear infinite;transform-origin:center;will-change:transform}
            @keyframes sv-dot{0%,100%{opacity:.4}50%{opacity:1}}
            .sv-dot1{animation:sv-dot 2s ease-in-out infinite;will-change:opacity}
            .sv-dot2{animation:sv-dot 2s ease-in-out infinite .3s;will-change:opacity}
            .sv-dot3{animation:sv-dot 2s ease-in-out infinite .6s;will-change:opacity}

            /* ── AUTOMATION tiles: staggered pulse ── */
            @keyframes sv-tile{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}
            .sv-t1{animation:sv-tile 2.4s ease-in-out infinite 0s;transform-origin:center;will-change:transform}
            .sv-t2{animation:sv-tile 2.4s ease-in-out infinite .5s;transform-origin:center;will-change:transform}
            .sv-t3{animation:sv-tile 2.4s ease-in-out infinite 1s;transform-origin:center;will-change:transform}
            .sv-t4{animation:sv-tile 2.4s ease-in-out infinite 1.5s;transform-origin:center;will-change:transform}
          `}</style>
          <radialGradient id="sv-card-bg" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#1e5fc4"/>
            <stop offset="100%" stopColor="#001a50"/>
          </radialGradient>
        </defs>

        {/* ════════════════════════════════
            PANEL 1 — AUTOMATION
        ════════════════════════════════ */}
        <g className="sv-card">
          <rect x="20" y="20" width="140" height="280" rx="16" fill="url(#sv-card-bg)" stroke="#4fc3f7" strokeWidth="2.5"/>
          <circle cx="34" cy="34" r="11" fill="#4fc3f7"/>
          <text x="34" y="38" textAnchor="middle" fontSize="9" fontWeight="900" fill="#001a50" style={{ fontFamily: 'system-ui,sans-serif' }}>1</text>
          <text x="90" y="52" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#4fc3f7" letterSpacing="1.5" style={{ fontFamily: 'system-ui,sans-serif' }}>AUTOMATION</text>

          {/* 2x2 tile grid */}
          <g className="sv-t1">
            <rect x="35" y="64" width="52" height="52" rx="10" fill="#001540" stroke="#FFDA1A" strokeWidth="1.6"/>
            <text x="61" y="98" textAnchor="middle" fontSize="18" style={{ fontFamily: 'system-ui,sans-serif' }}>⚡</text>
          </g>
          <g className="sv-t2">
            <rect x="93" y="64" width="52" height="52" rx="10" fill="#001540" stroke="#4caf50" strokeWidth="1.6"/>
            <text x="119" y="98" textAnchor="middle" fontSize="18" style={{ fontFamily: 'system-ui,sans-serif' }}>📊</text>
          </g>
          <g className="sv-t3">
            <rect x="35" y="122" width="52" height="52" rx="10" fill="#001540" stroke="#ff9800" strokeWidth="1.6"/>
            <text x="61" y="156" textAnchor="middle" fontSize="18" style={{ fontFamily: 'system-ui,sans-serif' }}>📑</text>
          </g>
          <g className="sv-t4">
            <rect x="93" y="122" width="52" height="52" rx="10" fill="#001540" stroke="#4fc3f7" strokeWidth="1.6"/>
            <text x="119" y="156" textAnchor="middle" fontSize="18" style={{ fontFamily: 'system-ui,sans-serif' }}>🔗</text>
          </g>

          <text x="90" y="192" textAnchor="middle" fontSize="7" fontWeight="700" fill="rgba(255,255,255,.5)" letterSpacing=".3" style={{ fontFamily: 'system-ui,sans-serif' }}>WORKFLOWS</text>
          <text x="90" y="203" textAnchor="middle" fontSize="7" fontWeight="700" fill="rgba(255,255,255,.5)" letterSpacing=".3" style={{ fontFamily: 'system-ui,sans-serif' }}>REPORTS · SHEETS</text>
        </g>

        {/* ════════════════════════════════
            PANEL 2 — SOCIAL MEDIA MANAGEMENT
        ════════════════════════════════ */}
        <g className="sv-card">
          <rect x="170" y="20" width="140" height="280" rx="16" fill="url(#sv-card-bg)" stroke="#e1306c" strokeWidth="2.5"/>
          <circle cx="184" cy="34" r="11" fill="#e1306c"/>
          <text x="184" y="38" textAnchor="middle" fontSize="9" fontWeight="900" fill="#001a50" style={{ fontFamily: 'system-ui,sans-serif' }}>2</text>
          <text x="240" y="52" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#e1306c" letterSpacing="1.5" style={{ fontFamily: 'system-ui,sans-serif' }}>SOCIAL</text>

          {/* post card */}
          <g className="sv-postglow">
            <rect x="196" y="64" width="88" height="50" rx="7" fill="#001540" stroke="rgba(255,218,26,.4)" strokeWidth="1.5"/>
            <circle cx="212" cy="76" r="4" fill="#FFDA1A" opacity=".8"/>
            <polyline points="204,100 224,84 238,96 252,82 276,100" fill="none" stroke="rgba(79,195,247,.6)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <rect className="sv-cap" x="196" y="122" width="66" height="4" rx="2" fill="rgba(255,255,255,.3)"/>
          <rect className="sv-cap" x="196" y="130" width="42" height="4" rx="2" fill="rgba(255,255,255,.18)" style={{ animationDelay: '.2s' }}/>

          <g className="sv-heart" style={{ transformOrigin: '208px 150px' }}>
            <circle cx="208" cy="150" r="9" fill="#e1306c"/>
            <text x="208" y="153.5" textAnchor="middle" fontSize="9" style={{ fontFamily: 'system-ui,sans-serif' }}>❤</text>
          </g>
          <g className="sv-cmt" style={{ transformOrigin: '234px 150px' }}>
            <circle cx="234" cy="150" r="9" fill="#4fc3f7"/>
            <text x="234" y="153.5" textAnchor="middle" fontSize="8" fill="white" style={{ fontFamily: 'system-ui,sans-serif' }}>💬</text>
          </g>

          <text x="240" y="192" textAnchor="middle" fontSize="7" fontWeight="700" fill="rgba(255,255,255,.5)" letterSpacing=".3" style={{ fontFamily: 'system-ui,sans-serif' }}>CONTENT</text>
          <text x="240" y="203" textAnchor="middle" fontSize="7" fontWeight="700" fill="rgba(255,255,255,.5)" letterSpacing=".3" style={{ fontFamily: 'system-ui,sans-serif' }}>SCHEDULING · REACH</text>
        </g>

        {/* ════════════════════════════════
            PANEL 3 — WEBSITE DESIGN
        ════════════════════════════════ */}
        <g className="sv-card">
          <rect x="320" y="20" width="140" height="280" rx="16" fill="url(#sv-card-bg)" stroke="#34a853" strokeWidth="2.5"/>
          <circle cx="334" cy="34" r="11" fill="#34a853"/>
          <text x="334" y="38" textAnchor="middle" fontSize="9" fontWeight="900" fill="#001a50" style={{ fontFamily: 'system-ui,sans-serif' }}>3</text>
          <text x="390" y="52" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#34a853" letterSpacing="1.5" style={{ fontFamily: 'system-ui,sans-serif' }}>WEBSITE</text>

          {/* browser card */}
          <rect x="346" y="66" width="88" height="70" rx="7" fill="#001540" stroke="rgba(52,168,83,.5)" strokeWidth="1.5"/>
          <rect x="346" y="66" width="88" height="15" rx="7" fill="rgba(52,168,83,.15)"/>
          <circle className="sv-dot1" cx="356" cy="73.5" r="2.1" fill="#e1306c"/>
          <circle className="sv-dot2" cx="364" cy="73.5" r="2.1" fill="#FFDA1A"/>
          <circle className="sv-dot3" cx="372" cy="73.5" r="2.1" fill="#34a853"/>
          <g className="sv-globe" style={{ transformOrigin: '390px 108px' }}>
            <circle cx="390" cy="108" r="15" fill="none" stroke="#34a853" strokeWidth="1.8"/>
            <ellipse cx="390" cy="108" rx="6.5" ry="15" fill="none" stroke="#34a853" strokeWidth="1.2" opacity=".7"/>
            <line x1="375" y1="108" x2="405" y2="108" stroke="#34a853" strokeWidth="1.2" opacity=".7"/>
            <line x1="378" y1="99.5" x2="402" y2="99.5" stroke="#34a853" strokeWidth="1" opacity=".5"/>
            <line x1="378" y1="116.5" x2="402" y2="116.5" stroke="#34a853" strokeWidth="1" opacity=".5"/>
          </g>

          <text x="390" y="192" textAnchor="middle" fontSize="7" fontWeight="700" fill="rgba(255,255,255,.5)" letterSpacing=".3" style={{ fontFamily: 'system-ui,sans-serif' }}>DESIGN · BUILD</text>
          <text x="390" y="203" textAnchor="middle" fontSize="7" fontWeight="700" fill="rgba(255,255,255,.5)" letterSpacing=".3" style={{ fontFamily: 'system-ui,sans-serif' }}>MAINTAIN</text>
        </g>

      </svg>
    </div>
  )
}
