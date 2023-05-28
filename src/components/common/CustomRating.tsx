import { FC } from "react";
import { AiFillStar } from "react-icons/ai";

type CustomRatingProps = {
  rating: number;
};

const CustomRating: FC<CustomRatingProps> = ({ rating }) => {
  return (
    <div className="flex gap-2 justify-center items-center">
      {Array(5)
        .fill("")
        .map((_, index) => (
          <AiFillStar
            key={index}
            className={
              index + 1 <= rating ? "text-yellow-500" : "text-gray-400"
            }
          />
        ))}
    </div>
  );
};

export default CustomRating;
