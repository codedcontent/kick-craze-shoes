import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsFillCartCheckFill, BsPersonFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const MainAppNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent scroll when the user opens the nav
  useEffect(() => {
    if (menuOpen) {
      // Prevent scroll
      document.body.style.overflow = "hidden";
    } else {
      // Allow scroll
      document.body.style.overflow = "scroll";
    }
  }, [menuOpen]);

  return (
    <div className="w-full h-14 shadow-md flex justify-center items-center z-50 fixed top-0 left-0 bg-white px-6 md:px-12 lg:px-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="special-color text-xl md:text-2xl font-bold">
          KickCraze
        </a>

        {/* Nav links - large screen */}
        <div className="hidden lg:flex w-max items-center">
          {/* Nav buttons */}
          <div className="flex gap-x-4">
            <Link to={"/favs"}>
              <AiFillHeart className="hover:animate-shake-y hover:text-primary-1 cursor-pointer text-2xl" />
            </Link>
            <Link to={"/cart"}>
              <BsFillCartCheckFill className="text-2xl hover:animate-shake-y hover:text-primary-1 cursor-pointer" />
            </Link>
            <Link to="/account">
              <BsPersonFill className="text-2xl hover:animate-shake-y hover:text-primary-1 cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* Hamburger menu */}
        <div className="flex flex-col lg:hidden">
          {!menuOpen && (
            <RxHamburgerMenu
              className="text-xl cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}

          {menuOpen && (
            <div className="w-full h-screen absolute right-0 top-0 bg-neutral-50/50">
              <div className="h-screen absolute w-[65%] right-0 top-0 backdrop-blur-xl bg-special animate__animated animate__flip">
                <IoMdClose
                  className="absolute top-5 right-5 text-white z-50 text-xl cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                />

                {/* Nav links */}
                <div className="flex flex-col h-full w-full justify-center items-center gap-y-6">
                  <a
                    href="/cart"
                    className="hover:special-color hover:font-bold transition-all duration-100 font-light capitalize"
                    onClick={() => setMenuOpen(false)}
                  >
                    Cart
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainAppNavbar;
