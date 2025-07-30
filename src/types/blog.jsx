export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  publishedAt: string;
  readTime: number;
  category: string;
  tags: string[];
  coverImage: string;
  featured?: boolean;
}

export interface Author {
  name: string;
  bio: string;
  avatar: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Category {
  id: string;
  name: string;
  description: string;
  color: string;
}