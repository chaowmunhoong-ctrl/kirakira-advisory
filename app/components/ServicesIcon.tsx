export default function ServicesIcon() {
  return (
    <div className="flex items-center justify-center w-full select-none">
      <svg viewBox="0 0 520 300" width="100%" style={{ maxWidth: 520 }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <style>{`
            @keyframes sv-s1f{0%,5%{opacity:0}10%,35%{opacity:1}40%,100%{opacity:0}}
            @keyframes sv-s2f{0%,36%{opacity:0}41%,61%{opacity:1}66%,100%{opacity:0}}
            @keyframes sv-s3f{0%,63%{opacity:0}68%,100%{opacity:1}}
            .sv-s1{animation:sv-s1f 11s cubic-bezier(.4,0,.2,1) infinite}
            .sv-s2{animation:sv-s2f 11s cubic-bezier(.4,0,.2,1) infinite}
            .sv-s3{animation:sv-s3f 11s cubic-bezier(.4,0,.2,1) infinite}

            @keyframes sv-juggle1{0%,100%{transform:translate(0,0)rotate(-8deg)}35%{transform:translate(-8px,-22px)rotate(12deg)}70%{transform:translate(6px,-8px)rotate(-15deg)}}
            @keyframes sv-juggle2{0%,100%{transform:translate(0,0)rotate(10deg)}35%{transform:translate(10px,-18px)rotate(-8deg)}70%{transform:translate(-6px,-6px)rotate(16deg)}}
            @keyframes sv-juggle3{0%,100%{transform:translate(0,0)rotate(-5deg)}35%{transform:translate(4px,-24px)rotate(18deg)}70%{transform:translate(-10px,-10px)rotate(-10deg)}}
            @keyframes sv-juggle4{0%,100%{transform:translate(0,0)rotate(15deg)}35%{transform:translate(-6px,-16px)rotate(-12deg)}70%{transform:translate(8px,-20px)rotate(8deg)}}
            .sv-j1{animation:sv-juggle1 1.6s ease-in-out infinite}
            .sv-j2{animation:sv-juggle2 1.6s ease-in-out infinite .4s}
            .sv-j3{animation:sv-juggle3 1.6s ease-in-out infinite .8s}
            .sv-j4{animation:sv-juggle4 1.6s ease-in-out infinite 1.2s}

            @keyframes sv-swob{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}
            .sv-swob{animation:sv-swob .5s ease-in-out infinite;transform-origin:200px 168px}

            @keyframes sv-sw{0%,15%{opacity:0;transform:translate(0,0)}55%{opacity:1}100%{opacity:0;transform:translate(10px,-14px)}}
            .sv-sd1{animation:sv-sw 1.1s ease-out infinite}
            .sv-sd2{animation:sv-sw 1.1s ease-out infinite .55s}

            @keyframes sv-draw{0%,10%{stroke-dashoffset:120}70%,100%{stroke-dashoffset:0}}
            .sv-dl1{stroke-dasharray:120;animation:sv-draw 2s ease-out infinite}
            .sv-dl2{stroke-dasharray:120;animation:sv-draw 2s ease-out infinite .4s}

            @keyframes sv-card-in{0%,5%{transform:scale(.5);opacity:0}30%,100%{transform:scale(1);opacity:1}}
            .sv-ci1{animation:sv-card-in 2.5s cubic-bezier(.34,1.56,.64,1) infinite}
            .sv-ci2{animation:sv-card-in 2.5s cubic-bezier(.34,1.56,.64,1) infinite .5s}
            .sv-ci3{animation:sv-card-in 2.5s cubic-bezier(.34,1.56,.64,1) infinite 1s}

            @keyframes sv-flow{0%{transform:translateX(-16px);opacity:0}20%{opacity:1}80%{opacity:1}100%{transform:translateX(80px);opacity:0}}
            .sv-fl1{animation:sv-flow 1.8s ease-in-out infinite}
            .sv-fl2{animation:sv-flow 1.8s ease-in-out infinite .6s}
            .sv-fl3{animation:sv-flow 1.8s ease-in-out infinite 1.2s}

            @keyframes sv-tbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
            .sv-tbob{animation:sv-tbob 1.4s ease-in-out infinite;transform-origin:120px 168px}

            @keyframes sv-chk{0%,10%{transform:scale(0);opacity:0}25%,85%{transform:scale(1);opacity:1}100%{transform:scale(.8);opacity:0}}
            .sv-ck1{animation:sv-chk 2.2s cubic-bezier(.34,1.56,.64,1) infinite}
            .sv-ck2{animation:sv-chk 2.2s cubic-bezier(.34,1.56,.64,1) infinite .55s}
            .sv-ck3{animation:sv-chk 2.2s cubic-bezier(.34,1.56,.64,1) infinite 1.1s}

            @keyframes sv-star{0%,100%{transform:scale(1)rotate(0deg);opacity:.7}50%{transform:scale(1.4)rotate(20deg);opacity:1}}
            .sv-st1{animation:sv-star 1.8s ease-in-out infinite;transform-origin:170px 85px}
            .sv-st2{animation:sv-star 1.8s ease-in-out infinite .6s;transform-origin:150px 108px}
            .sv-st3{animation:sv-star 1.8s ease-in-out infinite 1.2s;transform-origin:176px 112px}
          `}</style>
          <filter id="sv-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="rgba(0,0,0,.18)"/>
          </filter>
        </defs>

        <line x1="30" y1="252" x2="490" y2="252" stroke="rgba(255,218,26,.12)" strokeWidth="1.5"/>

        {/* ── SCENE 1: juggling disconnected tools ── */}
        <g className="sv-s1">
          <rect x="60" y="14" width="292" height="22" rx="11" fill="rgba(255,255,255,.08)"/>
          <text x="206" y="29" textAnchor="middle" fontSize="10" fontWeight="700" fill="rgba(255,255,255,.7)" letterSpacing="1.5" style={{ fontFamily: 'system-ui,sans-serif' }}>TOOLS EVERYWHERE. NOTHING CONNECTS.</text>

          <g className="sv-j1" style={{ transformOrigin: '130px 80px' }}>
            <rect x="104" y="60" width="52" height="38" rx="8" fill="white" stroke="#222" strokeWidth="2.5" filter="url(#sv-shadow)"/>
            <rect x="112" y="68" width="16" height="16" rx="4" fill="#2b7a0b"/>
            <text x="136" y="76" fontSize="7" fontWeight="700" fill="#333" style={{ fontFamily: 'system-ui,sans-serif' }}>SQL</text>
            <text x="136" y="87" fontSize="6" fill="#888" style={{ fontFamily: 'system-ui,sans-serif' }}>Account</text>
          </g>
          <g className="sv-j2" style={{ transformOrigin: '220px 65px' }}>
            <rect x="194" y="45" width="52" height="38" rx="8" fill="white" stroke="#222" strokeWidth="2.5" filter="url(#sv-shadow)"/>
            <rect x="202" y="53" width="16" height="16" rx="3" fill="#1d6f42"/>
            <text x="226" y="61" fontSize="7" fontWeight="700" fill="#333" style={{ fontFamily: 'system-ui,sans-serif' }}>Google</text>
            <text x="226" y="72" fontSize="6" fill="#888" style={{ fontFamily: 'system-ui,sans-serif' }}>Sheets</text>
          </g>
          <g className="sv-j3" style={{ transformOrigin: '310px 78px' }}>
            <rect x="284" y="58" width="52" height="38" rx="8" fill="white" stroke="#222" strokeWidth="2.5" filter="url(#sv-shadow)"/>
            <rect x="292" y="66" width="16" height="16" rx="4" fill="#00b4d8"/>
            <text x="316" y="74" fontSize="7" fontWeight="700" fill="#333" style={{ fontFamily: 'system-ui,sans-serif' }}>Xero</text>
            <text x="316" y="85" fontSize="6" fill="#888" style={{ fontFamily: 'system-ui,sans-serif' }}>Payroll</text>
          </g>
          <g className="sv-j4" style={{ transformOrigin: '170px 120px' }}>
            <rect x="144" y="104" width="52" height="38" rx="8" fill="white" stroke="#222" strokeWidth="2.5" filter="url(#sv-shadow)"/>
            <rect x="152" y="112" width="16" height="16" rx="4" fill="#e84c1e"/>
            <text x="176" y="120" fontSize="7" fontWeight="700" fill="#333" style={{ fontFamily: 'system-ui,sans-serif' }}>Excel</text>
            <text x="176" y="131" fontSize="6" fill="#888" style={{ fontFamily: 'system-ui,sans-serif' }}>Reports</text>
          </g>

          <text x="250" y="115" textAnchor="middle" fontSize="18" fill="rgba(255,80,80,.7)" style={{ fontFamily: 'system-ui,sans-serif' }}>⛔</text>

          <rect x="80" y="224" width="270" height="14" rx="4" fill="#001540" stroke="rgba(255,218,26,.25)" strokeWidth="1.5"/>
          <rect x="98" y="238" width="10" height="20" rx="3" fill="#001030"/>
          <rect x="320" y="238" width="10" height="20" rx="3" fill="#001030"/>

          <g className="sv-swob">
            <ellipse cx="200" cy="176" rx="24" ry="32" fill="#FFDA1A" stroke="#111" strokeWidth="3.5" filter="url(#sv-shadow)"/>
            <path d="M189,152 L200,162 L211,152" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="200" cy="124" r="28" fill="white" stroke="#111" strokeWidth="3.5" filter="url(#sv-shadow)"/>
            <line x1="192" y1="97" x2="190" y2="88" stroke="#111" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="200" y1="96" x2="200" y2="86" stroke="#111" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="208" y1="97" x2="210" y2="88" stroke="#111" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M188,115 Q193,110 198,114" fill="none" stroke="#111" strokeWidth="2.8" strokeLinecap="round"/>
            <path d="M202,114 Q207,110 212,115" fill="none" stroke="#111" strokeWidth="2.8" strokeLinecap="round"/>
            <circle cx="193" cy="120" r="4" fill="#111"/>
            <circle cx="207" cy="120" r="4" fill="#111"/>
            <circle cx="194" cy="119" r="1.5" fill="white"/>
            <circle cx="208" cy="119" r="1.5" fill="white"/>
            <path d="M190,132 Q195,128 200,131 Q205,134 210,130" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round"/>
            <ellipse cx="183" cy="125" rx="7" ry="5" fill="rgba(255,80,80,.18)"/>
            <ellipse cx="217" cy="125" rx="7" ry="5" fill="rgba(255,80,80,.18)"/>
            <path d="M178,155 Q156,140 144,126" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
            <path d="M222,155 Q244,140 258,126" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
            <path d="M188,205 Q180,224 174,244" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
            <path d="M212,205 Q220,224 226,244" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
            <ellipse cx="172" cy="247" rx="14" ry="7" fill="#111"/>
            <ellipse cx="228" cy="247" rx="14" ry="7" fill="#111"/>
            <path className="sv-sd1" d="M226,110 Q229,102 225,97" fill="#3af" stroke="rgba(0,80,200,.6)" strokeWidth="1.5" strokeLinecap="round"/>
            <path className="sv-sd2" d="M233,121 Q237,113 233,108" fill="#3af" stroke="rgba(0,80,200,.6)" strokeWidth="1.5" strokeLinecap="round"/>
          </g>
        </g>

        {/* ── SCENE 2: building the connections ── */}
        <g className="sv-s2">
          <rect x="96" y="14" width="226" height="22" rx="11" fill="rgba(255,255,255,.08)"/>
          <text x="209" y="29" textAnchor="middle" fontSize="10" fontWeight="700" fill="rgba(255,218,26,.9)" letterSpacing="1.5" style={{ fontFamily: 'system-ui,sans-serif' }}>WE BUILD THE CONNECTIONS</text>

          <g className="sv-ci1" style={{ transformOrigin: '120px 100px' }}>
            <rect x="80" y="75" width="80" height="50" rx="10" fill="white" stroke="#111" strokeWidth="2.5" filter="url(#sv-shadow)"/>
            <rect x="92" y="86" width="20" height="20" rx="5" fill="#2b7a0b"/>
            <text x="120" y="96" fontSize="8" fontWeight="700" fill="#111" style={{ fontFamily: 'system-ui,sans-serif' }}>SQL /</text>
            <text x="120" y="108" fontSize="8" fontWeight="700" fill="#111" style={{ fontFamily: 'system-ui,sans-serif' }}>Bukku</text>
          </g>
          <g className="sv-ci2" style={{ transformOrigin: '250px 85px' }}>
            <rect x="200" y="60" width="100" height="50" rx="10" fill="#FFDA1A" stroke="#111" strokeWidth="2.5" filter="url(#sv-shadow)"/>
            <text x="250" y="81" textAnchor="middle" fontSize="9" fontWeight="900" fill="#001a50" style={{ fontFamily: 'system-ui,sans-serif' }}>KIRAKIRA</text>
            <text x="250" y="95" textAnchor="middle" fontSize="7" fontWeight="700" fill="#002f80" style={{ fontFamily: 'system-ui,sans-serif' }}>INTEGRATION</text>
            <text x="250" y="106" textAnchor="middle" fontSize="8" fill="#002060" style={{ fontFamily: 'system-ui,sans-serif' }}>⚡ ENGINE</text>
          </g>
          <g className="sv-ci3" style={{ transformOrigin: '390px 100px' }}>
            <rect x="350" y="75" width="80" height="50" rx="10" fill="white" stroke="#111" strokeWidth="2.5" filter="url(#sv-shadow)"/>
            <rect x="362" y="86" width="20" height="20" rx="5" fill="#1d6f42"/>
            <text x="390" y="96" fontSize="8" fontWeight="700" fill="#111" style={{ fontFamily: 'system-ui,sans-serif' }}>Sheets</text>
            <text x="390" y="108" fontSize="8" fontWeight="700" fill="#111" style={{ fontFamily: 'system-ui,sans-serif' }}>/ Excel</text>
          </g>

          <line className="sv-dl1" x1="162" y1="100" x2="198" y2="100" stroke="#FFDA1A" strokeWidth="3" strokeLinecap="round"/>
          <polygon points="196,95 208,100 196,105" fill="#FFDA1A"/>
          <line className="sv-dl2" x1="302" y1="100" x2="348" y2="100" stroke="#FFDA1A" strokeWidth="3" strokeLinecap="round"/>
          <polygon points="346,95 358,100 346,105" fill="#FFDA1A"/>

          <rect x="80" y="224" width="270" height="14" rx="4" fill="#001540" stroke="rgba(255,218,26,.25)" strokeWidth="1.5"/>
          <rect x="98" y="238" width="10" height="20" rx="3" fill="#001030"/>
          <rect x="320" y="238" width="10" height="20" rx="3" fill="#001030"/>

          {/* focused building stick man */}
          <ellipse cx="230" cy="176" rx="24" ry="32" fill="#FFDA1A" stroke="#111" strokeWidth="3.5" filter="url(#sv-shadow)"/>
          <path d="M219,152 L230,162 L241,152" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="230" cy="124" r="28" fill="white" stroke="#111" strokeWidth="3.5" filter="url(#sv-shadow)"/>
          <path d="M215,102 Q230,93 245,102" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
          <path d="M220,118 Q225,115 230,118" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
          <path d="M230,118 Q235,115 240,118" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="224" cy="122" r="3" fill="#111"/>
          <circle cx="236" cy="122" r="3" fill="#111"/>
          <path d="M224,132 Q230,138 236,132" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round"/>
          <rect x="227" y="133" width="8" height="7" rx="3" fill="rgba(255,100,100,.6)" stroke="#111" strokeWidth="1.5"/>
          <path d="M208,160 Q192,172 182,182" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
          <path d="M252,155 Q268,135 280,118" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
          <circle cx="284" cy="114" r="10" fill="white" stroke="#111" strokeWidth="3"/>
          <rect x="279" y="109" width="10" height="10" rx="3" fill="#FFDA1A"/>
          <path d="M210,205 Q202,224 196,245" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
          <path d="M250,205 Q258,224 264,245" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
          <ellipse cx="194" cy="248" rx="14" ry="7" fill="#111"/>
          <ellipse cx="266" cy="248" rx="14" ry="7" fill="#111"/>
        </g>

        {/* ── SCENE 3: fully connected hub ── */}
        <g className="sv-s3">
          <rect x="112" y="14" width="192" height="22" rx="11" fill="rgba(255,218,26,.12)"/>
          <text x="208" y="29" textAnchor="middle" fontSize="10" fontWeight="700" fill="#FFDA1A" letterSpacing="1.5" style={{ fontFamily: 'system-ui,sans-serif' }}>FULLY CONNECTED</text>

          {/* hub center */}
          <circle cx="310" cy="148" r="36" fill="#FFDA1A" stroke="#111" strokeWidth="3.5" filter="url(#sv-shadow)"/>
          <text x="310" y="144" textAnchor="middle" fontSize="8" fontWeight="900" fill="#001a50" style={{ fontFamily: 'system-ui,sans-serif' }}>KIRA</text>
          <text x="310" y="156" textAnchor="middle" fontSize="8" fontWeight="900" fill="#001a50" style={{ fontFamily: 'system-ui,sans-serif' }}>KIRA ⚡</text>

          {/* top node */}
          <rect x="278" y="58" width="64" height="36" rx="9" fill="white" stroke="#111" strokeWidth="2.5" filter="url(#sv-shadow)"/>
          <text x="310" y="74" textAnchor="middle" fontSize="7" fontWeight="700" fill="#2b7a0b" style={{ fontFamily: 'system-ui,sans-serif' }}>SQL Account</text>
          <text x="310" y="86" textAnchor="middle" fontSize="6" fill="#666" style={{ fontFamily: 'system-ui,sans-serif' }}>AutoCount</text>
          <line x1="310" y1="94" x2="310" y2="112" stroke="#111" strokeWidth="2.5" strokeLinecap="round"/>

          {/* right node */}
          <rect x="392" y="130" width="68" height="36" rx="9" fill="white" stroke="#111" strokeWidth="2.5" filter="url(#sv-shadow)"/>
          <text x="426" y="146" textAnchor="middle" fontSize="7" fontWeight="700" fill="#1d6f42" style={{ fontFamily: 'system-ui,sans-serif' }}>Sheets</text>
          <text x="426" y="158" textAnchor="middle" fontSize="6" fill="#666" style={{ fontFamily: 'system-ui,sans-serif' }}>Excel / Xero</text>
          <line x1="346" y1="148" x2="390" y2="148" stroke="#111" strokeWidth="2.5" strokeLinecap="round"/>

          {/* bottom node */}
          <rect x="278" y="210" width="64" height="36" rx="9" fill="white" stroke="#111" strokeWidth="2.5" filter="url(#sv-shadow)"/>
          <text x="310" y="226" textAnchor="middle" fontSize="7" fontWeight="700" fill="#0051BA" style={{ fontFamily: 'system-ui,sans-serif' }}>Reports</text>
          <text x="310" y="238" textAnchor="middle" fontSize="6" fill="#666" style={{ fontFamily: 'system-ui,sans-serif' }}>Auto-generated</text>
          <line x1="310" y1="184" x2="310" y2="208" stroke="#111" strokeWidth="2.5" strokeLinecap="round"/>

          {/* left node */}
          <rect x="216" y="130" width="62" height="36" rx="9" fill="white" stroke="#111" strokeWidth="2.5" filter="url(#sv-shadow)"/>
          <text x="247" y="146" textAnchor="middle" fontSize="7" fontWeight="700" fill="#e84c1e" style={{ fontFamily: 'system-ui,sans-serif' }}>Payroll</text>
          <text x="247" y="158" textAnchor="middle" fontSize="6" fill="#666" style={{ fontFamily: 'system-ui,sans-serif' }}>Synced live</text>
          <line x1="278" y1="148" x2="250" y2="148" stroke="#111" strokeWidth="2.5" strokeLinecap="round"/>

          {/* flowing data packets */}
          <g className="sv-fl1" style={{ transformOrigin: '310px 103px' }}>
            <rect x="304" y="97" width="12" height="8" rx="4" fill="#4caf50" stroke="#111" strokeWidth="1.5"/>
          </g>
          <g className="sv-fl2" style={{ transformOrigin: '368px 148px' }}>
            <rect x="350" y="144" width="12" height="8" rx="4" fill="#FFDA1A" stroke="#111" strokeWidth="1.5"/>
          </g>
          <g className="sv-fl3" style={{ transformOrigin: '310px 196px' }}>
            <rect x="304" y="190" width="12" height="8" rx="4" fill="#2196f3" stroke="#111" strokeWidth="1.5"/>
          </g>

          {/* checkmarks on nodes */}
          <g className="sv-ck1" style={{ transformOrigin: '342px 76px' }}>
            <circle cx="342" cy="76" r="10" fill="#4caf50" stroke="#111" strokeWidth="2"/>
            <text x="342" y="80" textAnchor="middle" fontSize="10" fill="white" fontWeight="800" style={{ fontFamily: 'system-ui,sans-serif' }}>✓</text>
          </g>
          <g className="sv-ck2" style={{ transformOrigin: '460px 148px' }}>
            <circle cx="460" cy="148" r="10" fill="#4caf50" stroke="#111" strokeWidth="2"/>
            <text x="460" y="152" textAnchor="middle" fontSize="10" fill="white" fontWeight="800" style={{ fontFamily: 'system-ui,sans-serif' }}>✓</text>
          </g>
          <g className="sv-ck3" style={{ transformOrigin: '342px 228px' }}>
            <circle cx="342" cy="228" r="10" fill="#4caf50" stroke="#111" strokeWidth="2"/>
            <text x="342" y="232" textAnchor="middle" fontSize="10" fill="white" fontWeight="800" style={{ fontFamily: 'system-ui,sans-serif' }}>✓</text>
          </g>

          {/* happy thumbs-up stick man */}
          <g className="sv-tbob">
            <ellipse cx="120" cy="176" rx="24" ry="32" fill="#FFDA1A" stroke="#111" strokeWidth="3.5" filter="url(#sv-shadow)"/>
            <path d="M109,152 L120,162 L131,152" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="120" cy="124" r="28" fill="white" stroke="#111" strokeWidth="3.5" filter="url(#sv-shadow)"/>
            <path d="M105,104 Q120,95 135,104" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
            <path d="M110,116 Q116,111 122,116" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
            <path d="M118,116 Q124,111 130,116" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="114" cy="122" r="4" fill="#111"/>
            <circle cx="126" cy="122" r="4" fill="#111"/>
            <circle cx="115" cy="121" r="1.5" fill="white"/>
            <circle cx="127" cy="121" r="1.5" fill="white"/>
            <path d="M110,132 Q120,142 130,132" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
            <path d="M112,133 Q120,141 128,133" fill="white" stroke="none"/>
            <ellipse cx="104" cy="128" rx="8" ry="5" fill="rgba(255,100,100,.18)"/>
            <ellipse cx="136" cy="128" rx="8" ry="5" fill="rgba(255,100,100,.18)"/>
            <path d="M140,158 Q155,142 162,128" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
            <circle cx="166" cy="122" r="12" fill="white" stroke="#111" strokeWidth="3.5"/>
            <text x="166" y="127" textAnchor="middle" fontSize="13" style={{ fontFamily: 'system-ui,sans-serif' }}>👍</text>
            <path d="M100,158 Q86,170 78,180" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
            <path d="M108,205 Q100,224 94,245" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
            <path d="M132,205 Q140,224 146,245" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
            <ellipse cx="92" cy="248" rx="14" ry="7" fill="#111"/>
            <ellipse cx="148" cy="248" rx="14" ry="7" fill="#111"/>
          </g>

          <text className="sv-st1" x="170" y="85" fontSize="14" fill="#FFDA1A" style={{ fontFamily: 'system-ui,sans-serif' }}>★</text>
          <text className="sv-st2" x="150" y="108" fontSize="10" fill="white" opacity=".8" style={{ fontFamily: 'system-ui,sans-serif' }}>✦</text>
          <text className="sv-st3" x="176" y="112" fontSize="12" fill="#FFDA1A" style={{ fontFamily: 'system-ui,sans-serif' }}>★</text>
        </g>

      </svg>
    </div>
  )
}
