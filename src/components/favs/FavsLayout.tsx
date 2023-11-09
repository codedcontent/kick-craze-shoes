import { selectFavs } from "../../state/favs/favsSlice";
import { useAppSelector } from "../../state/hooks";
import EmptyFavs from "./EmptyFavs";
import Favs from "./Favs";

const FavsLayout = () => {
  const favs = useAppSelector(selectFavs);

  return (
    <div className="min-h-[500px] m-auto">
      {favs.length === 0 ? <EmptyFavs /> : <Favs />}
    </div>
  );
};

export default FavsLayout;
