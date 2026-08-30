export default function WorkflowIcon() {
  return (
    <div className="flex items-center justify-center w-full select-none">
      <svg viewBox="0 0 520 300" width="100%" style={{ maxWidth: 520 }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <style>{`
            @keyframes wf-s1f{0%,5%{opacity:0}10%,35%{opacity:1}40%,100%{opacity:0}}
            @keyframes wf-s2f{0%,36%{opacity:0}41%,61%{opacity:1}66%,100%{opacity:0}}
            @keyframes wf-s3f{0%,63%{opacity:0}68%,100%{opacity:1}}
            .wf-s1{animation:wf-s1f 11s cubic-bezier(.4,0,.2,1) infinite}
            .wf-s2{animation:wf-s2f 11s cubic-bezier(.4,0,.2,1) infinite}
            .wf-s3{animation:wf-s3f 11s cubic-bezier(.4,0,.2,1) infinite}

            @keyframes wf-pfall{0%{transform:translateY(-32px) rotate(-8deg);opacity:0}15%{opacity:1}85%{opacity:1}100%{transform:translateY(12px) rotate(6deg);opacity:0}}
            .wf-p1{animation:wf-pfall 1.5s ease-in-out infinite}
            .wf-p2{animation:wf-pfall 1.5s ease-in-out infinite .5s}
            .wf-p3{animation:wf-pfall 1.5s ease-in-out infinite 1s}

            @keyframes wf-swob{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}
            .wf-swob{animation:wf-swob .55s ease-in-out infinite;transform-origin:200px 168px}

            @keyframes wf-sw{0%,20%{opacity:0;transform:translate(0,0)}55%{opacity:1}100%{opacity:0;transform:translate(10px,-16px)}}
            .wf-sd1{animation:wf-sw 1.1s ease-out infinite}
            .wf-sd2{animation:wf-sw 1.1s ease-out infinite .55s}

            @keyframes wf-rch{0%,5%{transform:rotate(0deg)}65%,100%{transform:rotate(48deg)}}
            .wf-rarm{animation:wf-rch 1.6s cubic-bezier(.4,0,.2,1) forwards;transform-origin:254px 152px;animation-delay:.5s}

            @keyframes wf-bgl{0%,45%{filter:none}55%,75%{filter:drop-shadow(0 0 14px #FFDA1A)}100%{filter:none}}
            .wf-bgl{animation:wf-bgl 2.2s ease-in-out forwards}

            @keyframes wf-cbob{0%,100%{transform:translateY(0)}45%{transform:translateY(-12px)}}
            .wf-cbob{animation:wf-cbob 1.3s cubic-bezier(.4,0,.6,1) infinite;transform-origin:238px 168px}

            @keyframes wf-cf1{0%{transform:translate(0,0)rotate(0deg);opacity:1}100%{transform:translate(-28px,-72px)rotate(-200deg);opacity:0}}
            @keyframes wf-cf2{0%{transform:translate(0,0)rotate(0deg);opacity:1}100%{transform:translate(32px,-68px)rotate(160deg);opacity:0}}
            @keyframes wf-cf3{0%{transform:translate(0,0)rotate(0deg);opacity:1}100%{transform:translate(-12px,-80px)rotate(-140deg);opacity:0}}
            @keyframes wf-cf4{0%{transform:translate(0,0)rotate(0deg);opacity:1}100%{transform:translate(44px,-60px)rotate(200deg);opacity:0}}
            @keyframes wf-cf5{0%{transform:translate(0,0)rotate(0deg);opacity:1}100%{transform:translate(16px,-76px)rotate(-180deg);opacity:0}}
            @keyframes wf-cf6{0%{transform:translate(0,0)rotate(0deg);opacity:1}100%{transform:translate(-44px,-56px)rotate(150deg);opacity:0}}
            .wf-cf1{animation:wf-cf1 1.6s ease-out infinite}
            .wf-cf2{animation:wf-cf2 1.6s ease-out infinite .27s}
            .wf-cf3{animation:wf-cf3 1.6s ease-out infinite .54s}
            .wf-cf4{animation:wf-cf4 1.6s ease-out infinite .81s}
            .wf-cf5{animation:wf-cf5 1.6s ease-out infinite 1.08s}
            .wf-cf6{animation:wf-cf6 1.6s ease-out infinite 1.35s}

            @keyframes wf-dpop{0%,5%{transform:scale(.4) translateY(20px);opacity:0}25%,90%{transform:scale(1) translateY(0);opacity:1}100%{transform:scale(1) translateY(0);opacity:.9}}
            .wf-dp1{animation:wf-dpop 2s cubic-bezier(.34,1.56,.64,1) infinite;transform-origin:402px 121px}
            .wf-dp2{animation:wf-dpop 2s cubic-bezier(.34,1.56,.64,1) infinite .5s;transform-origin:402px 171px}
            .wf-dp3{animation:wf-dpop 2s cubic-bezier(.34,1.56,.64,1) infinite 1s;transform-origin:402px 221px}

            @keyframes wf-pr{0%{r:36;opacity:.5}100%{r:70;opacity:0}}
            .wf-pr{animation:wf-pr 2s ease-out infinite}
          `}</style>
          <filter id="wf-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="rgba(0,0,0,.18)"/>
          </filter>
        </defs>

        {/* floor line */}
        <line x1="30" y1="252" x2="490" y2="252" stroke="rgba(255,218,26,.12)" strokeWidth="1.5"/>

        {/* ── SCENE 1: drowning in reports ── */}
        <g className="wf-s1">
          <rect x="76" y="14" width="260" height="22" rx="11" fill="rgba(255,255,255,.08)"/>
          <text x="206" y="29" textAnchor="middle" fontSize="10" fontWeight="700" fill="rgba(255,255,255,.7)" letterSpacing="1.5" style={{ fontFamily: 'system-ui,sans-serif' }}>BEFORE AUTOMATION</text>

          <g className="wf-p1">
            <rect x="134" y="52" width="44" height="34" rx="5" fill="white" stroke="#222" strokeWidth="2.5" filter="url(#wf-shadow)"/>
            <line x1="140" y1="64" x2="172" y2="64" stroke="#d0d8f0" strokeWidth="2" strokeLinecap="round"/>
            <line x1="140" y1="72" x2="166" y2="72" stroke="#d0d8f0" strokeWidth="2" strokeLinecap="round"/>
            <text x="156" y="81" textAnchor="middle" fontSize="7" fontWeight="700" fill="#c00" style={{ fontFamily: 'system-ui,sans-serif' }}>OVERDUE</text>
          </g>
          <g className="wf-p2" style={{ transformOrigin: '222px 68px', transform: 'rotate(10deg)' }}>
            <rect x="200" y="46" width="44" height="34" rx="5" fill="white" stroke="#222" strokeWidth="2.5" filter="url(#wf-shadow)"/>
            <line x1="207" y1="58" x2="238" y2="58" stroke="#d0d8f0" strokeWidth="2" strokeLinecap="round"/>
            <line x1="207" y1="66" x2="233" y2="66" stroke="#d0d8f0" strokeWidth="2" strokeLinecap="round"/>
            <text x="222" y="75" textAnchor="middle" fontSize="7" fontWeight="700" fill="#0051BA" style={{ fontFamily: 'system-ui,sans-serif' }}>RPT_247</text>
          </g>
          <g className="wf-p3" style={{ transformOrigin: '278px 72px', transform: 'rotate(-12deg)' }}>
            <rect x="256" y="58" width="44" height="34" rx="5" fill="white" stroke="#222" strokeWidth="2.5" filter="url(#wf-shadow)"/>
            <line x1="263" y1="70" x2="294" y2="70" stroke="#d0d8f0" strokeWidth="2" strokeLinecap="round"/>
            <text x="278" y="85" textAnchor="middle" fontSize="7" fontWeight="700" fill="#c00" style={{ fontFamily: 'system-ui,sans-serif' }}>URGENT</text>
          </g>

          <rect x="80" y="224" width="270" height="14" rx="4" fill="#001540" stroke="rgba(255,218,26,.25)" strokeWidth="1.5" filter="url(#wf-shadow)"/>
          <rect x="98"  y="238" width="10" height="20" rx="3" fill="#001030"/>
          <rect x="320" y="238" width="10" height="20" rx="3" fill="#001030"/>

          <rect x="88" y="214" width="52" height="12" rx="2" fill="white" stroke="#222" strokeWidth="2" opacity=".9"/>
          <rect x="88" y="204" width="52" height="12" rx="2" fill="white" stroke="#222" strokeWidth="2" opacity=".8"/>
          <rect x="88" y="194" width="52" height="12" rx="2" fill="white" stroke="#222" strokeWidth="2" opacity=".65"/>
          <text x="114" y="208" textAnchor="middle" fontSize="6" fill="#c00" fontWeight="700" style={{ fontFamily: 'system-ui,sans-serif' }}>DONE</text>
          <text x="114" y="218" textAnchor="middle" fontSize="6" fill="#c00" fontWeight="700" style={{ fontFamily: 'system-ui,sans-serif' }}>DONE</text>

          <rect x="283" y="214" width="52" height="11" rx="2" fill="rgba(255,255,255,.35)" stroke="rgba(255,255,255,.5)" strokeWidth="1.5"/>
          <rect x="283" y="203" width="52" height="11" rx="2" fill="rgba(255,255,255,.3)" stroke="rgba(255,255,255,.45)" strokeWidth="1.5"/>
          <rect x="283" y="192" width="52" height="11" rx="2" fill="rgba(255,255,255,.25)" stroke="rgba(255,255,255,.4)" strokeWidth="1.5"/>
          <rect x="283" y="181" width="52" height="11" rx="2" fill="rgba(255,255,255,.2)" stroke="rgba(255,255,255,.35)" strokeWidth="1.5"/>
          <rect x="283" y="170" width="52" height="11" rx="2" fill="rgba(255,255,255,.15)" stroke="rgba(255,255,255,.3)" strokeWidth="1.5"/>
          <text x="309" y="163" textAnchor="middle" fontSize="10" fill="#FFDA1A" fontWeight="800" style={{ fontFamily: 'system-ui,sans-serif' }}>×247</text>

          <g className="wf-swob">
            <ellipse cx="200" cy="176" rx="24" ry="32" fill="#FFDA1A" stroke="#111" strokeWidth="3.5" filter="url(#wf-shadow)"/>
            <path d="M189,152 L200,162 L211,152" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="200" cy="124" r="28" fill="white" stroke="#111" strokeWidth="3.5" filter="url(#wf-shadow)"/>
            <line x1="192" y1="97" x2="190" y2="88" stroke="#111" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="200" y1="96" x2="200" y2="86" stroke="#111" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="208" y1="97" x2="210" y2="88" stroke="#111" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M188,115 Q193,110 198,114" fill="none" stroke="#111" strokeWidth="2.8" strokeLinecap="round"/>
            <path d="M202,114 Q207,110 212,115" fill="none" stroke="#111" strokeWidth="2.8" strokeLinecap="round"/>
            <circle cx="193" cy="120" r="4" fill="#111"/>
            <circle cx="207" cy="120" r="4" fill="#111"/>
            <circle cx="194" cy="119" r="1.5" fill="white"/>
            <circle cx="208" cy="119" r="1.5" fill="white"/>
            <path d="M190,133 Q195,129 200,132 Q205,135 210,131" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round"/>
            <ellipse cx="183" cy="125" rx="7" ry="5" fill="rgba(255,80,80,.18)"/>
            <ellipse cx="217" cy="125" rx="7" ry="5" fill="rgba(255,80,80,.18)"/>
            <path d="M178,160 Q162,144 152,128" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
            <path d="M222,162 Q238,172 252,180" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
            <path d="M188,205 Q180,223 174,244" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
            <path d="M212,205 Q220,224 226,244" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
            <ellipse cx="172" cy="247" rx="14" ry="7" fill="#111"/>
            <ellipse cx="228" cy="247" rx="14" ry="7" fill="#111"/>
            <path className="wf-sd1" d="M226,110 Q229,102 225,97" fill="#3af" stroke="rgba(0,80,200,.6)" strokeWidth="1.5" strokeLinecap="round"/>
            <path className="wf-sd2" d="M233,121 Q237,113 233,108" fill="#3af" stroke="rgba(0,80,200,.6)" strokeWidth="1.5" strokeLinecap="round"/>
          </g>
        </g>

        {/* ── SCENE 2: pressing AUTO button ── */}
        <g className="wf-s2">
          <rect x="100" y="14" width="218" height="22" rx="11" fill="rgba(255,255,255,.08)"/>
          <text x="209" y="29" textAnchor="middle" fontSize="10" fontWeight="700" fill="rgba(255,218,26,.9)" letterSpacing="1.5" style={{ fontFamily: 'system-ui,sans-serif' }}>ONE CLICK TO CHANGE IT</text>

          <rect x="80" y="224" width="270" height="14" rx="4" fill="#001540" stroke="rgba(255,218,26,.25)" strokeWidth="1.5"/>
          <rect x="98"  y="238" width="10" height="20" rx="3" fill="#001030"/>
          <rect x="320" y="238" width="10" height="20" rx="3" fill="#001030"/>

          <g className="wf-bgl">
            <rect x="352" y="146" width="120" height="68" rx="18" fill="rgba(0,0,0,.25)" transform="translate(3,4)"/>
            <rect x="352" y="146" width="120" height="68" rx="18" fill="#FFDA1A" stroke="#111" strokeWidth="3.5"/>
            <rect x="358" y="152" width="108" height="56" rx="14" fill="rgba(255,255,255,.25)"/>
            <text x="412" y="175" textAnchor="middle" fontSize="16" fontWeight="900" fill="#001a50" letterSpacing=".5" style={{ fontFamily: 'system-ui,Impact,sans-serif' }}>AUTO</text>
            <text x="412" y="193" textAnchor="middle" fontSize="10" fontWeight="700" fill="#002f80" style={{ fontFamily: 'system-ui,sans-serif' }}>STAMP ALL</text>
            <circle cx="412" cy="180" r="10" fill="none" stroke="rgba(0,30,100,.35)" strokeWidth="2"/>
          </g>

          <ellipse cx="222" cy="176" rx="24" ry="32" fill="#FFDA1A" stroke="#111" strokeWidth="3.5" filter="url(#wf-shadow)"/>
          <path d="M211,152 L222,162 L233,152" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="222" cy="124" r="28" fill="white" stroke="#111" strokeWidth="3.5" filter="url(#wf-shadow)"/>
          <path d="M207,102 Q222,94 237,102" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="214" cy="120" r="4.5" fill="#111"/>
          <circle cx="230" cy="120" r="4.5" fill="#111"/>
          <circle cx="215" cy="119" r="2" fill="white"/>
          <circle cx="231" cy="119" r="2" fill="white"/>
          <path d="M210,131 Q222,142 234,131" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
          <path d="M200,160 Q184,172 174,182" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
          <g className="wf-rarm">
            <path d="M244,158 Q280,144 336,138" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
            <circle cx="344" cy="136" r="9" fill="white" stroke="#111" strokeWidth="3"/>
          </g>
          <path d="M210,205 Q202,224 196,245" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
          <path d="M234,205 Q242,224 248,245" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
          <ellipse cx="194" cy="248" rx="14" ry="7" fill="#111"/>
          <ellipse cx="250" cy="248" rx="14" ry="7" fill="#111"/>
        </g>

        {/* ── SCENE 3: celebrating! ── */}
        <g className="wf-s3">
          <rect x="110" y="14" width="196" height="22" rx="11" fill="rgba(255,218,26,.12)"/>
          <text x="208" y="29" textAnchor="middle" fontSize="10" fontWeight="700" fill="#FFDA1A" letterSpacing="1.5" style={{ fontFamily: 'system-ui,sans-serif' }}>AUTOMATION WINS</text>

          <circle className="wf-pr" cx="238" cy="168" r="36" fill="none" stroke="#FFDA1A" strokeWidth="2" opacity=".5"/>
          <circle className="wf-pr" cx="238" cy="168" r="36" fill="none" stroke="#FFDA1A" strokeWidth="1.5" opacity=".3" style={{ animationDelay: '.7s' }}/>

          <g className="wf-cf1"><rect x="228" y="62" width="20" height="10" rx="3" fill="#4caf50" stroke="#111" strokeWidth="2" transform="rotate(-20,238,67)"/></g>
          <g className="wf-cf2"><rect x="248" y="56" width="16" height="9" rx="3" fill="#e91e63" stroke="#111" strokeWidth="2" transform="rotate(14,256,61)"/></g>
          <g className="wf-cf3"><rect x="212" y="60" width="18" height="8" rx="3" fill="#2196f3" stroke="#111" strokeWidth="2" transform="rotate(-28,221,64)"/></g>
          <g className="wf-cf4"><rect x="262" y="64" width="14" height="9" rx="3" fill="#FFDA1A" stroke="#111" strokeWidth="2" transform="rotate(22,269,69)"/></g>
          <g className="wf-cf5"><rect x="236" y="50" width="16" height="8" rx="3" fill="#ff5722" stroke="#111" strokeWidth="2" transform="rotate(-10,244,54)"/></g>
          <g className="wf-cf6"><rect x="204" y="66" width="18" height="9" rx="3" fill="#9c27b0" stroke="#111" strokeWidth="2" transform="rotate(18,213,71)"/></g>
          <g className="wf-cf2"><rect x="276" y="58" width="14" height="7" rx="3" fill="#00bcd4" stroke="#111" strokeWidth="2" transform="rotate(-30,283,62)"/></g>
          <g className="wf-cf4"><rect x="196" y="54" width="12" height="8" rx="3" fill="#ff9800" stroke="#111" strokeWidth="2" transform="rotate(35,202,58)"/></g>

          <g className="wf-cbob">
            <ellipse cx="238" cy="178" rx="26" ry="34" fill="#FFDA1A" stroke="#111" strokeWidth="4" filter="url(#wf-shadow)"/>
            <path d="M226,152 L238,164 L250,152" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="238" cy="122" r="30" fill="white" stroke="#111" strokeWidth="4" filter="url(#wf-shadow)"/>
            <path d="M212,106 Q238,95 264,106" fill="none" stroke="#111" strokeWidth="3.5" strokeLinecap="round"/>
            <path d="M222,111 Q229,105 236,110" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
            <path d="M240,110 Q247,105 254,111" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
            <path d="M220,118 Q226,113 232,118" fill="none" stroke="#111" strokeWidth="3.5" strokeLinecap="round"/>
            <path d="M244,118 Q250,113 256,118" fill="none" stroke="#111" strokeWidth="3.5" strokeLinecap="round"/>
            <path d="M222,132 Q238,146 254,132" fill="none" stroke="#111" strokeWidth="3.5" strokeLinecap="round"/>
            <path d="M224,133 Q238,143 252,133" fill="white" stroke="none"/>
            <line x1="232" y1="133" x2="232" y2="141" stroke="#ddd" strokeWidth="1"/>
            <line x1="238" y1="133" x2="238" y2="143" stroke="#ddd" strokeWidth="1"/>
            <line x1="244" y1="133" x2="244" y2="141" stroke="#ddd" strokeWidth="1"/>
            <ellipse cx="220" cy="128" rx="9" ry="6" fill="rgba(255,100,100,.18)"/>
            <ellipse cx="256" cy="128" rx="9" ry="6" fill="rgba(255,100,100,.18)"/>
            <path d="M215,162 Q196,140 184,118" fill="none" stroke="#111" strokeWidth="6" strokeLinecap="round"/>
            <circle cx="181" cy="113" r="11" fill="white" stroke="#111" strokeWidth="3.5"/>
            <path d="M171,106 L179,113 L171,120 Z" fill="#e91e63" stroke="#111" strokeWidth="1.5"/>
            <path d="M191,106 L183,113 L191,120 Z" fill="#e91e63" stroke="#111" strokeWidth="1.5"/>
            <path d="M261,162 Q280,140 292,118" fill="none" stroke="#111" strokeWidth="6" strokeLinecap="round"/>
            <circle cx="295" cy="113" r="11" fill="white" stroke="#111" strokeWidth="3.5"/>
            <path d="M285,106 L293,113 L285,120 Z" fill="#4caf50" stroke="#111" strokeWidth="1.5"/>
            <path d="M305,106 L297,113 L305,120 Z" fill="#4caf50" stroke="#111" strokeWidth="1.5"/>
            <path d="M226,209 Q216,230 208,252" fill="none" stroke="#111" strokeWidth="6" strokeLinecap="round"/>
            <path d="M250,209 Q260,230 268,252" fill="none" stroke="#111" strokeWidth="6" strokeLinecap="round"/>
            <ellipse cx="205" cy="255" rx="16" ry="8" fill="#111"/>
            <ellipse cx="271" cy="255" rx="16" ry="8" fill="#111"/>
          </g>

          <g className="wf-dp1">
            <rect x="326" y="102" width="162" height="38" rx="10" fill="white" stroke="#111" strokeWidth="2.5" filter="url(#wf-shadow)"/>
            <circle cx="346" cy="121" r="10" fill="#4caf50"/>
            <text x="346" y="125" textAnchor="middle" fontSize="11" fill="white" fontWeight="800" style={{ fontFamily: 'system-ui,sans-serif' }}>✓</text>
            <text x="366" y="117" fontSize="10" fontWeight="700" fill="#111" style={{ fontFamily: 'system-ui,sans-serif' }}>247 Reports</text>
            <text x="366" y="130" fontSize="8" fill="#666" style={{ fontFamily: 'system-ui,sans-serif' }}>Stamped automatically</text>
          </g>
          <g className="wf-dp2">
            <rect x="326" y="152" width="162" height="38" rx="10" fill="white" stroke="#111" strokeWidth="2.5" filter="url(#wf-shadow)"/>
            <circle cx="346" cy="171" r="10" fill="#0051BA"/>
            <text x="346" y="175" textAnchor="middle" fontSize="11" fill="white" fontWeight="800" style={{ fontFamily: 'system-ui,sans-serif' }}>✓</text>
            <text x="366" y="167" fontSize="10" fontWeight="700" fill="#111" style={{ fontFamily: 'system-ui,sans-serif' }}>0 Manual Steps</text>
            <text x="366" y="180" fontSize="8" fill="#666" style={{ fontFamily: 'system-ui,sans-serif' }}>Down from 247</text>
          </g>
          <g className="wf-dp3">
            <rect x="326" y="202" width="162" height="38" rx="10" fill="white" stroke="#111" strokeWidth="2.5" filter="url(#wf-shadow)"/>
            <circle cx="346" cy="221" r="10" fill="#FFDA1A" stroke="#111" strokeWidth="1.5"/>
            <text x="346" y="225" textAnchor="middle" fontSize="11" fill="#111" fontWeight="800" style={{ fontFamily: 'system-ui,sans-serif' }}>★</text>
            <text x="366" y="217" fontSize="10" fontWeight="700" fill="#111" style={{ fontFamily: 'system-ui,sans-serif' }}>3 hrs saved today</text>
            <text x="366" y="230" fontSize="8" fill="#666" style={{ fontFamily: 'system-ui,sans-serif' }}>Every. Single. Day.</text>
          </g>
        </g>

      </svg>
    </div>
  )
}
