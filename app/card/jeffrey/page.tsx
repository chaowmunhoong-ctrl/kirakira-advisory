import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jeffrey Chaow - Kirakira Advisory',
  description: 'Digital name card of Jeffrey Chaow, Senior Operation Analyst at Kirakira Advisory.',
}

const BLUE = '#0051BA'
const YELLOW = '#FFDA1A'
const DOTS = 'radial-gradient(circle, rgba(255,218,26,0.10) 1px, transparent 1px)'

const iconStyle = { width: 36, height: 36, borderRadius: '50%', backgroundColor: BLUE, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 } as const

export default function JeffreyCard() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100, overflowY: 'auto', backgroundColor: BLUE, fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif' }}>
      <style>{`
        .kk-row { display: flex; align-items: center; gap: 14px; padding: 11px 14px; border: 2px solid #E5E7EB; border-radius: 12px; background: #fff; color: #333; font-size: 14.5px; font-weight: 600; text-decoration: none; transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
        .kk-row:hover { transform: translateY(-3px); border-color: ${BLUE}; box-shadow: 0 12px 24px rgba(0,81,186,0.14); }
        .kk-cta { display: flex; align-items: center; justify-content: center; gap: 10px; margin-top: 8px; padding: 16px; border-radius: 10px; background: ${YELLOW}; color: ${BLUE}; font-weight: 800; font-size: 16px; text-decoration: none; transition: transform .25s ease, box-shadow .25s ease; }
        .kk-cta:hover { transform: translateY(-3px); box-shadow: 0 12px 24px rgba(255,218,26,0.45); }
      `}</style>

      <div style={{ position: 'relative', minHeight: '100%', overflow: 'hidden', padding: '32px 16px', backgroundImage: DOTS, backgroundSize: '32px 32px' }}>
        <div className="shape-a" style={{ position: 'absolute', width: 220, height: 220, borderRadius: '50%', backgroundColor: YELLOW, opacity: 0.1, top: -60, right: '8%' }} />
        <div className="shape-b" style={{ position: 'absolute', width: 140, height: 140, borderRadius: '50%', backgroundColor: '#fff', opacity: 0.1, bottom: '8%', left: '6%' }} />
        <div className="shape-c" style={{ position: 'absolute', width: 80, height: 80, borderRadius: 16, backgroundColor: YELLOW, opacity: 0.1, bottom: '22%', right: '14%', transform: 'rotate(20deg)' }} />

        <div className="fade-up" style={{ position: 'relative', maxWidth: 380, margin: '0 auto', backgroundColor: '#fff', borderRadius: 22, overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.28)' }}>

          {/* Header, styled like the site navbar and hero */}
          <div style={{ backgroundColor: BLUE, backgroundImage: DOTS, backgroundSize: '32px 32px', padding: '30px 20px 74px', textAlign: 'center' }}>
            <p style={{ fontSize: 34, fontWeight: 800, letterSpacing: '-0.5px', lineHeight: 1, color: '#fff' }}>
              Kira<span style={{ color: YELLOW }}>kira</span>
            </p>
            <p style={{ fontSize: 14, fontWeight: 800, letterSpacing: '0.32em', color: 'rgba(255,255,255,0.75)', marginTop: 8, paddingLeft: '0.32em' }}>ADVISORY</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginTop: 18 }}>
              {[
                { icon: '⚡', label: 'Automation' },
                { icon: '📣', label: 'Social Media Management' },
                { icon: '🌐', label: 'Website Design' },
              ].map(s => (
                <div key={s.label} style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 12, padding: '10px 6px 9px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                  <span style={{ fontSize: 20, lineHeight: 1 }}>{s.icon}</span>
                  <span style={{ fontSize: 10.5, fontWeight: 700, color: '#fff', lineHeight: 1.25, letterSpacing: '0.02em' }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ height: 6, backgroundColor: YELLOW }} />

          {/* Profile */}
          <div style={{ padding: '0 20px 20px', textAlign: 'center' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/card/jeffrey.png"
              alt="Jeffrey Chaow"
              style={{ width: 112, height: 112, borderRadius: '50%', objectFit: 'cover', objectPosition: '48% 32%', border: `4px solid ${YELLOW}`, boxShadow: '0 8px 20px rgba(0,0,0,0.18)', display: 'block', margin: '-56px auto 16px', position: 'relative', backgroundColor: '#fff' }}
            />
            <h1 style={{ fontSize: 26, fontWeight: 800, color: '#111' }}>Jeffrey Chaow</h1>
            <p style={{ display: 'inline-block', marginTop: 12, padding: '6px 16px', borderRadius: 999, backgroundColor: BLUE, color: YELLOW, fontSize: 11.5, fontWeight: 800, letterSpacing: '0.12em' }}>
              SENIOR OPERATION ANALYST
            </p>
          </div>

          {/* Contact */}
          <div style={{ padding: '0 20px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href="tel:+60173384916" className="kk-row">
              <span style={iconStyle}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" /></svg>
              </span>
              017-338 4916 (Mobile)
            </a>
            <a href="https://kirakira-advisory.vercel.app" target="_blank" rel="noopener noreferrer" className="kk-row">
              <span style={iconStyle}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>
              </span>
              Kirakira Website
            </a>
            <a
              href="https://wa.me/60173384916"
              target="_blank"
              rel="noopener noreferrer"
              className="kk-cta"
            >
              <svg viewBox="0 0 32 32" width="22" height="22" fill={BLUE} xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.668 4.797 1.832 6.793L2 30l7.418-1.805A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.556 11.556 0 0 1-5.91-1.617l-.424-.252-4.402 1.07 1.1-4.285-.276-.44A11.556 11.556 0 0 1 4.4 16C4.4 9.59 9.59 4.4 16 4.4S27.6 9.59 27.6 16 22.41 27.6 16 27.6zm6.344-8.676c-.348-.174-2.06-1.016-2.38-1.132-.32-.116-.553-.174-.786.174-.232.347-.9 1.132-1.103 1.365-.203.232-.405.26-.754.086-.348-.174-1.47-.542-2.8-1.726-1.034-.922-1.732-2.06-1.936-2.408-.203-.348-.022-.536.153-.71.157-.156.348-.405.522-.608.174-.202.232-.347.348-.579.116-.232.058-.434-.029-.608-.087-.174-.786-1.896-1.077-2.597-.283-.682-.57-.59-.786-.6l-.67-.012c-.232 0-.608.087-.927.434-.319.348-1.218 1.19-1.218 2.9s1.247 3.363 1.42 3.595c.174.232 2.454 3.747 5.945 5.254.832.36 1.48.574 1.985.734.834.267 1.594.23 2.194.14.67-.1 2.06-.842 2.35-1.656.29-.813.29-1.51.203-1.656-.086-.145-.319-.232-.667-.406z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Footer, styled like the site footer */}
          <div style={{ backgroundColor: '#111', padding: '16px 20px', textAlign: 'center' }}>
            <p style={{ fontSize: 11.5, color: '#999' }}>Kirakira Advisory (202603228882)</p>
          </div>
        </div>
      </div>
    </div>
  )
}
