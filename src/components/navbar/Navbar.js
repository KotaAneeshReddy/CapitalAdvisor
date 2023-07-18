import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);

  return (
    <div className="w-full h-20 top-0 z-50 p-4 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className="h-14 w-14 flex">
        <img className="rounded-full" src={logo} alt="logo"></img>
        {/* <h3 className="justify-between items-center">Aneesh</h3> */}
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map((navlink) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={navlink._id}
            >
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
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="rounded-full w-14" src={logo} alt="logo"></img>
                <p className="text-sm text-gray-400 mt-2">
                  Inser some text here in little time
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((navlink) => (
                  <li
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                    key={navlink._id}
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={navlink.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {navlink.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find Me In
                </h2>
                <div className="flex gap-2">
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
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
