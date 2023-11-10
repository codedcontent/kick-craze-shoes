import { selectFavs } from "../../state/favs/favsSlice";
import { useAppSelector } from "../../state/hooks";
import BreadCrumbs from "../common/BreadCrumbs";
import EmptyFavs from "./EmptyFavs";
import Favs from "./Favs";

const FavsLayout = () => {
  const favs = useAppSelector(selectFavs);

  return (
    <div className="min-h-[500px] m-auto">
      <div className="mt-4">
        <BreadCrumbs
          breadCrumbs={[
            { title: "Home", path: "/" },
            { title: "Favs", path: "/favs" },
          ]}
        />
      </div>

      {favs.length === 0 ? <EmptyFavs /> : <Favs />}
    </div>
  );
};

export default FavsLayout;
