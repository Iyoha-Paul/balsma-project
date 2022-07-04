import React from "react";
import AboutUs from "./components/AboutUs";
import FAF from "./components/FAF";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Services from "./components/Services";

const Home = () => {
  return (
    <div className="home">
      <section className=" ">
        <Hero />
      </section>
      <section>
        <AboutUs />
      </section>
      <section>
        <FAF />
      </section>
      <section>
        <Products />
      </section>
      <section>
        <Services />
      </section>
      <section></section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
