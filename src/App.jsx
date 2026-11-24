import { Routes, Route, Navigate } from "react-router-dom";

import Hearder from "./Components/Hearder";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
import Gallery from "./Components/Gallery";
import Support from "./Pages/Support";
function Home() {
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
