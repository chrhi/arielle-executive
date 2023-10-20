type BlogPost = {
  cursor: string;
  node: {
    author: {
      bio: string;
      name: string;
      id: string;
      photo: string | null;
    }; // You can specify the author's type as needed
    createdAt: string;
    slug: string;
    title: string;
    excerpt: string;
    featuredImage: { url: string }; // You can specify the featured image's type as needed
    categories: { name: string; slug: string }[]; // You can specify the categories' type as needed
  };
};
