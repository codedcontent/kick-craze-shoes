import { FC } from "react";
import { kickCrazeServices } from "../../constants/services";
import ServiceCard from "../pages/services/ServiceCard";

const ServicesLayout: FC = () => {
  return (
    <section className="w-full h-screen" id="services">
      <div className="container mx-auto flex flex-col justify-center items-center h-full gap-y-10 px-6">
        <p className="text-6xl font-bold special-color uppercase text-center">
          Our services
        </p>

        <div className="mt-10 gap-14 grid grid-cols-3">
          {kickCrazeServices.map((serviceInfo, index) => (
            <ServiceCard key={index} {...serviceInfo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesLayout;
