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
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

import CoconutImage from "../assets/crops/coconut.jpg";
import MangoImage from "../assets/crops/mango.jpg";
import WaterAppleImage from "../assets/crops/waterApple.png";
import GuavaImage from "../assets/crops/guava.jpg";
import BlackJamunImage from "../assets/crops/black-jamun.png";
import JackFruitImage from "../assets/crops/jack-fruit.png";
import LemonImage from "../assets/crops/lemon.jpg";
import CurryLeafImage from "../assets/crops/curry-leaf.png";
import FarmInfraImage from "../assets/farm-infra.png";

export const CropDetails = [
  {
    id: 1,
    name: "Coconut",
    image: CoconutImage,
    maturity: "6-10 years",
    yield: "High",
    season: "Summer",
    description:
      "Tall and dwarf varieties produce large nuts rich in oil and water, crucial for tropical farming economies.",
  },
  {
    id: 2,
    name: "Mango",
    image: MangoImage,
    maturity: "3-5 years",
    yield: "High",
    season: "Summer",
    description:
      "Popular varieties like Alphonso and Kesar are prized for their sweetness, aroma, and market value.",
  },
  {
    id: 3,
    name: "Water Apple",
    image: WaterAppleImage,
    maturity: "1-2 years",
    yield: "Very High",
    season: "Summer",
    description:
      "Also called Java apple, this fruit has crisp watery flesh, grown for both taste and medicinal properties.",
  },
  {
    id: 4,
    name: "Guava",
    image: GuavaImage,
    maturity: "1-2 years",
    yield: "High",
    season: "Year-round",
    description:
      "High in Vitamin C; varieties like Allahabad Safeda and Lucknow 49 are grown for commercial export.",
  },
  {
    id: 5,
    name: "Black Jamun",
    image: BlackJamunImage,
    maturity: "2-3 years",
    yield: "Moderate",
    season: "Summer",
    description:
      "Also known as Java plum, valued for its health benefits like blood sugar control and rich antioxidant profile.",
  },
  {
    id: 6,
    name: "Jack Fruit",
    image: JackFruitImage,
    maturity: "3-4 years",
    yield: "High",
    season: "Summer",
    description:
      "Largest tree-borne fruit, used both as a fruit and vegetarian meat substitute, rich in nutrients and fiber.",
  },
  {
    id: 7,
    name: "Lemon",
    image: LemonImage,
    maturity: "2-3 years",
    yield: "Good",
    season: "Year-round",
    description:
      "Nimbu varieties like Kagzi are known for their juiciness and essential oil-rich peels in Indian cuisine.",
  },
  {
    id: 8,
    name: "Curry Leaf",
    image: CurryLeafImage,
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

export const galleryData = [
  {
    src: CoconutImage,
    info: "Mango plantation with mature trees",
    category: "Crops",
  },
  {
    src: MangoImage,
    info: "Coconut grove with irrigation system",
    category: "Infrastructure",
  },
  {
    src: WaterAppleImage,
    info: "Banana plantation in full bloom",
    category: "Crops",
  },
  {
    src: GuavaImage,
    info: "Modern guest cottage",
    category: "Facilities",
  },
  {
    src: BlackJamunImage,
    info: "Drip irrigation system in action",
    category: "Infrastructure",
  },
  {
    src: JackFruitImage,
    info: "Pomegranate orchard",
    category: "Crops",
  },
  {
    src: LemonImage,
    info: "Security fencing and entrance",
    category: "Infrastructure",
  },
  {
    src: CurryLeafImage,
    info: "Dragon fruit cultivation",
    category: "Crops",
  },
  {
    src: FarmInfraImage,
    info: "Solar power installation",
    category: "Facilities",
  },
];
