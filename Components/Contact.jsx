import React, { useEffect, useState } from "react";

function Contact(props) {
  const openMail = () => {
    window.open("mailto:dheenadayalan.work@gmail.com");
  };
  const texts = [
    "I don’t always test my code, but when I do, I do it in production.",
    "I just changed one line of code, what could possibly go wrong?",
    "99 little bugs in the code, take one down, patch it around, 127 little bugs in the code.",
    "If it works, don't touch it; if it doesn’t, blame the intern.",
    "CSS is awesome... said no one ever.",
    "It works on my machine.",
    "Programmer: A machine that turns coffee into code.",
    "Why do Java developers wear glasses? Because they don’t C#.",
    "Code never lies, comments sometimes do.",
    "There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [texts.length]);
  return (
    <div className="tw-flex tw-flex-col tw-p-5 tw-gap-4">
      <h6 className="text-start tw-text-xl tw-font-semibold poppins-semibold tw-pt-5"
      style={{ color: "#393e46" }}>
        CONTACT
      </h6>
      <div className="tw-relative md:tw-h-[60vh] tw-h-auto tw-pb-[50vh] md:tw-pb-0">
        <div className="tw-absolute contact tw-w-full tw-h-[50vh] md:tw-h-[40vh] tw-z-0"></div>
        <div className="card bg-contact tw-absolute tw-w-[90%] tw-h-auto md:tw-h-[40vh] tw-mt-[12vh] tw-z-30 tw-left-[5%]">
          <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-center tw-p-5 tw-text-center tw-my-auto">
            <div className="tw-flex md:tw-w-1/2 tw-flex-col ">
              <h1 className="tw-text-3xl tw-font-bold">Dheena Dayalan</h1>
              <h1 className="tw-text-xl tw-font-thin">
                dheenadayalan.work@gmail.com
              </h1>
              <div className="tw-mt-2">
                <button className="btn btn-icon">
                  <a
                    href="https://github.com/dheenaadayalan"
                    style={{ all: "unset" }}
                  >
                    <i
                      className="fa fa-github-square fa-2x"
                      aria-hidden="true"
                    ></i>
                  </a>
                </button>
                <button className="btn btn-icon">
                  <a
                    href="https://x.com/dheenadayalann"
                    style={{ all: "unset" }}
                  >
                    <i
                      className="fa fa-twitter-square fa-2x"
                      aria-hidden="true"
                    ></i>
                  </a>
                </button>
                <button className="btn btn-icon">
                  <a
                    href="https://www.linkedin.com/in/dheenadayalann/"
                    style={{ all: "unset" }}
                  >
                    <i
                      className="fa fa-linkedin-square fa-2x"
                      aria-hidden="true"
                    ></i>
                  </a>
                </button>
                <button className="btn btn-icon" onClick={openMail}>
                  <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                </button>
              </div>
              <h6 className="tw-text-sm tw-px-5 poppins-light">
                Copyright © {new Date().getFullYear()} Dheena Dayalan.
              </h6>
            </div>
            <div className="tw-m-auto md:tw-w-1/2">
              <p className="tw-font-thin tw-text-xl tw-text-center">
                <span className="tw-text-5xl tw-font-bold">&#8220;</span>
                {texts[currentIndex]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
