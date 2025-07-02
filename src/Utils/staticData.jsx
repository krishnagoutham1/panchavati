import { MdOutlineShield } from "react-icons/md";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FaRoad } from "react-icons/fa";
import { FaHouseCircleCheck } from "react-icons/fa6";
import { ImPowerCord } from "react-icons/im";
import { IoWifi } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { FaTree } from "react-icons/fa";

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "Plantation", href: "#crops" },
  { name: "Facilities", href: "#facilities" },
  { name: "Plot Plans", href: "#plots" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export const CropDetails = [
  {
    id: 1,
    name: "Coconut",
    image:
      "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=400",
    maturity: "6-10 years",
    yield: "High",
    season: "Summer",
    description:
      "Tall and dwarf varieties produce large nuts rich in oil and water, crucial for tropical farming economies.",
  },
  {
    id: 2,
    name: "Mango",
    image:
      "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=400",
    maturity: "3-5 years",
    yield: "High",
    season: "Summer",
    description:
      "Popular varieties like Alphonso and Kesar are prized for their sweetness, aroma, and market value.",
  },
  {
    id: 3,
    name: "Water Apple",
    image:
      "https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=400",
    maturity: "1-2 years",
    yield: "Very High",
    season: "Summer",
    description:
      "Also called Java apple, this fruit has crisp watery flesh, grown for both taste and medicinal properties.",
  },
  {
    id: 4,
    name: "Guava",
    image:
      "https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=400",
    maturity: "1-2 years",
    yield: "High",
    season: "Year-round",
    description:
      "High in Vitamin C; varieties like Allahabad Safeda and Lucknow 49 are grown for commercial export.",
  },
  {
    id: 5,
    name: "Black Jamun",
    image:
      "https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=400",
    maturity: "2-3 years",
    yield: "Moderate",
    season: "Summer",
    description:
      "Also known as Java plum, valued for its health benefits like blood sugar control and rich antioxidant profile.",
  },
  {
    id: 6,
    name: "Jack Fruit",
    image:
      "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400",
    maturity: "3-4 years",
    yield: "High",
    season: "Summer",
    description:
      "Largest tree-borne fruit, used both as a fruit and vegetarian meat substitute, rich in nutrients and fiber.",
  },
  {
    id: 7,
    name: "Lemon",
    image:
      "https://images.pexels.com/photos/5966631/pexels-photo-5966631.jpeg?auto=compress&cs=tinysrgb&w=400",
    maturity: "2-3 years",
    yield: "Good",
    season: "Year-round",
    description:
      "Nimbu varieties like Kagzi are known for their juiciness and essential oil-rich peels in Indian cuisine.",
  },
  {
    id: 8,
    name: "Curry Leaf",
    image:
      "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=400",
    maturity: "1.5-2 years",
    yield: "Moderate",
    season: "Year-round",
    description:
      "Aromatic leaves used as a key seasoning ingredient in South Indian cooking with medicinal properties.",
  },
];

export const FacilitiesDetails = [
  {
    id: 1,
    icon: <MdOutlineShield />,
    title: "Security Fencing",
    description:
      "Complete perimeter fencing with 24/7 security monitoring and controlled access points.",
  },
  {
    id: 2,
    icon: <MdOutlineWaterDrop />,
    title: "Drip Irrigation",
    description:
      "Advanced drip irrigation system with automated timers and water-efficient technology.",
  },
  {
    id: 3,
    icon: <FaRoad />,
    title: "Road Access",
    description:
      "Well-maintained internal roads with proper drainage and all-weather accessibility.",
  },
  {
    id: 4,
    icon: <FaHouseCircleCheck />,
    title: "Guest Cottages",
    description:
      "Comfortable guest cottages with modern amenities for weekend stays and supervision.",
  },
  {
    id: 5,
    icon: <ImPowerCord />,
    title: "Power Supply",
    description:
      "Reliable electricity connection with backup solar power systems for uninterrupted operations.",
  },
  {
    id: 6,
    icon: <IoWifi />,
    title: "Connectivity",
    description:
      "High-speed internet and mobile connectivity for modern farm management systems.",
  },
  {
    id: 7,
    icon: <FaCar />,
    title: "Parking Area",
    description:
      "Dedicated parking spaces with covered areas for vehicles and farm equipment.",
  },
  {
    id: 8,
    icon: <FaTree />,
    title: "Landscaping",
    description:
      "Beautiful landscaping with native plants and trees creating a serene environment.",
  },
];

export const plotPlans = [
  {
    id: 1,
    name: "Starter Plot",
    size: "1 Acre",
    price: "₹12,50,000",
    features: [
      "4-5 Mango Trees",
      "20 Coconut Trees",
      "Basic Drip Irrigation",
      "Boundary Fencing",
      "Road Access",
      "1 Year Maintenance",
    ],
    popular: false,
    image:
      "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  {
    id: 2,
    name: "Premium Plot",
    size: "2.5 Acres",
    price: "₹28,75,000",
    features: [
      "10-12 Mango Trees",
      "50 Coconut Trees",
      "100 Banana Plants",
      "Advanced Irrigation",
      "Guest Cottage",
      "Solar Power Setup",
      "2 Years Maintenance",
      "Farm Management Support",
    ],
    popular: true,
    image:
      "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  {
    id: 3,
    name: "Estate Plot",
    size: "5 Acres",
    price: "₹55,00,000",
    features: [
      "20-25 Mango Trees",
      "100 Coconut Trees",
      "200 Banana Plants",
      "Mixed Fruit Orchard",
      "Luxury Cottage",
      "Complete Solar System",
      "Water Harvesting",
      "3 Years Full Maintenance",
      "Dedicated Farm Manager",
    ],
    popular: false,
    image:
      "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export const galleryData = [
  {
    src: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800",
    info: "Mango plantation with mature trees",
    category: "Crops",
  },
  {
    src: "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=800",
    info: "Coconut grove with irrigation system",
    category: "Infrastructure",
  },
  {
    src: "https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=800",
    info: "Banana plantation in full bloom",
    category: "Crops",
  },
  {
    src: "https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=800",
    info: "Modern guest cottage",
    category: "Facilities",
  },
  {
    src: "https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=800",
    info: "Drip irrigation system in action",
    category: "Infrastructure",
  },
  {
    src: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=800",
    info: "Pomegranate orchard",
    category: "Crops",
  },
  {
    src: "https://images.pexels.com/photos/5966631/pexels-photo-5966631.jpeg?auto=compress&cs=tinysrgb&w=800",
    info: "Security fencing and entrance",
    category: "Infrastructure",
  },
  {
    src: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=800",
    info: "Dragon fruit cultivation",
    category: "Crops",
  },
  {
    src: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800",
    info: "Solar power installation",
    category: "Facilities",
  },
];
