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
      <div className="w-[400px] border-2 rounded-lg ring-2 ring-primary-2 ring-offset-4">
        {/* Tab Headers */}
        <div className="flex">
          <p
            className={`font-semibold w-full py-2 border-[1px] border-t-0 text-center hover:bg-primary-1 hover:text-white cursor-pointer rounded-tl-lg ${
              selectedTab === "login" ? "bg-white border-b-0" : "bg-gray-200"
            }`}
            onClick={() => {
              handleTabClick("login");
            }}
          >
            Login
          </p>
          <p
            className={`font-semibold w-full py-2 border-[1px] border-t-0 text-center hover:bg-primary-1 hover:text-white cursor-pointer rounded-tr-lg ${
              selectedTab == "create account"
                ? "bg-white border-b-0"
                : "bg-gray-200"
            }`}
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
