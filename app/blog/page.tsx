export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights | Kirakira Advisory',
  description: 'Practical tips on automation, reporting, spreadsheets, and software integration for accounting professionals.',
  openGraph: {
    title: 'Insights | Kirakira Advisory',
    description: 'Practical tips on automation, reporting, spreadsheets, and software integration for accounting professionals.',
    url: 'https://www.kirakiradvisory.com/blog',
    siteName: 'Kirakira Advisory',
    type: 'website',
  },
};

interface BlogPost {
  id: number;
  caption: string;
  imageFileId: string;
  websitePublishedAt: string;
}

async function getPosts(): Promise<BlogPost[]> {
  const url = process.env.BLOG_API_URL;
  if (!url) return [];
  try {
    const res = await fetch(url, { cache: 'no-store' });
    return await res.json();
  } catch {
    return [];
  }
}

function formatDate(iso: string) {
  if (!iso) return '';
  try {
    return new Date(iso).toLocaleDateString('en-MY', {
      day: 'numeric', month: 'long', year: 'numeric',
    });
  } catch { return ''; }
}

function excerpt(caption: string, max = 160) {
  const lines = caption.split('\n').map(l => l.trim()).filter(Boolean);
  const body = lines.slice(1).join(' ') || lines[0] || '';
  return body.length > max ? body.slice(0, max) + '…' : body;
}

function postTitle(caption: string) {
  return caption.split('\n').map(l => l.trim()).filter(Boolean)[0] || '';
}

const PER_PAGE = 9;

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, parseInt(pageParam || '1', 10));
  const allPosts = await getPosts();
  const totalPages = Math.ceil(allPosts.length / PER_PAGE);
  const posts = allPosts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: '#0051BA', position: 'relative', overflow: 'hidden' }} className="px-4 sm:px-6 pt-16 sm:pt-20 pb-16 sm:pb-20">
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,218,26,0.08) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
        <div className="shape-a absolute rounded-full opacity-10" style={{ width: 160, height: 160, backgroundColor: '#FFDA1A', top: '-30px', right: '6%' }} />
        <div className="shape-b absolute rounded-full opacity-10" style={{ width: 90, height: 90, backgroundColor: '#fff', bottom: '8%', left: '5%' }} />
        <div className="max-w-6xl mx-auto relative text-center">
          <p className="badge-in text-sm font-bold tracking-widest uppercase mb-5" style={{ color: '#FFDA1A', opacity: 0 }}>Insights</p>
          <h1 className="fade-up text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-6" style={{ opacity: 0, animationDelay: '0.1s' }}>
            For Accounting<br />Professionals
          </h1>
          <p className="fade-up text-lg sm:text-xl max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.82)', opacity: 0, animationDelay: '0.3s' }}>
            Practical tips on automation, reporting, spreadsheets, and software. No fluff.
          </p>
        </div>
      </section>

      <div className="h-1.5" style={{ backgroundColor: '#FFDA1A' }} />

      {/* Posts */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20" style={{ color: '#666' }}>
              <p className="text-lg">No posts yet. Check back soon.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
              {posts.map(post => (
                <a
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="rounded-2xl overflow-hidden border-2 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  style={{ borderColor: '#E5E7EB' }}
                >
                  {post.imageFileId && (
                    <div className="aspect-square overflow-hidden bg-gray-100">
                      <img
                        src={`https://drive.google.com/thumbnail?id=${post.imageFileId}&sz=w600`}
                        alt={postTitle(post.caption)}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-xs font-bold mb-3" style={{ color: '#0051BA' }}>
                      {formatDate(post.websitePublishedAt)}
                    </p>
                    <p className="text-base font-bold mb-2 leading-snug" style={{ color: '#111' }}>
                      {postTitle(post.caption)}
                    </p>
                    <p className="text-sm leading-relaxed flex-1" style={{ color: '#555' }}>
                      {excerpt(post.caption)}
                    </p>
                    <span className="mt-4 text-sm font-bold" style={{ color: '#0051BA' }}>
                      Read more →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-14">
              {page > 1 && (
                <a href={`/blog?page=${page - 1}`} className="px-4 py-2 rounded-lg text-sm font-semibold border transition hover:opacity-80" style={{ borderColor: '#0051BA', color: '#0051BA' }}>
                  ← Prev
                </a>
              )}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                <a
                  key={p}
                  href={`/blog?page=${p}`}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-sm font-semibold transition"
                  style={p === page ? { backgroundColor: '#0051BA', color: '#fff' } : { border: '1px solid #d1d5db', color: '#555' }}
                >
                  {p}
                </a>
              ))}
              {page < totalPages && (
                <a href={`/blog?page=${page + 1}`} className="px-4 py-2 rounded-lg text-sm font-semibold border transition hover:opacity-80" style={{ borderColor: '#0051BA', color: '#0051BA' }}>
                  Next →
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-gradient py-20 px-4 sm:px-6 text-center" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,218,26,0.07) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
        <div className="max-w-2xl mx-auto relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Want to talk through any of these?</h2>
          <p className="text-lg mb-10" style={{ color: 'rgba(255,255,255,0.8)' }}>Send us a message and we will be happy to discuss how it applies to your team.</p>
          <a
            href="https://wa.me/60173384916"
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
  );
}
