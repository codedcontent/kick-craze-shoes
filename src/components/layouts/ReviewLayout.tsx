import { FC } from "react";
import { customerReviews } from "../../constants/reviews";
import ReviewCard from "../pages/reviews/ReviewCard";

const ReviewLayout: FC = () => {
  return (
    <section className="w-full min-h-screen" id="review">
      <div className="container pt-16 mx-auto px-4">
        <p className="text-6xl font-bold special-color uppercase text-center">
          Customer's Review
        </p>

        <div className="mt-10 grid grid-cols-3 gap-6">
          {customerReviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewLayout;
