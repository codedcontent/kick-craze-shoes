import { Link } from "react-router-dom";

type Props = {
  breadCrumbs: {
    title: string;
    path: string;
  }[];
};

const BreadCrumbs = ({ breadCrumbs }: Props) => {
  return (
    <div className="flex gap-1">
      {breadCrumbs.map(({ path, title }, index) => (
        <div className="w-max space-x-1" key={index}>
          <Link to={path}>
            <span
              className={`uppercase text-xs ${
                index === breadCrumbs.length - 1
                  ? "special-color hover:bg-special font-bold"
                  : "text-black hover:font-medium"
              }`}
            >
              {title}
            </span>
          </Link>

          {index !== breadCrumbs.length - 1 && <span>/</span>}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumbs;
