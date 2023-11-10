import { Link } from "react-router-dom";
import { TFavs } from "../../types/types";
import CustomRating from "../common/CustomRating";
import CustomButton from "../common/CustomButton";
import { useAppDispatch } from "../../state/hooks";
import { addToCart } from "../../state/cart/cartSlice";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import { removeFav } from "../../state/favs/favsSlice";

const FavItem = ({ description, id, image, name, price, rating }: TFavs) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      addToCart({
        description,
        id,
        image,
        name,
        price,
        quantity: 0,
      })
    );
  };

  const unFavorite = () => {
    dispatch(removeFav(id));
  };

  return (
    <div className="w-full p-4 rounded-md shadow-md shadow-primary-2 flex justify-center items-center flex-col space-y-6 relative overflow-hidden">
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
      <div className="flex flex-col absolute top-0 right-5 gap-2 z-10">
        {/* Like */}
        <div
          className="p-2 border rounded-md border-gray-400 cursor-pointer text-red-600"
          onClick={unFavorite}
        >
          <BsFillBalloonHeartFill className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default FavItem;
