export const blogPosts = [
  {
    id: '1',
    title: 'The Future of Web Development: Trends to Watch in 2025',
    slug: 'future-web-development-2025',
    excerpt: 'Explore the cutting-edge technologies and methodologies that will shape web development in the coming year.',
    content: 'Web development continues to evolve at a rapid pace...',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'Senior Frontend Developer with 8+ years of experience'
    },
    publishedAt: '2024-12-15',
    readingTime: 8,
    tags: ['Web Development', 'Technology', 'Future'],
    category: 'Technology',
    featured: true,
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    title: 'Mastering React Hooks: Advanced Patterns and Best Practices',
    slug: 'mastering-react-hooks',
    excerpt: 'Deep dive into advanced React hooks patterns that will elevate your component architecture.',
    content: 'React hooks have revolutionized how we write components...',
    author: {
      name: 'Mike Chen',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'React specialist and technical writer'
    },
    publishedAt: '2024-12-10',
    readingTime: 12,
    tags: ['React', 'JavaScript', 'Hooks'],
    category: 'Development',
    featured: false,
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    title: 'Building Scalable APIs with Node.js and Express',
    slug: 'scalable-apis-nodejs',
    excerpt: 'Learn how to architect robust, scalable APIs that can handle millions of requests efficiently.',
    content: 'Building scalable APIs requires careful planning and architecture...',
    author: {
      name: 'Emma Wilson',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'Backend architect and API design expert'
    },
    publishedAt: '2024-12-08',
    readingTime: 10,
    tags: ['Node.js', 'API', 'Backend'],
    category: 'Backend',
    featured: true,
    image: 'https://images.pexels.com/photos/11035540/pexels-photo-11035540.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    title: 'CSS Grid vs Flexbox: When to Use Each',
    slug: 'css-grid-vs-flexbox',
    excerpt: 'Understanding the differences between CSS Grid and Flexbox to make informed layout decisions.',
    content: 'CSS Grid and Flexbox are both powerful layout systems...',
    author: {
      name: 'Alex Rodriguez',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'CSS specialist and UI/UX designer'
    },
    publishedAt: '2024-12-05',
    readingTime: 6,
    tags: ['CSS', 'Layout', 'Design'],
    category: 'Design',
    featured: false,
    image: 'https://images.pexels.com/photos/11035384/pexels-photo-11035384.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '5',
    title: 'TypeScript Best Practices for Large-Scale Applications',
    slug: 'typescript-best-practices',
    excerpt: 'Essential TypeScript patterns and practices for maintaining large codebases effectively.',
    content: 'TypeScript has become the standard for large-scale JavaScript applications...',
    author: {
      name: 'David Park',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'TypeScript advocate and software architect'
    },
    publishedAt: '2024-12-03',
    readingTime: 9,
    tags: ['TypeScript', 'JavaScript', 'Architecture'],
    category: 'Development',
    featured: false,
    image: 'https://images.pexels.com/photos/11035445/pexels-photo-11035445.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '6',
    title: 'The Art of Code Review: Best Practices for Teams',
    slug: 'code-review-best-practices',
    excerpt: 'Effective code review strategies that improve code quality and team collaboration.',
    content: 'Code reviews are a crucial part of the development process...',
    author: {
      name: 'Lisa Thompson',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'Engineering manager and code quality advocate'
    },
    publishedAt: '2024-12-01',
    readingTime: 7,
    tags: ['Code Review', 'Team', 'Process'],
    category: 'Process',
    featured: false,
    image: 'https://images.pexels.com/photos/11035497/pexels-photo-11035497.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const categories = [
  { id: '1', name: 'Technology', count: 15, color: 'bg-blue-100 text-blue-800' },
  { id: '2', name: 'Development', count: 23, color: 'bg-green-100 text-green-800' },
  { id: '3', name: 'Design', count: 12, color: 'bg-purple-100 text-purple-800' },
  { id: '4', name: 'Backend', count: 8, color: 'bg-orange-100 text-orange-800' },
  { id: '5', name: 'Process', count: 6, color: 'bg-pink-100 text-pink-800' }
];

export const popularTags = [
  'JavaScript', 'React', 'TypeScript', 'Node.js', 'CSS', 'API', 'Design',
  'Performance', 'Security', 'Testing', 'DevOps', 'UI/UX'
];