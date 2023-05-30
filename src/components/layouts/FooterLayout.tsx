import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { ImLinkedin2 } from "react-icons/im";
import SocialIcon from "../common/SocialIcon";
import { FC } from "react";

const FooterLayout: FC = () => {
  return (
    <div className="w-full bg-neutral-100">
      <div className="container mx-auto py-10 px-10 md:px-12 lg:px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {/* Get help */}
          <div className="flex gap-0 md:gap-3 lg:gap-6 flex-col w-full">
            <p className="font-bold text-2xl lg:text-3xl capitalize special-color">
              Get Help
            </p>

            {/* Get help links */}
            <div className="flex md:block space-x-3 md:space-x-0 md:space-y-2 text-sm lg:text-base">
              <a
                href="#"
                className="hover:special-color flex gap-x-2 justify-start items-center font-light w-max"
              >
                FAQ
              </a>

              <a
                href="#"
                className="hover:special-color flex gap-x-2 justify-start items-center font-light"
              >
                Shipping
              </a>

              <a
                href="#"
                className="hover:special-color flex gap-x-2 justify-start items-center font-light"
              >
                Returns
              </a>

              <a
                href="#"
                className="hover:special-color flex gap-x-2 justify-start items-center font-light"
              >
                Payment Options
              </a>
            </div>
          </div>

          {/* Our stores */}
          <div className="flex gap-0 md:gap-3 lg:gap-6 flex-col w-full">
            <p className="font-bold text-2xl lg:text-3xl capitalize special-color">
              Our stores
            </p>

            {/* Stores links */}
            <div className="flex md:block space-x-3 md:space-x-0 md:space-y-2 text-sm lg:text-base">
              <a
                href="#"
                className="hover:special-color flex gap-x-2 justify-start items-center font-light"
              >
                Nigeria
              </a>

              <a
                href="#"
                className="hover:special-color flex gap-x-2 justify-start items-center font-light"
              >
                China
              </a>

              <a
                href="#"
                className="hover:special-color flex gap-x-2 justify-start items-center font-light"
              >
                United Kingdom
              </a>

              <a
                href="#"
                className="hover:special-color flex gap-x-2 justify-start items-center font-light"
              >
                Japan
              </a>
            </div>
          </div>

          {/* Follow us */}
          <div className="flex gap-0 md:gap-3 lg:gap-6 flex-col w-full">
            <p className="font-bold text-2xl lg:text-3xl capitalize special-color">
              Follow Us
            </p>

            <div className="flex gap-6 w-full">
              {/* Twitter */}
              <SocialIcon
                icon={BsTwitter}
                link="https://twitter.com/i_am_meph"
              />

              {/* Instagram */}
              <SocialIcon
                icon={RiInstagramFill}
                link="https://www.instagram.com/tech_with_oge/"
              />

              {/* LinkedIn */}
              <SocialIcon
                icon={ImLinkedin2}
                link="https://www.linkedin.com/in/ogeme/"
              />

              {/* GitHub */}
              <SocialIcon
                icon={BsGithub}
                link="https://github.com/codedcontent"
              />
            </div>
          </div>

          {/* Contact */}
          <div className="flex gap-0 md:gap-3 lg:gap-6 flex-col w-full">
            <p className="font-bold text-2xl lg:text-3xl capitalize special-color">
              Contact
            </p>

            {/* Contact links */}
            <div className="space-y-2 text-sm">
              {/* Address */}
              <a
                href="#"
                className="hover:special-color flex gap-x-2 justify-start items-center w-max"
              >
                <FaHome className="text-black text-lg" />

                <p className="font-light">123/Konohagakure/Land of Fire</p>
              </a>

              {/* Address */}
              <a
                href="#"
                className="hover:special-color flex gap-x-2 justify-start items-center w-max"
              >
                <FaPhone className="text-black rotate-90" />

                <p className="font-light">+234 123 4567 890</p>
              </a>

              {/* Email */}
              <a
                href="#"
                className="hover:special-color flex gap-x-2 justify-start items-center w-max"
              >
                <FaEnvelope className="text-black" />

                <p className="font-light">mephorsworks@gmail.com</p>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex gap-0 md:gap-3 lg:gap-6 flex-col w-full">
            <p className="font-bold text-2xl lg:text-3xl capitalize special-color">
              Newsletter
            </p>

            <form className="space-y-2 w-full" action="/">
              <input
                type="email"
                className="rounded-xl bg-neutral-300 text-sm w-full py-2 px-4 placeholder:text-neutral-500"
                placeholder="Your email address here"
              />

              {/* Submit button */}
              <button
                type="submit"
                className="py-1.5 w-max px-5 text-white uppercase bg-gradient-to-r from-primary-1 to-primary-2 rounded-md transition-colors duration-150 hover:to-primary-1"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLayout;
