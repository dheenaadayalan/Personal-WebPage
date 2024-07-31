import React from "react";
import dp from "../Assets/mydp.jpg";

function Profile(props) {
  return (
    <>
      <div className="profil tw-p-5 ">
        <img src={dp} alt="Avatar" className="pic tw-w-[50%] tw-mx-auto tw-rounded-xl" />
        <div className="profil-content tw-text-xl tw-flex tw-flex-col">
          <p className="mt-4 m-0 md:tw-text-base">Hello World👋,</p>
          <p className="mt-4 m-0 md:tw-text-base">I'am a</p>
          <h1 className="tw-text-white tw-font-bold md:tw-text-xl">
          Full-Stack developer
          </h1>
          
          <p className="m-2 tw-text-2xl md:tw-text-base">
            JS • Express • Node • React • MongoDB • Python • Tailwindcss • Flutter
            • AWS • React Native
          </p>
          <div className="rounded-pill">
            <button
              className="mt-2 md:tw-text-base glow-on-hover"
              style={{ fontWeight: "700" }}
            >
              Check Out MY CV
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
