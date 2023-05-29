import { FaTruck, FaExchangeAlt, FaHeadset } from "react-icons/fa";

export interface ServiceCardProps {
  name: string;
  description: string;
  icon: React.ComponentType;
}

export const kickCrazeServices: ServiceCardProps[] = [
  {
    name: "Fast delivery",
    description:
      "Experience lightning-fast delivery of your favorite shoes right to your doorstep. We understand the excitement of receiving your new kicks, and that's why we prioritize speedy shipping to ensure you can start rocking them in no time.",
    icon: FaTruck,
  },
  {
    name: "10 days replacement",
    description:
      "We believe in providing you with the best shopping experience. If you're not completely satisfied with your purchase within 10 days, we offer a hassle-free replacement policy. Exchange your shoes for a different size, style, or color and get the perfect pair that matches your taste.",
    icon: FaExchangeAlt,
  },
  {
    name: "24/7 Support",
    description:
      "We are committed to delivering exceptional customer service whenever you need it. Our dedicated support team is available round the clock to assist you with any queries, concerns, or issues you may have. Whether it's help with sizing, tracking your order, or any other assistance, we're here to provide you with a seamless shopping experience.",
    icon: FaHeadset,
  },
];
