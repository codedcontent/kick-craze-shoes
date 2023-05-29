export interface CustomerReview {
  name: string;
  review: string;
  rating: number;
  image: string;
}

export const customerReviews: CustomerReview[] = [
  {
    name: "John Smith",
    review:
      "I absolutely love kickCraze shoes! The quality is exceptional, and they are incredibly comfortable. I've been wearing them daily, and they still look great. Highly recommended!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Emily Johnson",
    review:
      "kickCraze shoes are fantastic! They have a sleek and stylish design that goes well with any outfit. The cushioning and support are top-notch, providing all-day comfort. Definitely my go-to shoe brand now.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "David Brown",
    review:
      "I've never been more satisfied with a shoe purchase than kickCraze! The attention to detail in the craftsmanship is remarkable. The shoes fit perfectly and feel like they were custom-made for me. Couldn't be happier!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Sophia Wilson",
    review:
      "kickCraze shoes are a game-changer! Not only do they look amazing, but they also provide excellent arch support and cushioning. I can walk and run in them for hours without any discomfort. Highly impressed!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Michael Taylor",
    review:
      "I've tried several shoe brands, but none come close to kickCraze. The durability of their shoes is outstanding. They have held up well even after extensive use. I'm a loyal customer now!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Olivia Anderson",
    review:
      "kickCraze shoes are a perfect blend of style and comfort. I receive compliments whenever I wear them. The materials used are of high quality, and the shoes feel like a dream to walk in. Highly recommended!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
