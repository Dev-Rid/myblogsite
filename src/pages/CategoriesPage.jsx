import React from 'react';
import { FolderOpen, ArrowRight, Calendar, BookOpen } from 'lucide-react';
import { categories, blogPosts } from '../data/blogData';

const CategoriesPage = () => {
  const getCategoryPosts = (categoryName) => {
    return blogPosts.filter(post => post.category === categoryName);
  };

  const getCategoryStats = (categoryName) => {
    const posts = getCategoryPosts(categoryName);
    const totalReadTime = posts.reduce((sum, post) => sum + post.readingTime, 0);
    const latestPost = posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))[0];
    
    return {
      totalPosts: posts.length,
      totalReadTime,
      latestPost: latestPost ? new Date(latestPost.publishedAt).toLocaleDateString() : 'No posts'
    };
  };

  return (
    <div className="min-h-screen bg-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Categories</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Explore our content organized by topics. Find exactly what you're looking for.
          </p>
        </div>

        {/* Categories Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category) => {
            const stats = getCategoryStats(category.name);
            const recentPosts = getCategoryPosts(category.name)
              .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
              .slice(0, 3);

            return (
              <div key={category.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <FolderOpen className="h-8 w-8 text-blue-700" />
                      <h2 className="text-2xl font-bold text-blue-900">{category.name}</h2>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
                      {stats.totalPosts} articles
                    </span>
                  </div>

                  {/* Category Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <BookOpen className="h-5 w-5 text-blue-700 mx-auto mb-1" />
                      <div className="text-lg font-semibold text-blue-900">{stats.totalPosts}</div>
                      <div className="text-sm text-blue-600">Articles</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <Calendar className="h-5 w-5 text-blue-700 mx-auto mb-1" />
                      <div className="text-lg font-semibold text-blue-900">{stats.totalReadTime}</div>
                      <div className="text-sm text-blue-600">Min Read</div>
                    </div>
                  </div>

                  {/* Recent Posts */}
                  <div className="space-y-3 mb-6">
                    <h3 className="font-semibold text-blue-800">Recent Articles:</h3>
                    {recentPosts.map((post) => (
                      <div key={post.id} className="flex items-start space-x-3 p-2 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-blue-900 line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-blue-600 mt-1">
                            {new Date(post.publishedAt).toLocaleDateString()} • {post.readingTime} min
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* View All Button */}
                  <button className="w-full bg-blue-900 text-white py-3 px-4 rounded-lg hover:bg-blue-800 transition-colors duration-200 font-medium flex items-center justify-center space-x-2">
                    <span>View All {category.name} Articles</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Category Statistics */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Content Overview</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">{blogPosts.length}</div>
              <div className="text-blue-600">Total Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">{categories.length}</div>
              <div className="text-blue-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">
                {blogPosts.reduce((sum, post) => sum + post.readingTime, 0)}
              </div>
              <div className="text-blue-600">Minutes of Content</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">
                {new Set(blogPosts.flatMap(post => post.tags)).size}
              </div>
              <div className="text-blue-600">Unique Tags</div>
            </div>
          </div>
        </div>

        {/* Popular Tags Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Popular Topics</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {Array.from(new Set(blogPosts.flatMap(post => post.tags)))
                .sort()
                .map((tag) => (
                  <button
                    key={tag}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 hover:text-blue-900 transition-colors duration-200 font-medium"
                  >
                    {tag}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;