import { FC } from "react";
import { kickCrazeShoes } from "../../constants/products";
import ProductCard from "../pages/products/ProductCard";

const ProductsLayout: FC = () => {
  return (
    <section className="w-full min-h-screen">
      <div className="container pt-16 mx-auto px-10">
        <p className="text-6xl font-bold special-color uppercase text-center">
          Products
        </p>

        <div className="grid grid-cols-4 gap-10 mt-10">
          {kickCrazeShoes.map((shoeProps, index) => (
            <ProductCard {...shoeProps} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsLayout;
