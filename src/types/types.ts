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

export type TFavs = Omit<TProduct, "shareCount" | "likes">;

export type TCartItem = Pick<
  TProduct,
  "description" | "id" | "image" | "name" | "price"
> & { quantity: number };

export type TLoginForm = {
  email: string;
  password: string;
};

export type TCreateAccountForm = TLoginForm & { name: string };

export type TAccountOption = {
  name: string;
  description: string;
  image: React.ReactNode;
  path: string;
};
