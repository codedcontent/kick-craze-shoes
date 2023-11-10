import EmptyCart from "./EmptyCart";
import Cart from "./Cart";
import { selectCart } from "../../state/cart/cartSlice";
import { useAppSelector } from "../../state/hooks";
import BreadCrumbs from "../common/BreadCrumbs";

const CartLayout = () => {
  const cart = useAppSelector(selectCart);

  return (
    <div className="min-h-[500px] m-auto">
      {/* Breadcrumbs for Navigation */}
      <div className="mt-4">
        <BreadCrumbs
          breadCrumbs={[
            { title: "Home", path: "/" },
            { title: "Cart", path: "/cart" },
          ]}
        />
      </div>

      {cart.length === 0 ? <EmptyCart /> : <Cart />}
    </div>
  );
};

export default CartLayout;
