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

            /* ── divider dash flow ── */
            @keyframes sv-conn{0%,100%{opacity:.2}50%{opacity:.55}}
            .sv-conn{animation:sv-conn 2s ease-in-out infinite;will-change:opacity}

            /* ── EFFICIENCY tiles: staggered pulse ── */
            @keyframes sv-tile{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}
            .sv-t1{animation:sv-tile 2.4s ease-in-out infinite 0s;transform-origin:center;will-change:transform}
            .sv-t2{animation:sv-tile 2.4s ease-in-out infinite .5s;transform-origin:center;will-change:transform}
            .sv-t3{animation:sv-tile 2.4s ease-in-out infinite 1s;transform-origin:center;will-change:transform}
            .sv-t4{animation:sv-tile 2.4s ease-in-out infinite 1.5s;transform-origin:center;will-change:transform}

            /* ── center plus glow ── */
            @keyframes sv-plus{0%,100%{opacity:.55;transform:scale(1)}50%{opacity:1;transform:scale(1.15)}}
            .sv-plus{animation:sv-plus 2.4s ease-in-out infinite;transform-origin:center;will-change:transform,opacity}
          `}</style>
          <radialGradient id="sv-card-bg" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#1e5fc4"/>
            <stop offset="100%" stopColor="#001a50"/>
          </radialGradient>
        </defs>

        {/* ════════════════════════════════
            LEFT — VISIBILITY (Social + Website)
        ════════════════════════════════ */}
        <g className="sv-card">
          <rect x="20" y="20" width="200" height="280" rx="20" fill="url(#sv-card-bg)" stroke="#e1306c" strokeWidth="2.5"/>
          <text x="120" y="48" textAnchor="middle" fontSize="10" fontWeight="700" fill="#e1306c" letterSpacing="2" style={{ fontFamily: 'system-ui,sans-serif' }}>VISIBILITY</text>

          {/* — social post card — */}
          <g className="sv-postglow">
            <rect x="48" y="60" width="144" height="56" rx="8" fill="#001540" stroke="rgba(255,218,26,.4)" strokeWidth="1.5"/>
            <circle cx="66" cy="74" r="4" fill="#FFDA1A" opacity=".8"/>
            <polyline points="56,104 84,84 102,98 120,80 168,104" fill="none" stroke="rgba(79,195,247,.6)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <rect className="sv-cap" x="48" y="122" width="90" height="4" rx="2" fill="rgba(255,255,255,.3)"/>
          <rect className="sv-cap" x="48" y="130" width="58" height="4" rx="2" fill="rgba(255,255,255,.18)" style={{ animationDelay: '.2s' }}/>

          <g className="sv-heart" style={{ transformOrigin: '60px 148px' }}>
            <circle cx="60" cy="148" r="9" fill="#e1306c"/>
            <text x="60" y="151.5" textAnchor="middle" fontSize="9" style={{ fontFamily: 'system-ui,sans-serif' }}>❤</text>
          </g>
          <g className="sv-cmt" style={{ transformOrigin: '86px 148px' }}>
            <circle cx="86" cy="148" r="9" fill="#4fc3f7"/>
            <text x="86" y="151.5" textAnchor="middle" fontSize="8" fill="white" style={{ fontFamily: 'system-ui,sans-serif' }}>💬</text>
          </g>
          <text x="120" y="170" textAnchor="middle" fontSize="8" fontWeight="700" fill="rgba(225,48,108,.75)" letterSpacing="1" style={{ fontFamily: 'system-ui,sans-serif' }}>SOCIAL</text>

          {/* divider */}
          <line className="sv-conn" x1="40" y1="184" x2="200" y2="184" stroke="#FFDA1A" strokeWidth="1.5" strokeDasharray="4 5"/>

          {/* — website browser card — */}
          <rect x="52" y="198" width="136" height="72" rx="8" fill="#001540" stroke="rgba(79,195,247,.5)" strokeWidth="1.5"/>
          <rect x="52" y="198" width="136" height="16" rx="8" fill="rgba(79,195,247,.15)"/>
          <circle className="sv-dot1" cx="62" cy="206" r="2.2" fill="#e1306c"/>
          <circle className="sv-dot2" cx="70" cy="206" r="2.2" fill="#FFDA1A"/>
          <circle className="sv-dot3" cx="78" cy="206" r="2.2" fill="#4caf50"/>
          <g className="sv-globe" style={{ transformOrigin: '120px 242px' }}>
            <circle cx="120" cy="242" r="16" fill="none" stroke="#4fc3f7" strokeWidth="2"/>
            <ellipse cx="120" cy="242" rx="7" ry="16" fill="none" stroke="#4fc3f7" strokeWidth="1.3" opacity=".7"/>
            <line x1="104" y1="242" x2="136" y2="242" stroke="#4fc3f7" strokeWidth="1.3" opacity=".7"/>
            <line x1="107" y1="233" x2="133" y2="233" stroke="#4fc3f7" strokeWidth="1" opacity=".5"/>
            <line x1="107" y1="251" x2="133" y2="251" stroke="#4fc3f7" strokeWidth="1" opacity=".5"/>
          </g>
          <text x="120" y="284" textAnchor="middle" fontSize="8" fontWeight="700" fill="rgba(79,195,247,.75)" letterSpacing="1" style={{ fontFamily: 'system-ui,sans-serif' }}>WEBSITE</text>
        </g>

        {/* center plus */}
        <g className="sv-plus" style={{ transformOrigin: '240px 160px' }}>
          <circle cx="240" cy="160" r="18" fill="#0051BA" stroke="#FFDA1A" strokeWidth="2"/>
          <text x="240" y="168" textAnchor="middle" fontSize="20" fontWeight="900" fill="#FFDA1A" style={{ fontFamily: 'system-ui,sans-serif' }}>+</text>
        </g>

        {/* ════════════════════════════════
            RIGHT — EFFICIENCY (Automate · Report · Optimise · Integrate)
        ════════════════════════════════ */}
        <g className="sv-card">
          <rect x="260" y="20" width="200" height="280" rx="20" fill="url(#sv-card-bg)" stroke="#4fc3f7" strokeWidth="2.5"/>
          <text x="360" y="48" textAnchor="middle" fontSize="10" fontWeight="700" fill="#4fc3f7" letterSpacing="2" style={{ fontFamily: 'system-ui,sans-serif' }}>EFFICIENCY</text>

          {/* 2x2 tile grid */}
          <g className="sv-t1">
            <rect x="284" y="66" width="80" height="80" rx="14" fill="#001540" stroke="#FFDA1A" strokeWidth="1.8"/>
            <text x="324" y="116" textAnchor="middle" fontSize="26" style={{ fontFamily: 'system-ui,sans-serif' }}>⚡</text>
          </g>
          <g className="sv-t2">
            <rect x="376" y="66" width="80" height="80" rx="14" fill="#001540" stroke="#4caf50" strokeWidth="1.8"/>
            <text x="416" y="116" textAnchor="middle" fontSize="26" style={{ fontFamily: 'system-ui,sans-serif' }}>📊</text>
          </g>
          <g className="sv-t3">
            <rect x="284" y="154" width="80" height="80" rx="14" fill="#001540" stroke="#ff9800" strokeWidth="1.8"/>
            <text x="324" y="204" textAnchor="middle" fontSize="26" style={{ fontFamily: 'system-ui,sans-serif' }}>📑</text>
          </g>
          <g className="sv-t4">
            <rect x="376" y="154" width="80" height="80" rx="14" fill="#001540" stroke="#4fc3f7" strokeWidth="1.8"/>
            <text x="416" y="204" textAnchor="middle" fontSize="26" style={{ fontFamily: 'system-ui,sans-serif' }}>🔗</text>
          </g>

          <text x="360" y="260" textAnchor="middle" fontSize="8" fontWeight="700" fill="rgba(255,255,255,.5)" letterSpacing=".5" style={{ fontFamily: 'system-ui,sans-serif' }}>AUTOMATE · REPORT</text>
          <text x="360" y="272" textAnchor="middle" fontSize="8" fontWeight="700" fill="rgba(255,255,255,.5)" letterSpacing=".5" style={{ fontFamily: 'system-ui,sans-serif' }}>OPTIMISE · INTEGRATE</text>
        </g>

      </svg>
    </div>
  )
}
