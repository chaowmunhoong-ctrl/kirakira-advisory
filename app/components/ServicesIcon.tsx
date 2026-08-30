export default function ServicesIcon() {
  return (
    <div className="flex items-center justify-center w-full select-none">
      <svg viewBox="0 0 480 320" width="100%" style={{ maxWidth: 520 }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <style>{`
            /* ── AUTOMATE: gear spin ── */
            @keyframes sv-gear{from{transform:rotate(0)}to{transform:rotate(360deg)}}
            @keyframes sv-gearr{from{transform:rotate(0)}to{transform:rotate(-360deg)}}
            .sv-g1{animation:sv-gear  4s linear infinite;transform-origin:96px 96px;will-change:transform}
            .sv-g2{animation:sv-gearr 3s linear infinite;transform-origin:122px 112px;will-change:transform}
            @keyframes sv-chk{0%,30%{stroke-dashoffset:20}70%,100%{stroke-dashoffset:0}}
            .sv-chk{stroke-dasharray:20;animation:sv-chk 2s ease-out infinite;will-change:auto}

            /* ── REPORTS: bar grow ── */
            @keyframes sv-bar{0%{transform:scaleY(.1)}55%{transform:scaleY(1)}75%{transform:scaleY(.85)}100%{transform:scaleY(1)}}
            .sv-b1{animation:sv-bar 2.2s cubic-bezier(.34,1.4,.64,1) infinite 0s;transform-origin:bottom;will-change:transform}
            .sv-b2{animation:sv-bar 2.2s cubic-bezier(.34,1.4,.64,1) infinite .25s;transform-origin:bottom;will-change:transform}
            .sv-b3{animation:sv-bar 2.2s cubic-bezier(.34,1.4,.64,1) infinite .5s;transform-origin:bottom;will-change:transform}
            .sv-b4{animation:sv-bar 2.2s cubic-bezier(.34,1.4,.64,1) infinite .75s;transform-origin:bottom;will-change:transform}
            .sv-b5{animation:sv-bar 2.2s cubic-bezier(.34,1.4,.64,1) infinite 1s;transform-origin:bottom;will-change:transform}
            @keyframes sv-line{0%{transform:scaleX(0)}60%{transform:scaleX(1)}100%{transform:scaleX(1)}}
            .sv-tl{animation:sv-line 2.2s ease-out infinite;transform-origin:left;will-change:transform}

            /* ── INTEGRATE: packet travel ── */
            @keyframes sv-pkt{0%{transform:translateX(0);opacity:0}10%{opacity:1}85%{opacity:1}100%{transform:translateX(72px);opacity:0}}
            .sv-p1{animation:sv-pkt 1.8s ease-in-out infinite 0s;will-change:transform,opacity}
            .sv-p2{animation:sv-pkt 1.8s ease-in-out infinite .6s;will-change:transform,opacity}
            .sv-p3{animation:sv-pkt 1.8s ease-in-out infinite 1.2s;will-change:transform,opacity}
            @keyframes sv-nod{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}
            .sv-nd{animation:sv-nod 2s ease-in-out infinite;will-change:transform}
            .sv-nd2{animation:sv-nod 2s ease-in-out infinite .66s;will-change:transform}
            .sv-nd3{animation:sv-nod 2s ease-in-out infinite 1.33s;will-change:transform}

            /* ── OPTIMISE: row highlight sweep ── */
            @keyframes sv-row{0%,8%{transform:translateY(0);opacity:0}15%{opacity:1}30%{opacity:1;transform:translateY(0)}45%{transform:translateY(18px);opacity:1}55%{transform:translateY(18px);opacity:0}56%{transform:translateY(0);opacity:0}100%{transform:translateY(0);opacity:0}}
            .sv-hl{animation:sv-row 3s ease-in-out infinite;will-change:transform,opacity}
            @keyframes sv-cell{0%,40%{transform:scaleX(0);opacity:0}60%,85%{transform:scaleX(1);opacity:1}95%,100%{transform:scaleX(0);opacity:0}}
            .sv-c1{animation:sv-cell 2.4s ease-out infinite 0s;transform-origin:left;will-change:transform,opacity}
            .sv-c2{animation:sv-cell 2.4s ease-out infinite .3s;transform-origin:left;will-change:transform,opacity}
            .sv-c3{animation:sv-cell 2.4s ease-out infinite .6s;transform-origin:left;will-change:transform,opacity}

            /* ── card pulse ── */
            @keyframes sv-card{0%,100%{opacity:.9}50%{opacity:1}}
            .sv-card{animation:sv-card 3s ease-in-out infinite;will-change:opacity}

            /* ── connector line pulse ── */
            @keyframes sv-conn{0%,100%{opacity:.2}50%{opacity:.55}}
            .sv-conn{animation:sv-conn 2s ease-in-out infinite;will-change:opacity}
            .sv-conn2{animation:sv-conn 2s ease-in-out infinite .5s;will-change:opacity}
            .sv-conn3{animation:sv-conn 2s ease-in-out infinite 1s;will-change:opacity}
            .sv-conn4{animation:sv-conn 2s ease-in-out infinite 1.5s;will-change:opacity}
          `}</style>
          <radialGradient id="sv-card-bg" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#1e5fc4"/>
            <stop offset="100%" stopColor="#001a50"/>
          </radialGradient>
          <linearGradient id="sv-bar-g" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFDA1A"/>
            <stop offset="100%" stopColor="#e6c200"/>
          </linearGradient>
        </defs>

        {/* ── connector lines between cards ── */}
        {/* horizontal top */}
        <line className="sv-conn"  x1="198" y1="96"  x2="282" y2="96"  stroke="#FFDA1A" strokeWidth="2" strokeDasharray="5 4"/>
        {/* horizontal bottom */}
        <line className="sv-conn2" x1="198" y1="224" x2="282" y2="224" stroke="#FFDA1A" strokeWidth="2" strokeDasharray="5 4"/>
        {/* vertical left */}
        <line className="sv-conn3" x1="96"  y1="148" x2="96"  y2="172" stroke="#FFDA1A" strokeWidth="2" strokeDasharray="5 4"/>
        {/* vertical right */}
        <line className="sv-conn4" x1="384" y1="148" x2="384" y2="172" stroke="#FFDA1A" strokeWidth="2" strokeDasharray="5 4"/>

        {/* ════════════════════════════════
            TOP-LEFT — AUTOMATE
        ════════════════════════════════ */}
        <g className="sv-card">
          <rect x="18" y="28" width="156" height="136" rx="18" fill="url(#sv-card-bg)" stroke="#FFDA1A" strokeWidth="2.5"/>
          <text x="96" y="52" textAnchor="middle" fontSize="9" fontWeight="700" fill="#FFDA1A" letterSpacing="1.5" style={{ fontFamily: 'system-ui,sans-serif' }}>AUTOMATE</text>

          {/* large gear */}
          <g className="sv-g1">
            <circle cx="96" cy="96" r="24" fill="none" stroke="#FFDA1A" strokeWidth="5"/>
            {[0,45,90,135,180,225,270,315].map((deg,i)=>{
              const r=Math.PI/180, x=96+29*Math.cos(deg*r), y=96+29*Math.sin(deg*r)
              return <rect key={i} x={x-4} y={y-4} width="8" height="8" rx="2" fill="#FFDA1A" transform={`rotate(${deg},${x},${y})`}/>
            })}
            <circle cx="96" cy="96" r="10" fill="#001540"/>
            <circle cx="96" cy="96" r="5" fill="#FFDA1A" opacity=".7"/>
          </g>
          {/* small gear */}
          <g className="sv-g2">
            <circle cx="122" cy="112" r="13" fill="none" stroke="rgba(255,218,26,.5)" strokeWidth="3"/>
            {[0,60,120,180,240,300].map((deg,i)=>{
              const r=Math.PI/180, x=122+16*Math.cos(deg*r), y=112+16*Math.sin(deg*r)
              return <rect key={i} x={x-3} y={y-3} width="6" height="6" rx="1.5" fill="rgba(255,218,26,.5)" transform={`rotate(${deg},${x},${y})`}/>
            })}
            <circle cx="122" cy="112" r="5" fill="#001540"/>
          </g>
          {/* checkmark */}
          <circle cx="64" cy="114" r="11" fill="#4caf50" opacity=".9"/>
          <polyline className="sv-chk" points="59,114 63,119 70,109" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>

          <text x="96" y="152" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,.5)" style={{ fontFamily: 'system-ui,sans-serif' }}>Workflows</text>
        </g>

        {/* ════════════════════════════════
            TOP-RIGHT — REPORTS
        ════════════════════════════════ */}
        <g className="sv-card">
          <rect x="306" y="28" width="156" height="136" rx="18" fill="url(#sv-card-bg)" stroke="#4caf50" strokeWidth="2.5"/>
          <text x="384" y="52" textAnchor="middle" fontSize="9" fontWeight="700" fill="#4caf50" letterSpacing="1.5" style={{ fontFamily: 'system-ui,sans-serif' }}>REPORTS</text>

          {/* bar chart */}
          <g className="sv-b1"><rect x="326" y="70" width="14" height="50" rx="3" fill="url(#sv-bar-g)"/></g>
          <g className="sv-b2"><rect x="346" y="82" width="14" height="38" rx="3" fill="url(#sv-bar-g)" opacity=".8"/></g>
          <g className="sv-b3"><rect x="366" y="60" width="14" height="60" rx="3" fill="url(#sv-bar-g)"/></g>
          <g className="sv-b4"><rect x="386" y="74" width="14" height="46" rx="3" fill="url(#sv-bar-g)" opacity=".8"/></g>
          <g className="sv-b5"><rect x="406" y="66" width="14" height="54" rx="3" fill="url(#sv-bar-g)" opacity=".9"/></g>
          {/* baseline */}
          <line x1="322" y1="122" x2="428" y2="122" stroke="rgba(255,255,255,.2)" strokeWidth="1.5"/>
          {/* trend line */}
          <polyline className="sv-tl" points="333,110 353,100 373,88 393,96 413,80" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity=".6"/>

          <text x="384" y="152" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,.5)" style={{ fontFamily: 'system-ui,sans-serif' }}>Live data</text>
        </g>

        {/* ════════════════════════════════
            BOTTOM-LEFT — OPTIMISE
        ════════════════════════════════ */}
        <g className="sv-card">
          <rect x="18" y="156" width="156" height="136" rx="18" fill="url(#sv-card-bg)" stroke="#ff9800" strokeWidth="2.5"/>
          <text x="96" y="180" textAnchor="middle" fontSize="9" fontWeight="700" fill="#ff9800" letterSpacing="1.5" style={{ fontFamily: 'system-ui,sans-serif' }}>OPTIMISE</text>

          {/* spreadsheet grid */}
          {/* header row */}
          <rect x="34" y="190" width="128" height="14" rx="3" fill="rgba(255,152,0,.25)"/>
          <text x="42" y="201" fontSize="6.5" fontWeight="700" fill="#ff9800" style={{ fontFamily: 'system-ui,sans-serif' }}>ITEM</text>
          <text x="94" y="201" fontSize="6.5" fontWeight="700" fill="#ff9800" style={{ fontFamily: 'system-ui,sans-serif' }}>VALUE</text>
          <text x="136" y="201" fontSize="6.5" fontWeight="700" fill="#ff9800" style={{ fontFamily: 'system-ui,sans-serif' }}>STATUS</text>

          {/* row highlight sweeping down */}
          <rect className="sv-hl" x="34" y="206" width="128" height="14" rx="2" fill="rgba(255,152,0,.18)"/>

          {/* data rows */}
          {[206, 224, 242].map((y, ri) => (
            <g key={ri}>
              <rect x="34" y={y} width="128" height="14" rx="2" fill="none" stroke="rgba(255,255,255,.07)" strokeWidth="1"/>
              <rect className={`sv-c${ri+1}`} x="36" y={y+3} width="46" height="8" rx="2" fill="rgba(255,255,255,.15)"/>
              <rect className={`sv-c${ri+1}`} x="90" y={y+3} width="30" height="8" rx="2" fill="rgba(255,152,0,.3)"/>
              <rect className={`sv-c${ri+1}`} x="132" y={y+3} width="26" height="8" rx="2" fill="rgba(76,175,80,.35)"/>
            </g>
          ))}

          <text x="96" y="278" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,.5)" style={{ fontFamily: 'system-ui,sans-serif' }}>Spreadsheets</text>
        </g>

        {/* ════════════════════════════════
            BOTTOM-RIGHT — INTEGRATE
        ════════════════════════════════ */}
        <g className="sv-card">
          <rect x="306" y="156" width="156" height="136" rx="18" fill="url(#sv-card-bg)" stroke="#4fc3f7" strokeWidth="2.5"/>
          <text x="384" y="180" textAnchor="middle" fontSize="9" fontWeight="700" fill="#4fc3f7" letterSpacing="1.5" style={{ fontFamily: 'system-ui,sans-serif' }}>INTEGRATE</text>

          {/* 3 nodes with connecting line and packets */}
          {/* node boxes */}
          <g className="sv-nd" style={{ transformOrigin: '330px 224px' }}>
            <rect x="316" y="210" width="28" height="28" rx="7" fill="#001540" stroke="#4fc3f7" strokeWidth="2"/>
            <text x="330" y="228" textAnchor="middle" fontSize="10" style={{ fontFamily: 'system-ui,sans-serif' }}>📊</text>
          </g>
          <g className="sv-nd2" style={{ transformOrigin: '384px 218px' }}>
            <rect x="370" y="204" width="28" height="28" rx="7" fill="#001540" stroke="#FFDA1A" strokeWidth="2"/>
            <text x="384" y="222" textAnchor="middle" fontSize="10" style={{ fontFamily: 'system-ui,sans-serif' }}>⚡</text>
          </g>
          <g className="sv-nd3" style={{ transformOrigin: '440px 224px' }}>
            <rect x="426" y="210" width="28" height="28" rx="7" fill="#001540" stroke="#4caf50" strokeWidth="2"/>
            <text x="440" y="228" textAnchor="middle" fontSize="10" style={{ fontFamily: 'system-ui,sans-serif' }}>🔗</text>
          </g>

          {/* connector track */}
          <line x1="344" y1="224" x2="426" y2="224" stroke="rgba(79,195,247,.25)" strokeWidth="3" strokeLinecap="round"/>

          {/* flowing packets */}
          <g className="sv-p1"><circle cx="348" cy="224" r="5" fill="#4fc3f7" opacity=".9"/></g>
          <g className="sv-p2"><circle cx="348" cy="224" r="5" fill="#FFDA1A" opacity=".85"/></g>
          <g className="sv-p3"><circle cx="348" cy="224" r="5" fill="white" opacity=".6"/></g>

          {/* label row */}
          <text x="330" y="252" textAnchor="middle" fontSize="6" fill="rgba(79,195,247,.7)" style={{ fontFamily: 'system-ui,sans-serif' }}>SQL · Xero</text>
          <text x="384" y="252" textAnchor="middle" fontSize="6" fill="rgba(255,218,26,.7)" style={{ fontFamily: 'system-ui,sans-serif' }}>AutoCount</text>
          <text x="440" y="252" textAnchor="middle" fontSize="6" fill="rgba(76,175,80,.7)" style={{ fontFamily: 'system-ui,sans-serif' }}>Bukku</text>

          <text x="384" y="278" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,.5)" style={{ fontFamily: 'system-ui,sans-serif' }}>All tools</text>
        </g>

      </svg>
    </div>
  )
}
