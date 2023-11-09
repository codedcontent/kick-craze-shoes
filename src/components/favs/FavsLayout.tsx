import EmptyFavs from "./EmptyFavs";
import Favs from "./Favs";

const FavsLayout = () => {
  return (
    <div className="min-h-[500px] m-auto">
      {[].length === 0 ? <EmptyFavs /> : <Favs />}
    </div>
  );
};

export default FavsLayout;
