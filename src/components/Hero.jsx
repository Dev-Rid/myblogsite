import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const Hero = ({ featuredPost }) => {
  return (
    <section className="relative bg-blue-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-white text-blue-900 rounded-full text-sm font-medium">
                Featured Article
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                {featuredPost.title}
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                {featuredPost.excerpt}
              </p>
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
              <img
                src={featuredPost.author.avatar}
                alt={featuredPost.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-white">{featuredPost.author.name}</p>
                <p className="text-blue-100">{featuredPost.author.bio}</p>
              </div>
            </div>

            <button className="inline-flex items-center space-x-2 bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 group">
              <span className="font-medium">Read Article</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex flex-wrap gap-2">
                  {featuredPost.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;