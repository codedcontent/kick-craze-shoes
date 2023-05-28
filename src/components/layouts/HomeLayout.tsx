import { FC } from "react";
import bg1 from "../../assets/images/bg1.png";
import bgShoes from "../../assets/images/shoes.png";
import { AiOutlineDoubleRight } from "react-icons/ai";

const HomeLayout: FC = () => {
  return (
    <section className="h-screen w-full">
      <div
        className="container mx-auto h-full bg-cover relative"
        style={{
          backgroundImage: `url(${bg1})`,
        }}
      >
        {/* Hero Text */}
        <div className="flex flex-col justify-center items-start h-full">
          {/* Nike collection intro name */}
          <div className="-space-y-4 mt-20">
            <p className="text-9xl special-color font-bold font-indie-flower italic">
              NIKE
            </p>
            <p className="text-7xl special-color font-bold">Collection</p>
          </div>

          {/* Nike collection text */}
          <p className="mt-6 w-1/2 font-light text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            accusamus totam, quo ipsa corrupti id, accusantium aliquam culpa
            laboriosam adipisci asperiores. Voluptas rem esse nam, modi dicta
            aut enim nemo! laboriosam adipisci asperiores. Voluptas rem esse
            nam, modi dicta aut enim nemo!
          </p>

          {/* Shop now button */}
          <div className="w-max mt-20">
            <button className="transition-all flex bg-gradient-to-r from-primary-1 to-primary-2 pl-6 w-40 py-2.5 rounded-full justify-start items-center gap-4 hover:bg-gradient-to-b hover:from-primary-2 hover:to-primary-1 group">
              <span className="text-white uppercase">Shop now</span>

              <div className="relative grid place-items-center">
                <AiOutlineDoubleRight className="text-white text-lg transition-all absolute group-hover:transform group-hover:translate-x-2 duration-200" />
              </div>
            </button>
          </div>

          {/* Show image */}
          <img
            src={bgShoes}
            alt="KICK-CRAZE SHOE"
            className="absolute right-[4%] h-[80%]"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeLayout;
