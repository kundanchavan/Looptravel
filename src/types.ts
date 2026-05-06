export interface Package {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  category: 'domestic' | 'international';
  featured?: boolean;
  itinerary: string[];
  inclusions: string[];
  exclusions: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
