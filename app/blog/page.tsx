import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Kirakira Advisory',
  description: 'Practical tips and insights for accounting professionals on automation, reporting, spreadsheets, and software.',
}

const posts = [
  {
    tag: 'Automation',
    date: '25 August 2026',
    title: '5 Accounting Tasks You Should Automate This Year',
    excerpt: 'Most accounting teams are still doing the same repetitive tasks they did five years ago. Here are five workflows that are straightforward to automate and will save your team hours every month.',
  },
  {
    tag: 'Reporting',
    date: '12 August 2026',
    title: 'Why Your Excel Reports Are Slowing You Down',
    excerpt: 'Manual Excel reports are one of the biggest hidden time-sinks in an accounting team. Here is how to replace them with dashboards that update themselves.',
  },
  {
    tag: 'Spreadsheets',
    date: '1 August 2026',
    title: "The Accountant's Guide to Spreadsheet Best Practices",
    excerpt: 'A well-built spreadsheet is a business asset. A poorly built one is a liability waiting to cause problems. Here is how to tell the difference and how to fix it.',
  },
  {
    tag: 'Integration',
    date: '18 July 2026',
    title: 'How to Connect Your Accounting Software Without Spending a Fortune',
    excerpt: 'You do not need enterprise-grade middleware to integrate your business tools. Here are practical, affordable ways to get your systems talking to each other.',
  },
]

export default function BlogPage() {
  return (
    <div>

      {/* Hero */}
      <section style={{ backgroundColor: '#0051BA' }} className="py-16 sm:py-20 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#FFDA1A' }}>Insights</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">For Accounting Professionals</h1>
          <p className="text-base sm:text-lg" style={{ color: 'rgba(255,255,255,0.82)' }}>
            Practical tips on automation, reporting, spreadsheets, and software. No fluff.
          </p>
        </div>
      </section>

      {/* Yellow bar */}
      <div className="h-1.5" style={{ backgroundColor: '#FFDA1A' }} />

      {/* Posts */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-6">
          {posts.map(post => (
            <article
              key={post.title}
              className="border rounded-xl p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              style={{ borderColor: '#E5E7EB' }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ backgroundColor: '#FFDA1A', color: '#0051BA' }}
                >
                  {post.tag}
                </span>
                <span className="text-xs" style={{ color: '#999' }}>{post.date}</span>
              </div>
              <h2 className="text-xl font-bold mb-3" style={{ color: '#111' }}>{post.title}</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#555' }}>{post.excerpt}</p>
              <span className="text-sm font-bold" style={{ color: '#0051BA' }}>Read more →</span>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 sm:px-6 text-center" style={{ backgroundColor: '#F4F6FB' }}>
        <p className="text-sm mb-2" style={{ color: '#666' }}>Want to stay updated with tips like these?</p>
        <a
          href="mailto:hello@kirakiraadvisory.com"
          className="inline-block px-6 py-3 rounded font-bold text-sm hover:opacity-90 transition"
          style={{ backgroundColor: '#0051BA', color: '#fff' }}
        >
          Get in Touch
        </a>
      </section>

    </div>
  )
}
