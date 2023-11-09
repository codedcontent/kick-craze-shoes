import { kickCrazeShoes } from "../../constants/products";
import BreadCrumbs from "../common/BreadCrumbs";
import ProductCard from "../pages/products/ProductCard";
import ProductsBanner from "./Banner";

const Products = () => {
  return (
    <div className="min-h-[400px] mx-auto">
      {/* Product Banner */}
      <ProductsBanner />

      {/* Breadcrumbs for Navigation */}
      <div className="my-4">
        <BreadCrumbs
          breadCrumbs={[
            { title: "Home", path: "/" },
            { title: "Products", path: "/products" },
          ]}
        />
      </div>

      {/* Product Listing */}
      <div className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 lg:gap-10">
        {kickCrazeShoes.map((shoeProps, index) => (
          <ProductCard likes={0} shareCount={0} {...shoeProps} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Products;
