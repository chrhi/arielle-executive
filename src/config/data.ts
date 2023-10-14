interface Post {
  imageUrl: string;
  title: string;
  description: string;
  author: string;
  publishedAt: Date;
}

export const posts: Post[] = [
  {
    imageUrl: "image-url-1.jpg",
    title: "The Art of Affiliate Marketing",
    description:
      "Learn the strategies and techniques to excel in affiliate marketing.",
    author: "John Doe",
    publishedAt: new Date("2023-10-14"),
  },
  {
    imageUrl: "image-url-2.jpg",
    title: "SEO Secrets for Affiliate Success",
    description:
      "Unlock the power of SEO to boost your affiliate marketing game.",
    author: "Jane Smith",
    publishedAt: new Date("2023-10-10"),
  },
  {
    imageUrl: "image-url-3.jpg",
    title: "Maximizing Conversions in Affiliate Programs",
    description:
      "Discover how to optimize your conversions and increase earnings.",
    author: "Mike Johnson",
    publishedAt: new Date("2023-10-05"),
  },
  {
    imageUrl: "image-url-4.jpg",
    title: "Affiliate Marketing Case Study: $10,000 in 30 Days",
    description: "Explore a real success story and the strategies behind it.",
    author: "Sarah Brown",
    publishedAt: new Date("2023-09-28"),
  },
  {
    imageUrl: "image-url-5.jpg",
    title: "The Power of Email Marketing in Affiliate Programs",
    description:
      "Harness the potential of email marketing for affiliate success.",
    author: "David Anderson",
    publishedAt: new Date("2023-09-20"),
  },
  {
    imageUrl: "image-url-6.jpg",
    title: "Affiliate Marketing Trends to Watch in 2023",
    description: "Stay ahead of the game with these emerging trends.",
    author: "Emily Wilson",
    publishedAt: new Date("2023-09-15"),
  },
  {
    imageUrl: "image-url-7.jpg",
    title: "Affiliate Marketing Ethics: A Guide for Marketers",
    description: "Explore the ethical considerations in affiliate marketing.",
    author: "Mark Thompson",
    publishedAt: new Date("2023-09-10"),
  },
  {
    imageUrl: "image-url-8.jpg",
    title: "Affiliate Marketing Mistakes to Avoid at All Costs",
    description: "Learn from common pitfalls to navigate your way to success.",
    author: "Laura Miller",
    publishedAt: new Date("2023-09-05"),
  },
];

export const blogCategories: string[] = [
  "Content Marketing",
  "SEO Strategies",
  "Conversion Optimization",
  "Product Reviews",
];
