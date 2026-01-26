import { Service } from "@/types";

export const services: Service[] = [
  {
    id: 1,
    title: "Private Chef in Your Villa",
    slug: "book-your-chef-in-saint-martin",
    shortTitle: "Villa Service",
    description:
      "Let us create an extraordinary dining experience for you. We cater to your culinary desires with menus customized to your preferences.",
    longDescription:
      "Enjoy Private Chef Service. We cater to your culinary desires with menus customized to your preferences. Choose from gourmet dishes, themed cuisines, or special dietary options.",
    image: "/images/villa-service.jpg",
    icon: "villa",
    link: "/book-your-chef-in-saint-martin",
    features: [
      "Private Onsite Dining",
      "Customizable menus tailored to your preferences",
      "Fresh, locally sourced ingredients",
      "Full service from preparation to cleanup",
      "Exclusive Fine Dining",
      "Transform your villa into a world-class restaurant without the crowds",
    ],
    pricing: [
      { guests: "2 Guests", fee: "$175", note: "Chef only", feeAlt: "$250", noteAlt: "Chef + Waiter" },
      { guests: "3-5 Guests", fee: "$250", note: "Chef only", feeAlt: "$350", noteAlt: "Chef + Waiter" },
      { guests: "6-9 Guests", fee: "$400", note: "Chef + Waiter" },
      { guests: "10-14 Guests", fee: "$500", note: "Chef + Waiter" },
    ],
  },
  {
    id: 2,
    title: "Private Chef Onboard",
    slug: "private-chef-onboard",
    shortTitle: "Yacht Service",
    description:
      "Cuisine and excellence on the sea. Our private chef services extend beyond villas to yacht charters and boat excursions.",
    longDescription:
      "Our private chef services extend beyond villas — whether you're chartering a yacht for a day trip around the island or hosting an intimate dinner on deck, Chef Francis brings the same culinary excellence to the sea.",
    image: "/images/gourmet-day-beach.png",
    icon: "yacht",
    link: "/private-chef-onboard",
    features: [
      "4-hour service window",
      "Fresh appetizers or full lunch",
      "Setup and cleanup",
      "Professional onboard service",
      "The Signature Menu with fresh seafood",
      "Tailored menus to match your tastes",
    ],
    pricing: [
      { guests: "Extra Chef Aboard", fee: "€300", note: "For yacht day trips or boat excursions" },
      { guests: "Chef Onboard for the Day", fee: "Contact us", note: "For full-day charters or extended yacht events" },
    ],
    faq: [
      { question: "Can we customize the menu?", answer: "Absolutely. Let us know your preferences." },
      { question: "What about food allergies?", answer: "We accommodate all dietary requirements." },
      { question: "What's included?", answer: "Full service, fresh ingredients, cleanup." },
    ],
  },
  {
    id: 3,
    title: "Private Chef Week",
    slug: "private-chef-week-menu",
    shortTitle: "Week Package",
    description:
      "7 days of culinary excellence. For week-long villa stays, experience seamless private dining throughout your vacation.",
    longDescription:
      "For week-long villa stays, experience seamless private dining throughout your vacation with personalized menus every day.",
    image: "/images/full-week-experience.png",
    icon: "event",
    link: "/private-chef-week-menu",
    features: [
      "Consultation — Share your preferences and dietary needs",
      "Menu Planning — Chef Francis crafts a week-long culinary journey",
      "Daily Service — Fresh preparations delivered to your villa",
      "Quality Time — Relax while we handle everything",
    ],
    sampleMenu: [
      "Day 1: Caribbean Welcome Dinner",
      "Day 2: Mediterranean Feast",
      "Day 3: Surf & Turf Night",
      "Day 4: French Bistro Experience",
      "Day 5: Local Catch of the Day",
      "Day 6: Grill & BBQ Evening",
      "Day 7: Grand Finale Gourmet",
    ],
  },
];

export const serviceCategories = [
  {
    title: "Private Dining",
    items: [
      { name: "Private Chef Services in Saint-Martin", href: "/private-chef-services" },
      { name: "Private Chef in Your Villa", href: "/book-your-chef-in-saint-martin" },
      { name: "Private Chef Onboard", href: "/private-chef-onboard" },
      { name: "Private Chef Week", href: "/private-chef-week-menu" },
    ],
  },
  {
    title: "Menus",
    items: [
      { name: "Gourmet Menu", href: "/gourmet-menu" },
      { name: "Surf & Turf Menu", href: "/surf-turf-menu" },
      { name: "Bourguignon Trails Menu", href: "/bourgogne-menu" },
      { name: "Caribbean Menu", href: "/caribbean-menu" },
      { name: "Mediterranean Menu", href: "/mediterranean-menu" },
      { name: "Grill Menu", href: "/grill-menu" },
      { name: "Weekly Menu", href: "/weekly-menu" },
    ],
  },
  {
    title: "Buffets & More",
    items: [
      { name: "Breakfast & Brunch", href: "/breakfast-brunch" },
      { name: "Gourmet Platters", href: "/gourmet-platters" },
      { name: "Salads & Tapas Buffet", href: "/salads-tapas-buffet" },
      { name: "Buffet Pâtisserie", href: "/buffet-patisserie" },
      { name: "Wine Selection", href: "/wine" },
    ],
  },
];
