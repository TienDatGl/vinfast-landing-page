export interface BlogContentItem {
  type: 'paragraph' | 'ul' | 'ol' | 'youtube';
  text?: string;
  items?: string[];
  videoUrl?: string;
}

export interface CarBlog {
  title: string;
  slug: string;
  imageUrl?: string;
  caption?: string;
  content: BlogContentItem[];
  createdAt?: FirebaseFirestore.Timestamp;
  updatedAt?: FirebaseFirestore.Timestamp;
}