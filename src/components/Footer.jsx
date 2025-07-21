import React from 'react';
import { BookOpen, Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-200" />
              <span className="text-2xl font-bold">DevBlog</span>
            </div>
            <p className="text-blue-100">
              Your trusted source for web development insights, tutorials, and industry best practices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Articles</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Categories</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Technology</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Development</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Design</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Backend</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Process</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-blue-100">
              <li>contact@devblog.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Tech Street<br />San Francisco, CA 94105</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-500 mt-8 pt-8 text-center text-blue-100">
          <p>&copy; 2024 DevBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;