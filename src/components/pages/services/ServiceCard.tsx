import React, { FC } from "react";
import { ServiceCardProps } from "../../../constants/services";

const ServiceCard: FC<ServiceCardProps> = ({ description, icon, name }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-2 md:gap-4 w-full bg-gray-50 border ring-2 ring-offset-8 ring-primary-1 rounded-md p-3 md:p-6">
      <div className="text-yellow-500 text-5xl md:text-7xl">
        {React.createElement(icon)}
      </div>

      <p className="font-bold text-lg md:text-2xl">{name}</p>
      <p className="font-light text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
