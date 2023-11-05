import { FC } from "react";
import { type KickCrazeShoesProps } from "../../../constants/products";
import CustomRating from "../../common/CustomRating";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import { RiShareForwardFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const ProductCard: FC<KickCrazeShoesProps> = ({
  name,
  image,
  description,
  price,
  rating,
  id,
}) => {
  return (
    <div className="w-full p-4 rounded-md shadow-md shadow-primary-2 flex justify-center items-center flex-col space-y-6 relative group overflow-hidden cursor-pointer">
      {/* Shoe image */}
      <Link to={`/products/${id}`}>
        <img src={image} alt={name} className="h-36 w-36 z-0" />
      </Link>

      {/* Shoe details */}
      <Link
        to={`/products/${id}`}
        className="space-y-2 flex justify-center items-center flex-col"
      >
        <p className="text-xl font-bold uppercase text-center">{name}</p>

        <p className="font-light text-sm text-gray-400 text-center">
          {description}
        </p>

        <p className="text-lg font-bold uppercase text-center">$ {price}</p>

        <CustomRating rating={rating} />

        <button className="bg-gradient-to-r from-primary-1 to-primary-2 px-8 py-2 text-white focus-within:scale-95 w-full md:w-max">
          Add to Cart
        </button>
      </Link>

      {/* Like & share button */}
      <div className="flex flex-col absolute top-0 -left-5 group-hover:left-5 gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100 z-10">
        {/* Like */}
        <div className="p-2 border rounded-md border-gray-400 cursor-pointer">
          <BsFillBalloonHeartFill className="text-2xl" />
        </div>

        {/* Share */}
        <div className="p-2 border rounded-md border-gray-400 cursor-pointer">
          <RiShareForwardFill className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
