type BlogPost = {
  cursor: string;
  node: {
    author: Author; // You can specify the author's type as needed
    createdAt: string;
    slug: string;
    title: string;
    excerpt: string;
    recomanded: boolean;
    topPick: boolean;
    featuredImage: { url: string }; // You can specify the featured image's type as needed
    categories: { name: string; slug: string }[]; // You can specify the categories' type as needed
  };
};

type Author = {
  bio: string;
  name: string;
  id: string;
  photo: string | null;
};

type PostContent = {
  raw: {
    children: Array<{
      type: string;
      children: Array<{
        text: string;
        href?: string;
        type?: string;
        openInNewTab?: boolean;
        // You can add more properties as needed
      }>;
      // You can add more properties as needed
    }>;
  };
};

type PostCategory = {
  name: string;
  slug: string;
};

type FeaturedImage = {
  url: string;
};

type DetailedPost = {
  title: string;
  excerpt: string;
  featuredImage: FeaturedImage;
  author: Author;
  createdAt: string;
  slug: string;
  content: PostContent;
  categories: PostCategory[];
};

type CommentType = {
  name: string;
  email: string;
  comment: string;
};
