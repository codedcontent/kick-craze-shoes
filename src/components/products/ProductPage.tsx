/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import BreadCrumbs from "../common/BreadCrumbs";
import { kickCrazeShoes } from "../../constants/products";
import CustomRating from "../common/CustomRating";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import { RiShareForwardFill } from "react-icons/ri";

const shoes = kickCrazeShoes;

export const loader = async ({ params }: Record<string, any>) => {
  const productId = params.productId;

  return productId - 1;
};

const ProductPage = () => {
  const productId: number = useLoaderData() as number;
  const product = shoes[productId];

  return (
    <div>
      {/* Breadcrumbs for Navigation */}
      <div className="my-4">
        <BreadCrumbs
          breadCrumbs={[
            { title: "Home", path: "/" },
            { title: "Products", path: "/products" },
            { title: `Product - ${productId}`, path: `/products/${productId}` },
          ]}
        />
      </div>

      {/* Product Info */}
      <div className="md:my-14 my-10 w-full flex md:flex-row flex-col gap-4 items-center">
        {/* Product Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={product.image}
            alt={product.name}
            className="md:h-[500px] h-64 md:w-[500px] w-64 mx-auto"
          />
        </div>

        {/* Product description */}
        <div className="md:w-1/2 w-full flex md:flex-row flex-col-reverse md:gap-20 gap-0">
          <div className="">
            <div className="w-full space-y-2 md:space-y-4">
              <p className="text-2xl md:text-5xl md:text-start text-center">
                {product.name}
              </p>
              <p className="md:text-xl text-base font-light">
                {product.description}
              </p>
              <div className="flex justify-between items-center">
                <p className="md:text-3xl text-2xl">${product.price}</p>

                <CustomRating rating={product.rating} />
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-primary-1 to-primary-2 px-8 py-4 text-white focus-within:scale-95 mt-5 md:mt-10 rounded-lg font-bold uppercase">
              Add to Cart
            </button>
          </div>

          <div className="flex flex-row md:flex-col justify-center items-center md:items-start gap-10 md:mb-10 mb-5 w-full md:w-max mt-5 md:mt-0">
            {/* Like */}
            <div className="cursor-pointer flex gap-1">
              <BsFillBalloonHeartFill className="text-2xl" />
              <p className="text-sm">500</p>
            </div>

            {/* Share */}
            <div className="cursor-pointer flex gap-1">
              <RiShareForwardFill className="text-2xl" />
              <p className="text-sm">24</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
