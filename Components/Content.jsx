import React, { useState } from "react";
import pet from "../Assets/icons-pet.png";
import uclub from "../Assets/ublub.png";
import ufin from "../Assets/ufin.png";

function Content(props) {
  const [app, setApp] = useState(false);
  const handleSwitchChange = () => {
    setApp(!app);
  };
  const weekend = [
    {
      name: "NASA_APOD",
      git: "https://github.com/dheenadayala/NASA_APOD",
      web: "https://day20nasa.netlify.app/",
    },
    {
      name: "Free_Dictionary",
      git: "https://github.com/dheenadayala/Free-Dictionary",
      web: "https://day20dictionary.netlify.app/",
    },
    {
      name: "Shoping_cart",
      git: "https://github.com/dheenadayala/Simple-React-Shoping-cart",
      web: "https://day22shopingcart.netlify.app/",
    },
    {
      name: "PhoneBook_CRUD",
      git: "https://github.com/dheenadayala/PhoneBook-CRUD",
      web: "https://day30curd.netlify.app/",
    },
    {
      name: "Reset_Password",
      git: "https://github.com/dheenadayala/ResetPassword-frontend",
      web: "https://day41forgetpassword.netlify.app/",
    },
    {
      name: "StudentMentor_apis",
      git: "https://github.com/dheenadayala/Student-Mentor-apis",
      web: "https://day-39-express-db.onrender.com/",
    },
    {
      name: "CRUD_Formik",
      git: "https://github.com/dheenadayala/CRUD-Formik",
      web: "https://day32crud.netlify.app/",
    },
  ];
  return (
    <>
      <div className="tw-flex tw-flex-col tw-pt-5 tw-px-5 tw-gap-4">
        <h6
          className="text-start tw-text-xl tw-font-semibold poppins-semibold"
          style={{ color: "#393e46" }}
        >
          MY PROJECTS
        </h6>
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-5 lg:tw-mx-auto">
          <div className=" card c-1  lg:tw-w-[32vw] tw-w-full tw-h-[48vh] tw-shadow-2xl">
            <div className="card-body  tw-flex tw-flex-col">
              <h5 className="card-title tw-text-xl poppins-bold">
                MERN-"PetLov"
              </h5>
              <div className="tw-m-auto">
                <img
                  src={pet}
                  alt="PetLov's LOGO"
                  className="tw-h-[9vh] tw-w-[13vw] md:tw-h-[8vh] md:tw-w-[4vw]"
                />
                <p className="poppins-regular">
                  PetLov application, designed to connect pet owners with
                  potential adopters. Whether you're looking to find a loving
                  home for your pet or seeking to adopt a new pet, PetLov
                  provides a user-friendly platform to make the process easy and
                  efficient.
                </p>
                <div className="tw-mt-3">
                  <button className="btn btn-icon">
                    <a
                      href="https://github.com/dheenadayala/petlov-frontend"
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
                      href="https://petlov.netlify.app/"
                      style={{ all: "unset" }}
                    >
                      <i className="fa fa-link fa-2x" aria-hidden="true"></i>
                    </a>
                  </button>
                  <button className="btn btn-icon">
                    <a
                      href="https://github.com/dheenadayala/petlov-backend"
                      style={{ all: "unset" }}
                    >
                      <i className="fa fa-server fa-2x" aria-hidden="true"></i>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card c-2 lg:tw-w-[32vw] tw-w-full tw-h-[48vh] tw-shadow-2xl tw-overflow-auto contentApp">
            <div className="card-body tw-flex tw-flex-col">
              <div className="tw-flex tw-flex-row tw-justify-between">
                <h5 className="card-title tw-text-xl poppins-bold">
                  {app ? "FLUTTER" : "REACT NATIVE"}
                </h5>
                <div className="tw-flex tw-flex-col tw-items-end tw-text-end">
                  <div className="tw-w-full tw-flex tw-justify-end">
                    <input
                      className="tw-ml-auto tw-h-5 tw-w-5 tw-cursor-pointer"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                      checked={app}
                      onChange={() => handleSwitchChange()}
                    />
                  </div>
                  <label className="tw-text-sm poppins-regular">Flutter?</label>
                </div>
              </div>
              {app ? (
                <div className="tw-flex tw-flex-col">
                  <div className="tw-m-auto">
                    <div className="tw-flex tw-flex-row tw-gap-3">
                      <img
                        src={ufin}
                        alt="UFin's LOGO"
                        className="tw-h-[9vh] tw-w-[13vw] md:tw-h-[8vh] md:tw-w-[4vw]"
                      />
                      <div className="tw-h-[9vh] tw-w-[13vw] md:tw-h-[8vh] md:tw-w-[4vw] tw-my-auto tw-bg-yellow-50 tw-rounded-full tw-flex tw-flex-col">
                        <p className="tw-align-middle tw-text-center tw-font-bold tw-my-auto">
                          HW
                        </p>
                      </div>
                    </div>
                    <p className="poppins-regular">
                      Developed Flutter apps utilizing Firebase for backend
                      services. One app focuses on financial management,
                      leveraging Firebase for secure user authentication, data
                      storage, and real-time updates. The other app is an
                      AI-powered homework assistant, employing Firebase for user
                      authentication, data management, and cloud functions to
                      facilitate complex AI interactions.
                    </p>
                    <div className="tw-mt-3 tw-flex tw-flex-row tw-justify-start tw-gap-6">
                      <div className="tw-flex tw-flex-col tw-text-center tw-cursor-pointer">
                        <a
                          href="https://github.com/dheenadayala/homework_ai"
                          style={{ all: "unset" }}
                          className="btn btn-icon"
                        >
                          <i
                            className="fa fa-github-square fa-2x"
                            aria-hidden="true"
                          ></i>
                        </a>
                        <p className="tw-text-sm poppins-light">HomeWork_AI</p>
                      </div>

                      <div className="tw-flex tw-flex-col tw-text-center tw-cursor-pointer">
                        <a
                          href="https://ufin-a1e79.web.app/"
                          style={{ all: "unset" }}
                          className="btn btn-icon"
                        >
                          <i
                            className="fa fa-link fa-2x"
                            aria-hidden="true"
                          ></i>
                        </a>
                        <p className="tw-text-sm poppins-light">UFin</p>
                      </div>
                      <div className="tw-flex tw-flex-col tw-text-center tw-cursor-pointer">
                        <a
                          href="https://ufin-a1e79.web.app/"
                          style={{ all: "unset" }}
                          className="btn btn-icon"
                        >
                          <i
                            className="fa fa-github-square fa-2x"
                            aria-hidden="true"
                          ></i>
                        </a>
                        <p className="tw-text-sm poppins-light">UFin</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="tw-flex tw-flex-col">
                  <div className="tw-m-auto">
                    <img
                      src={uclub}
                      alt="UClub's LOGO"
                      className="tw-h-[9vh] tw-w-[13vw] md:tw-h-[10vh] md:tw-w-[5vw]"
                    />
                    <p className="poppins-regular">
                      I built a secure authentication system for my React Native
                      app using Firebase and Expo. Firebase provides a robust
                      backend for user management, including email/password
                      authentication, social logins (Google, Facebook, etc.),
                      and phone number verification.
                    </p>
                    <div className="tw-mt-3">
                      <button className="btn btn-icon">
                        <a
                          href="https://github.com/UClubs"
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
                          href="https://www.uclubs.in/"
                          style={{ all: "unset" }}
                        >
                          <i
                            className="fa fa-link fa-2x"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className=" card c-3 lg:tw-w-[32vw] tw-w-full tw-h-[48vh] tw-shadow-2xl ">
            <div className="card-body">
              <h5 className="card-title tw-text-xl poppins-bold">WEEKEND CODE'S </h5>
              <p className="poppins-regular">
                Developed a range of web and mobile applications using MERN,
                React, React Native, and Express.
              </p>
              <div className="tw-flex tw-h-[30vh] tw-flex-col tw-mt-2 tw-overflow-auto contentweek tw-px-2">
                {weekend.map((ele) => {
                  return (
                    <div className="tw-w-full tw-h-[7vh] tw-bg-transparent tw-border-solid tw-border-2 tw-border-black tw-rounded-xl tw-flex tw-flex-row tw-justify-between tw-m-1">
                      <h5 className="tw-my-auto tw-pl-2 poppins-semibold">
                        {ele.name}
                      </h5>
                      <div className="tw-flex tw-flex-row">
                        <button className="btn btn-icon">
                          <a
                            href={ele.git}
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
                            href={ele.web}
                            style={{ all: "unset" }}
                          >
                            <i
                              className="fa fa-link fa-2x"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
