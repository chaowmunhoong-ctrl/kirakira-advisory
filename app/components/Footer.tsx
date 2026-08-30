export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#111111', color: '#ffffff' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">

          {/* Brand */}
          <div>
            <p className="text-xl font-extrabold mb-3">
              Kira<span style={{ color: '#FFDA1A' }}>kira</span> Advisory
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#999' }}>
              Smart solutions for accounting professionals. Automate the routine, sharpen the reporting.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-sm font-bold mb-4" style={{ color: '#FFDA1A' }}>Pages</p>
            <div className="flex flex-col gap-2">
              {[['/', 'Home'], ['/services', 'Services'], ['/blog', 'Blog']].map(([href, label]) => (
                <a key={href} href={href} className="text-sm hover:text-white transition" style={{ color: '#999' }}>{label}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-bold mb-4" style={{ color: '#FFDA1A' }}>Get in Touch</p>
            <a href="mailto:hello@kirakiraadvisory.com" className="text-sm hover:text-white transition" style={{ color: '#999' }}>
              hello@kirakiraadvisory.com
            </a>
          </div>

        </div>

        <div className="border-t pt-6" style={{ borderColor: '#222' }}>
          <p className="text-xs text-center" style={{ color: '#555' }}>
            &copy; {new Date().getFullYear()} Kirakira Advisory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
