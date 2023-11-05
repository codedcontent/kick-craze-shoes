import shoe1 from "../assets/images/shoes1.png";
import shoe2 from "../assets/images/shoes2.png";
import shoe3 from "../assets/images/shoes3.png";
import shoe4 from "../assets/images/shoes4.png";
import shoe5 from "../assets/images/shoes5.png";
import shoe6 from "../assets/images/shoes6.png";
import shoe7 from "../assets/images/shoes7.png";

export type KickCrazeShoesProps = {
  image: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  id: number;
};

export const kickCrazeShoes: KickCrazeShoesProps[] = [
  {
    id: 1,
    image: shoe1,
    name: "Nike Air Max 270",
    description:
      "Experience ultimate comfort and style with the Nike Air Max 270. It features a breathable mesh upper and a responsive Air Max unit in the heel.",
    price: 149.99,
    rating: 4,
  },
  {
    id: 2,
    image: shoe2,
    name: "Nike Zoom Pegasus 38",
    description:
      "Get ready to fly with the Nike Zoom Pegasus 38. These running shoes provide excellent cushioning and support for your daily runs.",
    price: 129.99,
    rating: 5,
  },
  {
    id: 3,
    image: shoe3,
    name: "Nike React Infinity Run",
    description:
      "Stay motivated and injury-free with the Nike React Infinity Run. Its responsive cushioning and stability features make it perfect for long-distance runs.",
    price: 159.99,
    rating: 4,
  },
  {
    id: 4,
    image: shoe4,
    name: "Nike Air Force 1",
    description:
      "Step up your sneaker game with the iconic Nike Air Force 1. It offers timeless style and unbeatable comfort for everyday wear.",
    price: 109.99,
    rating: 3,
  },
  {
    id: 5,
    image: shoe5,
    name: "Nike Joyride Run Flyknit",
    description:
      "Experience a new level of comfort with the Nike Joyride Run Flyknit. Its innovative cushioning system adapts to your every step, providing a smooth ride.",
    price: 179.99,
    rating: 4,
  },
  {
    id: 6,
    image: shoe6,
    name: "Nike Free RN 5.0",
    description:
      "Enjoy the freedom of movement with the Nike Free RN 5.0. These lightweight running shoes offer a barefoot-like feel while still providing support.",
    price: 89.99,
    rating: 2,
  },
  {
    id: 7,
    image: shoe7,
    name: "Nike Air Zoom Structure 23",
    description:
      "Stay stable and comfortable during your runs with the Nike Air Zoom Structure 23. Its supportive design and responsive cushioning deliver a smooth stride.",
    price: 139.99,
    rating: 5,
  },
];
