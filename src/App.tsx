import SocialIcons from "./components/common/SocialIcons";
import Navbar from "./components/layouts/Navbar";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Review from "./pages/Review";
import Services from "./pages/Services";
import WelcomeBack from "./pages/WelcomeBack";

const App = () => {
  return (
    <main className="min-h-screen w-full bg-white relative pb-8">
      <SocialIcons />

      <Navbar />

      <Home />

      <Products />

      <About />

      <Review />

      <Services />

      <WelcomeBack />

      <Footer />
    </main>
  );
};

export default App;
