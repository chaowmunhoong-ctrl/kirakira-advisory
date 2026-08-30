export default function AutomationIcon() {
  return (
    <div className="flex items-center justify-center w-full">
      <svg
        viewBox="0 0 420 420"
        width="100%"
        style={{ maxWidth: 400 }}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Flowing dot along path */}
          <style>{`
            @keyframes spinGear {
              from { transform: rotate(0deg); }
              to   { transform: rotate(360deg); }
            }
            @keyframes spinGearR {
              from { transform: rotate(0deg); }
              to   { transform: rotate(-360deg); }
            }
            @keyframes pulse {
              0%, 100% { opacity: 0.15; r: 54; }
              50%       { opacity: 0.35; r: 66; }
            }
            @keyframes pulse2 {
              0%, 100% { opacity: 0.08; r: 76; }
              50%       { opacity: 0.22; r: 90; }
            }
            @keyframes dotFlow1 {
              0%   { offset-distance: 0%;   opacity: 0; }
              10%  { opacity: 1; }
              90%  { opacity: 1; }
              100% { offset-distance: 100%; opacity: 0; }
            }
            @keyframes dotFlow2 {
              0%   { offset-distance: 0%;   opacity: 0; }
              10%  { opacity: 1; }
              90%  { opacity: 1; }
              100% { offset-distance: 100%; opacity: 0; }
            }
            @keyframes dotFlow3 {
              0%   { offset-distance: 0%;   opacity: 0; }
              10%  { opacity: 1; }
              90%  { opacity: 1; }
              100% { offset-distance: 100%; opacity: 0; }
            }
            @keyframes dotFlow4 {
              0%   { offset-distance: 0%;   opacity: 0; }
              10%  { opacity: 1; }
              90%  { opacity: 1; }
              100% { offset-distance: 100%; opacity: 0; }
            }
            @keyframes iconPop {
              0%, 100% { transform: scale(1); }
              50%       { transform: scale(1.08); }
            }
            @keyframes labelFade {
              0%, 100% { opacity: 0.7; }
              50%       { opacity: 1; }
            }

            .gear-main { transform-origin: 210px 210px; animation: spinGear 8s linear infinite; }
            .gear-small { transform-origin: 210px 210px; animation: spinGearR 5s linear infinite; }

            .pulse-ring-1 { transform-origin: 210px 210px; animation: pulse 3s ease-in-out infinite; }
            .pulse-ring-2 { transform-origin: 210px 210px; animation: pulse2 3s ease-in-out infinite 0.8s; }

            .dot1 { offset-path: path('M210,210 L100,110'); animation: dotFlow1 2s linear infinite; }
            .dot2 { offset-path: path('M210,210 L320,110'); animation: dotFlow2 2s linear infinite 0.5s; }
            .dot3 { offset-path: path('M210,210 L100,310'); animation: dotFlow3 2s linear infinite 1s; }
            .dot4 { offset-path: path('M210,210 L320,310'); animation: dotFlow4 2s linear infinite 1.5s; }

            .icon-tl { transform-origin: 100px 110px; animation: iconPop 4s ease-in-out infinite; }
            .icon-tr { transform-origin: 320px 110px; animation: iconPop 4s ease-in-out infinite 1s; }
            .icon-bl { transform-origin: 100px 310px; animation: iconPop 4s ease-in-out infinite 2s; }
            .icon-br { transform-origin: 320px 310px; animation: iconPop 4s ease-in-out infinite 3s; }

            .lbl { animation: labelFade 4s ease-in-out infinite; }
          `}</style>
        </defs>

        {/* Pulse rings behind gear */}
        <circle className="pulse-ring-1" cx="210" cy="210" r="54" fill="none" stroke="#FFDA1A" strokeWidth="2" />
        <circle className="pulse-ring-2" cx="210" cy="210" r="76" fill="none" stroke="#FFDA1A" strokeWidth="1" />

        {/* Connection lines */}
        <line x1="210" y1="210" x2="100" y2="110" stroke="rgba(255,218,26,0.35)" strokeWidth="1.5" strokeDasharray="6 4" />
        <line x1="210" y1="210" x2="320" y2="110" stroke="rgba(255,218,26,0.35)" strokeWidth="1.5" strokeDasharray="6 4" />
        <line x1="210" y1="210" x2="100" y2="310" stroke="rgba(255,218,26,0.35)" strokeWidth="1.5" strokeDasharray="6 4" />
        <line x1="210" y1="210" x2="320" y2="310" stroke="rgba(255,218,26,0.35)" strokeWidth="1.5" strokeDasharray="6 4" />

        {/* Flowing dots */}
        <circle className="dot1" r="5" fill="#FFDA1A" />
        <circle className="dot2" r="5" fill="#FFDA1A" />
        <circle className="dot3" r="5" fill="#FFDA1A" />
        <circle className="dot4" r="5" fill="#FFDA1A" />

        {/* ── Main gear ── */}
        <g className="gear-main">
          <path
            d="M210,170 a40,40 0 1,1 -0.01,0 Z
               M228,172 l6,-14 l-8,-4 l-6,14
               M248,192 l14,-6 l-4,-8 l-14,6
               M248,228 l14,6 l4,-8 l-14,-6
               M228,248 l6,14 l8,-4 l-6,-14
               M192,248 l-6,14 l8,4 l6,-14
               M172,228 l-14,6 l4,8 l14,-6
               M172,192 l-14,-6 l-4,8 l14,6
               M192,172 l-6,-14 l-8,4 l6,14"
            fill="none"
          />
          {/* Gear teeth as rect blocks */}
          {[0,45,90,135,180,225,270,315].map((angle, i) => (
            <rect
              key={i}
              x="204" y="162"
              width="12" height="16"
              rx="3"
              fill="#FFDA1A"
              style={{ transformOrigin: '210px 210px', transform: `rotate(${angle}deg)` }}
            />
          ))}
          <circle cx="210" cy="210" r="38" fill="#0051BA" stroke="#FFDA1A" strokeWidth="3" />
          <circle cx="210" cy="210" r="28" fill="rgba(255,218,26,0.12)" stroke="#FFDA1A" strokeWidth="1.5" />
          <circle cx="210" cy="210" r="10" fill="#FFDA1A" />
        </g>

        {/* "AUTO" label in center */}
        <text x="210" y="214" textAnchor="middle" fontSize="9" fontWeight="800" fill="#FFDA1A" letterSpacing="1" style={{ fontFamily: 'system-ui, sans-serif' }}>AUTO</text>

        {/* ── Corner icons ── */}

        {/* TL — Spreadsheet */}
        <g className="icon-tl">
          <rect x="68" y="78" width="64" height="64" rx="14" fill="#0051BA" stroke="#FFDA1A" strokeWidth="2" />
          <rect x="80" y="92" width="40" height="6" rx="2" fill="#FFDA1A" />
          <rect x="80" y="103" width="30" height="4" rx="2" fill="rgba(255,218,26,0.5)" />
          <rect x="80" y="112" width="35" height="4" rx="2" fill="rgba(255,218,26,0.5)" />
          <rect x="80" y="121" width="25" height="4" rx="2" fill="rgba(255,218,26,0.3)" />
          <text x="100" y="138" textAnchor="middle" fontSize="9" fill="#FFDA1A" fontWeight="700" className="lbl" style={{ fontFamily: 'system-ui, sans-serif' }}>EXCEL</text>
        </g>

        {/* TR — Document */}
        <g className="icon-tr">
          <rect x="288" y="78" width="64" height="64" rx="14" fill="#0051BA" stroke="#FFDA1A" strokeWidth="2" />
          <rect x="300" y="92" width="40" height="5" rx="2" fill="#FFDA1A" />
          <rect x="300" y="102" width="28" height="4" rx="2" fill="rgba(255,218,26,0.5)" />
          <rect x="300" y="111" width="35" height="4" rx="2" fill="rgba(255,218,26,0.5)" />
          <rect x="300" y="120" width="20" height="4" rx="2" fill="rgba(255,218,26,0.3)" />
          <text x="320" y="138" textAnchor="middle" fontSize="9" fill="#FFDA1A" fontWeight="700" className="lbl" style={{ fontFamily: 'system-ui, sans-serif' }}>REPORT</text>
        </g>

        {/* BL — Database */}
        <g className="icon-bl">
          <rect x="68" y="278" width="64" height="64" rx="14" fill="#0051BA" stroke="#FFDA1A" strokeWidth="2" />
          <ellipse cx="100" cy="294" rx="18" ry="7" fill="#FFDA1A" />
          <rect x="82" y="294" width="36" height="14" fill="#0051BA" />
          <ellipse cx="100" cy="308" rx="18" ry="7" fill="none" stroke="#FFDA1A" strokeWidth="2" />
          <rect x="82" y="308" width="36" height="10" fill="#0051BA" />
          <ellipse cx="100" cy="318" rx="18" ry="7" fill="none" stroke="#FFDA1A" strokeWidth="2" />
          <text x="100" y="338" textAnchor="middle" fontSize="9" fill="#FFDA1A" fontWeight="700" className="lbl" style={{ fontFamily: 'system-ui, sans-serif' }}>SQL</text>
        </g>

        {/* BR — Cloud */}
        <g className="icon-br">
          <rect x="288" y="278" width="64" height="64" rx="14" fill="#0051BA" stroke="#FFDA1A" strokeWidth="2" />
          <path d="M304,316 a12,12 0 0,1 6,-22 a10,10 0 0,1 20,0 a10,10 0 0,1 2,20 Z" fill="#FFDA1A" />
          <line x1="308" y1="322" x2="308" y2="330" stroke="#FFDA1A" strokeWidth="2" strokeLinecap="round" />
          <line x1="320" y1="320" x2="320" y2="330" stroke="#FFDA1A" strokeWidth="2" strokeLinecap="round" />
          <line x1="332" y1="322" x2="332" y2="330" stroke="#FFDA1A" strokeWidth="2" strokeLinecap="round" />
          <text x="320" y="338" textAnchor="middle" fontSize="9" fill="#FFDA1A" fontWeight="700" className="lbl" style={{ fontFamily: 'system-ui, sans-serif' }}>CLOUD</text>
        </g>

      </svg>
    </div>
  )
}
