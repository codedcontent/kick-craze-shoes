import { FC } from "react";

type ShowAngleDisplayProps = {
  id: number;
  image: string;
  handleClick: (id: number) => void;
};

const ShoeAngleDisplay: FC<ShowAngleDisplayProps> = ({
  id,
  image,
  handleClick,
}) => {
  return (
    <div
      className="w-max h-max bg-gradient-to-r p-3 md:p-4 from-primary-1 to-primary-2 grid place-items-center rounded-lg transition-all opacity-80 hover:opacity-100 cursor-pointer duration-150"
      onClick={() => handleClick(id)}
    >
      <img src={image} alt="shoe image smaller" className="w-12 md:w-20" />
    </div>
  );
};

export default ShoeAngleDisplay;
