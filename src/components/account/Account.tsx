import AccountOptions from "./AccountOptions";

const Account = () => {
  return (
    <div className="w-full h-full space-y-2">
      {/* Intro text */}
      <h1 className="text-3xl font-semibold capitalize">Your Account</h1>

      {/* Account layout option listings */}
      <AccountOptions />
    </div>
  );
};

export default Account;
