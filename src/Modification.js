import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Ppt from "./components/ppt/Ppt";
import Contact from "./components/contact/Contact";
import FooterBottom from "./components/footer/FooterBottom";
import Footer from "./components/footer/footer";

function Modification() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
        <Banner />
        <Features />
        <Ppt />
        {/* <Webinar /> */}
        <Contact />
        <Footer />
        <FooterBottom />
        {/* <Routes>
            <Route path="/pptdownload" element={<Contact />}></Route>
          </Routes> */}
      </div>
    </div>
  );
}

export default Modification;
