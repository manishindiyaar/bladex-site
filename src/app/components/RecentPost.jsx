'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { PinContainer } from './ui/Pin';

export default function RecentPost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const response = await fetch('/api/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setPosts(data.slice(0, 3));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section id="blogs" className="py-20 w-full">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="heading">
            A small selection of{" "}
            <span className="text-purple">Recent Blogs</span>
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="lg:min-h-[20rem] h-[18rem] flex items-center justify-center w-full">
                <div className="animate-pulse bg-zinc-800/50 rounded-lg w-[20rem] h-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <div>
        <div className="text-center text-red-500 mt-10">
          Failed to load blog posts. Please try again later.
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div>
        <div className="text-center text-zinc-400 mt-10">
          No blog posts found.
        </div>
      </div>
    );
  }

  return (
    <section id="blogs" className="py-20 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="heading">
          A small selection of{" "}
          <span className="text-purple">Recent Blogs</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
          {posts.map((post) => (
            <div key={post.id} className="lg:min-h-[20rem] h-[18rem] flex items-center justify-center w-full">
              <PinContainer 
                title={post.title} 
                href={`/blog/${post.id}`}
                className="lg:min-h-[20rem] h-[18rem] flex items-center justify-center w-full"
              >
                <div className="flex flex-col gap-2 w-[20rem] p-2">
                  <h3 className="text-xl font-semibold text-white/80 mb-6">{post.description}</h3>
                  <p className="text-zinc-400 text-sm mb-8">{post.date}</p>
                  {post.tags && (
                    <div className="flex gap-2 flex-wrap mt-auto">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-zinc-800/50 text-zinc-300 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link 
            href="/blog"
            className="group relative px-8 py-3 text-white transition-colors hover:text-white/90"
          >
            <span className="relative z-10">
              View All Posts
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                → 
              </span>
            </span>
            <div className="absolute inset-0 -z-10 scale-[0.8] rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 transition-all group-hover:scale-[1.2] group-hover:opacity-100" />
            <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600" />
          </Link>
        </div>
      </div>
    </section>
  );
}