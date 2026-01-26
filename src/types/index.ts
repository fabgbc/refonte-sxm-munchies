export interface MenuCourse {
  category: string;
  items: string[];
}

export interface GrillItem {
  name: string;
  price: number;
}

export interface GrillItems {
  meats: GrillItem[];
  seafood: GrillItem[];
  sides: string[];
}

export interface WeeklyDay {
  day: string;
  lunch: string;
  dinner: string;
  alternate?: string;
  dessert: string;
}

export interface Menu {
  id: number;
  number: string;
  name: string;
  slug?: string;
  description: string;
  price: number;
  priceLabel: string;
  includes?: string;
  courses?: MenuCourse[];
  note?: string;
  isGrillMenu?: boolean;
  grillItems?: GrillItems;
  isWeeklyMenu?: boolean;
  weeklyExample?: WeeklyDay[];
  items?: string[];
}

export interface ServicePricing {
  guests: string;
  fee: string;
  note: string;
  feeAlt?: string;
  noteAlt?: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  id: number;
  title: string;
  slug?: string;
  shortTitle?: string;
  description: string;
  longDescription?: string;
  image: string;
  icon: "villa" | "yacht" | "event";
  link: string;
  features?: string[];
  pricing?: ServicePricing[];
  faq?: ServiceFaq[];
  sampleMenu?: string[];
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  context: string;
  date: string;
  rating?: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message?: string;
}

export interface BreakfastOption {
  id: number;
  name: string;
  price: number;
  priceLabel: string;
  items: string[];
}

export interface PlattersOption {
  name: string;
  description: string;
  pricePerPerson?: boolean;
}

export interface ChefInfo {
  name: string;
  title: string;
  experience: string;
  bio: string[];
  image: string;
  signature: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  partner?: string;
}
