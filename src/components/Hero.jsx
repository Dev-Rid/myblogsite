import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
// import { blogPosts } from "../data/blogData"

import { blogPosts, categories, popularTags } from '../data/blogData';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
  const featuredPost = blogPosts[0]; // Assuming first one is featured

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-4 py-2 bg-white text-blue-900 rounded-full text-sm font-medium">
                  Featured Article
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  {featuredPost.title}
                </h1>
                <p className="text-xl text-blue-100">{featuredPost.excerpt}</p>
              </div>

              <div className="flex items-center space-x-6 text-blue-200">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>{new Date(featuredPost.publishedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{featuredPost.readingTime} min read</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <img src={featuredPost.author.avatar} alt={featuredPost.author.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-medium">{featuredPost.author.name}</p>
                  <p className="text-blue-100 text-sm">{featuredPost.author.bio}</p>
                </div>
              </div>

              <button className="inline-flex items-center space-x-2 bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                <span className="font-medium">Read Article</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex gap-2 flex-wrap">
                  {featuredPost.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/20 text-white rounded-full text-sm backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog List Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-4 gap-12">
          {/* Articles */}
          <div className="lg:col-span-3 space-y-10">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">Latest Articles</h2>
              <p className="text-blue-100">Discover the latest insights, tutorials, and best practices in web development and technology.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-white bgblue-100 text-blue-900 rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                  <img src={post.image} alt={post.title} className="h-40 w-full object-cover" />
                  <div className="p-5">
                    <span className="text-xs font-medium inline-block px-3 py-1 mb-2 rounded-full bg-blue-100 text-blue-800">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-semibold leading-snug line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-xs text-gray-500 mt-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readingTime} min read
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center mt-4">
                      <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full mr-2" />
                      <div className="text-sm ">
                        <p className="font-medium">{post.author.name}</p>
                        <p className="text-xs text-gray-500">Read more</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="border border-white hover:bg-white hover:text-blue-900 text-white px-6 py-2 rounded transition">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <div className="bg-white text-blue-900 p-5 rounded-xl shadow">
              <h4 className="text-lg font-semibold mb-4">Categories</h4>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat.id} className="flex justify-between items-center">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${cat.color}`}>{cat.name}</span>
                    <span className="text-sm font-medium">{cat.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="bg-white text-blue-900 p-5 rounded-xl shadow">
              <h4 className="text-lg font-semibold mb-4">Popular Tags</h4>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <span key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-blue-100 text-blue-900 p-5 rounded-xl shadow">
              <h4 className="text-lg font-semibold mb-2 ">Stay Updated</h4>
              <p className="text-sm text-gray-600 mb-4">Get the latest articles and insights delivered to your inbox.</p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg text-sm mb-3"
              />
              <button className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
