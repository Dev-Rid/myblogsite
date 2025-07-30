import { BlogPost, Author } from '../types/blog';

const authors: Author[] = [
  {
    name: "Sarah Chen",
    bio: "Full-stack developer passionate about React, TypeScript, and modern web technologies. Love sharing knowledge and building amazing user experiences.",
    avatar: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    social: {
      twitter: "sarahchen",
      linkedin: "sarah-chen-dev",
      github: "sarahchen"
    }
  },
  {
    name: "Alex Rodriguez", 
    bio: "UI/UX designer and frontend developer with 8+ years of experience creating beautiful and intuitive digital experiences.",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    social: {
      twitter: "alexrodriguezux",
      linkedin: "alex-rodriguez-ux"
    }
  },
  {
    name: "David Kim",
    bio: "Backend engineer and DevOps specialist focused on scalable architecture, cloud computing, and performance optimization.",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    social: {
      linkedin: "david-kim-backend",
      github: "davidkim-dev"
    }
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "modern-react-patterns-2024",
    title: "Modern React Patterns and Best Practices for 2024",
    excerpt: "Explore the latest React patterns, hooks, and architectural decisions that will make your applications more maintainable and performant in 2024.",
    content: `# Modern React Patterns and Best Practices for 2024

React continues to evolve, and with it, the patterns and practices that help us build better applications. In this comprehensive guide, we'll explore the most effective React patterns for 2024.

## Custom Hooks for Logic Reuse

Custom hooks remain one of the most powerful patterns for sharing logic between components. Here's how to create effective custom hooks:

\`\`\`jsx
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  return [storedValue, setValue];
}
\`\`\`

## Component Composition Patterns

Instead of prop drilling, use composition to create flexible and reusable components:

\`\`\`jsx
function Card({ children, className = '' }) {
  return (
    <div className={\`bg-white rounded-lg shadow-md p-6 \${className}\`}>
      {children}
    </div>
  );
}

function CardHeader({ children }) {
  return <div className="border-b pb-4 mb-4">{children}</div>;
}

function CardContent({ children }) {
  return <div>{children}</div>;
}
\`\`\`

## State Management Best Practices

For complex state management, consider using useReducer with context:

\`\`\`jsx
const AppContext = createContext();

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
}

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
\`\`\`

## Performance Optimization

Use React.memo, useMemo, and useCallback strategically:

\`\`\`jsx
const ExpensiveComponent = React.memo(({ data, onUpdate }) => {
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      calculated: expensiveCalculation(item)
    }));
  }, [data]);

  const handleClick = useCallback((id) => {
    onUpdate(id);
  }, [onUpdate]);

  return (
    <div>
      {processedData.map(item => (
        <div key={item.id} onClick={() => handleClick(item.id)}>
          {item.name}
        </div>
      ))}
    </div>
  );
});
\`\`\`

## Conclusion

These patterns will help you write more maintainable, performant, and scalable React applications. Remember to always measure performance before optimizing and choose patterns that fit your specific use case.`,
    author: authors[0],
    publishedAt: "2024-01-15",
    readTime: 8,
    category: "React",
    tags: ["React", "JavaScript", "Best Practices", "Performance"],
    coverImage: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2",
    featured: true
  },
  {
    id: "tailwind-css-design-system",
    title: "Building a Scalable Design System with Tailwind CSS",
    excerpt: "Learn how to create a comprehensive design system using Tailwind CSS that scales across multiple projects and teams.",
    content: `# Building a Scalable Design System with Tailwind CSS

Design systems are crucial for maintaining consistency across large applications and teams. Tailwind CSS provides an excellent foundation for building scalable design systems.

## Setting Up Your Design Foundation

Start by customizing your \`tailwind.config.js\` with your brand colors and typography:

\`\`\`javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#faf5ff',
          500: '#8b5cf6',
          900: '#581c87',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    }
  }
}
\`\`\`

## Component Abstraction

Create reusable component classes using Tailwind's \`@apply\` directive:

\`\`\`css
@layer components {
  .btn {
    @apply px-4 py-2 rounded-md font-medium transition-colors duration-200;
  }
  
  .btn-primary {
    @apply bg-primary-500 text-white hover:bg-primary-600;
  }
  
  .btn-secondary {
    @apply bg-gray-200 text-gray-900 hover:bg-gray-300;
  }
}
\`\`\`

## Conclusion

A well-structured design system with Tailwind CSS can significantly improve development velocity and design consistency across your projects.`,
    author: authors[1],
    publishedAt: "2024-01-12",
    readTime: 6,
    category: "Design",
    tags: ["Tailwind CSS", "Design System", "CSS", "UI/UX"],
    coverImage: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2",
    featured: true
  },
  {
    id: "typescript-advanced-patterns",
    title: "Advanced TypeScript Patterns for React Applications",
    excerpt: "Master advanced TypeScript patterns that will make your React applications more type-safe and maintainable.",
    content: `# Advanced TypeScript Patterns for React Applications

TypeScript brings powerful type safety to React applications. Let's explore advanced patterns that will level up your development experience.

## Generic Components

Create flexible, reusable components with generics:

\`\`\`typescript
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <ul>
      {items.map((item) => (
        <li key={keyExtractor(item)}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}
\`\`\`

## Discriminated Unions

Handle different states elegantly:

\`\`\`typescript
type AsyncState<T> = 
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string };

function DataComponent() {
  const [state, setState] = useState<AsyncState<User[]>>({ status: 'idle' });

  switch (state.status) {
    case 'loading':
      return <div>Loading...</div>;
    case 'success':
      return <div>{state.data.length} users loaded</div>;
    case 'error':
      return <div>Error: {state.error}</div>;
    default:
      return <button onClick={loadData}>Load Data</button>;
  }
}
\`\`\`

## Utility Types

Leverage TypeScript's built-in utility types:

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

// Create a type for user creation (without id)
type CreateUser = Omit<User, 'id'>;

// Create a partial update type
type UpdateUser = Partial<Pick<User, 'name' | 'email'>>;

// Extract specific props
type UserRole = User['role'];
\`\`\`

These patterns will help you write more robust and maintainable TypeScript React applications.`,
    author: authors[0],
    publishedAt: "2024-01-10",
    readTime: 7,
    category: "TypeScript",
    tags: ["TypeScript", "React", "Advanced Patterns", "Type Safety"],
    coverImage: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2"
  },
  {
    id: "web-performance-optimization",
    title: "Web Performance Optimization: From 0 to 100",
    excerpt: "Complete guide to optimizing web application performance, covering everything from bundle size to runtime optimizations.",
    content: `# Web Performance Optimization: From 0 to 100

Performance is crucial for user experience and business success. Let's explore comprehensive strategies for optimizing web applications.

## Bundle Optimization

Start with analyzing and optimizing your bundle:

\`\`\`bash
# Analyze your bundle
npm install --save-dev webpack-bundle-analyzer
npm run build -- --analyze
\`\`\`

### Code Splitting

Implement route-based and component-based code splitting:

\`\`\`javascript
// Route-based splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

// Component-based splitting
const HeavyComponent = lazy(() => import('./components/HeavyComponent'));
\`\`\`

## Image Optimization

Optimize images for better performance:

\`\`\`jsx
// Use modern image formats
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <source srcSet="image.jpg" type="image/jpeg" />
  <img src="image.jpg" alt="Description" loading="lazy" />
</picture>
\`\`\`

## Runtime Performance

Optimize React rendering:

\`\`\`jsx
// Virtualization for large lists
import { FixedSizeList as List } from 'react-window';

function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].name}
    </div>
  );

  return (
    <List
      height={600}
      itemCount={items.length}
      itemSize={50}
    >
      {Row}
    </List>
  );
}
\`\`\`

## Conclusion

Performance optimization is an ongoing process. Start with measuring, identify bottlenecks, and apply targeted optimizations.`,
    author: authors[2],
    publishedAt: "2024-01-08",
    readTime: 10,
    category: "Performance",
    tags: ["Performance", "Optimization", "Web Development", "React"],
    coverImage: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2"
  },
  {
    id: "modern-css-features",
    title: "Modern CSS Features You Should Be Using Today",
    excerpt: "Discover the latest CSS features that are changing how we build user interfaces, from container queries to cascade layers.",
    content: `# Modern CSS Features You Should Be Using Today

CSS continues to evolve with powerful new features that make styling more intuitive and maintainable. Let's explore the most impactful modern CSS features.

## Container Queries

Style components based on their container size, not the viewport:

\`\`\`css
.card-container {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 300px) {
  .card {
    display: flex;
    gap: 1rem;
  }
  
  .card img {
    width: 100px;
    height: 100px;
  }
}
\`\`\`

## CSS Grid Subgrid

Create more flexible grid layouts:

\`\`\`css
.main-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.card {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
}
\`\`\`

## Cascade Layers

Organize your CSS with explicit cascade control:

\`\`\`css
@layer reset, base, components, utilities;

@layer base {
  body {
    font-family: system-ui;
    line-height: 1.6;
  }
}

@layer components {
  .button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
  }
}
\`\`\`

## CSS Nesting

Write more organized stylesheets:

\`\`\`css
.navigation {
  background: white;
  
  ul {
    display: flex;
    gap: 1rem;
    
    li {
      list-style: none;
      
      a {
        text-decoration: none;
        color: #333;
        
        &:hover {
          color: #007bff;
        }
      }
    }
  }
}
\`\`\`

## Conclusion

These modern CSS features provide powerful tools for creating more maintainable and flexible stylesheets. Start incorporating them into your projects today!`,
    author: authors[1],
    publishedAt: "2024-01-05",
    readTime: 5,
    category: "CSS",
    tags: ["CSS", "Modern Web", "Frontend", "Styling"],
    coverImage: "https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2"
  }
];

export const categories = [
  { id: 'react', name: 'React', description: 'React.js tutorials and best practices', color: 'bg-blue-500' },
  { id: 'typescript', name: 'TypeScript', description: 'TypeScript patterns and advanced features', color: 'bg-blue-600' },
  { id: 'design', name: 'Design', description: 'UI/UX design and design systems', color: 'bg-purple-500' },
  { id: 'performance', name: 'Performance', description: 'Web performance optimization techniques', color: 'bg-green-500' },
  { id: 'css', name: 'CSS', description: 'Modern CSS features and techniques', color: 'bg-pink-500' }
];