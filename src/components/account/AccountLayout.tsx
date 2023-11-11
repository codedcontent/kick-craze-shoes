import Account from "./Account";
import AuthAccount from "./auth/AuthAccount";

const isAuthenticated = true;

const AccountLayout = () => {
  return (
    <div className="h-[500px] overflow-y-auto m-auto my-10 flex justify-center items-center">
      {isAuthenticated ? <Account /> : <AuthAccount />}
    </div>
  );
};

export default AccountLayout;
