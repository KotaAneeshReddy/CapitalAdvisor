import React, { useState } from "react";

const PPTDownload = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    {
      e.preventDefault();
      if (username === "") {
        setErrMsg("Username is Required");
      } else if (phoneNumber === "") {
        setErrMsg("Phone Number is Required");
      } else if (email === "") {
        setErrMsg("Email is Required");
      } else if (!emailValidation(email)) {
        setErrMsg("Please enter a valid email");
      } else if (message === "") {
        setErrMsg("Please enter your message for us");
      } else {
        setSuccessMsg("Your Message Sent Successfully");
        setErrMsg("");
        setUsername("");
        setPhoneNumber("");
        setEmail("");
        setMessage("");
      }
    }
  };

  return (
    <section>
      <div className="fixed inset-0 z-40 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen z-50">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div className="relative bg-gray-400 p-8 max-w-md mx-auto rounded pt-10">
            <div className="py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-8 rounded-lg shadow-shadowOne">
              <form className="w-full flex flex-col gap-6 py-1">
                {errMsg && (
                  <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                    {errMsg}
                  </p>
                )}
                {successMsg && (
                  <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                    {successMsg}
                  </p>
                )}
                <div
                  className="text-right text-sm text-gray-400 uppercase cursor-pointer"
                  onClick={onClose}
                >
                  <span className="transition-colors duration-500 hover:bg-designColor active">
                    X
                  </span>
                </div>
                <div className="w-full flex gap-10">
                  <div className="w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                      YOUR NAME
                    </p>
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      className={`${
                        errMsg === "Username is Required" &&
                        "outline-designColor"
                      } contactInput`}
                      type="text"
                    ></input>
                  </div>
                  <div className="w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                      PHONE NUMBER
                    </p>
                    <input
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={phoneNumber}
                      className={`${
                        errMsg === "Phone Number is Required" &&
                        "outline-designColor"
                      } contactInput`}
                      type="text"
                    ></input>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    EMAIL
                  </p>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className={`${
                      errMsg ===
                        ("Email is Required" || "Please enter a valid email") &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  ></input>
                </div>
                {/* <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  SUBJECT
                </p>
                <input className="contactInput" type="text"></input>
              </div> */}
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Message
                  </p>
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    className={`${
                      errMsg === "Please enter your message for us" &&
                      "outline-designColor"
                    } contactTextArea`}
                    cols="30"
                    rows="9"
                  />
                </div>
                <div className="w-full">
                  <button
                    onClick={handleSend}
                    className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppecase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                  >
                    Download PPT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PPTDownload;
