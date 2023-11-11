import { ImHistory } from "react-icons/im";
import { BiMessageSquareDots } from "react-icons/bi";
import {
  MdOutlineAddHome,
  MdOutlineAdminPanelSettings,
  MdOutlineFavoriteBorder,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { TAccountOption } from "../../types/types";
import AccountOption from "./AccountOption";

const accountOptions: TAccountOption[] = [
  {
    name: "See order history",
    description:
      "Track, return, cancel an order, download invoice or buy again",
    image: <ImHistory />,
    path: "order-history",
  },
  {
    name: "See favs",
    description: "View and manage your favorite products and wishlist",
    image: <MdOutlineFavoriteBorder />,
    path: "favs",
  },
  {
    name: "See cart",
    description: "Review and edit items in your shopping cart",
    image: <MdOutlineShoppingCart />,
    path: "cart",
  },
  {
    name: "Address",
    description: "Manage your shipping addresses",
    image: <MdOutlineAddHome />,
    path: "address",
  },
  {
    name: "Messages",
    description: "View and manage your messages and notifications",
    image: <BiMessageSquareDots />,
    path: "messages",
  },
  {
    name: "Admin Panel",
    description: "Access the admin panel for advanced account management",
    image: <MdOutlineAdminPanelSettings />,
    path: "my-admin-panel",
  },
];

const AccountOptions = () => {
  return (
    <div className="w-full grid gap-6 grid-cols-3">
      {accountOptions.map((option, index) => {
        return <AccountOption {...option} key={index} />;
      })}
    </div>
  );
};

export default AccountOptions;
