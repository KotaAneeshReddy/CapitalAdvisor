import React from "react";
import Title from "../layout/Title.js";
import Card from "./Card.js";
import { FaGlobe, FaBars } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 p-4 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Business Strategy"
          des="Collaborating closely with leading land sellers in the city, we identify prime growth areas and selectively partner with sellers offering competitively priced land that encompasses excellent security measures and a wide range of amenities."
          icon={<FaBars />}
        />
        <Card
          title="Seller"
          des="Effective real estate marketing helps agents and agencies reach their target audience, maximize property exposure, and facilitate successful property transactions."
          icon={<SiAntdesign />}
        />
        <Card
          title="Buyer"
          des="We are dedicated to delivering exceptional value, peace of mind, and unmatched opportunities for growth and development to buyers, offering access to prime properties, verified sellers, top-notch security, and a wide range of amenities for a seamless and rewarding land acquisition experience."
          icon={<SiProgress />}
        />
        <Card
          title="Other Works"
          des="In addition to our expertise in real estate marketing, our versatile team offers comprehensive services in various areas, including property management, luxury real estate, green and sustainable homes, and commercial real estate, enabling us to cater to a wide range of client needs with utmost professionalism and excellence."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
