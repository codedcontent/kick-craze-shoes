import { Outlet } from "react-router-dom";
import MainAppNavbar from "../common/MainAppNavbar";
import Footer from "../../pages/Footer";

const MainAppLayout = () => {
  // useEffect(() => {}, []);
  return (
    <main className="min-h-screen relative m-0 p-0">
      <MainAppNavbar />

      <div className="w-4/5 pt-14 mx-auto">
        <Outlet />
      </div>

      <Footer />
    </main>
  );
};

export default MainAppLayout;
