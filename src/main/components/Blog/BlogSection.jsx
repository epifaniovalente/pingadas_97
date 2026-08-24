import { useEffect, useState } from 'react';
import { blog_posts } from '../../data/blog_posts';
import { SectionHead } from '../SectionHead/SectionHead';
import { FaArrowRight } from 'react-icons/fa';

export const BlogSection = () => {
  const [blogPass, setBlogPasts] = useState([]);

  useEffect(() => {
    function getPosts(data) {
      setBlogPasts(data);
    }

    getPosts(blog_posts);
  }, []);

  return (
    <section
      id="blog"
      className="px-6 py-20 bg-[#F5F5F5] border-y-4 border-[#0D0D0D]"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHead n="06" label="Blog" />
        <div className="divide-y-2 divide-[#0D0D0D] border-y-2 border-[#0D0D0D]">
          {blogPass.map((post) => (
            <button
              key={post.n}
              disabled={true}
              type="button"
              className="w-full group flex flex-col gap-2 bg-white py-6 px-2 transition-colors hover:bg-[#0D0D0D] hover:text-white sm:flex-row sm:items-center sm:gap-6 sm:px-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#FF3D00]"
            >
              <span className="font-mono text-xs font-bold text-[#FF3D00] sm:w-10">
                {post.n}
              </span>
              <h3 className="font-display flex-1 text-sm font-bold uppercase">
                {post.title}
              </h3>
              <span className="font-mono text-xs uppercase tracking-wide opacity-60">
                {post.date}
              </span>
              <FaArrowRight className="hidden h-4 w-4 transition-transform group-hover:translate-x-1 sm:block" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
