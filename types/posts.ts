export interface Posts {
  [x: string]: any;
  author: {
    name: string;
    id: string;
    bio: string;
    photo: { url: string };
  };
  createdAt: string;
  slug: string;
  title: string;
  description: string;
  featuredImage: { url: string };
  categories: [[]];
  content: { raw: string; html: string };
}
