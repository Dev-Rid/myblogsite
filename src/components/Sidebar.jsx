import React from 'react';
import { TrendingUp, Tag, FolderOpen } from 'lucide-react';

const Sidebar = ({ categories, popularTags, onCategoryFilter }) => {
  return (
    <aside className="space-y-8">
      {/* Categories */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center space-x-2 mb-4">
          <FolderOpen className="h-5 w-5 text-blue-700" />
          <h3 className="text-lg font-semibold text-blue-900">Categories</h3>
        </div>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryFilter(category.name)}
              className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-left"
            >
              <span className="text-blue-800">{category.name}</span>
              <span className="text-sm text-blue-600">({category.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Tag className="h-5 w-5 text-blue-700" />
          <h3 className="text-lg font-semibold text-blue-900">Popular Tags</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <button
              key={tag}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 hover:text-blue-900 transition-colors duration-200 text-sm"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="h-5 w-5 text-blue-700" />
          <h3 className="text-lg font-semibold text-blue-900">Stay Updated</h3>
        </div>
        <p className="text-blue-700 mb-4">
          Get the latest articles and insights delivered to your inbox.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors duration-200 font-medium"
          >
            Subscribe
          </button>
        </form>
      </div>
    </aside>
  );
};

export default Sidebar;