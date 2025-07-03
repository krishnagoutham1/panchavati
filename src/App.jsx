import "./App.css";
import Contact from "./Pages/Contact";
import Crop from "./Pages/Crop";
import Facilities from "./Pages/Facilities";
import Footer from "./Pages/Footer";
import Gallery from "./Pages/Gallery";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Testimonials from "./Pages/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Crop />

      <Facilities />

      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
