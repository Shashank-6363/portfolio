import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <>
     <div>
        <NavBar />
        <Home />
        <About />
        <PortFolio />
        <Experience />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
