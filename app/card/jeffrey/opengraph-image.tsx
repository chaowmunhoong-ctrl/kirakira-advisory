import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import path from 'node:path'

export const alt = 'Jeffrey Chaow - Kirakira Advisory'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const NAVY = '#12295C'
const TEAL = '#1B8A85'
const YELLOW = '#F5C400'

export default async function Image() {
  const photo = await readFile(path.join(process.cwd(), 'public/card/jeffrey.png'))
  const src = `data:image/png;base64,${photo.toString('base64')}`

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', backgroundColor: '#F1F8FC' }}>
        <div style={{ width: 440, height: '100%', backgroundColor: TEAL, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 320, height: 320, borderRadius: 160, border: '10px solid #FFFFFF', overflow: 'hidden', display: 'flex' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} width={464} height={320} style={{ marginLeft: -70 }} alt="" />
          </div>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 64px', position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 12, backgroundColor: YELLOW, display: 'flex' }} />

          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <div style={{ display: 'flex', fontSize: 64, fontWeight: 800, letterSpacing: -2, lineHeight: 1 }}>
              <span style={{ color: NAVY }}>Kira</span>
              <span style={{ color: YELLOW }}>kira</span>
            </div>
            <div style={{ display: 'flex', fontSize: 26, letterSpacing: 8, color: NAVY, marginLeft: 20, marginBottom: 6 }}>ADVISORY</div>
          </div>

          <div style={{ display: 'flex', fontSize: 84, fontWeight: 700, color: NAVY, marginTop: 44, lineHeight: 1.05 }}>Jeffrey Chaow</div>
          <div style={{ display: 'flex', fontSize: 34, fontWeight: 700, letterSpacing: 5, color: TEAL, marginTop: 20 }}>SENIOR OPERATION ANALYST</div>
          <div style={{ display: 'flex', width: 90, height: 6, backgroundColor: YELLOW, marginTop: 28 }} />
          <div style={{ display: 'flex', fontSize: 26, color: NAVY, marginTop: 28, whiteSpace: 'nowrap' }}>017-338 4916  |  kirakira-advisory.vercel.app</div>
        </div>
      </div>
    ),
    { ...size }
  )
}
