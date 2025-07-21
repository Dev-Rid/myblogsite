import React from 'react';
import BlogCard from './BlogCard';

const BlogList = ({ posts, title }) => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover the latest insights, tutorials, and best practices in web development and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border border-white rounded-lg text-white hover:bg-white hover:text-blue-600 transition-colors duration-200">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogList;