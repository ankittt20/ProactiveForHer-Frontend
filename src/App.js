import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Services />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}

export default App;
