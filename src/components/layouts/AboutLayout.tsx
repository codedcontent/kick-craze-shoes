import { FC, useState } from "react";
import redShoe1 from "../../assets/images/red_shoes1.png";
import redShoe2 from "../../assets/images/red_shoes2.png";
import redShoe3 from "../../assets/images/red_shoes3.png";
import redShoe4 from "../../assets/images/red_shoes4.png";
import ShoeAngleDisplay from "../pages/about/ShoeAngleDisplay";

const AboutLayout: FC = () => {
  const [selectedImage, setSelectedImage] = useState<string>(redShoe1);

  const handleShoeClick = (newImage: string): void => {
    setSelectedImage(newImage);
  };

  return (
    <section className="w-full h-screen" id="about">
      <div className="container pt-16 mx-auto px-4 h-full">
        <p className="text-6xl font-bold special-color uppercase text-center">
          About
        </p>

        <div className="flex justify-start items-center mt-10 gap-20">
          {/* Shoe angle display */}
          <div className="flex w-1/2 gap-6 h-max">
            {/* List of shoe angle displays that can vbe selected */}
            <div className="flex flex-col gap-y-2 justify-center">
              <ShoeAngleDisplay
                image={redShoe1}
                handleClick={handleShoeClick}
              />
              <ShoeAngleDisplay
                image={redShoe2}
                handleClick={handleShoeClick}
              />
              <ShoeAngleDisplay
                image={redShoe3}
                handleClick={handleShoeClick}
              />
              <ShoeAngleDisplay
                image={redShoe4}
                handleClick={handleShoeClick}
              />
            </div>

            {/* Single shoe display */}
            <div className="flex w-full h-[400px] shadow-lg border-2 shadow-primary-2 rounded-xl justify-center items-center">
              <img src={selectedImage} alt="A shoe" className="w-[80%]" />
            </div>
          </div>

          {/* Text about the shoe */}
          <div className="w-1/2 shadow-sm border-1 shadow-primary-1 rounded-xl p-4">
            <p className="font-light">
              Experience the pinnacle of athletic excellence with Nike Velocity.
              This groundbreaking shoe merges state-of-the-art technology with
              impeccable design, empowering athletes of all levels to unleash
              their full potential. Featuring our revolutionary AirStride
              cushioning, Nike Velocity delivers unrivaled comfort and
              responsiveness. Propel yourself forward with every stride, leaving
              fatigue behind and embracing effortless performance. Crafted with
              precision and durability, Nike Velocity is built to withstand the
              toughest challenges. Its sleek and modern design makes a bold
              statement, setting you apart from the crowd with confidence and
              style. Available in an array of vibrant colorways, Nike Velocity
              allows you to express your unique personality. Make your mark on
              the world with a shoe that combines performance and fashion
              seamlessly. Step into greatness with Nike Velocity. Embrace the
              future of footwear and achieve new heights of success. Just do it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLayout;
