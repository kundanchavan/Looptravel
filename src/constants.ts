import { Package, BlogPost, Testimonial } from './types';

export const PACKAGES: Package[] = [
  {
    id: 'pkg-1',
    title: 'Serene Bali Escape',
    description: 'Experience the magic of Bali with its stunning beaches and vibrant culture.',
    price: 1299,
    duration: '7 Days / 6 Nights',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
    category: 'international',
    featured: true,
    itinerary: ['Arrival in Ubud', 'Ubud Art Market & Rice Terrace', 'Mount Batur Sunrise Hike', 'Transfer to Seminyak', 'Beach Day', 'Uluwatu Temple', 'Departure'],
    inclusions: ['Luxury Accommodation', 'Daily Breakfast', 'Private Guide', 'Airport Transfers'],
    exclusions: ['International Flights', 'Travel Insurance', 'Personal Expenses']
  },
  {
    id: 'pkg-2',
    title: 'Royal Rajasthan Journey',
    description: 'Discover the land of kings, magnificent forts, and colorful deserts.',
    price: 899,
    duration: '10 Days / 9 Nights',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800',
    category: 'domestic',
    featured: true,
    itinerary: ['Jaipur Arrival', 'Amber Fort & Jal Mahal', 'Jodhpur - The Blue City', 'Mehrangarh Fort', 'Jaisalmer Desert Safari', 'Udaipur - City of Lakes', 'Lake Pichola Boating', 'Departure'],
    inclusions: ['Heritage Hotel Stay', 'Breakfast & Dinner', 'Desert Camping', 'Sightseeing Transfers'],
    exclusions: ['Lunches', 'Entry Fees to Monuments', 'Tips']
  },
  {
    id: 'pkg-3',
    title: 'Swiss Alps adventure',
    description: 'Breathtaking landscapes, snowy peaks, and the best chocolate in the world.',
    price: 2499,
    duration: '8 Days / 7 Nights',
    image: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&q=80&w=800',
    category: 'international',
    featured: false,
    itinerary: ['Zurich Arrival', 'Lucerne City Tour', 'Mount Titlis Excursion', 'Interlaken Stay', 'Jungfraujoch - Top of Europe', 'Bern Day Trip', 'Departure'],
    inclusions: ['Swiss Pass (8 Days)', '4-Star Hotels', 'Mount Titlis Ticket', 'Breakfast'],
    exclusions: ['Visa Fees', 'Jungfraujoch Ticket (Supplement)', 'Dinner']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: '10 Tips for Solo Travel in Europe',
    excerpt: 'Traveling alone can be daunting, but these tips will make your journey smooth and memorable.',
    content: 'Full content here...',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800',
    date: '2024-03-15',
    author: 'Elena Gomez'
  },
  {
    id: 'blog-2',
    title: 'Hidden Gems of South East Asia',
    excerpt: 'Beyond Bali and Bangkok, discover the untouched beauty of the East.',
    content: 'Full content here...',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800',
    date: '2024-03-20',
    author: 'Mark Sullivan'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Sarah Johnson',
    role: 'Travel Enthusiast',
    content: 'Loop Travells organized our honeymoon perfectly. Every detail was handled with care.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  }
];
