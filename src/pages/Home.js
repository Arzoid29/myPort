/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo from "../images/porfile.jpg";

export default function Home() {
  return (
    <div className=' max-w-xl mx-auto mt-5 rounded-lg'>
      <br />
      <img src={logo} className="rounded-full w-40 mx-auto" />
      <p className="text-3xl my-6 text-center dark:text-white ">
        Hi, I'm David 🤘 🐻‍❄️
      </p>
      <h2 className="max-w-3xl text-5xl md:text-5xl font-extrabold mx-auto dark:text-white text-blue-600 text-center py-2">
        Software Developer
      </h2>
      <p className="max-w-2xl text-3xl md:text-3xl  mx-auto dark:text-white text-gray-800 text-center py-2">
        I am a software student who loves the music and new technologies i love
        learn new things and all about the sounds and music
        <br />
        
      </p>
    </div>
  );
}
