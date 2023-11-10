import Account from "./Account";
import AuthAccount from "./auth/AuthAccount";

const isAuthenticated = false;

console.log(isAuthenticated);

const AccountLayout = () => {
  return (
    <div className="min-h-[500px] m-auto my-10 flex justify-center items-center">
      {isAuthenticated ? <Account /> : <AuthAccount />}
    </div>
  );
};

export default AccountLayout;
