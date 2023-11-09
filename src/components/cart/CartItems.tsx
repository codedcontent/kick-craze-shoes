import { selectCart } from "../../state/cart/cartSlice";
import { useAppSelector } from "../../state/hooks";
import CartItem from "./CartItem";

const CartItems = () => {
  const cartItems = useAppSelector(selectCart);

  return (
    <div className="flex-1 ml-20 space-y-2">
      {cartItems.map((item) => {
        return <CartItem {...item} key={item.id} />;
      })}
    </div>
  );
};

export default CartItems;
