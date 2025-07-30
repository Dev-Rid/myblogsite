import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1000);
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
        <CheckCircle className="h-12 w-12 text-white mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">
          You're all set! 🎉
        </h3>
        <p className="text-blue-100">
          Thank you for subscribing. You'll receive our latest posts and updates.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
      <div className="text-center mb-6">
        <Mail className="h-12 w-12 text-white mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">
          Stay Updated
        </h3>
        <p className="text-blue-100">
          Get the latest posts and insights delivered directly to your inbox.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-gray-900"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
        <p className="text-xs text-blue-200 text-center">
          No spam, unsubscribe at any time.
        </p>
      </form>
    </div>
  );
};

export default Newsletter;