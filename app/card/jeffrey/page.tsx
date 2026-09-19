import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jeffrey Chaow - Kirakira Advisory',
  description: 'Digital name card of Jeffrey Chaow, Senior Operation Analyst at Kirakira Advisory.',
}

const BLUE = '#0051BA'
const YELLOW = '#F5C400'

const iconStyle = { width: 34, height: 34, borderRadius: '50%', backgroundColor: BLUE, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 } as const
const rowStyle = { display: 'flex', alignItems: 'center', gap: 14, padding: '10px 14px', border: '1px solid #E1EAF7', borderRadius: 12, backgroundColor: '#fff', color: '#1f2d3d', fontSize: 14, textDecoration: 'none' } as const

export default function JeffreyCard() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100, overflowY: 'auto', backgroundColor: '#EEF4FF', fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif' }}>
      <div style={{ maxWidth: 380, margin: '32px auto', backgroundColor: '#fff', border: `1px solid ${BLUE}`, borderRadius: 18, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,81,186,0.12)' }}>

        {/* Brand header */}
        <div style={{ backgroundColor: '#EEF4FF', padding: '28px 20px 22px', textAlign: 'center' }}>
          <p style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-0.5px', lineHeight: 1, color: BLUE }}>
            Kira<span style={{ color: YELLOW }}>kira</span>
          </p>
          <p style={{ fontSize: 15, fontWeight: 800, letterSpacing: '0.28em', color: BLUE, marginTop: 8 }}>ADVISORY</p>
          <p style={{ fontSize: 11, color: '#5B6472', marginTop: 10, lineHeight: 1.6, letterSpacing: '0.04em' }}>
            AUTOMATION | SOCIAL MEDIA MANAGEMENT<br />WEBSITE DESIGN
          </p>
        </div>

        {/* Profile */}
        <div style={{ padding: '22px 20px 18px', textAlign: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/card/jeffrey.png"
            alt="Jeffrey Chaow"
            style={{ width: 96, height: 96, borderRadius: '50%', objectFit: 'cover', objectPosition: '48% 32%', border: `2px solid ${BLUE}`, display: 'block', margin: '0 auto 14px' }}
          />
          <h1 style={{ fontSize: 24, fontWeight: 700, color: '#1f2d3d' }}>Jeffrey Chaow</h1>
          <p style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.14em', color: BLUE, marginTop: 8 }}>SENIOR OPERATION ANALYST</p>
        </div>

        {/* Contact */}
        <div style={{ padding: '0 20px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <a href="tel:+60173384916" style={rowStyle}>
            <span style={iconStyle}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" /></svg>
            </span>
            017-338 4916 (Mobile)
          </a>
          <a href="https://kirakira-advisory.vercel.app" target="_blank" rel="noopener noreferrer" style={rowStyle}>
            <span style={iconStyle}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>
            </span>
            kirakira-advisory.vercel.app
          </a>
          <a
            href="https://wa.me/60173384916"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 4, padding: '13px 16px', borderRadius: 999, backgroundColor: '#25D366', color: '#fff', fontWeight: 700, fontSize: 15, textDecoration: 'none' }}
          >
            <svg viewBox="0 0 32 32" width="20" height="20" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.668 4.797 1.832 6.793L2 30l7.418-1.805A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.556 11.556 0 0 1-5.91-1.617l-.424-.252-4.402 1.07 1.1-4.285-.276-.44A11.556 11.556 0 0 1 4.4 16C4.4 9.59 9.59 4.4 16 4.4S27.6 9.59 27.6 16 22.41 27.6 16 27.6zm6.344-8.676c-.348-.174-2.06-1.016-2.38-1.132-.32-.116-.553-.174-.786.174-.232.347-.9 1.132-1.103 1.365-.203.232-.405.26-.754.086-.348-.174-1.47-.542-2.8-1.726-1.034-.922-1.732-2.06-1.936-2.408-.203-.348-.022-.536.153-.71.157-.156.348-.405.522-.608.174-.202.232-.347.348-.579.116-.232.058-.434-.029-.608-.087-.174-.786-1.896-1.077-2.597-.283-.682-.57-.59-.786-.6l-.67-.012c-.232 0-.608.087-.927.434-.319.348-1.218 1.19-1.218 2.9s1.247 3.363 1.42 3.595c.174.232 2.454 3.747 5.945 5.254.832.36 1.48.574 1.985.734.834.267 1.594.23 2.194.14.67-.1 2.06-.842 2.35-1.656.29-.813.29-1.51.203-1.656-.086-.145-.319-.232-.667-.406z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* Footer */}
        <div style={{ backgroundColor: '#111', padding: '16px 20px', textAlign: 'center' }}>
          <p style={{ fontSize: 11, color: '#999' }}>Kirakira Advisory (202603228882)</p>
        </div>
      </div>
    </div>
  )
}
