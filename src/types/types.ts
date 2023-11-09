export type TProduct = {
  image: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  id: number;
  likes: number;
  shareCount: number;
};

export type TCartItem = Pick<
  TProduct,
  | "description"
  | "id"
  | "image"
  | "likes"
  | "name"
  | "price"
  | "rating"
  | "shareCount"
> & { quantity: number };
