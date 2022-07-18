import React from "react";
import Header from "../components/Header";
import Identyti from "../layout/about/Identyti";
import Formation from "../layout/about/Formation";
import Biographie from "../layout/about/Biographie";
import Competences from "../layout/about/Competences";
import Footer from "../layout/Footer";

const About = () => {
  return (
    <div className="about-container" id="about">
      <Header />

      <div className="about-content">
        <div className="img-acrd floatant">
          <img
            src="https://scontent-cdg2-1.xx.fbcdn.net/v/t39.1997-6/294369030_2341787475976248_7345189718339593373_n.png?stp=dst-png_s526x395&_nc_cat=102&ccb=1-7&_nc_sid=ac3552&_nc_ohc=t73TriPBAsAAX_afAUB&_nc_ht=scontent-cdg2-1.xx&oh=00_AT-cOiakKFXc_EcTo1ekGZ3kipCQejT6YwYcXgLFdgXaEg&oe=62D80298"
            alt="Avatar"
          />
        </div>

        <Biographie />

        <Identyti />

        <Competences />

        <Formation />
      </div>

      <Footer />
    </div>
  );
};

export default About;