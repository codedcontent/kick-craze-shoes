import { FC } from "react";
import bg1 from "../../assets/images/bg1.png";
import bgShoes from "../../assets/images/shoes.png";
import { AiOutlineDoubleRight } from "react-icons/ai";

const HomeLayout: FC = () => {
  return (
    <section className="h-screen w-full" id="home">
      <div
        className="container mx-auto h-full bg-cover relative px-4 md:px-0"
        style={{
          backgroundImage: `url(${bg1})`,
        }}
      >
        {/* Hero Text */}
        <div className="flex flex-col justify-center items-start h-full">
          {/* Nike collection intro name */}
          <div className="-space-y-4 mt-8 md:pt-20">
            <p className="text-5xl md:text-6xl special-color font-bold font-indie-flower italic">
              StrideX
            </p>
            <p className="text-6xl md:text-7xl special-color font-bold">
              Collection
            </p>
          </div>

          {/* Nike collection text */}
          <p className="mt-1 md:mt-6 w-full md:w-1/2 font-light md:text-lg">
            Introducing the sensational "StrideX Collection" from KickCraze! Get
            ready to elevate your footwear game to unimaginable heights with
            this groundbreaking line of shoes that combines style, comfort, and
            unrivaled performance. Step into a world of extraordinary innovation
            as the StrideX Collection redefines what it means to walk, run, and
            conquer every step of your journey.
          </p>

          {/* Shop now button */}
          <form
            action="#products"
            className="w-full md:w-max mt-8 md:mt-20 flex justify-center items-center"
          >
            <button className="transition-all flex bg-gradient-to-r from-primary-1 to-primary-2 pl-6 w-40 py-2.5 rounded-full justify-start items-center gap-4 hover:bg-gradient-to-b hover:from-primary-2 hover:to-primary-1 group btn">
              <span className="text-white uppercase">Shop now</span>

              <div className="relative grid place-items-center">
                <AiOutlineDoubleRight className="text-white text-lg transition-all absolute group-hover:transform group-hover:translate-x-2 duration-200" />
              </div>
            </button>
          </form>

          {/* Show image */}
          <img
            src={bgShoes}
            alt="KICK-CRAZE SHOE"
            className="absolute right-[4%] h-[80%] hidden md:inline-block"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeLayout;
