import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogCard = ({ post }) => {
  return (
    <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${post.category === 'Technology' ? 'bg-blue-800 text-white' :
            post.category === 'Development' ? 'bg-blue-700 text-white' :
            post.category === 'Design' ? 'bg-blue-600 text-white' :
            post.category === 'Backend' ? 'bg-blue-900 text-white' :
            'bg-blue-950 text-white'
            }`}>
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-blue-900 line-clamp-2 group-hover:text-blue-700 transition-colors duration-200">
              {post.title}
            </h3>
            <p className="text-blue-700 line-clamp-3">{post.excerpt}</p>
          </div>

          <div className="flex items-center space-x-4 text-sm text-blue-600">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-sm hover:bg-blue-200 transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-blue-100">
            <div className="flex items-center space-x-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm font-medium text-blue-900">{post.author.name}</span>
            </div>
            <button className="inline-flex items-center space-x-1 text-blue-700 hover:text-blue-800 transition-colors duration-200 group">
              <span className="text-sm font-medium">Read more</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;