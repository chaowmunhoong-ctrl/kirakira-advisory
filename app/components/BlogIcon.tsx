export default function BlogIcon() {
  return (
    <div className="flex items-center justify-center w-full select-none">
      <svg viewBox="0 0 480 480" width="100%" style={{ maxWidth: 460 }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <filter id="bi-gy" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="bi-soft" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="20"/>
          </filter>
          <filter id="bi-page-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <radialGradient id="bi-node" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#1a6fd4"/>
            <stop offset="100%" stopColor="#002570"/>
          </radialGradient>
          <linearGradient id="bi-page-l" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#f0f4ff"/>
            <stop offset="100%" stopColor="#dde8ff"/>
          </linearGradient>
          <linearGradient id="bi-page-r" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#dde8ff"/>
            <stop offset="100%" stopColor="#f0f4ff"/>
          </linearGradient>
          <radialGradient id="bi-amb" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#FFDA1A" stopOpacity="0.16"/>
            <stop offset="100%" stopColor="#0051BA" stopOpacity="0"/>
          </radialGradient>
          <style>{`
            @keyframes bi-pulse  { 0%,100%{opacity:.15} 50%{opacity:.4} }
            @keyframes bi-pulse2 { 0%,100%{opacity:.08} 50%{opacity:.2} }
            @keyframes bi-line-scan {
              0%  {transform:scaleX(0.3);opacity:0}
              20% {opacity:1}
              80% {opacity:1}
              100%{transform:scaleX(1); opacity:0}
            }
            @keyframes bi-page-turn {
              0%,70%  {transform:rotateY(0deg);   opacity:1}
              85%     {transform:rotateY(-80deg);  opacity:.6}
              100%    {transform:rotateY(0deg);    opacity:1}
            }
            @keyframes bi-card-float {
              0%,100%{transform:translateY(0)}
              50%    {transform:translateY(-7px)}
            }
            @keyframes bi-card-glow {
              0%,100%{filter:drop-shadow(0 0 4px #FFDA1A)}
              50%    {filter:drop-shadow(0 0 16px #FFDA1A) drop-shadow(0 0 28px rgba(255,218,26,.3))}
            }
            @keyframes bi-spark {
              0%  {transform:translateY(0)  scale(1);   opacity:1}
              100%{transform:translateY(-90px) scale(0); opacity:0}
            }
            @keyframes bi-orbit-spin {
              from{transform:rotate(0deg)} to{transform:rotate(360deg)}
            }
            @keyframes bi-dash {
              to{stroke-dashoffset:-48}
            }
            @keyframes bi-book-glow {
              0%,100%{filter:drop-shadow(0 0 6px rgba(0,81,186,.5))}
              50%    {filter:drop-shadow(0 0 18px rgba(0,81,186,.9)) drop-shadow(0 0 40px rgba(255,218,26,.2))}
            }
            .bi-p1 { animation:bi-pulse  3s ease-in-out infinite }
            .bi-p2 { animation:bi-pulse2 3s ease-in-out infinite 1.5s }
            .bi-orbit { transform-origin:240px 268px; animation:bi-orbit-spin 22s linear infinite }
            .bi-c1 { animation:bi-card-float 3s ease-in-out infinite,     bi-card-glow 3s ease-in-out infinite }
            .bi-c2 { animation:bi-card-float 3s ease-in-out infinite .75s, bi-card-glow 3s ease-in-out infinite .75s }
            .bi-c3 { animation:bi-card-float 3s ease-in-out infinite 1.5s, bi-card-glow 3s ease-in-out infinite 1.5s }
            .bi-c4 { animation:bi-card-float 3s ease-in-out infinite 2.25s,bi-card-glow 3s ease-in-out infinite 2.25s }
            .bi-sp1 { animation:bi-spark 2.4s ease-out infinite }
            .bi-sp2 { animation:bi-spark 2.4s ease-out infinite .6s }
            .bi-sp3 { animation:bi-spark 2.4s ease-out infinite 1.2s }
            .bi-sp4 { animation:bi-spark 2.4s ease-out infinite 1.8s }
            .bi-l1  { transform-origin:172px center; animation:bi-line-scan 2.4s ease-in-out infinite }
            .bi-l2  { transform-origin:172px center; animation:bi-line-scan 2.4s ease-in-out infinite .3s }
            .bi-l3  { transform-origin:172px center; animation:bi-line-scan 2.4s ease-in-out infinite .6s }
            .bi-l4  { transform-origin:172px center; animation:bi-line-scan 2.4s ease-in-out infinite .9s }
            .bi-l5  { transform-origin:172px center; animation:bi-line-scan 2.4s ease-in-out infinite 1.2s }
            .bi-r1  { transform-origin:308px center; animation:bi-line-scan 2.4s ease-in-out infinite .15s }
            .bi-r2  { transform-origin:308px center; animation:bi-line-scan 2.4s ease-in-out infinite .45s }
            .bi-r3  { transform-origin:308px center; animation:bi-line-scan 2.4s ease-in-out infinite .75s }
            .bi-r4  { transform-origin:308px center; animation:bi-line-scan 2.4s ease-in-out infinite 1.05s }
            .bi-r5  { transform-origin:308px center; animation:bi-line-scan 2.4s ease-in-out infinite 1.35s }
            .bi-bk  { animation:bi-book-glow 3s ease-in-out infinite }
            .bi-d1  { stroke-dasharray:12 8; animation:bi-dash 1.4s linear infinite }
            .bi-d2  { stroke-dasharray:12 8; animation:bi-dash 1.4s linear infinite .35s }
            .bi-d3  { stroke-dasharray:12 8; animation:bi-dash 1.4s linear infinite .7s }
            .bi-d4  { stroke-dasharray:12 8; animation:bi-dash 1.4s linear infinite 1.05s }
          `}</style>
        </defs>

        {/* Ambient glow */}
        <ellipse cx="240" cy="268" rx="180" ry="150" fill="url(#bi-amb)"/>
        <circle cx="240" cy="268" r="90" fill="#FFDA1A" opacity="0.05" filter="url(#bi-soft)"/>

        {/* Pulse rings behind book */}
        <circle className="bi-p1" cx="240" cy="268" r="110" fill="none" stroke="#FFDA1A" strokeWidth="1.5" opacity=".15"/>
        <circle className="bi-p2" cx="240" cy="268" r="145" fill="none" stroke="#FFDA1A" strokeWidth="1"   opacity=".08"/>

        {/* Orbit ring for cards */}
        <circle className="bi-orbit" cx="240" cy="268" r="152" fill="none" stroke="rgba(255,218,26,0.1)" strokeWidth="1" strokeDasharray="3 7"/>

        {/* Dashed spokes to cards */}
        <line x1="240" y1="156" x2="240" y2="94"  stroke="rgba(255,218,26,0.3)" strokeWidth="1.5" className="bi-d1"/>
        <line x1="352" y1="222" x2="396" y2="188" stroke="rgba(255,218,26,0.3)" strokeWidth="1.5" className="bi-d2"/>
        <line x1="352" y1="318" x2="396" y2="352" stroke="rgba(255,218,26,0.3)" strokeWidth="1.5" className="bi-d3"/>
        <line x1="128" y1="268" x2="80"  y2="268" stroke="rgba(255,218,26,0.3)" strokeWidth="1.5" className="bi-d4"/>

        {/* ── BOOK ── */}
        <g className="bi-bk">
          {/* Book shadow */}
          <ellipse cx="240" cy="398" rx="100" ry="10" fill="rgba(0,0,0,0.2)"/>

          {/* Book spine */}
          <rect x="232" y="158" width="16" height="230" rx="4" fill="#001a50" stroke="#FFDA1A" strokeWidth="1.5"/>

          {/* Left page */}
          <path d="M232,168 Q180,165 138,175 L138,378 Q180,370 232,373 Z"
            fill="url(#bi-page-l)" stroke="#c8d8f0" strokeWidth="1" filter="url(#bi-page-glow)"/>

          {/* Right page */}
          <path d="M248,168 Q300,165 342,175 L342,378 Q300,370 248,373 Z"
            fill="url(#bi-page-r)" stroke="#c8d8f0" strokeWidth="1" filter="url(#bi-page-glow)"/>

          {/* Left page — animated text lines */}
          <rect x="152" y="196" width="68" height="6" rx="3" fill="#0051BA" opacity="0.18" className="bi-l1"/>
          <rect x="152" y="212" width="56" height="5" rx="2.5" fill="#0051BA" opacity="0.14" className="bi-l2"/>
          <rect x="152" y="226" width="64" height="5" rx="2.5" fill="#0051BA" opacity="0.14" className="bi-l3"/>
          <rect x="152" y="240" width="50" height="5" rx="2.5" fill="#0051BA" opacity="0.12" className="bi-l4"/>
          <rect x="152" y="258" width="68" height="5" rx="2.5" fill="#0051BA" opacity="0.14" className="bi-l5"/>
          {/* left page — static lower lines */}
          {[274,286,298,310,322,334,348,360].map((y, i) => (
            <rect key={i} x="152" y={y} width={[60,52,66,44,60,56,50,40][i]} height="4" rx="2" fill="#0051BA" opacity="0.1"/>
          ))}

          {/* Right page — animated text lines */}
          <rect x="260" y="196" width="68" height="6" rx="3" fill="#0051BA" opacity="0.18" className="bi-r1"/>
          <rect x="260" y="212" width="60" height="5" rx="2.5" fill="#0051BA" opacity="0.14" className="bi-r2"/>
          <rect x="260" y="226" width="56" height="5" rx="2.5" fill="#0051BA" opacity="0.14" className="bi-r3"/>
          <rect x="260" y="240" width="64" height="5" rx="2.5" fill="#0051BA" opacity="0.12" className="bi-r4"/>
          <rect x="260" y="258" width="54" height="5" rx="2.5" fill="#0051BA" opacity="0.14" className="bi-r5"/>
          {/* right page — static lower lines */}
          {[274,286,298,310,322,334,348,360].map((y, i) => (
            <rect key={i} x="260" y={y} width={[56,64,48,60,52,44,58,40][i]} height="4" rx="2" fill="#0051BA" opacity="0.1"/>
          ))}

          {/* Book cover bottom */}
          <path d="M136,375 Q180,385 232,382 L232,395 Q180,398 136,388 Z" fill="#002060" stroke="#FFDA1A" strokeWidth="1"/>
          <path d="M248,382 Q300,385 344,375 L344,388 Q300,398 248,395 Z" fill="#002060" stroke="#FFDA1A" strokeWidth="1"/>
          <rect x="232" y="380" width="16" height="18" rx="3" fill="#001540" stroke="#FFDA1A" strokeWidth="1.5"/>

          {/* Yellow bookmark ribbon */}
          <polygon points="330,158 340,158 340,200 335,194 330,200" fill="#FFDA1A"/>
        </g>

        {/* Rising sparks from book */}
        <circle className="bi-sp1" cx="218" cy="200" r="3.5" fill="#FFDA1A" opacity="0.9"/>
        <circle className="bi-sp2" cx="262" cy="195" r="2.5" fill="#fff"    opacity="0.7"/>
        <circle className="bi-sp3" cx="234" cy="205" r="3"   fill="#FFDA1A" opacity="0.8"/>
        <circle className="bi-sp4" cx="255" cy="198" r="2"   fill="#fff"    opacity="0.6"/>

        {/* ── 4 floating insight cards ── */}

        {/* TOP */}
        <g className="bi-c1" style={{ transformOrigin: '240px 70px' }}>
          <rect x="192" y="46" width="96" height="58" rx="14" fill="url(#bi-node)" stroke="#FFDA1A" strokeWidth="2"/>
          <text x="240" y="66" textAnchor="middle" fontSize="20" style={{ fontFamily: 'system-ui,sans-serif' }}>💡</text>
          <text x="240" y="84" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff" letterSpacing=".8" style={{ fontFamily: 'system-ui,sans-serif' }}>INSIGHTS</text>
          <text x="240" y="96" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,.6)" style={{ fontFamily: 'system-ui,sans-serif' }}>No fluff</text>
        </g>

        {/* RIGHT-TOP */}
        <g className="bi-c2" style={{ transformOrigin: '416px 168px' }}>
          <rect x="368" y="144" width="96" height="58" rx="14" fill="url(#bi-node)" stroke="#FFDA1A" strokeWidth="2"/>
          <text x="416" y="164" textAnchor="middle" fontSize="20" style={{ fontFamily: 'system-ui,sans-serif' }}>📊</text>
          <text x="416" y="182" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff" letterSpacing=".8" style={{ fontFamily: 'system-ui,sans-serif' }}>REPORTING</text>
          <text x="416" y="194" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,.6)" style={{ fontFamily: 'system-ui,sans-serif' }}>Live data</text>
        </g>

        {/* RIGHT-BOTTOM */}
        <g className="bi-c3" style={{ transformOrigin: '416px 372px' }}>
          <rect x="368" y="348" width="96" height="58" rx="14" fill="url(#bi-node)" stroke="#FFDA1A" strokeWidth="2"/>
          <text x="416" y="368" textAnchor="middle" fontSize="20" style={{ fontFamily: 'system-ui,sans-serif' }}>⚡</text>
          <text x="416" y="386" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff" letterSpacing=".8" style={{ fontFamily: 'system-ui,sans-serif' }}>AUTOMATE</text>
          <text x="416" y="398" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,.6)" style={{ fontFamily: 'system-ui,sans-serif' }}>Save hours</text>
        </g>

        {/* LEFT */}
        <g className="bi-c4" style={{ transformOrigin: '32px 268px' }}>
          <rect x="-16" y="244" width="96" height="58" rx="14" fill="url(#bi-node)" stroke="#FFDA1A" strokeWidth="2"/>
          <text x="32" y="264" textAnchor="middle" fontSize="20" style={{ fontFamily: 'system-ui,sans-serif' }}>🔗</text>
          <text x="32" y="282" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff" letterSpacing=".8" style={{ fontFamily: 'system-ui,sans-serif' }}>INTEGRATE</text>
          <text x="32" y="294" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,.6)" style={{ fontFamily: 'system-ui,sans-serif' }}>Stay in sync</text>
        </g>

      </svg>
    </div>
  )
}
