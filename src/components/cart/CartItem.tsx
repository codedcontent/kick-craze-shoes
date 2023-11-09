import { TCartItem } from "../../types/types";
import { FaMinus, FaPlus } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useAppDispatch } from "../../state/hooks";
import {
  removeFromCart,
  updateCartItemQuantity,
} from "../../state/cart/cartSlice";

const CartItem = ({ id, image, name, price, quantity }: TCartItem) => {
  const dispatch = useAppDispatch();

  const removeItemFromCartFunc = () => {
    dispatch(removeFromCart(id));
  };

  const updateCartItemAmount = (action: "increment" | "decrement") => {
    if (quantity === 1 && action === "decrement") {
      removeItemFromCartFunc();
    } else {
      if (action === "decrement") {
        dispatch(updateCartItemQuantity({ id, quantity: quantity - 1 }));
      } else if (action === "increment") {
        dispatch(updateCartItemQuantity({ id, quantity: quantity + 1 }));
      }
    }
  };

  return (
    <div className="flex gap-2 w-full items-center">
      {/* Product Info */}
      <div
        className={`flex gap-3 py-6 px-12 rounded-lg justify-between items-center border-2 ${
          id % 2 !== 0 ? "border-primary-1" : "border-primary-2"
        } flex-1`}
      >
        {/* Product Image */}
        <img src={image} alt={name} className="h-32 w-32 object-cover" />

        <div className="flex flex-col">
          {/* Product Name */}
          <p className="font-bold">{name}</p>

          {/* Product Ref. ID */}
          <p className="font-light text-sm">Product ID: #{id}</p>
        </div>

        <div className="flex gap-2 justify-center items-center">
          {/* Product Quantity */}
          <p className="font-xl text-gray-600 font-bold">{quantity}</p>

          <div className="flex flex-col gap-2">
            {/* Product Increment */}
            <div
              className="flex justify-center items-center p-2 cursor-pointer bg-gradient-to-r from-primary-1 to-primary-2 rounded-full text-white"
              onClick={() => {
                updateCartItemAmount("increment");
              }}
            >
              <FaPlus />
            </div>

            {/* Product Decrement */}
            <div
              className="flex justify-center items-center p-2 cursor-pointer bg-gradient-to-r from-primary-2 to-primary-1 rounded-full text-white"
              onClick={() => {
                updateCartItemAmount("decrement");
              }}
            >
              <FaMinus />
            </div>
          </div>
        </div>

        {/* Product Price */}
        <p className="font-bold text-lg">£ {price}</p>
      </div>

      {/* Remove product from cart completely */}
      <div
        className="text-gray-500 w-max cursor-pointer text-lg"
        onClick={() => {
          removeItemFromCartFunc();
        }}
      >
        <AiOutlineClose />
      </div>
    </div>
  );
};

export default CartItem;
