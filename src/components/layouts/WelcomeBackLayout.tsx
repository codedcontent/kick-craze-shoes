import { FC } from "react";
import welcomeBackShoeBg from "../../assets/images/loging_bg.png";
import loginShoes from "../../assets/images/logshoes.png";
import { BsPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";

const WelcomeBackLayout: FC = () => {
  return (
    <section
      className="w-full h-screen bg-cover"
      id="services"
      style={{
        backgroundImage: `url(${welcomeBackShoeBg})`,
      }}
    >
      <div className="container mx-auto flex justify-center items-center h-full pt-16">
        {/* Shoe hero image */}
        <div className="w-1/2 h-full flex justify-center items-center">
          <img src={loginShoes} alt="show-bg" className="w-full" />
        </div>

        {/* Login form */}
        <div className="w-1/2 h-full flex justify-center items-center">
          <div className="w-max">
            <p className="italic font-indie-flower text-5xl">Welcome Back</p>

            <form className="mt-10 space-y-2" action="/">
              {/* User name text field */}
              <div className="space-y-1">
                <p className="font-medium">User Name</p>
                <div className="flex gap-4 pl-4 border-2 rounded-md border-primary-2 w-full h-9 justify-center items-center">
                  <BsPersonFill className="text-primary-1 text-2xl" />

                  <input
                    type="text"
                    className="border-none outline-none bg-transparent w-full h-full text-sm"
                    placeholder="User Name"
                  />
                </div>
              </div>

              {/* Password text field */}
              <div className="space-y-1">
                <p className="font-medium">Password</p>
                <div className="flex gap-4 pl-4 border-2 rounded-md border-primary-2 w-full h-9 justify-center items-center">
                  <RiLockPasswordFill className="text-primary-1 text-2xl" />

                  <input
                    type="password"
                    className="border-none outline-none bg-transparent w-full h-full text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              <a href="#" className="text-right text-sm">
                Forget password?
              </a>

              <button
                type="submit"
                className="py-3 w-full text-white uppercase bg-gradient-to-r from-primary-1 to-primary-2 rounded-md transition-colors duration-150 hover:to-primary-1"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeBackLayout;
