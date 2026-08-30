'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import AutomationIcon from './components/AutomationIcon'

/* ── Scroll-reveal hook ── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .bar-grow')
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/* ── Count-up hook ── */
function useCountUp(target: number, suffix = '', duration = 1800) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1)
        setVal(Math.floor(p * target))
        if (p < 1) requestAnimationFrame(tick)
        else setVal(target)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.5 })
    io.observe(el)
    return () => io.disconnect()
  }, [target, duration])
  return { ref, display: val + suffix }
}

const services = [
  { icon: '⚡', title: 'Workflow Automation', description: 'Eliminate repetitive data entry, reconciliations, and manual processes with smart automation built specifically for accounting workflows.' },
  { icon: '📊', title: 'Custom Reporting & Dashboards', description: 'Replace manually compiled reports with live dashboards that pull accurate data automatically — so you always have the numbers you need.' },
  { icon: '📋', title: 'Spreadsheet Optimisation', description: 'We transform basic spreadsheets into professional, error-proof tools — cleaner models, smarter formulas, and templates that actually scale.' },
  { icon: '🔗', title: 'App & Software Integration', description: 'Connect your accounting software, payroll systems, and business tools so data flows between them automatically — no more manual transfers.' },
]

const whyUs = [
  { title: 'Built for Accountants', desc: 'We understand accounting workflows, not just technology. Every solution is designed with the accounting professional in mind.' },
  { title: 'Practical & Lean', desc: 'No bloated enterprise software. We build targeted solutions that solve the exact problem you have — nothing more, nothing less.' },
  { title: 'Fast to Implement', desc: 'Most solutions are up and running within days, not months. You see real results quickly.' },
]

function StatCard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: string }) {
  const { ref, display } = useCountUp(value, suffix)
  return (
    <div ref={ref} className="text-center" style={{ transitionDelay: delay }}>
      <p className="text-3xl sm:text-4xl font-extrabold" style={{ color: '#FFDA1A' }}>{display}</p>
      <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>{label}</p>
    </div>
  )
}

export default function Home() {
  useReveal()

  return (
    <div>

      {/* ── Hero ── */}
      <section style={{ backgroundColor: '#0051BA', position: 'relative', overflow: 'hidden' }} className="px-4 sm:px-6 pt-16 sm:pt-20 pb-16 sm:pb-24">

        {/* Dot pattern */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,218,26,0.08) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />

        {/* Floating shapes */}
        <div className="shape-a absolute rounded-full opacity-10" style={{ width: 220, height: 220, backgroundColor: '#FFDA1A', top: '-60px', right: '10%' }} />
        <div className="shape-b absolute rounded-full opacity-10" style={{ width: 140, height: 140, backgroundColor: '#fff', bottom: '10%', left: '5%' }} />
        <div className="shape-c absolute opacity-10" style={{ width: 80, height: 80, backgroundColor: '#FFDA1A', bottom: '20%', right: '20%', borderRadius: '16px', transform: 'rotate(20deg)' }} />

        <div className="max-w-6xl mx-auto relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Left */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="badge-in inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6" style={{ backgroundColor: '#FFDA1A', color: '#0051BA' }}>
                Smart Solutions for Accountants
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                <span className="word word-1">Work</span>{' '}
                <span className="word word-2">Smarter.</span><br />
                <span className="word word-3" style={{ color: '#FFDA1A' }}>Not</span>{' '}
                <span className="word word-4" style={{ color: '#FFDA1A' }}>Harder.</span>
              </h1>
              <p className="fade-up text-lg sm:text-xl leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.85)', animationDelay: '0.8s', opacity: 0 }}>
                Kirakira Advisory helps accounting professionals automate the routine, sharpen their reporting, and connect the tools they rely on every day.
              </p>
              <div className="fade-up flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" style={{ animationDelay: '1s', opacity: 0 }}>
                <Link href="/services" className="btn-glow px-8 py-4 rounded font-bold text-base hover:opacity-90 transition" style={{ backgroundColor: '#FFDA1A', color: '#0051BA' }}>
                  Explore Services
                </Link>
                <Link href="/blog" className="px-8 py-4 rounded font-bold text-base border-2 border-white text-white hover:bg-white hover:text-blue-900 transition">
                  Read Our Blog
                </Link>
              </div>
            </div>

            {/* Right — animated automation icon + stats */}
            <div className="lg:w-1/2 w-full fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
              <AutomationIcon />
              <div className="grid grid-cols-3 gap-4 mt-8">
                <StatCard value={80}  suffix="%" label="Less manual work" delay="0s" />
                <StatCard value={3}   suffix="×" label="Faster close"     delay="0.15s" />
                <StatCard value={100} suffix="%" label="For accountants"  delay="0.3s" />
              </div>
              <div className="mt-6 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}>
                <p className="text-xs font-bold tracking-widest uppercase mb-2 text-center" style={{ color: 'rgba(255,255,255,0.5)' }}>Tools we work with</p>
                <p className="text-sm font-medium text-center" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  SQL Account · AutoCount · Xero · Bukku · Google Sheets · Microsoft Excel · Google Apps Script
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Yellow bar */}
      <div className="h-1.5" style={{ backgroundColor: '#FFDA1A' }} />

      {/* ── Services ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#0051BA' }}>What We Do</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-5" style={{ color: '#111' }}>Our Services</h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: '#666' }}>
              From eliminating manual work to connecting your full tech stack, we build solutions that make accounting teams measurably more efficient.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`card-hover reveal reveal-delay-${i + 1} p-8 sm:p-10 rounded-xl border-2`}
                style={{ borderColor: '#E5E7EB' }}
              >
                <div className="card-icon text-5xl mb-5">{s.icon}</div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#0051BA' }}>{s.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: '#555' }}>{s.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 reveal">
            <Link href="/services" className="inline-block px-8 py-4 rounded font-bold text-base hover:opacity-90 transition" style={{ backgroundColor: '#0051BA', color: '#fff' }}>
              View Full Service Details →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6" style={{ backgroundColor: '#F4F6FB' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#0051BA' }}>Why Kirakira</p>
            <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: '#111' }}>Built Around Your Work</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {whyUs.map((w, i) => (
              <div key={w.title} className={`reveal reveal-delay-${i + 1} bg-white p-8 sm:p-10 rounded-xl shadow-sm text-center hover:shadow-lg transition-shadow duration-300`}>
                <div className="bar-grow h-1.5 mx-auto mb-6 rounded" style={{ backgroundColor: '#FFDA1A', display: 'block' }} />
                <h3 className="text-xl font-bold mb-4" style={{ color: '#111' }}>{w.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: '#666' }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-gradient py-20 px-4 sm:px-6" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,218,26,0.07) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
        <div className="max-w-3xl mx-auto text-center relative reveal">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">Ready to Work Smarter?</h2>
          <p className="text-lg mb-10" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Tell us about your workflow challenge and we will recommend the right solution.
          </p>
          <a
            href="https://wa.me/60173384916"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center gap-3 px-10 py-4 rounded font-bold text-lg hover:opacity-90 transition"
            style={{ backgroundColor: '#25D366', color: '#fff' }}
          >
            <svg viewBox="0 0 32 32" width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.668 4.797 1.832 6.793L2 30l7.418-1.805A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.556 11.556 0 0 1-5.91-1.617l-.424-.252-4.402 1.07 1.1-4.285-.276-.44A11.556 11.556 0 0 1 4.4 16C4.4 9.59 9.59 4.4 16 4.4S27.6 9.59 27.6 16 22.41 27.6 16 27.6zm6.344-8.676c-.348-.174-2.06-1.016-2.38-1.132-.32-.116-.553-.174-.786.174-.232.347-.9 1.132-1.103 1.365-.203.232-.405.26-.754.086-.348-.174-1.47-.542-2.8-1.726-1.034-.922-1.732-2.06-1.936-2.408-.203-.348-.022-.536.153-.71.157-.156.348-.405.522-.608.174-.202.232-.347.348-.579.116-.232.058-.434-.029-.608-.087-.174-.786-1.896-1.077-2.597-.283-.682-.57-.59-.786-.6l-.67-.012c-.232 0-.608.087-.927.434-.319.348-1.218 1.19-1.218 2.9s1.247 3.363 1.42 3.595c.174.232 2.454 3.747 5.945 5.254.832.36 1.48.574 1.985.734.834.267 1.594.23 2.194.14.67-.1 2.06-.842 2.35-1.656.29-.813.29-1.51.203-1.656-.086-.145-.319-.232-.667-.406z"/>
            </svg>
            WhatsApp Us
          </a>
        </div>
      </section>

    </div>
  )
}
