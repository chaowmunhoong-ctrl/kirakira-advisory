import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jeffrey Chaow - Kirakira Advisory',
  description: 'Digital name card of Jeffrey Chaow, Senior Operation Analyst at Kirakira Advisory.',
}

const NAVY = '#12295C'
const SWOOSH = '#1F3F6E'
const TEAL = '#1B8A85'
const YELLOW = '#F5C400'
const MUTED = '#5B6B85'
const PALE = '#EDF5FB'

const iconCircle = { width: 46, height: 46, borderRadius: '50%', backgroundColor: TEAL, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 } as const

const Chevron = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={TEAL} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
)

export default function JeffreyCard() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100, overflowY: 'auto', backgroundColor: '#DCEAF6', fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif' }}>
      <style>{`
        .kk-row { display: flex; align-items: center; gap: 14px; padding: 12px 16px 12px 14px; border: 1.5px solid #DDE8F2; border-radius: 16px; background: #fff; text-decoration: none; transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
        .kk-row:hover { transform: translateY(-3px); border-color: ${TEAL}; box-shadow: 0 12px 24px rgba(27,138,133,0.16); }
        .kk-cta { display: flex; align-items: center; gap: 14px; padding: 16px 22px; border-radius: 999px; background: ${TEAL}; color: #fff; font-weight: 800; font-size: 19px; text-decoration: none; transition: transform .25s ease, box-shadow .25s ease; }
        .kk-cta:hover { transform: translateY(-3px); box-shadow: 0 14px 28px rgba(27,138,133,0.35); }
      `}</style>

      <div style={{ padding: '24px 12px' }}>
        <div className="fade-up" style={{ position: 'relative', maxWidth: 420, margin: '0 auto', overflow: 'hidden', borderRadius: 26, background: `linear-gradient(180deg, #FFFFFF 0%, ${PALE} 100%)`, boxShadow: '0 24px 60px rgba(18,41,92,0.22)', paddingBottom: 70 }}>

          {/* Glass building, top right */}
          <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: 158 }}>
            <svg viewBox="0 0 200 150" preserveAspectRatio="xMaxYMin slice" width="100%" height="100%" aria-hidden="true">
              <defs>
                <linearGradient id="gl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#B7D8F2" /><stop offset="1" stopColor="#4B86C6" /></linearGradient>
                <linearGradient id="gr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#5B95D0" /><stop offset="1" stopColor="#1F4E8C" /></linearGradient>
              </defs>
              <polygon points="30,150 30,44 110,12 110,150" fill="url(#gl)" />
              <polygon points="110,150 110,12 190,47 190,150" fill="url(#gr)" />
              <polygon points="190,150 190,47 200,52 200,150" fill="#173B6D" />
              <g stroke="rgba(255,255,255,0.5)" strokeWidth="1">
                {Array.from({ length: 6 }).map((_, i) => { const x = 30 + i * 16; return <line key={'a' + i} x1={x} y1={44 - (x - 30) * 0.4} x2={x} y2={150} /> })}
                {Array.from({ length: 7 }).map((_, k) => <line key={'b' + k} x1={30} y1={44 + k * 17} x2={110} y2={12 + k * 17} />)}
                {Array.from({ length: 6 }).map((_, i) => { const x = 110 + i * 16; return <line key={'c' + i} x1={x} y1={12 + (x - 110) * 0.4375} x2={x} y2={150} /> })}
                {Array.from({ length: 7 }).map((_, k) => <line key={'d' + k} x1={110} y1={12 + k * 17} x2={190} y2={47 + k * 17} />)}
              </g>
            </svg>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #FFFFFF 0%, rgba(255,255,255,0) 60%)' }} />
            <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(0deg, ${PALE} 0%, rgba(237,245,251,0) 30%)` }} />
          </div>

          {/* Brand block */}
          <div style={{ position: 'relative', padding: '32px 26px 0' }}>
            <p style={{ fontSize: 52, fontWeight: 800, letterSpacing: '-2px', lineHeight: 1, color: NAVY }}>
              K<span style={{ position: 'relative' }}>{'ı'}<span style={{ position: 'absolute', top: '0.17em', left: '50%', transform: 'translateX(-50%)', width: '0.19em', height: '0.19em', borderRadius: '50%', backgroundColor: YELLOW }} /></span>ra<span style={{ color: YELLOW }}>k<span style={{ position: 'relative' }}>{'ı'}<span style={{ position: 'absolute', top: '0.17em', left: '50%', transform: 'translateX(-50%)', width: '0.19em', height: '0.19em', borderRadius: '50%', backgroundColor: NAVY }} /></span>ra</span>
            </p>
            <p style={{ fontSize: 16, fontWeight: 500, letterSpacing: '0.42em', lineHeight: 1.2, color: NAVY, marginTop: 4 }}>ADVISORY</p>
            <p style={{ fontSize: 11.5, letterSpacing: '0.08em', lineHeight: 1.2, color: MUTED, marginTop: 3 }}>Reg. No. 202603228882</p>
            <p style={{ fontSize: 11, letterSpacing: '0.1em', lineHeight: 1.2, color: NAVY, marginTop: 8 }}>Smarter Systems &nbsp;|&nbsp; Stronger Business</p>
            <div style={{ width: 34, height: 3, borderRadius: 3, backgroundColor: TEAL, marginTop: 8 }} />
          </div>

          {/* Services pill */}
          <div style={{ position: 'relative', margin: '26px 10px 0', padding: '8px 12px', borderRadius: 999, backgroundColor: '#E6F4F3', display: 'grid', gridTemplateColumns: '1fr 1.15fr 1fr', alignItems: 'center' }}>
            {[
              { label: 'Automation', d: 'M13 2 4 14h7l-1 8 9-12h-7z' },
              { label: 'Social Media Management', d: 'M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1zm13-3a5 5 0 0 1 0 8' },
              { label: 'Website Design', d: 'globe' },
            ].map((s, i) => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0 6px', borderLeft: i ? '1px solid #C9DEDD' : 'none' }}>
                <span style={{ ...iconCircle, width: 34, height: 34 }}>
                  {s.d === 'globe' ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={s.d} /></svg>
                  )}
                </span>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: NAVY, lineHeight: 1.25 }}>{s.label}</span>
              </div>
            ))}
          </div>

          {/* Swoosh zone */}
          <div style={{ position: 'relative', height: 70 }}>
            <svg viewBox="0 0 420 70" preserveAspectRatio="none" width="100%" height="100%" style={{ position: 'absolute', inset: 0 }} aria-hidden="true">
              <path d="M0 8 C80 14 150 34 200 70 L0 70 Z" fill={SWOOSH} />
              <path d="M420 36 C380 60 330 68 270 68 L420 68 Z" fill={TEAL} />
              <path d="M420 44 C380 62 330 70 270 70" fill="none" stroke={YELLOW} strokeWidth="3" />
            </svg>
          </div>

          {/* Main white card */}
          <div style={{ position: 'relative', margin: '0 10px', backgroundColor: '#fff', borderRadius: 26, padding: '0 16px 18px', boxShadow: '0 6px 24px rgba(18,41,92,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: -52 }}>
              <div style={{ width: 60, height: 2, backgroundColor: TEAL, marginTop: 52 }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/card/jeffrey.png"
                alt="Jeffrey Chaow"
                style={{ width: 112, height: 112, borderRadius: '50%', objectFit: 'cover', objectPosition: '48% 32%', border: `4px solid ${TEAL}`, boxShadow: '0 0 0 5px #fff', backgroundColor: '#fff', display: 'block' }}
              />
              <div style={{ width: 60, height: 2, backgroundColor: TEAL, marginTop: 52 }} />
            </div>

            <div style={{ textAlign: 'center', marginTop: 16 }}>
              <h1 style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.5px', color: NAVY }}>Jeffrey Chaow</h1>
              <p style={{ fontSize: 13.5, fontWeight: 800, letterSpacing: '0.2em', color: TEAL, marginTop: 10 }}>SENIOR OPERATION ANALYST</p>
              <div style={{ width: 54, height: 4, borderRadius: 4, backgroundColor: YELLOW, margin: '14px auto 0' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 20 }}>
              <a href="tel:+60173384916" className="kk-row">
                <span style={iconCircle}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" /></svg>
                </span>
                <span style={{ width: 1, alignSelf: 'stretch', backgroundColor: '#DDE8F2' }} />
                <span style={{ flex: 1, minWidth: 0 }}>
                  <span style={{ display: 'block', fontSize: 18, fontWeight: 700, color: NAVY }}>017-338 4916</span>
                  <span style={{ display: 'block', fontSize: 13, color: MUTED }}>(Mobile)</span>
                </span>
                <Chevron />
              </a>
              <a href="https://kirakira-advisory.vercel.app" target="_blank" rel="noopener noreferrer" className="kk-row">
                <span style={iconCircle}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>
                </span>
                <span style={{ width: 1, alignSelf: 'stretch', backgroundColor: '#DDE8F2' }} />
                <span style={{ flex: 1, minWidth: 0 }}>
                  <span style={{ display: 'block', fontSize: 18, fontWeight: 700, color: NAVY }}>Kirakira Website</span>
                  <span style={{ display: 'block', fontSize: 12.5, color: MUTED, overflowWrap: 'anywhere' }}>https://kirakira-advisory.vercel.app</span>
                </span>
                <Chevron />
              </a>
              <a href="https://wa.me/60173384916" target="_blank" rel="noopener noreferrer" className="kk-cta">
                <svg viewBox="0 0 32 32" width="34" height="34" fill="white" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                  <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.668 4.797 1.832 6.793L2 30l7.418-1.805A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.556 11.556 0 0 1-5.91-1.617l-.424-.252-4.402 1.07 1.1-4.285-.276-.44A11.556 11.556 0 0 1 4.4 16C4.4 9.59 9.59 4.4 16 4.4S27.6 9.59 27.6 16 22.41 27.6 16 27.6zm6.344-8.676c-.348-.174-2.06-1.016-2.38-1.132-.32-.116-.553-.174-.786.174-.232.347-.9 1.132-1.103 1.365-.203.232-.405.26-.754.086-.348-.174-1.47-.542-2.8-1.726-1.034-.922-1.732-2.06-1.936-2.408-.203-.348-.022-.536.153-.71.157-.156.348-.405.522-.608.174-.202.232-.347.348-.579.116-.232.058-.434-.029-.608-.087-.174-.786-1.896-1.077-2.597-.283-.682-.57-.59-.786-.6l-.67-.012c-.232 0-.608.087-.927.434-.319.348-1.218 1.19-1.218 2.9s1.247 3.363 1.42 3.595c.174.232 2.454 3.747 5.945 5.254.832.36 1.48.574 1.985.734.834.267 1.594.23 2.194.14.67-.1 2.06-.842 2.35-1.656.29-.813.29-1.51.203-1.656-.086-.145-.319-.232-.667-.406z" />
                </svg>
                <span style={{ width: 1, height: 30, backgroundColor: 'rgba(255,255,255,0.45)' }} />
                <span style={{ flex: 1 }}>Chat on WhatsApp</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16M14 6l6 6-6 6" /></svg>
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 22 }}>
              <span style={{ flex: 1, height: 1, backgroundColor: TEAL }} />
              <span style={{ fontSize: 11, letterSpacing: '0.26em', color: NAVY }}>YOUR DIGITAL GROWTH PARTNER</span>
              <span style={{ flex: 1, height: 1, backgroundColor: TEAL }} />
            </div>
          </div>

          {/* Bottom swoosh */}
          <svg viewBox="0 0 420 70" preserveAspectRatio="none" width="100%" height="70" style={{ position: 'absolute', left: 0, bottom: 0 }} aria-hidden="true">
            <path d="M0 22 C110 60 260 70 420 30 L420 70 L0 70 Z" fill={SWOOSH} />
            <path d="M120 70 C260 66 350 50 420 20 L420 70 Z" fill={TEAL} />
            <path d="M150 70 C270 64 360 46 420 16" fill="none" stroke={YELLOW} strokeWidth="3" />
          </svg>
        </div>
      </div>
    </div>
  )
}
