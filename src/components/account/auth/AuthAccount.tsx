import { useState } from "react";
import Login from "./Login";
import CreateAccount from "./CreateAccount";

const AuthAccount = () => {
  type TAuthTabOptions = "login" | "create account";
  const [selectedTab, setSelectedTab] = useState<TAuthTabOptions>("login");

  const handleTabClick = (tabOption: TAuthTabOptions) => {
    setSelectedTab(tabOption);
  };

  return (
    <div className="w-full flex justify-center items-center">
      {/* Tab Container */}
      <div className="h-96 w-[500px] border-2 rounded-lg">
        {/* Tab Headers */}
        <div className="flex">
          <p
            className="font-semibold w-full py-2 border-[1px] border-t-0 text-center hover:bg-primary-1 hover:text-white cursor-pointer rounded-tl-lg"
            onClick={() => {
              handleTabClick("login");
            }}
          >
            Login
          </p>
          <p
            className="font-semibold w-full py-2 border-[1px] border-t-0 text-center hover:bg-primary-1 hover:text-white cursor-pointer rounded-tr-lg"
            onClick={() => {
              handleTabClick("create account");
            }}
          >
            Create Account
          </p>
        </div>

        {/* Tab Content */}
        {selectedTab === "login" ? <Login /> : <CreateAccount />}
      </div>
    </div>
  );
};

export default AuthAccount;