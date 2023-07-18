import React from "react";
import { Link } from "react-scroll";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 mdl:grid-cols-2 gap-8 p-4">
      <div className="w-full h-full flex flex-col md:flex-row gap-8 ">
        <img className="w-20 h-20 rounded-full" src={logo} alt="logo" />
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
      <div className="w-full h-full ">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col sml:flex-row gap-4 font-titleFont font-medium py-6">
          {navLinksdata.map((navlink) => (
            <li>
              <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
                <Link
                  activeClass="active"
                  to={navlink.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {navlink.title}
                </Link>
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="w-full h-full "></div>
      <div className="w-full h-full "></div> */}
    </div>
  );
};

export default Footer;
