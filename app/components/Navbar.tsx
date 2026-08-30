'use client'
import { useState } from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{ backgroundColor: '#0051BA' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="text-xl font-extrabold text-white tracking-tight">
            Kira<span style={{ color: '#FFDA1A' }}>kira</span>
            <span className="text-sm font-normal opacity-75 ml-2 hidden sm:inline">Advisory</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <Link key={l.href} href={l.href} className="text-sm font-medium text-white hover:opacity-75 transition">
                {l.label}
              </Link>
            ))}
            <a
              href="mailto:hello@kirakiraadvisory.com"
              className="px-5 py-2 rounded text-sm font-bold transition hover:opacity-90"
              style={{ backgroundColor: '#FFDA1A', color: '#0051BA' }}
            >
              Contact Us
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className="block h-0.5 w-6 bg-white transition-all duration-300"
              style={{ transform: open ? 'translateY(8px) rotate(45deg)' : 'none' }} />
            <span className="block h-0.5 w-6 bg-white transition-all duration-300"
              style={{ opacity: open ? 0 : 1 }} />
            <span className="block h-0.5 w-6 bg-white transition-all duration-300"
              style={{ transform: open ? 'translateY(-8px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="md:hidden pb-5 flex flex-col gap-1 border-t border-white border-opacity-20 pt-4">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white text-sm font-medium py-3 px-2 rounded hover:bg-white hover:bg-opacity-10 transition"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="mailto:hello@kirakiraadvisory.com"
              className="mt-2 text-center py-3 rounded text-sm font-bold"
              style={{ backgroundColor: '#FFDA1A', color: '#0051BA' }}
              onClick={() => setOpen(false)}
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
