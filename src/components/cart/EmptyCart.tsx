import CustomButton from "../common/CustomButton";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products");
  };

  return (
    <div className="w-full h-[400px] flex justify-center items-center">
      <div className="w-96 p-10 flex items-center flex-col rounded-md bg-gray-100">
        <p className="text-xl font-black">Your cart is empty</p>

        <div className="my-6 text-center">
          <p className="font-light">Discover the latest shoes</p>

          <p className="font-light">
            Seize the opportunity now before other claim it!
          </p>
        </div>

        <CustomButton title="Add items to cart" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default EmptyCart;
