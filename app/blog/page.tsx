'use client'
import { useEffect } from 'react'
import BlogIcon from '../components/BlogIcon'

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
  useReveal()

  return (
    <div>

      {/* Hero */}
      <section style={{ backgroundColor: '#0051BA', position: 'relative', overflow: 'hidden' }} className="px-4 sm:px-6 pt-16 sm:pt-20 pb-16 sm:pb-20">
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,218,26,0.08) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
        <div className="shape-a absolute rounded-full opacity-10" style={{ width: 160, height: 160, backgroundColor: '#FFDA1A', top: '-30px', right: '6%' }} />
        <div className="shape-b absolute rounded-full opacity-10" style={{ width: 90, height: 90, backgroundColor: '#fff', bottom: '8%', left: '5%' }} />
        <div className="max-w-6xl mx-auto relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left — text */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <p className="badge-in text-sm font-bold tracking-widest uppercase mb-5" style={{ color: '#FFDA1A', opacity: 0 }}>Insights</p>
              <h1 className="fade-up text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-6" style={{ opacity: 0, animationDelay: '0.1s' }}>For Accounting<br/>Professionals</h1>
              <p className="fade-up text-lg sm:text-xl" style={{ color: 'rgba(255,255,255,0.82)', opacity: 0, animationDelay: '0.3s' }}>
                Practical tips on automation, reporting, spreadsheets, and software. No fluff.
              </p>
            </div>
            {/* Right — icon */}
            <div className="lg:w-1/2 w-full fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
              <BlogIcon />
            </div>
          </div>
        </div>
      </section>

      <div className="h-1.5" style={{ backgroundColor: '#FFDA1A' }} />

      {/* Posts */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-6">
          {posts.map((post, i) => (
            <article
              key={post.title}
              className={`reveal reveal-delay-${(i % 4) + 1} border rounded-xl p-6 sm:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
              style={{ borderColor: '#E5E7EB' }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: '#FFDA1A', color: '#0051BA' }}>{post.tag}</span>
                <span className="text-xs" style={{ color: '#999' }}>{post.date}</span>
              </div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: '#111' }}>{post.title}</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#555' }}>{post.excerpt}</p>
              <span className="text-sm font-bold" style={{ color: '#0051BA' }}>Read more →</span>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-gradient py-20 px-4 sm:px-6 text-center" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,218,26,0.07) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
        <div className="max-w-2xl mx-auto relative reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Want to talk through any of these?</h2>
          <p className="text-lg mb-10" style={{ color: 'rgba(255,255,255,0.8)' }}>Send us a message and we will be happy to discuss how it applies to your team.</p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded font-bold text-lg hover:opacity-90 transition"
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
