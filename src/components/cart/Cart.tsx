import { selectCart } from "../../state/cart/cartSlice";
import { useAppSelector } from "../../state/hooks";
import CartItems from "./CartItems";
import CheckoutDialog from "./CheckoutDialog";

const Cart = () => {
  const cart = useAppSelector(selectCart);

  console.log(cart);
  return (
    <div className="my-6">
      {/* Into text */}
      <h1 className="text-2xl text-center font-medium">Your Shopping Cart</h1>

      <div className="flex items-center">
        {/* Cart items */}
        <CartItems />

        {/* Checkout dialog */}
        <CheckoutDialog />
      </div>

      {/* Other suggestions */}
    </div>
  );
};

export default Cart;
