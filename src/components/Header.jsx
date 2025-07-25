import React, { useState } from 'react';
import { Search, Menu, X, BookOpen } from 'lucide-react';

const Header = ({ onSearch, onNavigation, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'Articles', page: 'articles' },
    { name: 'Categories', page: 'categories' },
    { name: 'About', page: 'about' },
    { name: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page) => {
    onNavigation(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-blue-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
          >
            <BookOpen className="h-7 w-7 text-white" />
            <span className="text-xl font-bold text-white">DevBiola</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.page)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.page
                    ? 'text-white border-b-2 border-white pb-1'
                    : 'text-blue-200 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}

            {/* Search (only on Home) */}
            {currentPage === 'home' && (
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center ml-4"
              >
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-500" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 rounded-md bg-white w-64 text-sm border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  />
                </div>
              </form>
            )}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-blue-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-800 border-t border-blue-700">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.page)}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === item.page
                    ? 'text-white bg-blue-700'
                    : 'text-blue-200 hover:text-white hover:bg-blue-700'
                }`}
              >
                {item.name}
              </button>
            ))}

            {currentPage === 'home' && (
              <form onSubmit={handleSearchSubmit} className="pt-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-500" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-blue-300 rounded-md text-sm focus:ring-2 focus:ring-blue-400 bg-white transition"
                  />
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
