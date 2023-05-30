import { FC, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsFillCartCheckFill, BsPersonFill } from "react-icons/bs";

const Navbar: FC = () => {
  const [iconClicked, setIconClicked] = useState([
    { id: 1, clicked: false },
    { id: 2, clicked: false },
    { id: 3, clicked: false },
  ]);
  return (
    <div className="w-full h-14 shadow-md flex justify-center items-center z-50 fixed top-0 left-0 bg-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}

        <span className="special-color text-2xl font-bold">KickCraze</span>

        {/* Nav links */}
        <div className="flex gap-x-10">
          <a
            href="#home"
            className="hover:special-color hover:font-bold transition-all duration-100 font-light"
          >
            Home
          </a>
          <a
            href="#product"
            className="hover:special-color hover:font-bold font-light"
          >
            Product
          </a>
          <a
            href="#about"
            className="hover:special-color hover:font-bold transition-all duration-100 font-light"
          >
            About
          </a>
          <a
            href="#review"
            className="hover:special-color hover:font-bold transition-all duration-100 font-light"
          >
            Review
          </a>
          <a
            href="#services"
            className="hover:special-color hover:font-bold transition-all duration-100 font-light"
          >
            Services
          </a>
        </div>

        {/* Nav buttons */}
        <div className="flex gap-x-4">
          <AiFillHeart className="hover:animate-shake-x text-2xl" />
          <BsFillCartCheckFill className="text-2xl hover:animate-shake-x" />
          <BsPersonFill className="text-2xl hover:animate-shake-x" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
