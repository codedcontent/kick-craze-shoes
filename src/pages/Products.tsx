import { FC } from "react";
import { kickCrazeShoes } from "../constants/products";
import ProductCard from "../components/pages/products/ProductCard";

const Products: FC = () => {
  return (
    <section className="w-full min-h-screen" id="products">
      <div className="container pt-16 mx-auto px-10 md:px-12 lg:px-4">
        <p className="text-4xl lg:text-6xl font-bold special-color uppercase text-center">
          Products
        </p>

        <div className="mt-6 lg:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 lg:gap-10">
          {kickCrazeShoes.map((shoeProps, index) => (
            <ProductCard {...shoeProps} key={index} />
          ))}

          {/* See more product card */}
          <div className="w-full p-4 rounded-md shadow-md shadow-primary-2 flex justify-center items-center flex-col space-y-6 relative group overflow-hidden">
            {/* Shoe image */}

            {/* Shoe details */}
            <div className="space-y-2 flex justify-center items-center flex-col">
              <p className="text-xl font-bold uppercase text-center">
                Explore some more
              </p>

              <p className="font-light text-sm text-gray-400 text-center">
                Check out other amazing shoes from KickCraze. You create what
                you dream to wear.
              </p>

              <a
                href="products"
                className="bg-gradient-to-r from-primary-1 to-primary-2 px-8 py-2 text-white focus-within:scale-95 w-full md:w-max"
              >
                See more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
