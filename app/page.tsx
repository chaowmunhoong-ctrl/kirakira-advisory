import Link from 'next/link'

const services = [
  {
    icon: '⚡',
    title: 'Workflow Automation',
    description: 'Eliminate repetitive data entry, reconciliations, and manual processes with smart automation built specifically for accounting workflows.',
  },
  {
    icon: '📊',
    title: 'Custom Reporting & Dashboards',
    description: 'Replace manually compiled reports with live dashboards that pull accurate data automatically — so you always have the numbers you need.',
  },
  {
    icon: '📋',
    title: 'Spreadsheet Optimisation',
    description: 'We transform basic spreadsheets into professional, error-proof tools — cleaner models, smarter formulas, and templates that actually scale.',
  },
  {
    icon: '🔗',
    title: 'App & Software Integration',
    description: 'Connect your accounting software, payroll systems, and business tools so data flows between them automatically — no more manual transfers.',
  },
]

const whyUs = [
  {
    title: 'Built for Accountants',
    desc: 'We understand accounting workflows, not just technology. Every solution is designed with the accounting professional in mind.',
  },
  {
    title: 'Practical & Lean',
    desc: 'No bloated enterprise software. We build targeted solutions that solve the exact problem you have — nothing more, nothing less.',
  },
  {
    title: 'Fast to Implement',
    desc: 'Most solutions are up and running within days, not months. You see real results quickly.',
  },
]

export default function Home() {
  return (
    <div>

      {/* Hero */}
      <section style={{ backgroundColor: '#0051BA' }} className="py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
            style={{ backgroundColor: '#FFDA1A', color: '#0051BA' }}
          >
            Smart Solutions for Accountants
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Work Smarter.<br />
            <span style={{ color: '#FFDA1A' }}>Not Harder.</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-10 mx-auto max-w-2xl" style={{ color: 'rgba(255,255,255,0.82)' }}>
            Kirakira Advisory helps accounting professionals automate the routine, sharpen their reporting,
            and connect the tools they rely on every day — so they can focus on work that actually matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="px-8 py-4 rounded font-bold text-base hover:opacity-90 transition"
              style={{ backgroundColor: '#FFDA1A', color: '#0051BA' }}
            >
              Explore Services
            </Link>
            <Link
              href="/blog"
              className="px-8 py-4 rounded font-bold text-base border-2 border-white text-white hover:bg-white hover:text-blue-900 transition"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Yellow accent bar */}
      <div className="h-1.5" style={{ backgroundColor: '#FFDA1A' }} />

      {/* Services */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#0051BA' }}>What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#111' }}>Our Services</h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: '#666' }}>
              From eliminating manual work to connecting your full tech stack, we build solutions that make accounting teams measurably more efficient.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map(s => (
              <div
                key={s.title}
                className="p-6 sm:p-8 rounded-xl border-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{ borderColor: '#E5E7EB' }}
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0051BA' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#555' }}>{s.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-block px-6 py-3 rounded font-bold text-sm hover:opacity-90 transition"
              style={{ backgroundColor: '#0051BA', color: '#fff' }}
            >
              View Full Service Details →
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 sm:py-20 px-4 sm:px-6" style={{ backgroundColor: '#F4F6FB' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#0051BA' }}>Why Kirakira</p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#111' }}>Built Around Your Work</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {whyUs.map(w => (
              <div key={w.title} className="bg-white p-6 sm:p-8 rounded-xl shadow-sm text-center">
                <div className="w-10 h-1 mx-auto mb-5 rounded" style={{ backgroundColor: '#FFDA1A' }} />
                <h3 className="text-lg font-bold mb-3" style={{ color: '#111' }}>{w.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: '#0051BA' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work Smarter?</h2>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Tell us about your workflow challenge and we will recommend the right solution.
          </p>
          <a
            href="mailto:hello@kirakiraadvisory.com"
            className="inline-block px-8 py-4 rounded font-bold text-base hover:opacity-90 transition"
            style={{ backgroundColor: '#FFDA1A', color: '#0051BA' }}
          >
            Get in Touch
          </a>
        </div>
      </section>

    </div>
  )
}
