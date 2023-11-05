import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./module.css";

type TBannerProps = {
  name: string;
  id: number;
  image: string;
};

const bannerArray: TBannerProps[] = [
  {
    name: "Summer Sale",
    id: 1,
    image: "/summer-sale-banner-template-background-vector-32420467.jpg",
  },
  {
    name: "New Arrivals",
    id: 2,
    image: "/new-arrivals.jpg",
  },
  {
    name: "Clearance Sale",
    id: 3,
    image: "/clearance-sale.jpg",
  },
  {
    name: "Holiday Collection",
    id: 4,
    image: "/holiday-sale-banner.jpg",
  },
];

const Banner = ({ image, name }: TBannerProps) => {
  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center bg-center object-cover bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h2
        className="text-4xl font-bold text-primary-1"
        style={{ textShadow: "4px 4px 1px #6c14d0" }}
      >
        {name}
      </h2>
    </div>
  );
};

const ProductsBanner = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation={true}
      modules={[Navigation]}
      className="h-72"
    >
      {bannerArray.map((bannerInfo) => (
        <SwiperSlide key={bannerInfo.id}>
          <Banner {...bannerInfo} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductsBanner;
