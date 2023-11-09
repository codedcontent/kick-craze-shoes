import { useNavigate } from "react-router-dom";
import CustomButton from "../common/CustomButton";

type CheckOutDialogProps = {
  itemsPrice: number;
};

const otherCheckoutInfo = {
  tax: 0,
  delivery: 4.99,
};

const CheckoutDialog = ({ itemsPrice }: CheckOutDialogProps) => {
  const totalCost =
    itemsPrice + otherCheckoutInfo.delivery + otherCheckoutInfo.tax;

  const navigate = useNavigate();

  const gotToCheckoutPage = () => {
    navigate("/checkout");
  };
  return (
    <div className="py-4 px-10 min-h-[200px] w-96 flex border-2 border-primary-2 sticky top-16 right-0 rounded-lg flex-col">
      {/* Info text */}
      <p className="uppercase text-lg mb-2">Checkout</p>

      <div className="space-y-3 mt-4">
        {/* Items subtotal */}
        <div className="flex gap-20 justify-between items-center">
          <p className="font-bold">Items</p>
          <p className="text-sm">£ {itemsPrice.toFixed(2)}</p>
        </div>

        {/* Tax */}
        <div className="flex gap-20 justify-between items-center">
          <p className="font-bold">Tax</p>
          <p className="text-sm">£ {otherCheckoutInfo.tax}</p>
        </div>

        {/* Delivery */}
        <div className="flex gap-20 justify-between items-center">
          <p className="font-bold">Delivery Fee</p>
          <p className="text-sm">£ {otherCheckoutInfo.delivery}</p>
        </div>

        {/* Discount */}
        <div className="flex justify-between items-center">
          <p className="font-bold">Discount Code</p>

          <input
            type="text"
            placeholder="Enter Code"
            className="border-[1px] outline-gray-300 p-2 w-2/5 focus:ring-2 ring-primary-1 focus:ring-offset-2 rounded-sm uppercase placeholder:capitalize"
          />
        </div>
      </div>

      {/* Divider */}
      <hr className="border-[1px] w-full my-6" />

      {/* Total */}
      <div className="flex gap-20 justify-between items-center mb-6">
        <p className="font-bold">Total</p>
        <p className="text-sm">£ {totalCost.toFixed(2)}</p>
      </div>

      {/* Checkout Button */}
      <CustomButton title="Checkout" handleClick={gotToCheckoutPage} />
    </div>
  );
};

export default CheckoutDialog;
