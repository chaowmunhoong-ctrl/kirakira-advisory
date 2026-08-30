'use client'
import type { Metadata } from 'next'
import { useEffect } from 'react'

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

const WA_LINK = 'https://wa.me/60173384916'

const WA_BTN = ({ label = 'WhatsApp Us', large = false }: { label?: string; large?: boolean }) => (
  <a
    href={WA_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-3 rounded font-bold hover:opacity-90 transition ${large ? 'px-10 py-4 text-lg' : 'px-8 py-4 text-base'}`}
    style={{ backgroundColor: '#25D366', color: '#fff' }}
  >
    <svg viewBox="0 0 32 32" width={large ? 24 : 20} height={large ? 24 : 20} fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.668 4.797 1.832 6.793L2 30l7.418-1.805A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.556 11.556 0 0 1-5.91-1.617l-.424-.252-4.402 1.07 1.1-4.285-.276-.44A11.556 11.556 0 0 1 4.4 16C4.4 9.59 9.59 4.4 16 4.4S27.6 9.59 27.6 16 22.41 27.6 16 27.6zm6.344-8.676c-.348-.174-2.06-1.016-2.38-1.132-.32-.116-.553-.174-.786.174-.232.347-.9 1.132-1.103 1.365-.203.232-.405.26-.754.086-.348-.174-1.47-.542-2.8-1.726-1.034-.922-1.732-2.06-1.936-2.408-.203-.348-.022-.536.153-.71.157-.156.348-.405.522-.608.174-.202.232-.347.348-.579.116-.232.058-.434-.029-.608-.087-.174-.786-1.896-1.077-2.597-.283-.682-.57-.59-.786-.6l-.67-.012c-.232 0-.608.087-.927.434-.319.348-1.218 1.19-1.218 2.9s1.247 3.363 1.42 3.595c.174.232 2.454 3.747 5.945 5.254.832.36 1.48.574 1.985.734.834.267 1.594.23 2.194.14.67-.1 2.06-.842 2.35-1.656.29-.813.29-1.51.203-1.656-.086-.145-.319-.232-.667-.406z"/>
    </svg>
    {label}
  </a>
)

const services = [
  {
    icon: '⚡',
    title: 'Workflow Automation',
    tagline: 'Eliminate the repetitive. Keep the meaningful.',
    description: 'We map your current accounting workflows and identify tasks that can be fully or partially automated — whether that is bank reconciliation, invoice processing, payroll data preparation, or month-end closing checklists. The result is a process that runs reliably in the background while your team focuses on higher-value work.',
    outcomes: ['Reduce manual data entry by up to 80%', 'Faster month-end close cycles', 'Fewer human errors in routine processes', 'More time for analysis and advisory work'],
    tools: 'Google Sheets · Apps Script · SQL Account · Bukku · AutoCount',
  },
  {
    icon: '📊',
    title: 'Custom Reporting & Dashboards',
    tagline: 'See what matters, when it matters.',
    description: 'We design and build management reports and dashboards that pull live data from your accounting system, spreadsheets, or databases. Instead of manually compiling figures every month, you get a report that updates itself — giving you and your clients real-time financial visibility without the extra work.',
    outcomes: ['Real-time P&L, cash flow, and KPI dashboards', 'Automated monthly and weekly report generation', 'Clear visualisations for non-financial stakeholders', 'Reports tailored to your exact business structure'],
    tools: 'Google Looker Studio · Google Sheets · Microsoft Excel · SQL Account',
  },
  {
    icon: '📋',
    title: 'Spreadsheet Optimisation',
    tagline: 'Your spreadsheet is more powerful than you think.',
    description: 'Most accounting teams use a fraction of what spreadsheets can do. We redesign your existing spreadsheets and build new ones from scratch — with proper data validation, dynamic formulas, clean structures, and protected logic that will not break when someone makes a mistake.',
    outcomes: ['Error-proof spreadsheet models', 'Dynamic templates that scale with your data', 'Faster data entry with smart dropdowns and automation', 'Professional, client-ready formatting'],
    tools: 'Google Sheets · Microsoft Excel · Google Apps Script · VBA',
  },
  {
    icon: '🔗',
    title: 'App & Software Integration',
    tagline: 'Stop copying data between systems.',
    description: 'If your team spends time manually moving data from one system to another, that is time and money wasted. We connect your accounting software, payroll systems, CRM, inventory tools, and other business apps so data flows automatically between them — eliminating duplicate entry and keeping everything in sync.',
    outcomes: ['Eliminate duplicate data entry across systems', 'Real-time sync between accounting and operations tools', 'Automated data imports and exports', 'Custom connections for systems without native integration'],
    tools: 'SQL Account · Xero · Bukku · AutoCount · Google Workspace',
  },
]

export default function ServicesPage() {
  useReveal()

  return (
    <div>

      {/* Hero */}
      <section style={{ backgroundColor: '#0051BA', position: 'relative', overflow: 'hidden' }} className="py-20 sm:py-24 px-4 sm:px-6 text-center">
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,218,26,0.08) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
        {/* Floating shapes */}
        <div className="shape-a absolute rounded-full opacity-10" style={{ width: 180, height: 180, backgroundColor: '#FFDA1A', top: '-40px', right: '8%' }} />
        <div className="shape-b absolute rounded-full opacity-10" style={{ width: 100, height: 100, backgroundColor: '#fff', bottom: '10%', left: '4%' }} />
        <div className="max-w-3xl mx-auto relative">
          <p className="badge-in text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#FFDA1A', opacity: 0 }}>Our Services</p>
          <h1 className="fade-up text-5xl sm:text-6xl font-extrabold text-white mb-5" style={{ opacity: 0, animationDelay: '0.1s' }}>Solutions Built for Accountants</h1>
          <p className="fade-up text-lg sm:text-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.82)', opacity: 0, animationDelay: '0.3s' }}>
            Every service we offer is designed around one goal: helping accounting professionals spend less time on the routine and more time on the work that actually matters.
          </p>
        </div>
      </section>

      <div className="h-1.5" style={{ backgroundColor: '#FFDA1A' }} />

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-24">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row reveal-left' : 'lg:flex-row-reverse reveal-right'} gap-12 items-start`}
            >
              {/* Left panel */}
              <div className="lg:w-1/3 flex-shrink-0">
                <div className="text-6xl mb-5 transition-transform duration-300 hover:scale-110 inline-block">{s.icon}</div>
                <h2 className="text-2xl font-bold mb-2" style={{ color: '#0051BA' }}>{s.title}</h2>
                <p className="text-sm font-semibold mb-5" style={{ color: '#888' }}>{s.tagline}</p>
                <p className="text-xs font-bold uppercase mb-1 tracking-widest" style={{ color: '#aaa' }}>Tools we use</p>
                <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{s.tools}</p>
              </div>

              {/* Right panel */}
              <div className="lg:w-2/3">
                <p className="text-lg leading-relaxed mb-6" style={{ color: '#444' }}>{s.description}</p>
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#EEF4FF', borderLeft: '4px solid #0051BA' }}>
                  <p className="text-sm font-bold mb-4" style={{ color: '#0051BA' }}>What you get</p>
                  <ul className="space-y-3">
                    {s.outcomes.map(o => (
                      <li key={o} className="flex items-start gap-3 text-base" style={{ color: '#333' }}>
                        <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5" style={{ backgroundColor: '#0051BA' }}>✓</span>
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-gradient py-20 px-4 sm:px-6 text-center" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,218,26,0.07) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
        <div className="max-w-3xl mx-auto relative reveal">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Not sure which service you need?</h2>
          <p className="text-lg mb-10" style={{ color: 'rgba(255,255,255,0.8)' }}>Tell us about your challenge and we will recommend the right approach.</p>
          <WA_BTN label="WhatsApp Us" large />
        </div>
      </section>

    </div>
  )
}
