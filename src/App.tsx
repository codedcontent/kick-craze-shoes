import Navbar from "./components/layouts/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <main className="min-h-screen w-full bg-white relative">
      <Navbar />

      <Home />
    </main>
  );
};

export default App;
