import { Link } from "react-router-dom";
import { TAccountOption } from "../../types/types";

const AccountOption = ({ description, image, name, path }: TAccountOption) => {
  return (
    <Link
      to={`/${path}`}
      className="flex gap-3 p-4 justify-center items-center border-[1px] border-primary-2 rounded-md cursor-pointer hover:border-primary-1 hover:scale-90 transition-all duration-500"
    >
      {/* Icon */}
      <div className="p-2 bg-special text-4xl text-white rounded-full h-max">
        {image}
      </div>

      {/* Option Info */}
      <div className="">
        <p className="font-medium text-lg">{name}</p>
        <p className="text-gray-500">{description}</p>
      </div>
    </Link>
  );
};

export default AccountOption;
