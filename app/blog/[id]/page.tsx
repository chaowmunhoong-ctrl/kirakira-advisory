export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';

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

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const posts = await getPosts();
  const post = posts.find(p => String(p.id) === id);
  if (!post) return { title: 'Post Not Found | Kirakira Advisory' };

  const lines = post.caption.split('\n').map(l => l.trim()).filter(Boolean);
  const titleLine = lines[0] || 'Insights | Kirakira Advisory';
  const title = titleLine.length > 60 ? titleLine.slice(0, titleLine.lastIndexOf(' ', 57)) + '…' : titleLine;
  const bodyLines = lines.slice(1);
  const description = (bodyLines.length > 0 ? bodyLines : lines).join(' ').slice(0, 160);
  const image = post.imageFileId
    ? `https://drive.google.com/thumbnail?id=${post.imageFileId}&sz=w1200`
    : undefined;

  return {
    title: `${title} | Kirakira Advisory`,
    description,
    openGraph: {
      title: `${title} | Kirakira Advisory`,
      description,
      url: `https://www.kirakiradvisory.com/blog/${id}`,
      siteName: 'Kirakira Advisory',
      ...(image && { images: [{ url: image, width: 1200, height: 1200 }] }),
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Kirakira Advisory`,
      description,
      ...(image && { images: [image] }),
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const posts = await getPosts();
  const post = posts.find(p => String(p.id) === id);

  if (!post) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center py-20" style={{ color: '#666' }}>
          <p className="text-xl font-semibold mb-4" style={{ color: '#111' }}>Post not found</p>
          <a href="/blog" className="text-sm font-bold" style={{ color: '#0051BA' }}>← Back to Insights</a>
        </div>
      </div>
    );
  }

  const lines = post.caption.split('\n').map(l => l.trim()).filter(Boolean);
  const postTitle = lines[0] || '';
  const bodyText = lines.slice(1).join('\n\n');
  const paragraphs = (bodyText || post.caption).split(/\n\n+/).filter(Boolean);
  const postDescription = paragraphs.join(' ').slice(0, 160);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: postTitle.slice(0, 110),
    description: postDescription,
    datePublished: post.websitePublishedAt,
    publisher: {
      '@type': 'Organization',
      name: 'Kirakira Advisory',
      url: 'https://www.kirakiradvisory.com',
    },
    ...(post.imageFileId && {
      image: `https://drive.google.com/thumbnail?id=${post.imageFileId}&sz=w1200`,
    }),
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero image */}
      {post.imageFileId && (
        <div className="flex justify-center py-8 px-6" style={{ backgroundColor: '#EEF4FF' }}>
          <div className="w-full max-w-lg aspect-square overflow-hidden rounded-2xl">
            <img
              src={`https://drive.google.com/thumbnail?id=${post.imageFileId}&sz=w1200`}
              alt={postTitle.slice(0, 80)}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <section className="py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <a href="/blog" className="text-sm font-bold mb-8 inline-block" style={{ color: '#0051BA' }}>
            ← Back to Insights
          </a>

          <p className="text-sm font-bold mb-6" style={{ color: '#0051BA' }}>
            {formatDate(post.websitePublishedAt)}
          </p>

          {postTitle && (
            <h1 className="text-2xl sm:text-3xl font-bold leading-snug mb-8" style={{ color: '#111' }}>
              {postTitle}
            </h1>
          )}

          <div className="space-y-5">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-base leading-relaxed" style={{ color: '#444', whiteSpace: 'pre-wrap' }}>
                {para}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 p-8 rounded-2xl flex flex-col sm:flex-row items-center gap-6" style={{ backgroundColor: '#EEF4FF', borderLeft: '4px solid #0051BA' }}>
            <div className="flex-1 text-center sm:text-left">
              <p className="font-bold text-base mb-1" style={{ color: '#111' }}>Want to apply this to your practice?</p>
              <p className="text-sm" style={{ color: '#555' }}>Send us a message and we will walk you through how it works for your team.</p>
            </div>
            <a
              href="https://wa.me/60173384916"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-3 px-6 py-3 rounded font-bold text-white hover:opacity-90 transition text-sm"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg viewBox="0 0 32 32" width="18" height="18" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.668 4.797 1.832 6.793L2 30l7.418-1.805A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.556 11.556 0 0 1-5.91-1.617l-.424-.252-4.402 1.07 1.1-4.285-.276-.44A11.556 11.556 0 0 1 4.4 16C4.4 9.59 9.59 4.4 16 4.4S27.6 9.59 27.6 16 22.41 27.6 16 27.6zm6.344-8.676c-.348-.174-2.06-1.016-2.38-1.132-.32-.116-.553-.174-.786.174-.232.347-.9 1.132-1.103 1.365-.203.232-.405.26-.754.086-.348-.174-1.47-.542-2.8-1.726-1.034-.922-1.732-2.06-1.936-2.408-.203-.348-.022-.536.153-.71.157-.156.348-.405.522-.608.174-.202.232-.347.348-.579.116-.232.058-.434-.029-.608-.087-.174-.786-1.896-1.077-2.597-.283-.682-.57-.59-.786-.6l-.67-.012c-.232 0-.608.087-.927.434-.319.348-1.218 1.19-1.218 2.9s1.247 3.363 1.42 3.595c.174.232 2.454 3.747 5.945 5.254.832.36 1.48.574 1.985.734.834.267 1.594.23 2.194.14.67-.1 2.06-.842 2.35-1.656.29-.813.29-1.51.203-1.656-.086-.145-.319-.232-.667-.406z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
