export default function BlogIcon() {
  return (
    <div className="flex items-center justify-center w-full select-none">
      <svg viewBox="0 0 520 300" width="100%" style={{ maxWidth: 520 }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <style>{`
            @keyframes bl-s1f{0%,5%{opacity:0}10%,35%{opacity:1}40%,100%{opacity:0}}
            @keyframes bl-s2f{0%,36%{opacity:0}41%,61%{opacity:1}66%,100%{opacity:0}}
            @keyframes bl-s3f{0%,63%{opacity:0}68%,100%{opacity:1}}
            .bl-s1{animation:bl-s1f 11s cubic-bezier(.4,0,.2,1) infinite}
            .bl-s2{animation:bl-s2f 11s cubic-bezier(.4,0,.2,1) infinite}
            .bl-s3{animation:bl-s3f 11s cubic-bezier(.4,0,.2,1) infinite}

            /* scene 1: question marks floating up */
            @keyframes bl-qm{0%{transform:translateY(0);opacity:0}15%{opacity:1}85%{opacity:1}100%{transform:translateY(-50px);opacity:0}}
            .bl-q1{animation:bl-qm 2s ease-out infinite}
            .bl-q2{animation:bl-qm 2s ease-out infinite .66s}
            .bl-q3{animation:bl-qm 2s ease-out infinite 1.33s}

            /* scene 1: confused wobble */
            @keyframes bl-cwob{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}
            .bl-cwob{animation:bl-cwob .7s ease-in-out infinite;transform-origin:200px 168px}

            /* scene 1: messy chart bars */
            @keyframes bl-bar-chaos{0%,100%{transform:scaleY(1)}33%{transform:scaleY(.4)}66%{transform:scaleY(1.3)}}
            .bl-bc1{animation:bl-bar-chaos 1.2s ease-in-out infinite;transform-origin:bottom}
            .bl-bc2{animation:bl-bar-chaos 1.2s ease-in-out infinite .4s;transform-origin:bottom}
            .bl-bc3{animation:bl-bar-chaos 1.2s ease-in-out infinite .8s;transform-origin:bottom}

            /* scene 2: reading — eye scan line */
            @keyframes bl-scan{0%{transform:translateY(0);opacity:1}100%{transform:translateY(90px);opacity:.3}}
            .bl-scan{animation:bl-scan 2.4s ease-in-out infinite}

            /* scene 2: book page turn hint */
            @keyframes bl-turn{0%,70%{transform:rotateY(0deg)}80%{transform:rotateY(-20deg)}100%{transform:rotateY(0deg)}}
            .bl-turn{animation:bl-turn 3s ease-in-out infinite;transform-origin:center}

            /* scene 2: reading bob */
            @keyframes bl-rbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
            .bl-rbob{animation:bl-rbob 1.8s ease-in-out infinite;transform-origin:200px 168px}

            /* scene 3: lightbulb pulse */
            @keyframes bl-bulb{0%,100%{filter:drop-shadow(0 0 6px #FFDA1A);transform:scale(1)}50%{filter:drop-shadow(0 0 24px #FFDA1A) drop-shadow(0 0 48px rgba(255,218,26,.4));transform:scale(1.08)}}
            .bl-bulb{animation:bl-bulb 1.6s ease-in-out infinite;transform-origin:340px 90px}

            /* scene 3: insight cards fly out */
            @keyframes bl-fly1{0%{transform:translate(0,0)scale(.4);opacity:0}20%{transform:translate(0,0)scale(1);opacity:1}85%{opacity:1}100%{transform:translate(-60px,-50px)scale(.8);opacity:0}}
            @keyframes bl-fly2{0%{transform:translate(0,0)scale(.4);opacity:0}20%{transform:translate(0,0)scale(1);opacity:1}85%{opacity:1}100%{transform:translate(60px,-40px)scale(.8);opacity:0}}
            @keyframes bl-fly3{0%{transform:translate(0,0)scale(.4);opacity:0}20%{transform:translate(0,0)scale(1);opacity:1}85%{opacity:1}100%{transform:translate(70px,20px)scale(.8);opacity:0}}
            .bl-fy1{animation:bl-fly1 2.4s cubic-bezier(.34,1.2,.64,1) infinite}
            .bl-fy2{animation:bl-fly2 2.4s cubic-bezier(.34,1.2,.64,1) infinite .8s}
            .bl-fy3{animation:bl-fly3 2.4s cubic-bezier(.34,1.2,.64,1) infinite 1.6s}

            /* scene 3: celebrate jump */
            @keyframes bl-jump{0%,100%{transform:translateY(0)}40%{transform:translateY(-14px)}}
            .bl-jump{animation:bl-jump 1.4s cubic-bezier(.4,0,.6,1) infinite;transform-origin:210px 168px}

            /* scene 3: rays from bulb */
            @keyframes bl-ray{0%,100%{opacity:.3;transform:scaleX(.6)}50%{opacity:1;transform:scaleX(1)}}
            .bl-r1{animation:bl-ray 1.6s ease-in-out infinite}
            .bl-r2{animation:bl-ray 1.6s ease-in-out infinite .4s}
            .bl-r3{animation:bl-ray 1.6s ease-in-out infinite .8s}
            .bl-r4{animation:bl-ray 1.6s ease-in-out infinite 1.2s}
          `}</style>
          <filter id="bl-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="rgba(0,0,0,.18)"/>
          </filter>
        </defs>

        <line x1="30" y1="252" x2="490" y2="252" stroke="rgba(255,218,26,.12)" strokeWidth="1.5"/>

        {/* ── SCENE 1: confused — messy data, question marks ── */}
        <g className="bl-s1">
          <rect x="68" y="14" width="280" height="22" rx="11" fill="rgba(255,255,255,.08)"/>
          <text x="208" y="29" textAnchor="middle" fontSize="10" fontWeight="700" fill="rgba(255,255,255,.7)" letterSpacing="1.5" style={{ fontFamily: 'system-ui,sans-serif' }}>INFORMATION OVERLOAD</text>

          {/* messy bar chart (chaotic) */}
          <rect x="290" y="148" width="18" height="60" rx="3" fill="rgba(255,80,80,.5)" stroke="#111" strokeWidth="2" className="bl-bc1"/>
          <rect x="316" y="170" width="18" height="38" rx="3" fill="rgba(255,150,50,.5)" stroke="#111" strokeWidth="2" className="bl-bc2"/>
          <rect x="342" y="130" width="18" height="78" rx="3" fill="rgba(255,80,80,.4)" stroke="#111" strokeWidth="2" className="bl-bc3"/>
          <rect x="368" y="158" width="18" height="50" rx="3" fill="rgba(255,150,50,.5)" stroke="#111" strokeWidth="2" className="bl-bc1" style={{ animationDelay: '.2s' }}/>
          {/* chart axes */}
          <line x1="284" y1="208" x2="400" y2="208" stroke="rgba(255,255,255,.4)" strokeWidth="2" strokeLinecap="round"/>
          <line x1="284" y1="120" x2="284" y2="210" stroke="rgba(255,255,255,.4)" strokeWidth="2" strokeLinecap="round"/>
          <text x="342" y="220" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,.4)" style={{ fontFamily: 'system-ui,sans-serif' }}>???</text>

          {/* floating question marks */}
          <text className="bl-q1" x="130" y="95" fontSize="22" fontWeight="900" fill="rgba(255,218,26,.8)" style={{ fontFamily: 'system-ui,sans-serif' }}>?</text>
          <text className="bl-q2" x="162" y="80" fontSize="16" fontWeight="900" fill="rgba(255,255,255,.6)" style={{ fontFamily: 'system-ui,sans-serif' }}>?</text>
          <text className="bl-q3" x="108" y="100" fontSize="18" fontWeight="900" fill="rgba(255,218,26,.6)" style={{ fontFamily: 'system-ui,sans-serif' }}>?</text>

          {/* desk */}
          <rect x="80" y="224" width="270" height="14" rx="4" fill="#001540" stroke="rgba(255,218,26,.25)" strokeWidth="1.5"/>
          <rect x="98" y="238" width="10" height="20" rx="3" fill="#001030"/>
          <rect x="320" y="238" width="10" height="20" rx="3" fill="#001030"/>

          {/* confused stick man */}
          <g className="bl-cwob">
            <ellipse cx="200" cy="176" rx="24" ry="32" fill="#FFDA1A" stroke="#111" strokeWidth="3.5" filter="url(#bl-shadow)"/>
            <path d="M189,152 L200,162 L211,152" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="200" cy="124" r="28" fill="white" stroke="#111" strokeWidth="3.5" filter="url(#bl-shadow)"/>
            {/* hair standing up (confused) */}
            <line x1="190" y1="97" x2="186" y2="86" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
            <line x1="200" y1="96" x2="200" y2="84" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
            <line x1="210" y1="97" x2="214" y2="86" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
            {/* raised eyebrow (confused) */}
            <path d="M188,113 Q193,108 198,112" fill="none" stroke="#111" strokeWidth="2.8" strokeLinecap="round"/>
            <path d="M202,112 Q208,116 213,112" fill="none" stroke="#111" strokeWidth="2.8" strokeLinecap="round"/>
            <circle cx="193" cy="119" r="4" fill="#111"/>
            <circle cx="207" cy="119" r="4" fill="#111"/>
            <circle cx="194" cy="118" r="1.5" fill="white"/>
            <circle cx="208" cy="118" r="1.5" fill="white"/>
            {/* wavy confused mouth */}
            <path d="M191,131 Q195,135 200,131 Q205,127 209,131" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round"/>
            <ellipse cx="183" cy="122" rx="7" ry="5" fill="rgba(255,80,80,.15)"/>
            <ellipse cx="217" cy="122" rx="7" ry="5" fill="rgba(255,80,80,.15)"/>
            {/* hand on chin thinking pose */}
            <path d="M178,160 Q165,158 158,162" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
            <circle cx="154" cy="165" r="10" fill="white" stroke="#111" strokeWidth="3"/>
            <path d="M222,158 Q236,148 248,140" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
            <path d="M188,205 Q180,224 174,244" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
            <path d="M212,205 Q220,224 226,244" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
            <ellipse cx="172" cy="247" rx="14" ry="7" fill="#111"/>
            <ellipse cx="228" cy="247" rx="14" ry="7" fill="#111"/>
          </g>
        </g>

        {/* ── SCENE 2: reading an article, absorbing knowledge ── */}
        <g className="bl-s2">
          <rect x="104" y="14" width="210" height="22" rx="11" fill="rgba(255,255,255,.08)"/>
          <text x="209" y="29" textAnchor="middle" fontSize="10" fontWeight="700" fill="rgba(255,218,26,.9)" letterSpacing="1.5" style={{ fontFamily: 'system-ui,sans-serif' }}>READING. LEARNING. GROWING.</text>

          {/* open book (big, clean) */}
          <rect x="272" y="65" width="8" height="160" rx="4" fill="#001540" stroke="#FFDA1A" strokeWidth="1.5"/>
          {/* left page */}
          <path d="M270,72 Q230,68 192,78 L192,218 Q230,210 270,215 Z" fill="#f4f7ff" stroke="#ccd8f0" strokeWidth="1.5"/>
          {/* right page */}
          <path d="M282,72 Q322,68 360,78 L360,218 Q322,210 282,215 Z" fill="#f4f7ff" stroke="#ccd8f0" strokeWidth="1.5"/>

          {/* left page text lines */}
          {[92,104,116,128,140,152,164,176,188,200].map((y, i) => (
            <rect key={i} x="202" y={y} width={[56,48,58,44,54,50,56,42,52,46][i]} height="5" rx="2.5" fill="#0051BA" opacity="0.12"/>
          ))}
          {/* right page text lines */}
          {[92,104,116,128,140,152,164,176,188,200].map((y, i) => (
            <rect key={i} x="292" y={y} width={[52,58,44,56,48,54,42,58,46,52][i]} height="5" rx="2.5" fill="#0051BA" opacity="0.12"/>
          ))}

          {/* animated eye scan line on right page */}
          <rect className="bl-scan" x="292" y="92" width="60" height="3" rx="1.5" fill="#FFDA1A" opacity=".6"/>

          {/* reading stick man */}
          <g className="bl-rbob">
            <ellipse cx="148" cy="176" rx="24" ry="32" fill="#FFDA1A" stroke="#111" strokeWidth="3.5" filter="url(#bl-shadow)"/>
            <path d="M137,152 L148,162 L159,152" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="148" cy="124" r="28" fill="white" stroke="#111" strokeWidth="3.5" filter="url(#bl-shadow)"/>
            <path d="M133,103 Q148,94 163,103" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
            {/* focused reading eyes (wide open, curious) */}
            <circle cx="140" cy="119" r="5" fill="#111"/>
            <circle cx="156" cy="119" r="5" fill="#111"/>
            <circle cx="141" cy="117" r="2" fill="white"/>
            <circle cx="157" cy="117" r="2" fill="white"/>
            {/* open mouth slightly (engaged) */}
            <path d="M141,131 Q148,136 155,131" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round"/>
            <ellipse cx="132" cy="125" rx="7" ry="5" fill="rgba(255,100,100,.15)"/>
            <ellipse cx="164" cy="125" rx="7" ry="5" fill="rgba(255,100,100,.15)"/>
            {/* both arms out holding book */}
            <path d="M126,158 Q110,162 180,163" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
            <path d="M170,158 Q184,160 192,163" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
            <path d="M136,205 Q128,224 122,245" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
            <path d="M160,205 Q168,224 174,245" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
            <ellipse cx="120" cy="248" rx="14" ry="7" fill="#111"/>
            <ellipse cx="176" cy="248" rx="14" ry="7" fill="#111"/>
          </g>
        </g>

        {/* ── SCENE 3: lightbulb moment — insights flying ── */}
        <g className="bl-s3">
          <rect x="110" y="14" width="196" height="22" rx="11" fill="rgba(255,218,26,.12)"/>
          <text x="208" y="29" textAnchor="middle" fontSize="10" fontWeight="700" fill="#FFDA1A" letterSpacing="1.5" style={{ fontFamily: 'system-ui,sans-serif' }}>EUREKA MOMENT</text>

          {/* big glowing lightbulb */}
          <g className="bl-bulb">
            {/* bulb glass */}
            <circle cx="340" cy="82" r="34" fill="#FFDA1A" stroke="#111" strokeWidth="3.5"/>
            {/* bulb base */}
            <rect x="326" y="110" width="28" height="10" rx="3" fill="#FFDA1A" stroke="#111" strokeWidth="2.5"/>
            <rect x="328" y="120" width="24" height="8" rx="2" fill="#FFDA1A" stroke="#111" strokeWidth="2"/>
            <rect x="330" y="128" width="20" height="6" rx="2" fill="#FFDA1A" stroke="#111" strokeWidth="2"/>
            {/* filament inside */}
            <path d="M330,92 Q336,78 340,72 Q344,78 350,92" fill="none" stroke="#002060" strokeWidth="2.5" strokeLinecap="round"/>
            {/* shine dots */}
            <circle cx="326" cy="70" r="4" fill="white" opacity=".6"/>
            <circle cx="320" cy="82" r="2.5" fill="white" opacity=".4"/>
          </g>

          {/* rays from bulb */}
          <line className="bl-r1" x1="306" y1="56" x2="292" y2="44" stroke="#FFDA1A" strokeWidth="3" strokeLinecap="round" style={{ transformOrigin: '306px 56px' }}/>
          <line className="bl-r2" x1="374" y1="56" x2="388" y2="44" stroke="#FFDA1A" strokeWidth="3" strokeLinecap="round" style={{ transformOrigin: '374px 56px' }}/>
          <line className="bl-r3" x1="340" y1="46" x2="340" y2="30" stroke="#FFDA1A" strokeWidth="3" strokeLinecap="round" style={{ transformOrigin: '340px 46px' }}/>
          <line className="bl-r4" x1="376" y1="82" x2="394" y2="82" stroke="#FFDA1A" strokeWidth="3" strokeLinecap="round" style={{ transformOrigin: '376px 82px' }}/>

          {/* insight cards flying out */}
          <g className="bl-fy1" style={{ transformOrigin: '340px 82px' }}>
            <rect x="298" y="158" width="110" height="38" rx="10" fill="white" stroke="#111" strokeWidth="2.5" filter="url(#bl-shadow)"/>
            <circle cx="318" cy="177" r="10" fill="#0051BA"/>
            <text x="318" y="181" textAnchor="middle" fontSize="10" fill="white" fontWeight="800" style={{ fontFamily: 'system-ui,sans-serif' }}>💡</text>
            <text x="338" y="173" fontSize="9" fontWeight="700" fill="#111" style={{ fontFamily: 'system-ui,sans-serif' }}>Automate it</text>
            <text x="338" y="186" fontSize="7" fill="#666" style={{ fontFamily: 'system-ui,sans-serif' }}>Save 3 hrs/week</text>
          </g>
          <g className="bl-fy2" style={{ transformOrigin: '340px 82px' }}>
            <rect x="310" y="206" width="110" height="38" rx="10" fill="white" stroke="#111" strokeWidth="2.5" filter="url(#bl-shadow)"/>
            <circle cx="330" cy="225" r="10" fill="#4caf50"/>
            <text x="330" y="229" textAnchor="middle" fontSize="10" fill="white" fontWeight="800" style={{ fontFamily: 'system-ui,sans-serif' }}>📊</text>
            <text x="350" y="221" fontSize="9" fontWeight="700" fill="#111" style={{ fontFamily: 'system-ui,sans-serif' }}>Live reports</text>
            <text x="350" y="234" fontSize="7" fill="#666" style={{ fontFamily: 'system-ui,sans-serif' }}>No more manual</text>
          </g>
          <g className="bl-fy3" style={{ transformOrigin: '340px 82px' }}>
            <rect x="296" y="254" width="110" height="34" rx="10" fill="white" stroke="#111" strokeWidth="2.5" filter="url(#bl-shadow)"/>
            <circle cx="316" cy="271" r="10" fill="#FFDA1A" stroke="#111" strokeWidth="1.5"/>
            <text x="316" y="275" textAnchor="middle" fontSize="10" fill="#111" fontWeight="800" style={{ fontFamily: 'system-ui,sans-serif' }}>⚡</text>
            <text x="336" y="268" fontSize="9" fontWeight="700" fill="#111" style={{ fontFamily: 'system-ui,sans-serif' }}>Integrate all</text>
            <text x="336" y="281" fontSize="7" fill="#666" style={{ fontFamily: 'system-ui,sans-serif' }}>One source of truth</text>
          </g>

          {/* jumping eureka stick man */}
          <g className="bl-jump">
            <ellipse cx="210" cy="182" rx="24" ry="32" fill="#FFDA1A" stroke="#111" strokeWidth="3.5" filter="url(#bl-shadow)"/>
            <path d="M199,158 L210,168 L221,158" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="210" cy="130" r="28" fill="white" stroke="#111" strokeWidth="3.5" filter="url(#bl-shadow)"/>
            <path d="M194,110 Q210,101 226,110" fill="none" stroke="#111" strokeWidth="3.5" strokeLinecap="round"/>
            {/* huge happy surprise eyes */}
            <circle cx="202" cy="126" r="5.5" fill="#111"/>
            <circle cx="218" cy="126" r="5.5" fill="#111"/>
            <circle cx="203" cy="124" r="2.5" fill="white"/>
            <circle cx="219" cy="124" r="2.5" fill="white"/>
            {/* giant grin */}
            <path d="M198,138 Q210,150 222,138" fill="none" stroke="#111" strokeWidth="3.5" strokeLinecap="round"/>
            <path d="M200,139 Q210,148 220,139" fill="white" stroke="none"/>
            <line x1="208" y1="139" x2="208" y2="147" stroke="#ddd" strokeWidth="1"/>
            <line x1="212" y1="139" x2="212" y2="149" stroke="#ddd" strokeWidth="1"/>
            <line x1="216" y1="139" x2="216" y2="147" stroke="#ddd" strokeWidth="1"/>
            <ellipse cx="194" cy="134" rx="9" ry="6" fill="rgba(255,100,100,.2)"/>
            <ellipse cx="226" cy="134" rx="9" ry="6" fill="rgba(255,100,100,.2)"/>
            {/* arms raised in aha! moment */}
            <path d="M188,164 Q172,144 164,124" fill="none" stroke="#111" strokeWidth="6" strokeLinecap="round"/>
            <circle cx="161" cy="119" r="11" fill="white" stroke="#111" strokeWidth="3.5"/>
            <text x="161" y="124" textAnchor="middle" fontSize="12" style={{ fontFamily: 'system-ui,sans-serif' }}>🤩</text>
            <path d="M232,164 Q248,144 256,124" fill="none" stroke="#111" strokeWidth="6" strokeLinecap="round"/>
            {/* legs jump pose — knees bent up */}
            <path d="M198,211 Q188,228 178,238" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
            <path d="M178,238 Q192,244 200,236" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
            <path d="M222,211 Q232,228 242,238" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
            <path d="M242,238 Q228,244 220,236" fill="none" stroke="#111" strokeWidth="5.5" strokeLinecap="round"/>
            <ellipse cx="180" cy="242" rx="12" ry="6" fill="#111"/>
            <ellipse cx="240" cy="242" rx="12" ry="6" fill="#111"/>
          </g>
        </g>

      </svg>
    </div>
  )
}
