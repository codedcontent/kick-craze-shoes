import { FC } from "react";
import welcomeBackShoeBg from "../../assets/images/loging_bg.png";
import loginShoes from "../../assets/images/logshoes.png";
import { BsPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import AuthProvider from "../pages/welcome-back/AuthProvider";

const WelcomeBackLayout: FC = () => {
  return (
    <section
      className="w-full h-screen bg-cover"
      id="services"
      style={{
        backgroundImage: `url(${welcomeBackShoeBg})`,
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center h-full pt-16 px-10 md:px-4">
        {/* Shoe hero image */}
        <div className="w-full md:w-1/2 h-full flex justify-center items-center">
          <img
            src={loginShoes}
            alt="show-bg"
            className="h-48 md:h-full md:w-full"
          />
        </div>

        {/* Login form */}
        <div className="w-full md:w-1/2 h-full flex justify-center items-center mt-6 md:mt-0">
          <div className="w-full md:w-max">
            <p className="italic font-indie-flower text-5xl">Welcome Back</p>

            <form className="mt-4 md:mt-10 flex flex-col gap-y-2" action="/">
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

              {/* Forgot password link */}
              <a href="#" className="text-right text-sm hover:underline">
                Forget password?
              </a>

              {/* Submit button */}
              <button
                type="submit"
                className="py-3 w-full text-white uppercase bg-gradient-to-r from-primary-1 to-primary-2 rounded-md transition-colors duration-150 hover:to-primary-1"
              >
                Login
              </button>

              {/* Auth providers */}
              <div className="flex gap-4 justify-center items-center mt-4">
                {/* Google */}
                <AuthProvider providerType="google" />
                {/* Facebook */}
                <AuthProvider providerType="facebook" />
                {/* Twitter */}
                <AuthProvider providerType="twitter" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeBackLayout;
