import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Experience from "./components/Experience.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ExcelledIn from "./components/ExcelledIn.jsx"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Experience />
      <AboutUs />
      <ExcelledIn />
    </>
  );
}
