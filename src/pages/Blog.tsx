import React from 'react';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../constants';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  return (
    <div className="pt-32 pb-24 px-6 bg-gray-50/30 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Travel Journals</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 font-serif">
            Latest from <span className="italic text-blue-500">The Loop</span>
          </h1>
          <p className="text-gray-500 leading-relaxed text-lg">
            Tips, stories, and inspiration from our global network of travelers and curators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BLOG_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] mb-8 shadow-sm border border-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-black text-gray-900 uppercase tracking-widest shadow-sm">
                  Experience
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-blue-500" />
                  {post.author}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-8 grow">
                {post.excerpt}
              </p>

              <Link
                to={`/blog/${post.id}`}
                className="inline-flex items-center gap-2 text-gray-900 font-bold group-hover:text-blue-600 transition-colors"
              >
                Read Fully <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
