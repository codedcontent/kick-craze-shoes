import CustomButton from "../common/CustomButton";
import AccountOptions from "./AccountOptions";

const Account = () => {
  return (
    <div className="w-full h-full space-y-6">
      {/* Intro text */}
      <h1 className="text-3xl font-semibold capitalize">Your Account</h1>

      {/* Account layout option listings */}
      <AccountOptions />

      <div className="flex w-full">
        <div className="flex-1"></div>

        <CustomButton title="Logout" full={false} />
      </div>
    </div>
  );
};

export default Account;
