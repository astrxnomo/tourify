// =========================
// USERS & ROLES
// =========================

export interface Role {
  id: number;
  name: string;
  label: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: number;
  role_id: number;
  name: string;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;
  role?: Role;
}

// =========================
// LOCATION CORE
// =========================

export interface City {
  id: number;
  name: string;
  description?: string;
  country: string;
  created_at: string;
  updated_at: string;
  images?: Image[];
}

export interface Category {
  id: number;
  name: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface Place {
  id: number;
  city_id: number;
  category_id: number;
  name: string;
  description: string;
  address: string;
  latitude?: number;
  longitude?: number;
  created_at: string;
  updated_at: string;
  city?: City;
  category?: Category;
  images?: Image[];
  reviews?: Review[];
  averageRating?: number;
}

// =========================
// EVENTS
// =========================

export interface Event {
  id: number;
  city_id: number;
  place_id: number;
  title: string;
  description: string;
  date: string;
  created_at: string;
  updated_at: string;
  city?: City;
  place?: Place;
  images?: Image[];
  reviews?: Review[];
}

// =========================
// FAVORITES (POLYMORPHIC)
// =========================

export type FavorableType = 'place' | 'event' | 'city';

export interface Favorite {
  id: number;
  user_id: number;
  favorable_id: number;
  favorable_type: FavorableType;
  created_at: string;
  updated_at: string;
  favorable?: Place | Event | City;
}

// =========================
// REVIEWS (POLYMORPHIC)
// =========================

export type ReviewableType = 'place' | 'event';

export interface Review {
  id: number;
  user_id: number;
  reviewable_id: number;
  reviewable_type: ReviewableType;
  rating: number;
  comment?: string;
  created_at: string;
  updated_at: string;
  user?: User;
  reviewable?: Place | Event;
}

// =========================
// NOTIFICATIONS (POLYMORPHIC)
// =========================

export type NotifiableType = 'city' | 'place' | 'event';

export interface Notification {
  id: number;
  user_id: number;
  notifiable_id?: number;
  notifiable_type?: NotifiableType;
  title: string;
  message?: string;
  is_read: boolean;
  created_at: string;
  updated_at: string;
  notifiable?: City | Place | Event;
}

// =========================
// IMAGES (POLYMORPHIC)
// =========================

export type ImageableType = 'place' | 'event' | 'city' | 'user';

export interface Image {
  id: number;
  url: string;
  imageable_id: number;
  imageable_type: ImageableType;
  created_at: string;
  updated_at: string;
}
