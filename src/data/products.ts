export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  description: string;
  shop: {
    name: string;
    verified: boolean;
    avatar: string;
  };
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Minimal Stand",
    price: 2343,
    originalPrice: 12895,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop",
    rating: 4.6,
    reviews: 86,
    category: "table",
    description:
      "A minimalist stand perfect for modern homes. Features clean lines and a sleek white finish with natural wood legs. Ideal for entryways, living rooms, or bedrooms. Compact yet functional with a single drawer for storage.",
    shop: {
      name: "Shop Larson Electronic",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
    },
  },
  {
    id: "2",
    name: "Daybed - Outdoor Patio",
    price: 12999,
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=800&fit=crop",
    rating: 4.6,
    reviews: 86,
    category: "bed",
    description:
      "Luxurious outdoor daybed with plush cushions. Perfect for poolside relaxation or patio lounging. Weather-resistant materials ensure durability. Includes comfortable cushions and pillows.",
    shop: {
      name: "Outdoor Living Co.",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
    },
  },
  {
    id: "3",
    name: "4PCS Patio Rattan",
    price: 12999,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=800&fit=crop",
    rating: 4.6,
    reviews: 86,
    category: "chair",
    description:
      "Complete outdoor furniture set with 4 pieces. Includes comfortable chairs with red cushions. Durable rattan construction perfect for outdoor use. Modern design complements any patio.",
    shop: {
      name: "Patio Furniture Plus",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
    },
  },
  {
    id: "4",
    name: "Victoria 4 Seater Dining Table Sets",
    price: 21343,
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&h=800&fit=crop",
    rating: 4.8,
    reviews: 124,
    category: "table",
    description:
      "Elegant dining set perfect for family meals. Includes 4 comfortable chairs with cushioned seats. Solid wood construction ensures durability. Rich brown finish adds warmth to any dining room.",
    shop: {
      name: "Dining Essentials",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
    },
  },
  {
    id: "5",
    name: "Kaya Table Lamp",
    price: 4343,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=800&fit=crop",
    rating: 4.5,
    reviews: 92,
    category: "lamp",
    description:
      "Stylish geometric table lamp with warm lighting. Features a unique cage design that creates beautiful light patterns. Perfect for bedside tables or living room accents. Energy-efficient LED compatible.",
    shop: {
      name: "Light & Living",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
    },
  },
  {
    id: "6",
    name: "Afreen Table Lamp",
    price: 4043,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&h=800&fit=crop",
    rating: 4.7,
    reviews: 78,
    category: "lamp",
    description:
      "Modern table lamp with adjustable arm. Provides focused task lighting for reading or work. Sleek metal construction in matte finish. Energy-efficient and long-lasting LED bulb included.",
    shop: {
      name: "Light & Living",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
    },
  },
  {
    id: "7",
    name: "Kassel Wine Rack / Bottle Holder",
    price: 3943,
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&h=800&fit=crop",
    rating: 4.4,
    reviews: 64,
    category: "table",
    description:
      "Elegant wine rack with capacity for 6 bottles. Natural wood construction with modern design. Wall-mountable or freestanding. Perfect for wine enthusiasts and home bars.",
    shop: {
      name: "Home Accents",
      verified: false,
      avatar: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
    },
  },
  {
    id: "8",
    name: "Jason Bar Cabinet",
    price: 39108,
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&h=800&fit=crop",
    rating: 4.9,
    reviews: 156,
    category: "chair",
    description:
      "Luxurious bar cabinet with ample storage. Features glass doors and interior lighting. Multiple shelves for bottles and glassware. Rich finish complements any home bar setup.",
    shop: {
      name: "Premium Furniture Co.",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
    },
  },
  {
    id: "9",
    name: "Mad Hatter Study Table",
    price: 5343,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=800&fit=crop",
    rating: 4.3,
    reviews: 89,
    category: "table",
    description:
      "Compact study table perfect for small spaces. Features wall-mounted design to save floor space. Includes small storage compartments. Ideal for home offices or student rooms.",
    shop: {
      name: "Study Space Solutions",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
    },
  },
  {
    id: "10",
    name: "Baldwin Wall Mounted Study Table",
    price: 1079,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=800&fit=crop",
    rating: 4.2,
    reviews: 54,
    category: "table",
    description:
      "Space-saving wall-mounted desk. Folds up when not in use. Perfect for small apartments. Includes built-in organizer. Easy to install with included hardware.",
    shop: {
      name: "Space Savers Inc.",
      verified: false,
      avatar: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
    },
  },
  {
    id: "11",
    name: "Twain Study Table",
    price: 7874,
    image: "https://images.unsplash.com/photo-1595428774638-7f3cbb518e3f?w=800&h=800&fit=crop",
    rating: 4.7,
    reviews: 112,
    category: "table",
    description:
      "Modern study table with ample workspace. Features clean lines and minimalist design. Includes cable management solutions. Sturdy metal legs with wooden top. Perfect for home offices.",
    shop: {
      name: "Modern Office Furniture",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
    },
  },
  {
    id: "12",
    name: "CO2 - AAC2 Chair",
    price: 8500,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=800&h=800&fit=crop",
    rating: 4.5,
    reviews: 98,
    category: "chair",
    description:
      "Ergonomic office chair with lumbar support. Adjustable height and armrests. Breathable mesh back for comfort. Durable construction supports up to 300 lbs. Perfect for long work sessions.",
    shop: {
      name: "Ergonomic Solutions",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
    },
  },
];
