import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BlogList from './components/BlogList';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
// import { blogPosts } from './data/blogData';
import { blogPosts, categories, popularTags } from './data/blogData';


const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === '' || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
  };

return (
      <div className="min-h-screen bg-blue-900">
      <Header onSearch={handleSearch} />
      
      <main>
        <Hero featuredPost={featuredPost} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <BlogList 
                posts={filteredPosts} 
                title={selectedCategory ? `${selectedCategory} Articles` : 'Latest Articles'} 
              />
            </div>
            
            <div className="lg:col-span-1">
              <Sidebar 
                categories={categories}
                popularTags={popularTags}
                onCategoryFilter={handleCategoryFilter}
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default App