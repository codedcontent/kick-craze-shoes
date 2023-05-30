import { FC } from "react";
import { kickCrazeShoes } from "../../constants/products";
import ProductCard from "../pages/products/ProductCard";

const ProductsLayout: FC = () => {
  return (
    <section className="w-full min-h-screen" id="products">
      <div className="container pt-16 mx-auto px-10 md:px-4">
        <p className="text-4xl md:text-6xl font-bold special-color uppercase text-center">
          Products
        </p>

        <div className="mt-6 md:mt-10 grid grid-cols-1 lg:grid-cols-4 gap-5 md:gap-10">
          {kickCrazeShoes.map((shoeProps, index) => (
            <ProductCard {...shoeProps} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsLayout;
