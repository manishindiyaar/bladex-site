import { getSortedPostsData } from '../lib/blog';
import Link from 'next/link';
import { PinContainer } from '../components/ui/Pin';
import { FloatingNav } from "../components/ui/FloatingNavbar";

const navItems = [
    { name: "Home", link: "/" },  
    { name: "Blogs", link: "/blog" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];

export default async function BlogPage() {
  const posts = await getSortedPostsData();

  return (
    <div className="min-h-screen w-full py-12">
      <FloatingNav navItems={navItems} />
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-5xl font-extrabold text-white sm:text-6xl">
            Blog
            <span className="relative whitespace-nowrap text-purple">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute left-0 top-2/3 h-[0.58em] w-full fill-purple/20"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative ml-4">Posts</span>
            </span>
          </h1>
          <p className="text-lg leading-7 text-zinc-400">
            Thoughts, ideas, and discoveries from my journey in tech and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <div key={post.id} className="group relative flex flex-col space-y-3">
              <div className="h-[25rem] w-full">
                <PinContainer 
                  title={post.title}
                  href={`/blog/${post.id}`}
                >
                  <Link href={`/blog/${post.id}`} className="block h-full">
                    <div className="p-4 relative flex flex-col h-full max-w-xl mx-auto">
                      <h2 className="font-bold text-2xl mb-2 text-zinc-100">
                        {post.title}
                      </h2>
                      <p className="text-zinc-400 flex-grow">
                        {post.description}
                      </p>
                      <div className="mt-auto flex items-center justify-between">
                        <p className="text-sm text-zinc-400">{post.date}</p>
                        {post.tags && (
                          <div className="flex gap-2 flex-wrap">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-zinc-800/50 text-zinc-300 rounded-full text-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </PinContainer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}