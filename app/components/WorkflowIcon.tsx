export default function WorkflowIcon() {
  return (
    <div className="flex items-center justify-center w-full select-none">
      <svg viewBox="0 0 480 300" width="100%" style={{ maxWidth: 480 }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <style>{`
            /* GPU-only: transform + opacity throughout */

            /* ── pipe data packets ── */
            @keyframes wf-pkt1{0%{transform:translateX(0);opacity:0}8%{opacity:1}88%{opacity:1}100%{transform:translateX(198px);opacity:0}}
            @keyframes wf-pkt2{0%{transform:translateX(0);opacity:0}8%{opacity:1}88%{opacity:1}100%{transform:translateX(198px);opacity:0}}
            .wf-pk1{animation:wf-pkt1 2.4s cubic-bezier(.4,0,.6,1) infinite;will-change:transform,opacity}
            .wf-pk2{animation:wf-pkt2 2.4s cubic-bezier(.4,0,.6,1) infinite .8s;will-change:transform,opacity}
            .wf-pk3{animation:wf-pkt2 2.4s cubic-bezier(.4,0,.6,1) infinite 1.6s;will-change:transform,opacity}

            /* ── engine spin ── */
            @keyframes wf-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
            @keyframes wf-spin-r{from{transform:rotate(0deg)}to{transform:rotate(-360deg)}}
            .wf-seg{animation:wf-spin   3.2s linear infinite;transform-origin:240px 150px;will-change:transform}
            .wf-seg2{animation:wf-spin-r 5s linear infinite;transform-origin:240px 150px;will-change:transform}

            /* ── engine core pulse ── */
            @keyframes wf-core{0%,100%{transform:scale(1);opacity:.9}50%{transform:scale(1.12);opacity:1}}
            .wf-core{animation:wf-core 1.8s cubic-bezier(.4,0,.6,1) infinite;transform-origin:240px 150px;will-change:transform,opacity}

            /* ── input docs slide in ── */
            @keyframes wf-doc-in{0%{transform:translateX(-28px);opacity:0}18%{transform:translateX(0);opacity:1}80%{transform:translateX(0);opacity:1}95%{transform:translateX(-8px);opacity:0}100%{transform:translateX(-28px);opacity:0}}
            .wf-d1{animation:wf-doc-in 3s cubic-bezier(.34,1.2,.64,1) infinite;will-change:transform,opacity}
            .wf-d2{animation:wf-doc-in 3s cubic-bezier(.34,1.2,.64,1) infinite 1s;will-change:transform,opacity}
            .wf-d3{animation:wf-doc-in 3s cubic-bezier(.34,1.2,.64,1) infinite 2s;will-change:transform,opacity}

            /* ── output reports fly out ── */
            @keyframes wf-out{0%,10%{transform:translateX(0) translateY(0);opacity:0}22%{opacity:1;transform:translateX(0) translateY(0)}60%{transform:translateX(28px) translateY(-12px);opacity:1}80%{transform:translateX(36px) translateY(-18px);opacity:0}100%{transform:translateX(36px) translateY(-18px);opacity:0}}
            .wf-o1{animation:wf-out 2.8s cubic-bezier(.25,.46,.45,.94) infinite;will-change:transform,opacity}
            .wf-o2{animation:wf-out 2.8s cubic-bezier(.25,.46,.45,.94) infinite .93s;will-change:transform,opacity}
            .wf-o3{animation:wf-out 2.8s cubic-bezier(.25,.46,.45,.94) infinite 1.86s;will-change:transform,opacity}

            /* ── checkmark draw ── */
            @keyframes wf-chk{0%,15%{stroke-dashoffset:28}50%,100%{stroke-dashoffset:0}}
            .wf-chk{stroke-dasharray:28;animation:wf-chk 2.8s ease-out infinite;will-change:auto}

            /* ── counter tick ── */
            @keyframes wf-cnt{0%,8%{opacity:0;transform:translateY(6px)}18%,80%{opacity:1;transform:translateY(0)}90%,100%{opacity:0;transform:translateY(-6px)}}
            .wf-cnt{animation:wf-cnt 2.8s cubic-bezier(.4,0,.2,1) infinite;will-change:transform,opacity}

            /* ── ambient pulse ── */
            @keyframes wf-amb{0%,100%{opacity:.08}50%{opacity:.18}}
            .wf-amb{animation:wf-amb 3s ease-in-out infinite;will-change:opacity}

            /* ── stat bar grow ── */
            @keyframes wf-bar{0%{transform:scaleY(.2)}60%{transform:scaleY(1)}80%{transform:scaleY(.85)}100%{transform:scaleY(1)}}
            .wf-b1{animation:wf-bar 2s cubic-bezier(.34,1.4,.64,1) infinite;transform-origin:bottom;will-change:transform}
            .wf-b2{animation:wf-bar 2s cubic-bezier(.34,1.4,.64,1) infinite .3s;transform-origin:bottom;will-change:transform}
            .wf-b3{animation:wf-bar 2s cubic-bezier(.34,1.4,.64,1) infinite .6s;transform-origin:bottom;will-change:transform}
            .wf-b4{animation:wf-bar 2s cubic-bezier(.34,1.4,.64,1) infinite .9s;transform-origin:bottom;will-change:transform}

            /* ── label fade ── */
            @keyframes wf-lbl{0%,100%{opacity:.5}50%{opacity:1}}
            .wf-lbl{animation:wf-lbl 2s ease-in-out infinite;will-change:opacity}
          `}</style>
          <linearGradient id="wf-pipe" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFDA1A" stopOpacity=".15"/>
            <stop offset="50%" stopColor="#FFDA1A" stopOpacity=".35"/>
            <stop offset="100%" stopColor="#FFDA1A" stopOpacity=".15"/>
          </linearGradient>
          <radialGradient id="wf-eng" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1e5fc4"/>
            <stop offset="100%" stopColor="#001a50"/>
          </radialGradient>
          <radialGradient id="wf-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFDA1A" stopOpacity=".3"/>
            <stop offset="100%" stopColor="#FFDA1A" stopOpacity="0"/>
          </radialGradient>
        </defs>

        {/* ambient glow behind engine */}
        <circle className="wf-amb" cx="240" cy="150" r="80" fill="url(#wf-glow)"/>

        {/* ── PIPE TRACK ── */}
        <rect x="82" y="144" width="316" height="12" rx="6" fill="url(#wf-pipe)"/>
        {/* pipe end caps */}
        <circle cx="82"  cy="150" r="6" fill="rgba(255,218,26,.25)"/>
        <circle cx="398" cy="150" r="6" fill="rgba(255,218,26,.25)"/>

        {/* ── DATA PACKETS flowing through pipe ── */}
        <g className="wf-pk1" style={{ transformOrigin: '94px 150px' }}>
          <rect x="82" y="143" width="24" height="14" rx="7" fill="#FFDA1A"/>
        </g>
        <g className="wf-pk2" style={{ transformOrigin: '94px 150px' }}>
          <rect x="82" y="143" width="24" height="14" rx="7" fill="white" opacity=".7"/>
        </g>
        <g className="wf-pk3" style={{ transformOrigin: '94px 150px' }}>
          <rect x="82" y="143" width="24" height="14" rx="7" fill="#FFDA1A" opacity=".8"/>
        </g>

        {/* ── INPUT ZONE (left) ── */}
        <text x="58" y="60" textAnchor="middle" fontSize="8" fontWeight="700" fill="rgba(255,255,255,.45)" letterSpacing="1.5" style={{ fontFamily: 'system-ui,sans-serif' }}>INPUT</text>

        {/* stacked input docs sliding in */}
        <g className="wf-d3">
          <rect x="20" y="186" width="76" height="54" rx="8" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.2)" strokeWidth="1.5"/>
          <rect x="30" y="198" width="40" height="4" rx="2" fill="rgba(255,255,255,.25)"/>
          <rect x="30" y="208" width="32" height="4" rx="2" fill="rgba(255,255,255,.18)"/>
          <rect x="30" y="218" width="38" height="4" rx="2" fill="rgba(255,255,255,.18)"/>
        </g>
        <g className="wf-d2">
          <rect x="14" y="178" width="76" height="54" rx="8" fill="rgba(255,255,255,.16)" stroke="rgba(255,255,255,.28)" strokeWidth="1.5"/>
          <rect x="24" y="190" width="40" height="4" rx="2" fill="rgba(255,255,255,.3)"/>
          <rect x="24" y="200" width="30" height="4" rx="2" fill="rgba(255,255,255,.22)"/>
          <rect x="24" y="210" width="36" height="4" rx="2" fill="rgba(255,255,255,.22)"/>
        </g>
        <g className="wf-d1">
          <rect x="8" y="170" width="76" height="54" rx="8" fill="white" stroke="rgba(255,218,26,.4)" strokeWidth="2"/>
          <rect x="18" y="182" width="44" height="5" rx="2.5" fill="#0051BA" opacity=".2"/>
          <rect x="18" y="193" width="36" height="4" rx="2" fill="#0051BA" opacity=".12"/>
          <rect x="18" y="203" width="42" height="4" rx="2" fill="#0051BA" opacity=".12"/>
          <rect x="18" y="213" width="28" height="4" rx="2" fill="#0051BA" opacity=".1"/>
          <text x="56" y="220" textAnchor="middle" fontSize="7" fontWeight="700" fill="#c00" style={{ fontFamily: 'system-ui,sans-serif' }}>MANUAL</text>
        </g>
        {/* input label */}
        <text x="50" y="246" textAnchor="middle" fontSize="8" fill="rgba(255,218,26,.5)" style={{ fontFamily: 'system-ui,sans-serif' }}>Raw Reports</text>

        {/* ── ENGINE (center) ── */}
        <text x="240" y="48" textAnchor="middle" fontSize="8" fontWeight="700" fill="rgba(255,255,255,.45)" letterSpacing="1.5" style={{ fontFamily: 'system-ui,sans-serif' }}>ENGINE</text>

        {/* outer ring */}
        <circle cx="240" cy="150" r="68" fill="none" stroke="rgba(255,218,26,.1)" strokeWidth="2"/>
        {/* engine body */}
        <circle cx="240" cy="150" r="58" fill="url(#wf-eng)" stroke="rgba(255,218,26,.3)" strokeWidth="2"/>

        {/* spinning segmented ring */}
        <g className="wf-seg">
          {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => {
            const r = Math.PI / 180
            const x1 = 240 + 42 * Math.cos(deg * r), y1 = 150 + 42 * Math.sin(deg * r)
            const x2 = 240 + 54 * Math.cos(deg * r), y2 = 150 + 54 * Math.sin(deg * r)
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FFDA1A" strokeWidth="3.5" strokeLinecap="round" opacity="0.75"/>
          })}
        </g>

        {/* counter-spinning inner dots */}
        <g className="wf-seg2">
          {[0,72,144,216,288].map((deg, i) => {
            const r = Math.PI / 180
            const x = 240 + 28 * Math.cos(deg * r), y = 150 + 28 * Math.sin(deg * r)
            return <circle key={i} cx={x} cy={y} r="4" fill="#FFDA1A" opacity="0.5"/>
          })}
        </g>

        {/* core: lightning bolt */}
        <g className="wf-core">
          <circle cx="240" cy="150" r="18" fill="#001540"/>
          <path d="M244,138 L232,152 L240,152 L236,164 L252,148 L244,148 Z" fill="#FFDA1A"/>
        </g>

        {/* ── OUTPUT ZONE (right) ── */}
        <text x="426" y="60" textAnchor="middle" fontSize="8" fontWeight="700" fill="rgba(255,255,255,.45)" letterSpacing="1.5" style={{ fontFamily: 'system-ui,sans-serif' }}>OUTPUT</text>

        {/* output docs flying out with checkmarks */}
        <g className="wf-o3">
          <rect x="384" y="188" width="76" height="54" rx="8" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.2)" strokeWidth="1.5"/>
          <rect x="394" y="200" width="40" height="4" rx="2" fill="rgba(255,255,255,.2)"/>
        </g>
        <g className="wf-o2">
          <rect x="390" y="180" width="76" height="54" rx="8" fill="rgba(255,255,255,.18)" stroke="rgba(255,255,255,.28)" strokeWidth="1.5"/>
          <rect x="400" y="192" width="40" height="4" rx="2" fill="rgba(255,255,255,.25)"/>
        </g>
        <g className="wf-o1">
          <rect x="396" y="172" width="76" height="54" rx="8" fill="white" stroke="rgba(255,218,26,.4)" strokeWidth="2"/>
          <rect x="406" y="184" width="44" height="5" rx="2.5" fill="#0051BA" opacity=".18"/>
          <rect x="406" y="195" width="36" height="4" rx="2" fill="#0051BA" opacity=".12"/>
          <rect x="406" y="205" width="42" height="4" rx="2" fill="#0051BA" opacity=".12"/>
          {/* checkmark */}
          <circle cx="456" cy="188" r="10" fill="#4caf50"/>
          <polyline className="wf-chk" points="450,188 454,193 462,183" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <text x="436" y="219" textAnchor="middle" fontSize="7" fontWeight="700" fill="#4caf50" style={{ fontFamily: 'system-ui,sans-serif' }}>AUTO</text>
        </g>
        <text x="436" y="238" textAnchor="middle" fontSize="8" fill="rgba(255,218,26,.5)" style={{ fontFamily: 'system-ui,sans-serif' }}>Done automatically</text>

        {/* ── STATS BAR (bottom center) ── */}
        <g transform="translate(168, 224)">
          <rect x="0" y="0" width="144" height="52" rx="12" fill="rgba(255,255,255,.06)" stroke="rgba(255,218,26,.15)" strokeWidth="1.5"/>
          {/* bar chart */}
          <g className="wf-b1"><rect x="16" y="12" width="14" height="28" rx="3" fill="#FFDA1A" opacity=".8"/></g>
          <g className="wf-b2"><rect x="36" y="18" width="14" height="22" rx="3" fill="#FFDA1A" opacity=".6"/></g>
          <g className="wf-b3"><rect x="56" y="8" width="14" height="32" rx="3" fill="#FFDA1A"/></g>
          <g className="wf-b4"><rect x="76" y="14" width="14" height="26" rx="3" fill="#FFDA1A" opacity=".7"/></g>
          {/* label */}
          <text x="106" y="22" fontSize="9" fontWeight="800" fill="#FFDA1A" style={{ fontFamily: 'system-ui,sans-serif' }}>80%</text>
          <text x="106" y="34" fontSize="7" fill="rgba(255,255,255,.6)" style={{ fontFamily: 'system-ui,sans-serif' }}>less work</text>
          <text x="106" y="44" fontSize="7" fill="rgba(255,255,255,.45)" style={{ fontFamily: 'system-ui,sans-serif' }}>every day</text>
        </g>

      </svg>
    </div>
  )
}
