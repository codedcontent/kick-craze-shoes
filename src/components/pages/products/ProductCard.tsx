import { FC } from "react";
import { type KickCrazeShoesProps } from "../../../constants/products";
import CustomRating from "../../common/CustomRating";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import { RiShareForwardFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import CustomButton from "../../common/CustomButton";
import { useAppDispatch } from "../../../state/hooks";
import { addToCart } from "../../../state/cart/cartSlice";
import { TProduct } from "../../../types/types";

const ProductCard: FC<TProduct> = ({
  name,
  image,
  description,
  price,
  rating,
  id,
  likes,
  shareCount,
}) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      addToCart({
        description,
        id,
        image,
        name,
        price,
        likes,
        quantity: 0,
        rating,
        shareCount,
      })
    );
  };

  return (
    <div className="w-full p-4 rounded-md shadow-md shadow-primary-2 flex justify-center items-center flex-col space-y-6 relative group overflow-hidden">
      {/* Shoe image */}
      <Link to={`/products/${id}`} className="cursor-pointer">
        <img src={image} alt={name} className="h-36 w-36" />
      </Link>

      {/* Shoe details */}
      <div className="space-y-2 flex justify-center items-center flex-col">
        <Link to={`/products/${id}`} className="space-y-2 cursor-pointer">
          <p className="text-xl font-bold uppercase text-center">{name}</p>

          <p className="font-light text-sm text-gray-400 text-center">
            {description}
          </p>
        </Link>
        <p className="text-lg font-bold uppercase text-center">$ {price}</p>

        <CustomRating rating={rating} />

        <CustomButton
          title="Add to cart"
          handleClick={handleClick}
          full={false}
        />
      </div>

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
