export default function BlogIcon() {
  return (
    <div className="flex items-center justify-center w-full select-none">
      <svg viewBox="0 0 480 300" width="100%" style={{ maxWidth: 480 }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <style>{`
            /* ── text scan line ── */
            @keyframes bl-scan{0%{transform:translateY(0);opacity:0}8%{opacity:.7}85%{opacity:.7;transform:translateY(88px)}100%{transform:translateY(88px);opacity:0}}
            .bl-scan{animation:bl-scan 3s cubic-bezier(.4,0,.6,1) infinite;will-change:transform,opacity}

            /* ── text lines appear sequentially ── */
            @keyframes bl-line{0%,5%{transform:scaleX(0);opacity:0}20%,80%{transform:scaleX(1);opacity:1}95%,100%{transform:scaleX(0);opacity:0}}
            .bl-l1{animation:bl-line 3s ease-out infinite;transform-origin:left center;will-change:transform,opacity}
            .bl-l2{animation:bl-line 3s ease-out infinite .2s;transform-origin:left center;will-change:transform,opacity}
            .bl-l3{animation:bl-line 3s ease-out infinite .4s;transform-origin:left center;will-change:transform,opacity}
            .bl-l4{animation:bl-line 3s ease-out infinite .6s;transform-origin:left center;will-change:transform,opacity}
            .bl-l5{animation:bl-line 3s ease-out infinite .8s;transform-origin:left center;will-change:transform,opacity}
            .bl-l6{animation:bl-line 3s ease-out infinite 1s;transform-origin:left center;will-change:transform,opacity}
            .bl-r1{animation:bl-line 3s ease-out infinite .1s;transform-origin:left center;will-change:transform,opacity}
            .bl-r2{animation:bl-line 3s ease-out infinite .3s;transform-origin:left center;will-change:transform,opacity}
            .bl-r3{animation:bl-line 3s ease-out infinite .5s;transform-origin:left center;will-change:transform,opacity}
            .bl-r4{animation:bl-line 3s ease-out infinite .7s;transform-origin:left center;will-change:transform,opacity}
            .bl-r5{animation:bl-line 3s ease-out infinite .9s;transform-origin:left center;will-change:transform,opacity}
            .bl-r6{animation:bl-line 3s ease-out infinite 1.1s;transform-origin:left center;will-change:transform,opacity}

            /* ── page turn ── */
            @keyframes bl-turn{0%,70%{transform:rotateY(0deg);opacity:1}82%{transform:rotateY(-60deg);opacity:.5}100%{transform:rotateY(0deg);opacity:1}}
            .bl-page{animation:bl-turn 4s cubic-bezier(.4,0,.2,1) infinite;transform-origin:center;will-change:transform,opacity}

            /* ── book glow pulse ── */
            @keyframes bl-glow{0%,100%{opacity:.4}50%{opacity:.85}}
            .bl-glow{animation:bl-glow 2.8s ease-in-out infinite;will-change:opacity}

            /* ── insight tags float up ── */
            @keyframes bl-tag1{0%{transform:translateY(0) translateX(0);opacity:0}12%{opacity:1}80%{opacity:1}100%{transform:translateY(-68px) translateX(-12px);opacity:0}}
            @keyframes bl-tag2{0%{transform:translateY(0) translateX(0);opacity:0}12%{opacity:1}80%{opacity:1}100%{transform:translateY(-72px) translateX(16px);opacity:0}}
            @keyframes bl-tag3{0%{transform:translateY(0) translateX(0);opacity:0}12%{opacity:1}80%{opacity:1}100%{transform:translateY(-60px) translateX(-6px);opacity:0}}
            .bl-t1{animation:bl-tag1 3s cubic-bezier(.25,.46,.45,.94) infinite;will-change:transform,opacity}
            .bl-t2{animation:bl-tag2 3s cubic-bezier(.25,.46,.45,.94) infinite 1s;will-change:transform,opacity}
            .bl-t3{animation:bl-tag3 3s cubic-bezier(.25,.46,.45,.94) infinite 2s;will-change:transform,opacity}

            /* ── lightbulb pulse ── */
            @keyframes bl-bulb{0%,100%{transform:scale(1);opacity:.8}50%{transform:scale(1.1);opacity:1}}
            .bl-bulb{animation:bl-bulb 1.8s cubic-bezier(.4,0,.6,1) infinite;transform-origin:240px 52px;will-change:transform,opacity}

            /* ── rays ── */
            @keyframes bl-ray{0%,100%{transform:scaleX(.5);opacity:.3}50%{transform:scaleX(1);opacity:.9}}
            .bl-ra{animation:bl-ray 1.8s ease-in-out infinite;will-change:transform,opacity}
            .bl-rb{animation:bl-ray 1.8s ease-in-out infinite .45s;will-change:transform,opacity}
            .bl-rc{animation:bl-ray 1.8s ease-in-out infinite .9s;will-change:transform,opacity}
            .bl-rd{animation:bl-ray 1.8s ease-in-out infinite 1.35s;will-change:transform,opacity}

            /* ── sparkle ── */
            @keyframes bl-sp{0%,100%{transform:scale(1) rotate(0deg);opacity:.5}50%{transform:scale(1.5) rotate(30deg);opacity:1}}
            .bl-sp1{animation:bl-sp 2s ease-in-out infinite;transform-origin:176px 78px;will-change:transform,opacity}
            .bl-sp2{animation:bl-sp 2s ease-in-out infinite .66s;transform-origin:306px 74px;will-change:transform,opacity}
            .bl-sp3{animation:bl-sp 2s ease-in-out infinite 1.33s;transform-origin:240px 26px;will-change:transform,opacity}

            /* ── bookmark ribbon ── */
            @keyframes bl-bm{0%,100%{transform:translateY(0)}50%{transform:translateY(4px)}}
            .bl-bm{animation:bl-bm 2.4s ease-in-out infinite;transform-origin:center top;will-change:transform}
          `}</style>
          <linearGradient id="bl-pg-l" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#eef2ff"/>
            <stop offset="100%" stopColor="#dce8ff"/>
          </linearGradient>
          <linearGradient id="bl-pg-r" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#dce8ff"/>
            <stop offset="100%" stopColor="#eef2ff"/>
          </linearGradient>
          <radialGradient id="bl-grd" cx="50%" cy="0%" r="80%">
            <stop offset="0%" stopColor="#FFDA1A" stopOpacity=".2"/>
            <stop offset="100%" stopColor="#0051BA" stopOpacity="0"/>
          </radialGradient>
        </defs>

        {/* ambient top glow from bulb */}
        <ellipse cx="240" cy="60" rx="160" ry="80" fill="url(#bl-grd)"/>

        {/* ── LIGHTBULB ── */}
        <g className="bl-bulb">
          {/* rays */}
          <line className="bl-ra" x1="210" y1="36" x2="196" y2="22" stroke="#FFDA1A" strokeWidth="3" strokeLinecap="round" style={{ transformOrigin: '210px 36px' }}/>
          <line className="bl-rb" x1="270" y1="36" x2="284" y2="22" stroke="#FFDA1A" strokeWidth="3" strokeLinecap="round" style={{ transformOrigin: '270px 36px' }}/>
          <line className="bl-rc" x1="240" y1="22" x2="240" y2="8" stroke="#FFDA1A" strokeWidth="3" strokeLinecap="round" style={{ transformOrigin: '240px 22px' }}/>
          <line className="bl-rd" x1="284" y1="52" x2="300" y2="48" stroke="#FFDA1A" strokeWidth="3" strokeLinecap="round" style={{ transformOrigin: '284px 52px' }}/>
          <line className="bl-rd" x1="196" y1="52" x2="180" y2="48" stroke="#FFDA1A" strokeWidth="3" strokeLinecap="round" style={{ transformOrigin: '196px 52px' }}/>
          {/* bulb glass */}
          <circle cx="240" cy="52" r="26" fill="#FFDA1A" stroke="rgba(0,0,0,.12)" strokeWidth="1.5"/>
          {/* filament */}
          <path d="M232,56 Q236,44 240,40 Q244,44 248,56" fill="none" stroke="#002060" strokeWidth="2" strokeLinecap="round"/>
          {/* shine */}
          <circle cx="230" cy="44" r="5" fill="white" opacity=".5"/>
          {/* base */}
          <rect x="228" y="74" width="24" height="7" rx="2" fill="#FFDA1A" stroke="rgba(0,0,0,.12)" strokeWidth="1.5"/>
          <rect x="230" y="81" width="20" height="5" rx="1.5" fill="#FFDA1A" stroke="rgba(0,0,0,.12)" strokeWidth="1"/>
        </g>
        <text className="bl-sp1" x="174" y="82" fontSize="12" fill="#FFDA1A" style={{ fontFamily: 'system-ui,sans-serif' }}>✦</text>
        <text className="bl-sp2" x="304" y="78" fontSize="10" fill="white" opacity=".7" style={{ fontFamily: 'system-ui,sans-serif' }}>★</text>
        <text className="bl-sp3" x="237" y="28" fontSize="9" fill="#FFDA1A" opacity=".8" style={{ fontFamily: 'system-ui,sans-serif' }}>✦</text>

        {/* ── OPEN BOOK ── */}
        {/* shadow */}
        <ellipse cx="240" cy="286" rx="110" ry="8" fill="rgba(0,0,0,.15)"/>
        {/* spine */}
        <rect x="232" y="100" width="16" height="178" rx="5" fill="#001a50" stroke="#FFDA1A" strokeWidth="1.5"/>

        {/* left page */}
        <g className="bl-page">
          <path d="M230,108 Q184,104 146,114 L146,268 Q184,260 230,264 Z" fill="url(#bl-pg-l)" stroke="#c8d8f0" strokeWidth="1"/>
          {/* page text lines */}
          <rect className="bl-l1" x="158" y="126" width="58" height="5" rx="2.5" fill="#0051BA" opacity=".2"/>
          <rect className="bl-l2" x="158" y="138" width="48" height="4" rx="2" fill="#0051BA" opacity=".15"/>
          <rect className="bl-l3" x="158" y="149" width="54" height="4" rx="2" fill="#0051BA" opacity=".15"/>
          <rect className="bl-l4" x="158" y="160" width="44" height="4" rx="2" fill="#0051BA" opacity=".13"/>
          <rect className="bl-l5" x="158" y="171" width="56" height="4" rx="2" fill="#0051BA" opacity=".15"/>
          <rect className="bl-l6" x="158" y="182" width="40" height="4" rx="2" fill="#0051BA" opacity=".12"/>
          {[194,204,214,224,234,244,254].map((y, i) => (
            <rect key={i} x="158" y={y} width={[52,44,56,38,50,46,42][i]} height="3.5" rx="1.5" fill="#0051BA" opacity=".09"/>
          ))}
          {/* scan line */}
          <rect className="bl-scan" x="156" y="122" width="62" height="3" rx="1.5" fill="#FFDA1A" opacity=".6"/>
          {/* heading underline accent */}
          <rect x="158" y="122" width="58" height="6" rx="3" fill="#0051BA" opacity=".12"/>
          <text x="187" y="128" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#0051BA" opacity=".5" style={{ fontFamily: 'system-ui,sans-serif' }}>AUTOMATION TIPS</text>
        </g>

        {/* right page */}
        <path d="M250,108 Q296,104 334,114 L334,268 Q296,260 250,264 Z" fill="url(#bl-pg-r)" stroke="#c8d8f0" strokeWidth="1"/>
        <rect className="bl-r1" x="262" y="126" width="58" height="5" rx="2.5" fill="#0051BA" opacity=".2"/>
        <rect className="bl-r2" x="262" y="138" width="50" height="4" rx="2" fill="#0051BA" opacity=".15"/>
        <rect className="bl-r3" x="262" y="149" width="46" height="4" rx="2" fill="#0051BA" opacity=".15"/>
        <rect className="bl-r4" x="262" y="160" width="56" height="4" rx="2" fill="#0051BA" opacity=".13"/>
        <rect className="bl-r5" x="262" y="171" width="44" height="4" rx="2" fill="#0051BA" opacity=".15"/>
        <rect className="bl-r6" x="262" y="182" width="52" height="4" rx="2" fill="#0051BA" opacity=".12"/>
        {[194,204,214,224,234,244,254].map((y, i) => (
          <rect key={i} x="262" y={y} width={[48,56,40,54,44,50,38][i]} height="3.5" rx="1.5" fill="#0051BA" opacity=".09"/>
        ))}
        <rect x="262" y="122" width="58" height="6" rx="3" fill="#0051BA" opacity=".12"/>
        <text x="291" y="128" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#0051BA" opacity=".5" style={{ fontFamily: 'system-ui,sans-serif' }}>HOW WE DO IT</text>

        {/* book cover bottom trim */}
        <path d="M144,265 Q184,275 230,272 L230,280 Q184,284 144,274 Z" fill="#002060" stroke="#FFDA1A" strokeWidth="1"/>
        <path d="M250,272 Q296,275 336,265 L336,274 Q296,284 250,280 Z" fill="#002060" stroke="#FFDA1A" strokeWidth="1"/>
        <rect x="232" y="268" width="16" height="14" rx="3" fill="#001540" stroke="#FFDA1A" strokeWidth="1.5"/>

        {/* bookmark ribbon */}
        <g className="bl-bm">
          <polygon points="316,100 326,100 326,142 321,136 316,142" fill="#FFDA1A"/>
        </g>

        {/* ── FLOATING INSIGHT TAGS ── */}
        <g className="bl-t1">
          <rect x="50" y="188" width="82" height="28" rx="14" fill="#0051BA" stroke="#FFDA1A" strokeWidth="2"/>
          <text x="91" y="200" textAnchor="middle" fontSize="8" fontWeight="700" fill="white" style={{ fontFamily: 'system-ui,sans-serif' }}>💡 INSIGHT</text>
          <text x="91" y="211" textAnchor="middle" fontSize="6" fill="rgba(255,255,255,.7)" style={{ fontFamily: 'system-ui,sans-serif' }}>Save hours/week</text>
        </g>
        <g className="bl-t2">
          <rect x="348" y="192" width="90" height="28" rx="14" fill="#0051BA" stroke="#FFDA1A" strokeWidth="2"/>
          <text x="393" y="204" textAnchor="middle" fontSize="8" fontWeight="700" fill="white" style={{ fontFamily: 'system-ui,sans-serif' }}>📊 REPORTING</text>
          <text x="393" y="215" textAnchor="middle" fontSize="6" fill="rgba(255,255,255,.7)" style={{ fontFamily: 'system-ui,sans-serif' }}>Live dashboards</text>
        </g>
        <g className="bl-t3">
          <rect x="66" y="226" width="78" height="28" rx="14" fill="#001540" stroke="rgba(255,218,26,.5)" strokeWidth="1.5"/>
          <text x="105" y="238" textAnchor="middle" fontSize="8" fontWeight="700" fill="#FFDA1A" style={{ fontFamily: 'system-ui,sans-serif' }}>⚡ AUTOMATE</text>
          <text x="105" y="249" textAnchor="middle" fontSize="6" fill="rgba(255,255,255,.6)" style={{ fontFamily: 'system-ui,sans-serif' }}>One click away</text>
        </g>

      </svg>
    </div>
  )
}
