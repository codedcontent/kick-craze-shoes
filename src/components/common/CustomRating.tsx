import { FC } from "react";
import { AiFillStar } from "react-icons/ai";

type CustomRatingProps = {
  rating: number;
};

const CustomRating: FC<CustomRatingProps> = ({ rating }) => {
  return (
    <div className="flex gap-4 justify-center items-center">
      {Array(rating)
        .fill("")
        .map((_, index) => (
          <AiFillStar key={index} />
        ))}
    </div>
  );
};

export default CustomRating;
