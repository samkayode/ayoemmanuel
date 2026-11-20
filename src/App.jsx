import { useState } from "react";
import Hearder from "./Components/Hearder";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
import Gallery from "./Components/Gallery";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Hearder />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
