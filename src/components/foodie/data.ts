import burger from "@/assets/food-burger.jpg";
import fried from "@/assets/food-fried.jpg";
import wrap from "@/assets/food-wrap.jpg";
import spread from "@/assets/food-spread.jpg";
import grill from "@/assets/food-grill.jpg";
import wedges from "@/assets/food-wedges.jpg";

export type Restaurant = {
  id: string;
  name: string;
  cuisine: string;
  city: string;
  rating: number;
  discount?: string;
  image: string;
  tags: string[];
};

export const restaurants: Restaurant[] = [
  {
    id: "food-point",
    name: "Food Point Restaurant",
    cuisine: "Chinese & Thai",
    city: "Dhaka, Bangladesh",
    rating: 4.5,
    discount: "25% OFF",
    image: burger,
    tags: ["Popular", "Burger"],
  },
  {
    id: "red-chili",
    name: "Red Chili Mini Chinese & Ristora",
    cuisine: "Chinese",
    city: "Dhaka, Bangladesh",
    rating: 4.75,
    image: fried,
    tags: ["Popular", "Chicken"],
  },
  {
    id: "nilabati",
    name: "Nilabati Hotel & Restaurant",
    cuisine: "Indian",
    city: "Dhaka, Bangladesh",
    rating: 4.3,
    image: wrap,
    tags: ["Wrap", "New"],
  },
  {
    id: "ma-ristora",
    name: "Ma Ristora & Kebab House",
    cuisine: "Asian",
    city: "Dhaka, Bangladesh",
    rating: 4.28,
    image: spread,
    tags: ["Family", "Rice"],
  },
  {
    id: "wedges-mama",
    name: "Wedges Mama Food Corner",
    cuisine: "Fast food",
    city: "Dhaka, Bangladesh",
    rating: 4.45,
    discount: "20% OFF",
    image: grill,
    tags: ["Burger", "Grill"],
  },
  {
    id: "black-birch",
    name: "Black Birch Kitchen & Lounge",
    cuisine: "Continental",
    city: "Dhaka, Bangladesh",
    rating: 4.6,
    discount: "15% OFF",
    image: wedges,
    tags: ["Snacks", "Lounge"],
  },
];

export const faqs = [
  {
    q: "I got the wrong food. What should I do?",
    a: "Report the order from your order history within 30 minutes. We will arrange a replacement or a full refund, whichever you prefer.",
  },
  {
    q: "My foodman's number is unreachable. What should I do?",
    a: "Use the in-app chat on the live order screen. If there is still no answer in 5 minutes, our support team reassigns your order.",
  },
  {
    q: "My foodman refused to take my order. What can I do?",
    a: "Tap 'Report rider' on the order page. The order is returned to the queue immediately and a new rider is assigned at no extra cost.",
  },
  {
    q: "My foodman cancelled my order. What should I do?",
    a: "We're sorry for the inconvenience. Please report it through the app within a couple of hours so we can promptly contact our support team with the helpline.",
  },
  {
    q: "I forgot to apply a promo code on my food order. What can I do now?",
    a: "Contact support with your order number and we will add the discount back to your Foodie wallet within 24 hours.",
  },
];
