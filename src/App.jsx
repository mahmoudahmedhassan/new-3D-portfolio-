// eslint-disable-next-line no-unused-vars
import { BrowserRouter } from "react-router-dom";
import {
  Experiences,
  About,
  Hero,
  Navbar,
  Tech,
  Work,
  Feedbacks,
  Contact,
} from "./components";
import { StarsCanvas } from "./components/canves";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experiences />
          <Tech />
          <Work />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
