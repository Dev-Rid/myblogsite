import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Tag, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
          <Link
            to="/blog"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const shareUrl = window.location.href;
  const shareTitle = post.title;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="mb-6">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-blue-600`}>
                {post.category}
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime} min read
              </span>
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          {/* Author and Share */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-8">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                <p className="text-sm text-gray-600">{post.author.bio}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600 mr-2">Share:</span>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-blue-500 transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-blue-700 transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Cover Image */}
      <div className="w-full">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-96 object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg prose-blue max-w-none">
          <div
            dangerouslySetInnerHTML={{
              __html: post.content.split('\n').map(paragraph => {
                if (paragraph.startsWith('# ')) {
                  return `<h1 class="text-3xl font-bold text-gray-900 mt-8 mb-4">${paragraph.slice(2)}</h1>`;
                }
                if (paragraph.startsWith('## ')) {
                  return `<h2 class="text-2xl font-bold text-gray-900 mt-6 mb-3">${paragraph.slice(3)}</h2>`;
                }
                if (paragraph.startsWith('### ')) {
                  return `<h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">${paragraph.slice(4)}</h3>`;
                }
                if (paragraph.startsWith('```')) {
                  return paragraph;
                }
                if (paragraph.trim() === '') {
                  return '<br>';
                }
                return `<p class="text-gray-700 leading-relaxed mb-4">${paragraph}</p>`;
              }).join('')
            }}
          />
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-12 p-6 bg-white rounded-lg border border-gray-200">
          <div className="flex items-start space-x-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                About {post.author.name}
              </h3>
              <p className="text-gray-600 mb-4">{post.author.bio}</p>
              <div className="flex space-x-3">
                {post.author.social.twitter && (
                  <a
                    href={`https://twitter.com/${post.author.social.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                )}
                {post.author.social.linkedin && (
                  <a
                    href={`https://linkedin.com/in/${post.author.social.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;