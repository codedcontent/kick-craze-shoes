import { FC, useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsFillCartCheckFill, BsPersonFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar: FC = () => {
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

  const navLinks = [
    { title: "home", href: "#" },
    { title: "products", href: "#products" },
    { title: "about", href: "#about" },
    { title: "review", href: "#review" },
    { title: "services", href: "#services" },
  ];

  return (
    <div className="w-full h-14 shadow-md flex justify-center items-center z-50 fixed top-0 left-0 bg-white px-6 md:px-12 lg:px-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}

        <a href="/" className="special-color text-xl md:text-2xl font-bold">
          KickCraze
        </a>

        {/* Nav links - large screen */}
        <div className="hidden lg:flex w-full items-center">
          <div className="flex gap-x-10 flex-1 w-full justify-center items-center">
            {navLinks.map(({ href, title }, index) => (
              <a
                key={index}
                href={href}
                className="hover:special-color hover:font-bold transition-all duration-100 font-light capitalize"
                onClick={() => setMenuOpen(false)}
              >
                {title}
              </a>
            ))}
          </div>

          {/* Nav buttons */}
          <div className="flex gap-x-4">
            <AiFillHeart className="hover:animate-shake-x text-2xl" />
            <BsFillCartCheckFill className="text-2xl hover:animate-shake-x" />
            <BsPersonFill className="text-2xl hover:animate-shake-x" />
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
                  {navLinks.map(({ href, title }, index) => (
                    <a
                      key={index}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="hover:font-bold transition-all duration-100 font-light capitalize text-white"
                    >
                      {title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
