import { Menu } from "@/types";

export const menus: Menu[] = [
  {
    id: 1,
    number: "01",
    name: "Gourmet Menu",
    slug: "gourmet-menu",
    description:
      "A curated four-course dining experience designed to elevate your evening.",
    price: 145,
    priceLabel: "$145 / guest",
    includes: "Includes 1 appetizer, 1 starter, 1 main course, and 1 dessert.",
    courses: [
      {
        category: "Appetizer",
        items: ["Cold Asparagus served with sesame crackers"],
      },
      {
        category: "Starter",
        items: [
          "Tuna Tartar served with pomegranate, coriander and sesame-ginger dressing",
          "Foie gras Mango Gyoza served with mango tahini sauce",
        ],
      },
      {
        category: "Main Course",
        items: [
          "Beef tenderloin with truffle sauce, served with Maxim's potatoes and baby vegetables",
          "Pan seared scallops with cognac, served with saffron risotto",
        ],
      },
      {
        category: "Dessert",
        items: ["Omelette Norvégienne (Baked Alaska) — sponge cake layered with locally made sorbet (various flavors available upon request)"],
      },
    ],
    note: "Menus can be adapted upon request to accommodate allergies or dietary preferences. Vegetarian or pescatarian variations are also possible.",
  },
  {
    id: 2,
    number: "02",
    name: "Surf & Turf Menu",
    slug: "surf-turf-menu",
    description:
      "An unexpected duet of land and sea, where bold flavors meet in perfect harmony to captivate the most discerning palates.",
    price: 110,
    priceLabel: "$110 / guest",
    includes: "Includes amuse-bouche, starter, main course and dessert.",
    courses: [
      {
        category: "Amuse-bouche",
        items: ["Chilled gazpacho shot"],
      },
      {
        category: "Starter",
        items: ["Wahoo gravlax with crisp salad and green curry dressing"],
      },
      {
        category: "Main Course",
        items: ["Lobster tail and beef tenderloin, bisque sauce, green asparagus and polenta"],
      },
      {
        category: "Dessert",
        items: ["Mango and passion fruit pavlova, served with a spiced infused rum"],
      },
    ],
    note: "This menu is customizable based on dietary preferences or restrictions. Vegetarian alternatives and adjustments are available upon request.",
  },
  {
    id: 3,
    number: "03",
    name: "Burgundy Trails Menu",
    slug: "bourgogne-menu",
    description:
      "A journey through the rich traditions of Burgundy, crafted to surprise and delight even the most refined palates.",
    price: 105,
    priceLabel: "$105 / guest",
    includes: "Includes first, second and third course, interlude and dessert.",
    courses: [
      {
        category: "First Course",
        items: ["Snail casserole in puff pastry, creamy Chardonnay sauce"],
      },
      {
        category: "Second Course",
        items: ["Poached egg in red wine sauce (Œuf en meurette)"],
      },
      {
        category: "Third Course",
        items: ["Chicken ballotine with foie gras"],
      },
      {
        category: "Interlude",
        items: ["Frozen marc de Bourgogne granita"],
      },
      {
        category: "Dessert",
        items: ["Red wine–poached pear with blackcurrant sorbet"],
      },
    ],
    note: "This menu is customizable based on dietary preferences or restrictions. Vegetarian alternatives and adjustments are available upon request.",
  },
  {
    id: 4,
    number: "04",
    name: "Caribbean Menu",
    slug: "caribbean-menu",
    description:
      "A journey through Caribbean flavors, designed to surprise and delight even the most refined palates.",
    price: 90,
    priceLabel: "$90 / guest",
    includes: "Includes starter, main course, dessert and your choice of side.",
    courses: [
      {
        category: "Starter",
        items: [
          "Shrimp and pineapple salad with ginger-lime dressing",
          "Coconut-breaded chicken with sweet & spicy mango dip",
        ],
      },
      {
        category: "Main Course",
        items: [
          "Caramelized braised pork cheek",
          "Mahi-mahi with passion fruit sauce",
        ],
      },
      {
        category: "Side Dishes (choice of one)",
        items: [
          "Creole rice",
          "Gratin of giromon (Caribbean squash)",
          "Roasted sweet potato",
        ],
      },
      {
        category: "Dessert",
        items: [
          "Mango cheesecake",
          "Guava flan",
        ],
      },
    ],
    note: "This menu is customizable based on dietary preferences or restrictions. Vegetarian alternatives and adjustments are available upon request.",
  },
  {
    id: 5,
    number: "05",
    name: "Mediterranean Menu",
    slug: "mediterranean-menu",
    description:
      "Summer cuisine with Provençal flavors — travel the Mediterranean without leaving your villa.",
    price: 90,
    priceLabel: "$90 / guest",
    includes: "Includes starter, main course and dessert.",
    courses: [
      {
        category: "Starter",
        items: [
          "Flaked cod with artichoke, parmesan and parsley-garlic seasoning",
          "Red pesto focaccia with fresh burrata and tomato salad",
        ],
      },
      {
        category: "Main Course",
        items: [
          "Lamb confit moussaka",
          "Stuffed calamari tube with Provençal sauce",
        ],
      },
      {
        category: "Dessert",
        items: [
          "Frozen nougat",
          "Tiramisu",
        ],
      },
    ],
    note: "This menu can be adapted based on dietary restrictions or personal preferences. Vegetarian alternatives are available upon request.",
  },
  {
    id: 6,
    number: "06",
    name: "Grill Menu",
    slug: "grill-menu",
    description:
      "The perfect way to enjoy quality time with friends around expertly grilled meats and seafood.",
    price: 65,
    priceLabel: "From $65 / guest",
    includes: "All dishes served with your choice of side.",
    isGrillMenu: true,
    grillItems: {
      meats: [
        { name: "Sirloin flank", price: 65 },
        { name: "Rib-eye Maxim's style", price: 72 },
        { name: "Seasoned with strawberry balsamic", price: 44 },
        { name: "Mixed grill (beef, duck, lamb, bacon)", price: 69 },
        { name: "Premium cut per 100g (to share)", price: 8 },
        { name: "NY rack lamb with Texan Toast", price: 75 },
        { name: "1kg meal bones", price: 82 },
      ],
      seafood: [
        { name: "Mini braised lobster", price: 33 },
        { name: "Mixed grill seafood", price: 31 },
        { name: "With Texan Toast", price: 34 },
        { name: "Cream Curry Salmon / Fish Greek", price: 36 },
        { name: "Per 100g, with herb-butter lemon", price: 14 },
      ],
      sides: [
        "Grilled vegetables",
        "Baked potatoes",
        "Mashed potatoes",
        "Rice",
        "Green salad",
      ],
    },
  },
  {
    id: 7,
    number: "07",
    name: "Weekly Menu",
    slug: "weekly-menu",
    description:
      "Seasonal, gourmet, and stress-free meals. Perfect for week-long villa stays.",
    price: 0,
    priceLabel: "Contact for pricing",
    includes: "Updated weekly with new seasonal menus.",
    isWeeklyMenu: true,
    weeklyExample: [
      {
        day: "Day 1",
        lunch: "Vegetable stir fry (Thai-style or Anglo-style VGN)",
        dinner: "Grilled fish fillet with citrus butter, herby rice or sautéed potatoes",
        alternate: "Pork and bok choy with teriyaki, sautéed noodles or rice",
        dessert: "The special fruit salad and ice cream",
      },
      {
        day: "Day 4",
        lunch: "Salmon or chicken Caesar salad",
        dinner: "Coconut Curry chicken",
        dessert: "Crème brûlée",
      },
      {
        day: "Day 7",
        lunch: "Poke salad fresh fish, firm tofu or chicken",
        dinner: "Slow braised short ribs with red wine reduction",
        dessert: "Crepes and homemade salted caramel sauce",
      },
    ],
  },
];

export const breakfastOptions = [
  {
    id: 1,
    name: "Classic Breakfast",
    price: 25,
    priceLabel: "$25 / guest",
    items: [
      "Eggs & bacon",
      "Pancakes & baguette",
      "Tropical fruit platter",
      "Orange juice",
      "Butter, jam, maple syrup, honey",
    ],
  },
  {
    id: 2,
    name: "Full Breakfast",
    price: 35,
    priceLabel: "$35 / guest",
    items: [
      "Eggs, bacon, smoked potatoes, sausages",
      "Pancakes, baguette, fresh fruit platter",
      "Orange juice",
      "Butter, jam, maple syrup, honey",
    ],
  },
  {
    id: 3,
    name: "Premium Brunch",
    price: 55,
    priceLabel: "$55 / guest",
    items: [
      "Eggs, bacon or sausages, croissants",
      "Smoked salmon platter with eggs",
      "Choice of waffles, crêpes, pancakes or French toast",
      "Orange juice",
      "Butter, jam, maple syrup, honey",
      "Mimosas included",
    ],
  },
];

export const gourmetPlatters = [
  { name: "Cheese Platter", description: "A seasonal mix of soft and aged cheeses", pricePerPerson: true },
  { name: "Crudités Platter", description: "Colorful, crunchy vegetables — served with dips", pricePerPerson: true },
  { name: "Carpaccio Platter", description: "An assortment of fresh fish carpaccio", pricePerPerson: true },
  { name: "Charcuterie Platter", description: "A classic charcuterie mix — perfect for sharing", pricePerPerson: true },
  { name: "French Cold Cuts", description: "A French-style cold cut served with mayo", pricePerPerson: true },
  { name: "Beef Tataki", description: "Lightly seared beef with basil, caper, balsamic", pricePerPerson: true },
];

export const saladOptions = [
  { name: "Caesar Salad", description: "Tangy and satisfying, a crowd pleaser" },
  { name: "Spicy Asian Salad", description: "Crispy, spicy and packed with flavor" },
  { name: "Fresh Salad", description: "Choose your flavor — fresh and raw" },
  { name: "Seafood Salad", description: "A balanced option with a seafood note" },
  { name: "Tropical Salad", description: "Tropical, colorful and nutrient-rich" },
  { name: "Provençal Salad", description: "Light, fresh and Provençal" },
  { name: "Warm Salad", description: "Warm and comforting" },
  { name: "Za'atar Salad", description: "A crunchy blend with za'atar tastes" },
];

export const tapasOptions = [
  { name: "Crostini Parmesan", description: "Mini toasted baguette with toppings" },
  { name: "Mixed Grill Tapas", description: "Beef, chicken curry, shrimp sauce" },
  { name: "Fish Tapas", description: "Cream Curry Salmon / Fish Greek style" },
];

export const patisserieOptions = [
  { name: "Bavarois", description: "Airy medallion Bavarois — a French classic" },
  { name: "Fresh Fruit Platter", description: "Seasonal fruits, cut and served fresh" },
  { name: "Mini Moelleux", description: "Mini chocolate moelleux, bite-sized dark chocolate" },
  { name: "Almond Pistachio Bavarois", description: "Airy medallion — almond, pistachio" },
  { name: "Brownies", description: "Soft, gooey and always satisfying" },
  { name: "Caribbean Tart", description: "A decadent tart with Caribbean flavors" },
  { name: "Dense Chocolate Cake", description: "Rich, dense and delightful" },
  { name: "Tropical Mousse", description: "Light and tropical — a crowd favorite" },
];
