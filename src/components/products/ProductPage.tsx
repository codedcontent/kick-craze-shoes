/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import BreadCrumbs from "../common/BreadCrumbs";

export const loader = async ({ params }: any) => {
  console.log(params);

  const productId = params.productId;

  return productId;
};

const ProductPage = () => {
  const productId = useLoaderData();
  return (
    <div>
      {/* Breadcrumbs for Navigation */}
      <div className="my-4">
        <BreadCrumbs
          breadCrumbs={[
            { title: "Home", path: "/" },
            { title: "Products", path: "/products" },
            { title: `Product - ${productId}`, path: `/products/${productId}` },
          ]}
        />
      </div>
    </div>
  );
};

export default ProductPage;
