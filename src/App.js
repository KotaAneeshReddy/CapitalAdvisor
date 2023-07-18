import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modification from "./Modification";
import PPTDownload from "./components/download/PPTDownload";
import WebinarRegistration from "./components/registerForWebinar/WebinarRegistration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Modification />} />
        <Route path="/pptdownload" element={<PPTDownload />} />
        <Route path="/webinar-registration" element={<WebinarRegistration />} />

        {/* <div className="w-full h-auto bg-bodyColor text-lightText">
        <div className="max-w-screen-xl mx-auto">
          <Navbar />
          <Banner />
          <Features />
          <Ppt />
          <Webinar />
          <Contact />
          <Footer />
          <FooterBottom />
          <Routes>
            <Route path="/pptdownload" element={<Contact />}></Route>
          </Routes>
        </div>
      </div> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
