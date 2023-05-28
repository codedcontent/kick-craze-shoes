import SocialIcons from "./components/common/SocialIcons";
import Navbar from "./components/layouts/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";

const App = () => {
  return (
    <main className="min-h-screen w-full bg-white relative">
      <SocialIcons />

      <Navbar />

      <Home />

      <Products />

      <About />
    </main>
  );
};

export default App;
