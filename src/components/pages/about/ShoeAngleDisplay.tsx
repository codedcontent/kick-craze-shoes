import { FC } from "react";

type ShowAngleDisplayProps = {
  image: string;
  handleClick: (newImage: string) => void;
};

const ShoeAngleDisplay: FC<ShowAngleDisplayProps> = ({ image }) => {
  return (
    <div className="w-max h-max bg-gradient-to-r p-4 from-primary-1 to-primary-2 grid place-items-center rounded-lg transition-all opacity-80 hover:opacity-100 cursor-pointer duration-150" onClick={() => handleClick(image)}>
      <img src={image} alt="shoe image smaller" className="w-20" />
    </div>
  );
};

export default ShoeAngleDisplay;
