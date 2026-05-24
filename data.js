const CATEGORIES = [
  {
    id: "Smartphones",
    name: "Smartphones",
    icon: "bi-phone",
    count: 6
  },
  {
    id: "Laptops",
    name: "Laptops",
    icon: "bi-laptop",
    count: 6
  },
  {
    id: "Audio",
    name: "Audio",
    icon: "bi-headphones",
    count: 6
  },
  {
    id: "Gaming",
    name: "Gaming",
    icon: "bi-controller",
    count: 6
  },
  {
    id: "Wearables",
    name: "Wearables",
    icon: "bi-smartwatch",
    count: 5
  },
  {
    id: "Accessories",
    name: "Accessories",
    icon: "bi-usb-symbol",
    count: 6
  }
];

const BRANDS = [
  "Apple",
  "Samsung",
  "Sony",
  "ASUS",
  "Dell",
  "Logitech",
  "JBL",
  "Razer",
  "Nothing",
  "Lenovo",
  "Google",
  "OnePlus",
  "Bose",
  "Corsair",
  "SteelSeries",
  "Fitbit",
  "Anker",
  "Nikon"
];

const PRODUCTS = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    category: "Smartphones",
    price: 1399,
    was: 1499,
    rating: 5,
    reviews: 284,
    stock: 18,
    badge: "hot",
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=900&q=80",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=900&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80"
    ],
    description:
      "Titanium-built flagship smartphone with A17 Pro chip, advanced cameras, and stunning OLED display.",
    specs: {
      Display: "6.7-inch OLED",
      Processor: "A17 Pro",
      Storage: "256GB",
      Camera: "48MP Triple Camera",
      Battery: "4422mAh"
    }
  },

  {
    id: 2,
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    category: "Smartphones",
    price: 1299,
    was: 1399,
    rating: 5,
    reviews: 196,
    stock: 22,
    badge: "new",
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=900&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=900&q=80"
    ],
    description:
      "Premium Android flagship featuring Galaxy AI, S-Pen support, and a 200MP camera system.",
    specs: {
      Display: "6.8-inch AMOLED",
      Processor: "Snapdragon 8 Gen 3",
      Storage: "512GB",
      Camera: "200MP Quad Camera",
      Battery: "5000mAh"
    }
  },

  {
    id: 3,
    name: "Sony WH-1000XM5",
    brand: "Sony",
    category: "Audio",
    price: 399,
    was: 449,
    rating: 5,
    reviews: 412,
    stock: 35,
    badge: "hot",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=900&q=80"
    ],
    description:
      "Industry-leading wireless noise cancelling headphones with immersive sound quality.",
    specs: {
      Driver: "30mm",
      Battery: "30 Hours",
      Connectivity: "Bluetooth 5.3",
      Weight: "250g",
      Charging: "USB-C Fast Charge"
    }
  },

  {
    id: 4,
    name: "ASUS ROG Zephyrus G14",
    brand: "ASUS",
    category: "Gaming",
    price: 1899,
    was: 2099,
    rating: 5,
    reviews: 142,
    stock: 10,
    badge: "new",
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=900&q=80",
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=900&q=80"
    ],
    description:
      "Ultra-powerful gaming laptop with RTX graphics and high-refresh QHD display.",
    specs: {
      Display: "14-inch QHD 165Hz",
      Processor: "Ryzen 9",
      GPU: "RTX 4070",
      RAM: "32GB",
      Storage: "1TB SSD"
    }
  },

  {
    id: 5,
    name: "Apple Watch Ultra 2",
    brand: "Apple",
    category: "Wearables",
    price: 899,
    was: 999,
    rating: 5,
    reviews: 118,
    stock: 16,
    badge: "hot",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=900&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=900&q=80"
    ],
    description:
      "Rugged premium smartwatch with advanced fitness tracking and titanium design.",
    specs: {
      Display: "49mm Retina",
      Battery: "36 Hours",
      Connectivity: "GPS + Cellular",
      Material: "Titanium",
      WaterResistance: "100m"
    }
  },

  {
    id: 6,
    name: "Nothing Ear (2)",
    brand: "Nothing",
    category: "Audio",
    price: 149,
    was: 179,
    rating: 4.5,
    reviews: 231,
    stock: 40,
    badge: "new",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=900&q=80",
      "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=900&q=80"
    ],
    description:
      "Minimal transparent earbuds with premium sound and active noise cancellation.",
    specs: {
      Battery: "36 Hours",
      Connectivity: "Bluetooth 5.3",
      ANC: "Yes",
      Charging: "Wireless",
      Weight: "4.5g"
    }
  },

  {
    id: 7,
    name: "Dell XPS 15",
    brand: "Dell",
    category: "Laptops",
    price: 2199,
    was: 2399,
    rating: 5,
    reviews: 154,
    stock: 9,
    badge: "hot",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&q=80",
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=900&q=80"
    ],
    description:
      "Professional ultrabook with InfinityEdge display and premium aluminum build.",
    specs: {
      Display: "15.6-inch OLED",
      Processor: "Intel Core i9",
      RAM: "32GB",
      Storage: "1TB SSD",
      GPU: "RTX 4060"
    }
  },

  {
    id: 8,
    name: "Razer BlackWidow V4",
    brand: "Razer",
    category: "Gaming",
    price: 229,
    was: 269,
    rating: 4.7,
    reviews: 88,
    stock: 30,
    badge: "new",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=900&q=80",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=900&q=80"
    ],
    description:
      "Mechanical RGB gaming keyboard built for precision, speed, and durability.",
    specs: {
      Switches: "Razer Green",
      Lighting: "RGB Chroma",
      Connectivity: "USB-C",
      Layout: "Full Size",
      Material: "Aluminum"
    }
  },

  {
    id: 9,
    name: "Google Pixel 8 Pro",
    brand: "Google",
    category: "Smartphones",
    price: 999,
    was: 1099,
    rating: 4.8,
    reviews: 267,
    stock: 25,
    badge: "new",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=900&q=80",
      "https://images.unsplash.com/photo-1520275335684-36ca6ee50ee0?w=900&q=80"
    ],
    description:
      "Google's flagship with advanced AI features and best-in-class camera processing.",
    specs: {
      Display: "6.7-inch OLED",
      Processor: "Tensor G3",
      Storage: "256GB",
      Camera: "50MP + AI Processing",
      Battery: "5050mAh"
    }
  },

  {
    id: 10,
    name: "OnePlus 12",
    brand: "OnePlus",
    category: "Smartphones",
    price: 799,
    was: 899,
    rating: 4.7,
    reviews: 156,
    stock: 28,
    badge: "hot",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80",
      "https://images.unsplash.com/photo-1586253408570-f9b1b874531c?w=900&q=80"
    ],
    description:
      "Fast and smooth Android phone with ultra-bright AMOLED display and Snapdragon 8 Gen 3.",
    specs: {
      Display: "6.7-inch AMOLED",
      Processor: "Snapdragon 8 Gen 3",
      Storage: "256GB",
      Camera: "50MP Main",
      Battery: "5400mAh"
    }
  },

  {
    id: 11,
    name: "MacBook Pro 16\"",
    brand: "Apple",
    category: "Laptops",
    price: 3499,
    was: 3799,
    rating: 5,
    reviews: 213,
    stock: 12,
    badge: "hot",
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=900&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&q=80"
    ],
    description:
      "Powerful M3 Max chip with ProMotion display for professional creators.",
    specs: {
      Display: "16-inch Liquid Retina XDR",
      Processor: "Apple M3 Max",
      RAM: "36GB",
      Storage: "512GB SSD",
      GPU: "18-core GPU"
    }
  },

  {
    id: 12,
    name: "Lenovo ThinkPad X1",
    brand: "Lenovo",
    category: "Laptops",
    price: 1299,
    was: 1499,
    rating: 4.6,
    reviews: 124,
    stock: 19,
    badge: "new",
    image:
      "https://images.unsplash.com/photo-1588872657840-790ff3bde08f?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1588872657840-790ff3bde08f?w=900&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&q=80"
    ],
    description:
      "Business ultrabook with excellent keyboard and battery life for professionals.",
    specs: {
      Display: "14-inch FHD IPS",
      Processor: "Intel Core i7",
      RAM: "16GB",
      Storage: "512GB SSD",
      Battery: "12+ Hours"
    }
  },

  {
    id: 13,
    name: "JBL Flip 6",
    brand: "JBL",
    category: "Audio",
    price: 129,
    was: 159,
    rating: 4.5,
    reviews: 189,
    stock: 45,
    badge: "hot",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=900&q=80",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=900&q=80"
    ],
    description:
      "Compact waterproof Bluetooth speaker with powerful sound and long battery.",
    specs: {
      Power: "20W",
      Battery: "12 Hours",
      Waterproof: "IP67",
      Connectivity: "Bluetooth 5.3",
      Weight: "285g"
    }
  },

  {
    id: 14,
    name: "Bose QuietComfort 45",
    brand: "Bose",
    category: "Audio",
    price: 379,
    was: 429,
    rating: 4.8,
    reviews: 342,
    stock: 32,
    badge: "new",
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=900&q=80",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=900&q=80"
    ],
    description:
      "Premium noise-cancelling headphones with all-day comfort and signature Bose sound.",
    specs: {
      Driver: "Bose Drivers",
      Battery: "24 Hours",
      ANC: "Excellent",
      Connectivity: "Bluetooth 5.3",
      Weight: "240g"
    }
  },

  {
    id: 15,
    name: "Corsair K95 Platinum",
    brand: "Corsair",
    category: "Gaming",
    price: 299,
    was: 349,
    rating: 4.9,
    reviews: 167,
    stock: 22,
    badge: "hot",
    image:
      "https://images.unsplash.com/photo-1587829191301-4e8dba13fdf7?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1587829191301-4e8dba13fdf7?w=900&q=80",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=900&q=80"
    ],
    description:
      "Premium mechanical gaming keyboard with macro keys and per-key RGB.",
    specs: {
      Switches: "Cherry MX",
      Lighting: "Per-Key RGB",
      Macros: "6 Side Keys",
      Layout: "Full Size",
      Material: "Aluminum + Steel"
    }
  },

  {
    id: 16,
    name: "SteelSeries Arctis Nova 7",
    brand: "SteelSeries",
    category: "Gaming",
    price: 349,
    was: 399,
    rating: 4.7,
    reviews: 203,
    stock: 26,
    badge: "new",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=900&q=80"
    ],
    description:
      "Premium gaming headset with spatial audio and excellent microphone for streaming.",
    specs: {
      Driver: "40mm",
      Battery: "30 Hours",
      Connectivity: "2.4GHz + Bluetooth",
      Microphone: "Retractable",
      Weight: "258g"
    }
  },

  {
    id: 17,
    name: "Samsung Galaxy Watch 6",
    brand: "Samsung",
    category: "Wearables",
    price: 399,
    was: 449,
    rating: 4.6,
    reviews: 245,
    stock: 31,
    badge: "hot",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=80",
      "https://images.unsplash.com/photo-1579357570404-c0277ccaea0d?w=900&q=80"
    ],
    description:
      "Advanced smartwatch with fitness tracking, AMOLED display, and extended battery.",
    specs: {
      Display: "1.3-inch AMOLED",
      Battery: "48 Hours",
      Connectivity: "Bluetooth + WiFi",
      Water: "5ATM",
      Storage: "16GB"
    }
  },

  {
    id: 18,
    name: "Fitbit Charge 6",
    brand: "Fitbit",
    category: "Wearables",
    price: 159,
    was: 199,
    rating: 4.5,
    reviews: 198,
    stock: 48,
    badge: "new",
    image:
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=900&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=80"
    ],
    description:
      "Fitness tracker with health metrics, GPS, and smart notifications in a compact band.",
    specs: {
      Display: "AMOLED Touchscreen",
      Battery: "7 Days",
      GPS: "Built-in",
      Water: "5ATM",
      Tracking: "24/7 HR + Sleep"
    }
  },

  {
    id: 19,
    name: "Logitech MX Master 3S",
    brand: "Logitech",
    category: "Accessories",
    price: 99,
    was: 129,
    rating: 4.9,
    reviews: 412,
    stock: 52,
    badge: "hot",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=900&q=80",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900&q=80"
    ],
    description:
      "Professional wireless mouse with advanced precision scrolling and customizable buttons.",
    specs: {
      DPI: "4000",
      Battery: "70 Days",
      Connectivity: "2.4GHz + Bluetooth",
      Buttons: "8 Programmable",
      Material: "Ergonomic"
    }
  },

  {
    id: 20,
    name: "Anker 747 Power Bank",
    brand: "Anker",
    category: "Accessories",
    price: 79,
    was: 99,
    rating: 4.7,
    reviews: 286,
    stock: 65,
    badge: "new",
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=900&q=80",
      "https://images.unsplash.com/photo-1606933248051-5ce98fdc1eaa?w=900&q=80"
    ],
    description:
      "High-capacity 40,000mAh power bank with fast charging and multiple USB ports.",
    specs: {
      Capacity: "40,000mAh",
      Output: "200W Max",
      Ports: "USB-C + 2 USB-A",
      Display: "LED",
      Weight: "600g"
    }
  },

  {
    id: 21,
    name: "Nikon Z6II",
    brand: "Nikon",
    category: "Accessories",
    price: 1999,
    was: 2199,
    rating: 4.8,
    reviews: 157,
    stock: 8,
    badge: "hot",
    image:
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=900&q=80",
      "https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?w=900&q=80"
    ],
    description:
      "Professional full-frame mirrorless camera with excellent dynamic range and autofocus.",
    specs: {
      Sensor: "Full Frame 24.2MP",
      Processor: "EXPEED 6",
      Shutter: "1/200 Flash Sync",
      Video: "4K 60fps",
      Weight: "675g"
    }
  },

  {
    id: 22,
    name: "Samsung 4K Monitor",
    brand: "Samsung",
    category: "Accessories",
    price: 599,
    was: 699,
    rating: 4.6,
    reviews: 143,
    stock: 17,
    badge: "new",
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=900&q=80",
      "https://images.unsplash.com/photo-1599504659767-5d6d7e5db3a6?w=900&q=80"
    ],
    description:
      "32-inch 4K UHD monitor with HDR support and USB-C connectivity for productivity.",
    specs: {
      Display: "32-inch 4K UHD",
      Refresh: "60Hz",
      Panel: "IPS",
      Ports: "USB-C + HDMI",
      Brightness: "350 nits"
    }
  },

  {
    id: 23,
    name: "Samsung Galaxy Z Fold6",
    brand: "Samsung",
    category: "Smartphones",
    price: 1899,
    was: 2099,
    rating: 4.8,
    reviews: 96,
    stock: 11,
    badge: "new",
    image:
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=900&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80"
    ],
    description:
      "Foldable flagship smartphone with a large multitasking display and premium camera setup.",
    specs: {
      Display: "7.6-inch Flex OLED",
      Processor: "Snapdragon 8 Gen 3",
      Storage: "512GB",
      Camera: "50MP Triple Camera",
      Battery: "4400mAh"
    }
  },

  {
    id: 24,
    name: "OnePlus Nord 4",
    brand: "OnePlus",
    category: "Smartphones",
    price: 499,
    was: 549,
    rating: 4.3,
    reviews: 76,
    stock: 33,
    badge: "hot",
    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=900&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80"
    ],
    description:
      "Value-packed Android phone with a bright display, fast charging, and smooth performance.",
    specs: {
      Display: "6.74-inch AMOLED",
      Processor: "Snapdragon 7+ Gen 3",
      Storage: "256GB",
      Camera: "50MP Dual Camera",
      Battery: "5000mAh"
    }
  },

  {
    id: 25,
    name: "ASUS Zenbook S16",
    brand: "ASUS",
    category: "Laptops",
    price: 1699,
    was: 1899,
    rating: 4.8,
    reviews: 88,
    stock: 14,
    badge: "new",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&q=80"
    ],
    description:
      "Slim and sleek ultrabook with a high-resolution OLED panel and excellent portability.",
    specs: {
      Display: "16-inch OLED",
      Processor: "Ryzen 9",
      RAM: "32GB",
      Storage: "1TB SSD",
      GPU: "Integrated"
    }
  },

  {
    id: 26,
    name: "Lenovo Yoga Slim 7",
    brand: "Lenovo",
    category: "Laptops",
    price: 1199,
    was: 1299,
    rating: 4.6,
    reviews: 67,
    stock: 21,
    badge: "hot",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&q=80"
    ],
    description:
      "Convertible laptop built for productivity and entertainment with a crisp touchscreen display.",
    specs: {
      Display: "14-inch Touchscreen",
      Processor: "Intel Core i7",
      RAM: "16GB",
      Storage: "512GB SSD",
      Battery: "12 Hours"
    }
  },

  {
    id: 27,
    name: "Sony WF-1000XM5",
    brand: "Sony",
    category: "Audio",
    price: 279,
    was: 329,
    rating: 4.9,
    reviews: 182,
    stock: 28,
    badge: "new",
    image:
      "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=900&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=80"
    ],
    description:
      "Compact true wireless earbuds with exceptional noise cancellation and rich detail.",
    specs: {
      Driver: "10mm",
      Battery: "8 Hours",
      Connectivity: "Bluetooth 5.3",
      ANC: "Yes",
      Charging: "USB-C"
    }
  },

  {
    id: 28,
    name: "JBL Charge 5",
    brand: "JBL",
    category: "Audio",
    price: 179,
    was: 199,
    rating: 4.6,
    reviews: 164,
    stock: 36,
    badge: "hot",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=900&q=80",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=900&q=80"
    ],
    description:
      "Portable Bluetooth speaker with deep bass, waterproof design, and long playtime.",
    specs: {
      Power: "30W",
      Battery: "20 Hours",
      Waterproof: "IP67",
      Connectivity: "Bluetooth 5.3",
      Weight: "648g"
    }
  },

  {
    id: 29,
    name: "Logitech G Pro X Superlight 2",
    brand: "Logitech",
    category: "Gaming",
    price: 159,
    was: 189,
    rating: 4.8,
    reviews: 98,
    stock: 24,
    badge: "new",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=900&q=80",
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=900&q=80"
    ],
    description:
      "Ultra-lightweight wireless gaming mouse with precise tracking and a comfortable ergonomic shape.",
    specs: {
      DPI: "32000",
      Battery: "70 Hours",
      Connectivity: "2.4GHz",
      Buttons: "5",
      Weight: "60g"
    }
  },

  {
    id: 30,
    name: "Razer Basilisk V3 Pro",
    brand: "Razer",
    category: "Gaming",
    price: 129,
    was: 149,
    rating: 4.7,
    reviews: 84,
    stock: 27,
    badge: "hot",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=900&q=80",
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=900&q=80"
    ],
    description:
      "High-performance wireless gaming mouse designed for precision and customizable controls.",
    specs: {
      DPI: "30000",
      Battery: "90 Hours",
      Connectivity: "2.4GHz + Bluetooth",
      Buttons: "11",
      Weight: "112g"
    }
  },

  {
    id: 31,
    name: "Fitbit Versa 4",
    brand: "Fitbit",
    category: "Wearables",
    price: 229,
    was: 269,
    rating: 4.5,
    reviews: 118,
    stock: 39,
    badge: "new",
    image:
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=900&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=80"
    ],
    description:
      "Fitness-focused smartwatch with wellness insights, body metrics, and built-in GPS.",
    specs: {
      Display: "1.5-inch AMOLED",
      Battery: "6 Days",
      GPS: "Built-in",
      Water: "5ATM",
      Tracking: "Sleep + Stress"
    }
  },

  {
    id: 32,
    name: "Samsung Galaxy Watch 7",
    brand: "Samsung",
    category: "Wearables",
    price: 349,
    was: 399,
    rating: 4.7,
    reviews: 103,
    stock: 24,
    badge: "hot",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=80",
      "https://images.unsplash.com/photo-1579357570404-c0277ccaea0d?w=900&q=80"
    ],
    description:
      "Smartwatch with polished design, advanced fitness tracking, and seamless Samsung connectivity.",
    specs: {
      Display: "1.3-inch AMOLED",
      Battery: "48 Hours",
      Connectivity: "Bluetooth + WiFi",
      Water: "5ATM",
      Storage: "16GB"
    }
  },

  {
    id: 33,
    name: "Anker 615 USB-C Charger",
    brand: "Anker",
    category: "Accessories",
    price: 39,
    was: 49,
    rating: 4.6,
    reviews: 142,
    stock: 57,
    badge: "new",
    image:
      "https://images.unsplash.com/photo-1597052382006-c375427a4d4f?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1597052382006-c375427a4d4f?w=900&q=80",
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=900&q=80"
    ],
    description:
      "Compact 65W GaN charger for fast, reliable charging on the go.",
    specs: {
      Output: "65W",
      Ports: "USB-C + USB-A",
      Material: "GaN",
      Weight: "170g",
      Safety: "Overcharge Protection"
    }
  },

  {
    id: 34,
    name: "Logitech C920 HD Pro",
    brand: "Logitech",
    category: "Accessories",
    price: 79,
    was: 99,
    rating: 4.5,
    reviews: 121,
    stock: 34,
    badge: "hot",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900&q=80"
    ],
    description:
      "Full HD webcam for clear video calls, streaming, and online meetings.",
    specs: {
      Resolution: "1080p",
      FrameRate: "30fps",
      Microphone: "Dual",
      Mount: "Flexible Clip",
      Compatibility: "Windows + Mac"
    }
  }
];
