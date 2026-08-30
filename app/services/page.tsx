import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | Kirakira Advisory',
  description: 'Workflow automation, custom reporting, spreadsheet optimisation, and software integration for accounting professionals.',
}

const services = [
  {
    icon: '⚡',
    title: 'Workflow Automation',
    tagline: 'Eliminate the repetitive. Keep the meaningful.',
    description: 'We map your current accounting workflows and identify tasks that can be fully or partially automated — whether that is bank reconciliation, invoice processing, payroll data preparation, or month-end closing checklists. The result is a process that runs reliably in the background while your team focuses on higher-value work.',
    outcomes: [
      'Reduce manual data entry by up to 80%',
      'Faster month-end close cycles',
      'Fewer human errors in routine processes',
      'More time for analysis and advisory work',
    ],
    tools: 'Google Sheets, Apps Script, Make, Zapier, SQL Account, Bukku',
  },
  {
    icon: '📊',
    title: 'Custom Reporting & Dashboards',
    tagline: 'See what matters, when it matters.',
    description: 'We design and build management reports and dashboards that pull live data from your accounting system, spreadsheets, or databases. Instead of manually compiling figures every month, you get a report that updates itself — giving you and your clients real-time financial visibility without the extra work.',
    outcomes: [
      'Real-time P&L, cash flow, and KPI dashboards',
      'Automated monthly and weekly report generation',
      'Clear visualisations for non-financial stakeholders',
      'Reports tailored to your exact business structure',
    ],
    tools: 'Google Looker Studio, Google Sheets, Excel, Power BI, SQL Account',
  },
  {
    icon: '📋',
    title: 'Spreadsheet Optimisation',
    tagline: 'Your spreadsheet is more powerful than you think.',
    description: 'Most accounting teams use a fraction of what spreadsheets can do. We redesign your existing spreadsheets and build new ones from scratch — with proper data validation, dynamic formulas, clean structures, and protected logic that will not break when someone makes a mistake. The output is a tool your team can rely on every day.',
    outcomes: [
      'Error-proof spreadsheet models',
      'Dynamic templates that scale with your data',
      'Faster data entry with smart dropdowns and automation',
      'Professional, client-ready formatting',
    ],
    tools: 'Google Sheets, Microsoft Excel, Apps Script, VBA',
  },
  {
    icon: '🔗',
    title: 'App & Software Integration',
    tagline: 'Stop copying data between systems.',
    description: 'If your team spends time manually moving data from one system to another, that is time and money wasted. We connect your accounting software, payroll systems, CRM, inventory tools, and other business apps so data flows automatically between them — eliminating duplicate entry and keeping everything in sync.',
    outcomes: [
      'Eliminate duplicate data entry across systems',
      'Real-time sync between accounting and operations tools',
      'Automated data imports and exports',
      'Custom connections for systems without native integration',
    ],
    tools: 'SQL Account, Xero, Bukku, QuickBooks, Google Workspace, Make, Zapier',
  },
]

export default function ServicesPage() {
  return (
    <div>

      {/* Hero */}
      <section style={{ backgroundColor: '#0051BA' }} className="py-16 sm:py-20 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#FFDA1A' }}>Our Services</p>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-5">Solutions Built for Accountants</h1>
          <p className="text-lg sm:text-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.82)' }}>
            Every service we offer is designed around one goal: helping accounting professionals spend less time on the routine and more time on the work that actually matters.
          </p>
        </div>
      </section>

      {/* Yellow bar */}
      <div className="h-1.5" style={{ backgroundColor: '#FFDA1A' }} />

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-20">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-start`}
            >
              {/* Left panel */}
              <div className="lg:w-1/3 flex-shrink-0">
                <div className="text-5xl mb-4">{s.icon}</div>
                <h2 className="text-2xl font-bold mb-2" style={{ color: '#0051BA' }}>{s.title}</h2>
                <p className="text-sm font-semibold mb-5" style={{ color: '#888' }}>{s.tagline}</p>
                <p className="text-xs font-bold uppercase mb-1 tracking-widest" style={{ color: '#aaa' }}>Tools we use</p>
                <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{s.tools}</p>
              </div>

              {/* Right panel */}
              <div className="lg:w-2/3">
                <p className="text-lg leading-relaxed mb-6" style={{ color: '#444' }}>{s.description}</p>
                <div className="p-5 rounded-xl" style={{ backgroundColor: '#EEF4FF', borderLeft: '4px solid #0051BA' }}>
                  <p className="text-sm font-bold mb-3" style={{ color: '#0051BA' }}>What you get</p>
                  <ul className="space-y-2">
                    {s.outcomes.map(o => (
                      <li key={o} className="flex items-start gap-3 text-sm" style={{ color: '#333' }}>
                        <span
                          className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
                          style={{ backgroundColor: '#0051BA' }}
                        >✓</span>
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
      <section className="py-16 px-4 sm:px-6 text-center" style={{ backgroundColor: '#F4F6FB' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#111' }}>Not sure which service you need?</h2>
          <p className="mb-8" style={{ color: '#666' }}>Tell us about your challenge and we will recommend the right approach.</p>
          <a
            href="mailto:hello@kirakiraadvisory.com"
            className="inline-block px-8 py-4 rounded font-bold hover:opacity-90 transition"
            style={{ backgroundColor: '#0051BA', color: '#fff' }}
          >
            Talk to Us →
          </a>
        </div>
      </section>

    </div>
  )
}
