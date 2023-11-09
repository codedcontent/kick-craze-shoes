import EmptyCart from "./EmptyCart";
import Cart from "./Cart";
import { selectCart } from "../../state/cart/cartSlice";
import { useAppSelector } from "../../state/hooks";

const CartLayout = () => {
  const cart = useAppSelector(selectCart);

  return (
    <div className="min-h-[500px] m-auto">
      {cart.length === 0 ? <EmptyCart /> : <Cart />}
    </div>
  );
};

export default CartLayout;
