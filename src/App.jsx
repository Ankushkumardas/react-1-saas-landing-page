import "./App.css";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import {Partners} from '../src/components/data/Partners'
import Slider from "./components/Slider";
import Roadmapsection from "./components/Roadmapsection";
import Featuressection from "./components/Featuressection";
import TestimonialSection from "./components/TestimonialSection";
import Pricingsection from "./components/Pricingsection";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="fixed z-10 flex justify-center w-screen min-h-screen px-6 pointer-events-none py-30">
        <div className="bg-[url('/grid.svg')] opacity-15 absolute inset-0"></div>
        <img src="/mesh.svg" className="opacity-20 " />
      </div>
      <div className="relative z-20 lg:px-24">
        <Navbar />
        <div className="container mx-auto">
          <Herosection />
          <Slider images={Partners}/>
          <Roadmapsection/>
          <Featuressection/>
          <TestimonialSection/>
          <Pricingsection/>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
