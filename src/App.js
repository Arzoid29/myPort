import React from "react";

import NavBar from "./components/Navbar";
import Education from "./pages/education";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

export default function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <br/>
      <hr className='text-black'/>
      <Education/>
      
      <br/>
      <Resume/>
      <br/>
      <br/>
      <br/>
      <Footer/>
    </>
  );
}
