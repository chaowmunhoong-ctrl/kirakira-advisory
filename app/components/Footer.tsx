const WA_ICON = (
  <svg viewBox="0 0 32 32" width="16" height="16" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.668 4.797 1.832 6.793L2 30l7.418-1.805A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.556 11.556 0 0 1-5.91-1.617l-.424-.252-4.402 1.07 1.1-4.285-.276-.44A11.556 11.556 0 0 1 4.4 16C4.4 9.59 9.59 4.4 16 4.4S27.6 9.59 27.6 16 22.41 27.6 16 27.6zm6.344-8.676c-.348-.174-2.06-1.016-2.38-1.132-.32-.116-.553-.174-.786.174-.232.347-.9 1.132-1.103 1.365-.203.232-.405.26-.754.086-.348-.174-1.47-.542-2.8-1.726-1.034-.922-1.732-2.06-1.936-2.408-.203-.348-.022-.536.153-.71.157-.156.348-.405.522-.608.174-.202.232-.347.348-.579.116-.232.058-.434-.029-.608-.087-.174-.786-1.896-1.077-2.597-.283-.682-.57-.59-.786-.6l-.67-.012c-.232 0-.608.087-.927.434-.319.348-1.218 1.19-1.218 2.9s1.247 3.363 1.42 3.595c.174.232 2.454 3.747 5.945 5.254.832.36 1.48.574 1.985.734.834.267 1.594.23 2.194.14.67-.1 2.06-.842 2.35-1.656.29-.813.29-1.51.203-1.656-.086-.145-.319-.232-.667-.406z"/>
  </svg>
)

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
            <div className="flex flex-col gap-2">
              {[['/', 'Home'], ['/services', 'Services']].map(([href, label]) => (
                <a key={href} href={href} className="text-sm hover:text-white transition" style={{ color: '#999' }}>{label}</a>
              ))}
            </div>
          </div>

          {/* Contact — WhatsApp only */}
          <div>
            <p className="text-sm font-bold mb-4" style={{ color: '#FFDA1A' }}>Get in Touch</p>
            <a
              href="https://wa.me/60173384916"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-white transition"
              style={{ color: '#999' }}
            >
              {WA_ICON}
              +60 17-338 4916
            </a>
          </div>

        </div>

        <div className="border-t pt-6" style={{ borderColor: '#222' }}>
          <p className="text-xs text-center mb-1" style={{ color: '#555' }}>
            Kirakira Advisory (202603228882). All rights reserved.
          </p>
          <p className="text-xs text-center" style={{ color: '#444' }}>
            &copy; {new Date().getFullYear()} Kirakira Advisory.
          </p>
        </div>
      </div>
    </footer>
  )
}
