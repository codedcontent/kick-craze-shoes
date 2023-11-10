import CustomButton from "../common/CustomButton";
import { useNavigate } from "react-router-dom";

const EmptyFavs = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products");
  };

  return (
    <div className="w-full h-[400px] flex justify-center items-center">
      <div className="w-96 p-10 flex items-center flex-col rounded-md bg-gray-100">
        <p className="text-xl font-black">You have no favorites</p>

        <div className="my-6 text-center">
          <p className="font-light">Discover the latest shoes</p>

          <p className="font-light">
            Save them for later, when the time is right!
          </p>
        </div>

        <CustomButton title="Discover more" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default EmptyFavs;
