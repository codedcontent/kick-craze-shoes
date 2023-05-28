const Navbar = () => {
  return (
    <div className="w-full h-14 shadow-md flex justify-center items-center">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}

        <span className="special-color text-2xl font-bold">KickCraze</span>

        {/* Nav links */}
        <div className="flex gap-x-4">
          <a href="#home">Home</a>
          <a href="#product">Product</a>
          <a href="#about">About</a>
          <a href="#review">Review</a>
          <a href="#services">Services</a>
        </div>
        {/* Nav buttons */}
      </div>
    </div>
  );
};

export default Navbar;
