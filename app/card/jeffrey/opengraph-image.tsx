import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import path from 'node:path'

export const alt = 'Jeffrey Chaow - Kirakira Advisory'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const NAVY = '#0E3A7A'
const INK = '#12295C'
const TEAL = '#1B8A85'
const YELLOW = '#F5C400'
const MUTED = '#6B7A90'

const font = (file: string) => readFile(path.join(process.cwd(), 'app/card/jeffrey/fonts', file))

const iconDot = { width: 64, height: 64, borderRadius: 32, backgroundColor: TEAL, display: 'flex', alignItems: 'center', justifyContent: 'center' } as const
const row = { display: 'flex', alignItems: 'center', gap: 22 } as const
const divider = { width: 2, height: 52, backgroundColor: '#D5E0EB', display: 'flex' } as const

export default async function Image() {
  const [photo, f400, f600, f800] = await Promise.all([
    readFile(path.join(process.cwd(), 'public/card/jeffrey.png')),
    font('Inter-400.ttf'),
    font('Inter-600.ttf'),
    font('Inter-800.ttf'),
  ])
  const src = `data:image/png;base64,${photo.toString('base64')}`

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', backgroundColor: '#FFFFFF', fontFamily: 'Inter' }}>
        <svg width="1200" height="630" viewBox="0 0 1200 630" style={{ position: 'absolute', left: 0, top: 0 }}>
          <polygon points="0,0 560,0 410,630 0,630" fill={NAVY} />
          <polygon points="560,0 590,0 440,630 410,630" fill={TEAL} />
          <polygon points="0,520 0,630 300,630" fill={TEAL} />
          <polygon points="1200,0 1050,0 1200,150" fill="#DCEFEE" />
          <polygon points="1200,0 1130,0 1200,70" fill={TEAL} />
        </svg>

        <div style={{ position: 'absolute', left: 60, top: 52, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 78, fontWeight: 800, letterSpacing: -3, lineHeight: 1 }}>
            <span style={{ color: '#FFFFFF' }}>Kira</span>
            <span style={{ color: YELLOW }}>kira</span>
          </div>
          <div style={{ display: 'flex', fontSize: 28, fontWeight: 600, letterSpacing: 14, color: '#FFFFFF', marginTop: 10 }}>ADVISORY</div>
          <div style={{ display: 'flex', fontSize: 21, fontWeight: 400, color: 'rgba(255,255,255,0.88)', marginTop: 18 }}>Smarter Systems  |  Stronger Business</div>
        </div>

        <div style={{ position: 'absolute', left: 52, top: 262, width: 340, height: 340, borderRadius: 170, backgroundColor: TEAL, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 312, height: 312, borderRadius: 156, border: '8px solid #FFFFFF', overflow: 'hidden', display: 'flex' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} width={452} height={312} style={{ marginLeft: -70 }} alt="" />
          </div>
        </div>

        <div style={{ position: 'absolute', left: 640, top: 0, bottom: 0, right: 56, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', fontSize: 62, fontWeight: 800, letterSpacing: -1.5, color: INK, lineHeight: 1.05, whiteSpace: 'nowrap' }}>Jeffrey Chaow</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 22 }}>
            <div style={{ display: 'flex', width: 40, height: 3, backgroundColor: TEAL }} />
            <div style={{ display: 'flex', fontSize: 21, fontWeight: 600, letterSpacing: 4, color: TEAL, whiteSpace: 'nowrap' }}>SENIOR OPERATION ANALYST</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 26, marginTop: 50 }}>
            <div style={row}>
              <div style={iconDot}>
                <svg width="30" height="30" viewBox="0 0 24 24"><path fill="#fff" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" /></svg>
              </div>
              <div style={divider} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', fontSize: 32, fontWeight: 800, color: INK }}>017-338 4916</div>
                <div style={{ display: 'flex', fontSize: 20, color: MUTED, marginTop: 2 }}>(Mobile)</div>
              </div>
            </div>
            <div style={row}>
              <div style={iconDot}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>
              </div>
              <div style={divider} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', fontSize: 32, fontWeight: 800, color: INK }}>Kirakira Website</div>
                <div style={{ display: 'flex', fontSize: 20, color: MUTED, marginTop: 2 }}>https://kirakira-advisory.vercel.app</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Inter', data: f400, weight: 400, style: 'normal' },
        { name: 'Inter', data: f600, weight: 600, style: 'normal' },
        { name: 'Inter', data: f800, weight: 800, style: 'normal' },
      ],
    }
  )
}
