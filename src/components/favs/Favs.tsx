import { selectFavs } from "../../state/favs/favsSlice";
import { useAppSelector } from "../../state/hooks";
import FavItem from "./FavItem";

const Favs = () => {
  const favs = useAppSelector(selectFavs);

  return (
    <div className="space-y-10 my-6">
      {/* Intro Text */}
      <h1 className="text-2xl text-center font-medium">Your Favorites Cart</h1>

      {/* Favs Listing */}
      <div className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-10 w-full">
        {favs.map((fav) => (
          <FavItem {...fav} key={fav.id} />
        ))}
      </div>
    </div>
  );
};

export default Favs;
