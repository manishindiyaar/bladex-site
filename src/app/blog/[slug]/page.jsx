import { getPostData } from '../../lib/blog';
import { FloatingNav } from "../../components/ui/FloatingNavbar";
import { navItems } from '../../data/index';
import Head from 'next/head'; // Import Head from next/head

export default async function Post({ params }) {
  const { slug } = await params;

  const postData = await getPostData(slug);

  return (
    <div className="min-h-screen bg-black py-20">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Sour+Gummy:ital,wght@0,200;1,200&family=Yusei+Magic&display=swap" rel="stylesheet" />
      </Head>
      <FloatingNav navItems={navItems} />
      
      <article className="container mx-auto px-4 prose prose-invert max-w-4xl md:prose-lg mt-20" style={{ fontFamily: 'Yusei Magic, serif' }}> {/* Apply the font here */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-600">
            {postData.title}
          </h1>
          <div className="text-zinc-400 mb-6">{postData.date}</div>
          {postData.tags && (
            <div className="flex gap-2 flex-wrap">
              {postData.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-zinc-800/50 text-zinc-300 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {/* Render the Markdown content including images */}
        <div 
          className="prose prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        />
      </article>
    </div>
  );
}