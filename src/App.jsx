import "./App.css";
import Contact from "./Pages/Contact";
import Crop from "./Pages/Crop";
import Facilities from "./Pages/Facilities";
import Gallery from "./Pages/Gallery";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Plans from "./Pages/Plans";
import Testimonials from "./Pages/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Crop />

      <Facilities />
      <Plans />

      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
