import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { ImLinkedin2 } from "react-icons/im";
import SocialIcon from "../common/SocialIcon";

const FooterLayout = () => {
  return (
    <div className="w-full bg-neutral-100">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-5 gap-x-6">
          {/* Get help */}
          <div className="flex gap-y-6 flex-col w-full">
            <p className="font-bold text-3xl capitalize special-color">
              Get Help
            </p>

            {/* Get help links */}
            <div className="space-y-2">
              <a
                href="#"
                className="hover:special-color flex gap-x-2 justify-start items-center font-light"
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

          <div className="flex gap-y-6 flex-col w-full">
            <p className="font-bold text-3xl capitalize special-color">
              Our stores
            </p>

            {/* Stores links */}
            <div className="space-y-2">
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

          <div className="flex gap-y-6 flex-col w-full">
            <p className="font-bold text-3xl capitalize special-color">
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
          <div className="flex gap-y-6 flex-col w-full">
            <p className="font-bold text-3xl capitalize special-color">
              Contact
            </p>

            {/* Contact links */}
            <div className="space-y-2">
              {/* Address */}
              <a
                href="#"
                className="hover:special-color flex gap-x-2 justify-start items-center"
              >
                <FaHome className="text-black text-lg" />

                <p className="font-light">123/Konohagakure/Land of Fire</p>
              </a>

              {/* Address */}
              <a
                href="#"
                className="hover:special-color flex gap-x-2 justify-start items-center"
              >
                <FaPhone className="text-black rotate-90" />

                <p className="font-light">+234 123 4567 890</p>
              </a>

              {/* Email */}
              <a
                href="#"
                className="hover:special-color flex gap-x-2 justify-start items-center"
              >
                <FaEnvelope className="text-black" />

                <p className="font-light">mephorsworks@gmail.com</p>
              </a>
            </div>
          </div>

          <div className="flex gap-y-6 flex-col w-full">
            <p className="font-bold text-3xl capitalize special-color">
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
