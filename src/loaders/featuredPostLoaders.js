// loaders/featuredPostLoader.js
export const fetchFeaturedPost = async () => {
  // Simulate API call or static object
  return {
    title: "Understanding React Router",
    excerpt: "A guide to navigating modern React applications.",
    image: "/images/hero-banner.jpg",
    publishedAt: "2025-07-01",
    readingTime: 5,
    tags: ["React", "Routing", "Frontend"],
    author: {
      name: "Ridwan Ajibade",
      avatar: "/images/avatar.jpg",
      bio: "Full-stack developer & blogger",
    },
  }
};
