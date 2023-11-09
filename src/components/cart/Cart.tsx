import { selectCart } from "../../state/cart/cartSlice";
import { useAppSelector } from "../../state/hooks";

const Cart = () => {
  const cart = useAppSelector(selectCart);

  console.log(cart);
  return <div>Cart</div>;
};

export default Cart;
