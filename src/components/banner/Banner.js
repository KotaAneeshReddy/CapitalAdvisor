import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { bannerImage } from "../../assets/index";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Real Estate.", "Marketing."],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 15,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="w-full py-20 flex flex-col gap-10 lgl:gap-0 p-4 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
      <div className="w-full lgl:w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal">WELCOME TO REAL E-STATE</h4>
          <h1 className="text-6xl font-bold text-white">
            Hi, I'm{" "}
            <span className="text-designColor capitalize">Aneesh Reddy</span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            Your Solution For <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            ></Cursor>
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
            Discover our real estate marketing platform, meticulously curating
            affordable land options throughout the city, guaranteeing buyers
            access to cost-effective opportunities in prime locations without
            compromising quality. Uncover our expertly researched suggestions
            for future growth, unlocking the potential for substantial returns
            on investment.
          </p>
        </div>
        <div className="flex flex-col lgl:flex-row gap-6 lgl:gap-0 justify-between">
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              Find me in
            </h2>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100045115812836"
                target="_blank"
              >
                <span className="bannerIcon">
                  <FaFacebookF />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/aneesh-reddy-kota-049a6714b"
                target="_blank"
              >
                <span className="bannerIcon">
                  <FaLinkedinIn />
                </span>
              </a>
              <a
                href="https://twitter.com/AneeshKota?t=biuHnCayTze-cNc39YmNAw&s=09"
                target="_blank"
              >
                <span className="bannerIcon">
                  <FaTwitter />
                </span>
              </a>
              <a
                href="https://instagram.com/_the_aneesh_?igshid=OTk0YzhjMDVlZA=="
                target="_blank"
              >
                <span className="bannerIcon">
                  <FaInstagram />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
        <img
          className="w-[320px] h-[270px] lgl:w-[500px] lgl:h-[450px] z-10"
          src={bannerImage}
          alt="Banner"
        />
        <div className="absolute bottom-100 w-[320px] h-[270px] lgl:w-[500px] lgl:h-[450px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
      </div>
    </section>
  );
};

export default Banner;
