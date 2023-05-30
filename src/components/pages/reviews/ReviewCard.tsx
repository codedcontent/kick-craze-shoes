import { FC } from "react";
import { CustomerReview } from "../../../constants/reviews";
import CustomRating from "../../common/CustomRating";

const ReviewCard: FC<CustomerReview> = ({ image, name, rating, review }) => {
  return (
    <div className="p-4 bg-gray-50 space-y-3 rounded-md cursor-pointer hover:shadow-md hover:scale-105">
      {/* Image, name, and rating */}
      <div className="flex gap-4 justify-start items-center">
        <img
          src={image}
          alt="name"
          className="h-14 md:h-20 w-14 md:w-20 rounded-full shadow-md"
        />

        <div className="space-y-1">
          <p className="font-bold md:text-lg">{name}</p>

          <CustomRating rating={rating} />
        </div>
      </div>

      {/* The review */}
      <p className="font-light">{review}</p>
    </div>
  );
};

export default ReviewCard;
