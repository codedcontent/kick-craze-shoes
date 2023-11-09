import { selectCart } from "../../state/cart/cartSlice";
import { useAppSelector } from "../../state/hooks";
import CartItems from "./CartItems";
import CheckoutDialog from "./CheckoutDialog";

const Cart = () => {
  const cart = useAppSelector(selectCart);

  const itemsPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="my-6">
      {/* Into text */}
      <h1 className="text-2xl text-center font-medium">Your Shopping Cart</h1>

      <div className="flex items-start gap-16 ml-20 relative">
        {/* Cart items */}
        <CartItems />

        {/* Checkout dialog */}
        {/* <div className="relative"> */}
        <CheckoutDialog itemsPrice={itemsPrice} />
        {/* </div> */}
      </div>

      {/* Other suggestions */}
    </div>
  );
};

export default Cart;
