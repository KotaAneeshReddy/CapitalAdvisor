import React, { useState } from "react";
import PPTDownload from "../download/PPTDownload";
import WebinarRegistration from "../registerForWebinar/WebinarRegistration";

const Ppt = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupWebinar, setShowPopupWebinar] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const openPopupWebinar = () => {
    setShowPopupWebinar(true);
  };

  const closePopupWebinar = () => {
    setShowPopupWebinar(false);
  };

  return (
    <section
      id="ppt"
      className="w-full py-20 border-b-[1px] border-b-black p-4"
    >
      <div className="flex flex-col gap-10 lg:gap-4 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col gap-4 font-titleFont mb-14">
            <h3 className="text-xl lg:text-2xl uppercase font-bold text-designColor tracking-wide">
              Download PPT
            </h3>
            <p className="text-base font-bodyFont leading-6 tracking-wide">
              "Unlock the secrets to buying the perfect land in the city with
              our comprehensive and insightful PowerPoint presentation,
              providing you with valuable tips, expert advice, and a
              step-by-step guide to ensure your land purchase is a resounding
              success. Download now and embark on your journey to securing your
              dream and valuable property!"
            </p>
          </div>
          {/* <Link to="/pptdownload"> */}
          <div className="flex felx-col justify-center">
            <button
              className="w-1/2 h-12 px-6 rounded bg-gray-400 transition-colors duration-500 hover:bg-designColor text-center active"
              onClick={openPopup}
            >
              Download PPT
            </button>
          </div>
          {/* </Link> */}
          {showPopup && <PPTDownload onClose={closePopup} />}
        </div>
        <div id="webinar" className="w-full lg:w-1/2">
          <div className="flex flex-col gap-4 font-titleFont mb-14">
            <h3 className="text-xl lg:text-2xl uppercase font-bold text-designColor tracking-wide">
              Free Webinar
            </h3>
            <p className="text-base font-bodyFont leading-6 tracking-wide">
              Discover the insider tips and expert advice that will empower you
              to make informed decisions when it comes to buying land in the
              city. Join our exclusive webinar and gain invaluable insights from
              industry professionals to ensure your land acquisition journey is
              a resounding success. Reserve your spot now and elevate your real
              estate aspirations.
            </p>
          </div>
          {/* <Link to="/webinar-registration"> */}
          <div className="flex felx-col justify-center">
            <button
              className="w-1/2 h-12 px-6 rounded bg-gray-400 transition-colors duration-500 hover:bg-designColor text-center active"
              onClick={openPopupWebinar}
            >
              Register for free
            </button>
          </div>
          {/* </Link> */}
          {showPopupWebinar && (
            <WebinarRegistration onClose={closePopupWebinar} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Ppt;
