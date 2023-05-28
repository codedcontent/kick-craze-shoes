import { FC } from "react";
import { type KickCrazeShoesProps } from "../../../constants/products";
import CustomRating from "../../common/CustomRating";

const ProductCard: FC<KickCrazeShoesProps> = ({
  name,
  image,
  description,
  price,
  rating,
}) => {
  return (
    <div className="w-full p-4 rounded-md shadow-md shadow-primary-2 flex justify-center items-center flex-col space-y-6">
      <img src={image} alt={name} className="h-36 w-36" />

      <div className="space-y-2">
        <p className="text-xl font-bold uppercase text-center">{name}</p>

        <p className="font-light text-sm text-gray-400 text-center">
          {description}
        </p>

        <p className="text-lg font-bold uppercase text-center">$ {price}</p>

        <CustomRating rating={rating} />
      </div>
    </div>
  );
};

export default ProductCard;
