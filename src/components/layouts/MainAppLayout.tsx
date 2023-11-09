import { Outlet } from "react-router-dom";
import MainAppNavbar from "../common/MainAppNavbar";
import Footer from "../../pages/Footer";

const MainAppLayout = () => {
  // useEffect(() => {}, []);
  return (
    <main className="min-h-screen">
      <MainAppNavbar />

      <div className="px-6 md:px-12 pt-14">
        <Outlet />
      </div>

      <Footer />
    </main>
  );
};

export default MainAppLayout;
