import React from "react";
import { contactIMG } from "../../assets/index";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactIMG}
        alt="contact"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Aneesh Reddy</h3>
        <p className="text-lg font-normal text-gray-400">
          Real Estate Marketing
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          "Unlock the doors to your dream property with our unparalleled real
          estate expertise, guiding you towards a world of endless possibilities
          and a place you'll proudly call asset."
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find Me In</h2>
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
  );
};

export default ContactLeft;
