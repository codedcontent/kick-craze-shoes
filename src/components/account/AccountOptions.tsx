import AccountOption from "./AccountOption";

const accountOptions = [
  {
    name: "See order history",
    description:
      "Track, return, cancel an order, download invoice or buy again",
    image: "https://example.com/order-history-image.jpg",
  },
  {
    name: "See favs",
    description: "View and manage your favorite products and wishlist",
    image: "https://example.com/favs-image.jpg",
  },
  {
    name: "See cart",
    description: "Review and edit items in your shopping cart",
    image: "https://example.com/cart-image.jpg",
  },
  {
    name: "Address",
    description: "Manage your shipping addresses",
    image: "https://example.com/address-image.jpg",
  },
  {
    name: "Messages",
    description: "View and manage your messages and notifications",
    image: "https://example.com/messages-image.jpg",
  },
  {
    name: "Admin Panel",
    description: "Access the admin panel for advanced account management",
    image: "https://example.com/admin-panel-image.jpg",
  },
];

const AccountOptions = () => {
  return (
    <div className="w-full grid gap-4">
      {accountOptions.map((option, index) => {
        return <AccountOption {...option} key={index} />;
      })}
    </div>
  );
};

export default AccountOptions;
