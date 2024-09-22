import { CreditCard } from "lucide-react";
import { CornerDownLeft } from "lucide-react";
import { Shirt } from "lucide-react";
import { Truck } from "lucide-react";
export const filters = [
  { id: 1, title: "Tops", description: "Tops", value: "tops" },
  {
    id: 2,
    title: "Printed T-shirts",
    description: "Printed T-shirts",
    value: "printed_t-shirt",
  },
  {
    id: 3,
    title: "Plain T-shirts",
    description: "Plain T-shirts",
    value: "plain t-shirts",
  },
  { id: 4, title: "Kurti", description: "Kurti", value: "kurti" },
  { id: 5, title: "Boxers", description: "Boxers", value: "boxers" },
  {
    id: 6,
    title: "Full sleeve T-shirts",
    description: "Full sleeve T-shirts",
    value: "full sleeve t-shirt",
  },
  { id: 7, title: "Joggers", description: "Joggers", value: "joggers" },
  { id: 8, title: "Payjamas", description: "Payjamas", value: "payjamas" },
  { id: 9, title: "Jeans", description: "Jeans", value: "jeans" },
];

export const color = [
  { id: 1, name: "Purple", color: "#8434E1", value: "purple" },
  { id: 2, name: "Black", color: "#252525", value: "black" },
  { id: 3, name: "Red", color: "#F35528", value: "red" },
  { id: 4, name: "Orange", color: "#F16F2B", value: "orange" },
  { id: 5, name: "Navy", color: "#345EFF", value: "navy" },
  { id: 6, name: "White", color: "#FFFFFF", value: "white" },
  { id: 7, name: "Brown", color: "#D67E3B", value: "brown" },
  { id: 8, name: "Green", color: "#48BC4E", value: "green" },
  { id: 9, name: "Yellow", color: "#FDC761", value: "yellow" },
  { id: 10, name: "Grey", color: "#E4E5E8", value: "grey" },
  { id: 11, name: "Pink", color: "#E08D9D", value: "pink" },
  { id: 12, name: "Blue", color: "#3FDEFF", value: "blue" },
];

export const size = [
  {
    id: 1,
    size: "XXS",
    value: "xxs",
  },
  {
    id: 2,
    size: "XL",
    value: "xl",
  },
  {
    id: 3,
    size: "XS",
    value: "xs",
  },
  {
    id: 4,
    size: "S",
    value: "s",
  },
  {
    id: 5,
    size: "M",
    value: "m",
  },
  {
    id: 6,
    size: "L",
    value: "l",
  },
  {
    id: 7,
    size: "XXL",
    value: "xxl",
  },
  {
    id: 8,
    size: "3XL",
    value: "3xl",
  },
  {
    id: 9,
    size: "4XL",
    value: "4xl",
  },
];

export const dress_styles = [
  { id: 1, title: "Classic", description: "Classic", value: "classic" },
  { id: 2, title: "Casual", description: "Casual", value: "casual" },
  { id: 3, title: "Business", description: "Business", value: "business" },
  { id: 4, title: "Sport", description: "Sport", value: "sport" },
  { id: 5, title: "Elegant", description: "Elegant", value: "elegant" },
  {
    id: 6,
    title: "Formal (evening)",
    description: "Formal (evening)",
    value: "formal",
  },
];

export const dress = [
  {
    gender: "men",
    category: "printed_t-shirt",
    item_name: "green printed t-shirt",
    price: 19.99,
    color: "green",
    available_colors: ["dark green", "red", "blue"],
    brand: "jhanvi's",
    size: "m",
    available_sizes: ["s", "m", "l", "xl"],
    dress_style: "casual",
    rating: 4.5,
    number_of_comments: 120,
    image_url:
      "https://assets.ajio.com/medias/sys_master/root/20240117/JS2g/65a72b6c8cdf1e0df5bb2e44/-473Wx593H-466988199-seagreen-MODEL5.jpg",
  },
  {
    gender: "women",
    category: "kurti",
    item_name: "lavender floral kurti",
    price: 29.99,
    color: "purple",
    available_colors: ["lavender", "pink", "white"],
    brand: "helen's",
    size: "l",
    available_sizes: ["xs", "s", "m", "l", "xl"],
    dress_style: "elegant",
    rating: 4.7,
    number_of_comments: 85,
    image_url:
      "https://assets.ajio.com/medias/sys_master/root/20240510/3RyW/663e044c05ac7d77bb504da2/-473Wx593H-465784206-lavender-MODEL5.jpg",
  },
  {
    gender: "men",
    category: "plain t-shirts",
    item_name: "urban essentials plain t-shirts",
    price: 45.0,
    color: "white",
    available_colors: ["white", "black", "gray"],
    brand: "polypal's",
    size: "s",
    available_sizes: ["s", "m", "l"],
    dress_style: "classic",
    rating: 4.3,
    number_of_comments: 200,
    image_url:
      "https://assets.ajio.com/medias/sys_master/root/20240123/tBGd/65afe1468cdf1e0df5c6ece4/-473Wx593H-410456774-wht-MODEL.jpg",
  },
  {
    gender: "men",
    category: "joggers",
    item_name: "gray athletic joggers",
    price: 35.0,
    color: "gray",
    available_colors: ["gray", "black"],
    brand: "woden's",
    size: "xl",
    available_sizes: ["m", "l", "xl", "xxl"],
    dress_style: "casual",
    rating: 4.6,
    number_of_comments: 150,
    image_url:
      "https://assets.ajio.com/medias/sys_master/root/20240716/0Dn2/66962e9f1d763220fabdef46/-473Wx593H-442306752-ltgrey-MODEL.jpg",
  },
  {
    gender: "men",
    category: "full sleeve t-shirt",
    item_name: "black formal full sleeve t-shirt",
    price: 24.99,
    color: "black",
    available_colors: ["black", "navy blue"],
    brand: "mm's",
    size: "m",
    available_sizes: ["s", "m", "l", "xl"],
    dress_style: "formal",
    rating: 4.4,
    number_of_comments: 98,
    image_url:
      "https://assets.ajio.com/medias/sys_master/root/20230908/JGIK/64fa769dafa4cf41f5d1cf6f/-473Wx593H-461536573-black-MODEL.jpg",
  },
  {
    gender: "women",
    category: "tops",
    item_name: "yellow summer top",
    price: 22.99,
    color: "yellow",
    available_colors: ["yellow", "white", "coral"],
    brand: "mellon's",
    size: "s",
    available_sizes: ["xs", "s", "m", "l"],
    dress_style: "casual",
    rating: 4.2,
    number_of_comments: 75,
    image_url:
      "https://assets.ajio.com/medias/sys_master/root/20210522/Vn4D/60a80050f997ddb312a62054/-473Wx593H-410289715-53l-MODEL.jpg",
  },
  {
    gender: "men",
    category: "boxers",
    item_name: "navy blue cotton boxers",
    price: 12.5,
    color: "blue",
    available_colors: ["navy blue", "gray", "black"],
    brand: "polypal's",
    size: "ml",
    available_sizes: ["s", "m", "ml", "l"],
    dress_style: "casual",
    rating: 4.1,
    number_of_comments: 60,
    image_url:
      "https://assets.ajio.com/medias/sys_master/root/20230418/06kv/643ec267711cf97ba730bb7e/-473Wx593H-469491270-navy-MODEL5.jpg",
  },
  {
    category: "men",
    category: "jeans",
    item_name: "denim blue slim fit jeans",
    price: 40.0,
    color: "blue",
    available_colors: ["denim blue", "black"],
    brand: "jhanvi's",
    size: "l",
    available_sizes: ["m", "l", "xl"],
    dress_style: "classic",
    rating: 4.8,
    number_of_comments: 110,
    image_url:
      "https://assets.ajio.com/medias/sys_master/root/20240216/WWhf/65cf484d05ac7d77bb5e45bf/-473Wx593H-442111379-denimblue-MODEL.jpg",
  },
];

const details_page = [
  {
    gender: "women",
    category: "payjamas",
    item_name: "pink silk payjamas",
    price: 18.99,
    color: "pink",
    available_colors: ["pink", "purple"],
    brand: "helen's",
    size: "xl",
    available_sizes: ["m", "l", "xl", "xxl"],
    dress_style: "business",
    rating: 4.3,
    number_of_comments: 55,
    image_url:
      "https://assets.ajio.com/medias/sys_master/root/20231209/HNpd/65736fe6ddf7791519bdbc50/-473Wx593H-466866125-pink-MODEL6.jpg",
  },
];

export const payments = [
  { title: "Secure payment", icon: <CreditCard /> },
  { title: "Size & Fit", icon: <Shirt /> },
  { title: "Free shipping", icon: <Truck /> },
  {
    title: "Free shipping & Returns",
    icon: <CornerDownLeft />,
  },
];

export const available_colors = [
  { id: 1, name: "Purple", color: "#8434E1", value: "purple" },
  { id: 2, name: "Black", color: "#252525", value: "black" },
  { id: 3, name: "Red", color: "#F35528", value: "red" },
  { id: 4, name: "Orange", color: "#F16F2B", value: "orange" },
];

export const available_sizes = [
  { size: "XS" },
  { size: "S" },
  { size: "M" },
  { size: "L" },
  { size: "XL" },
];
