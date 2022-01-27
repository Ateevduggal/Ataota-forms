import React from "react";
import logo from "../assets/LOGO.svg";
const About = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5" id="about-main">
          <div className="col-12 text-center fw-bold fs-1 text-black">
            About Us <hr />
          </div>
          <div className="col-5 text-center">
            <img src={logo} alt="logo" className="w-75 mt-5" />
          </div>
          <div className="col-7 mt-5 px-5 py-2 fs-4 text1">
            <b>
              Advance Technology Adpotion and Organisation of Technical
              Assistant
            </b>
            also knows as <b>Ataota</b> is an internet commerse market place
            where everyone can use the internet to procide an oppertunity to
            create market at home, and serve customers in digital ways.
            <br />
            <br />
            Internet Commerse is the use of the internet for all phases of
            creating and completing business transactions
          </div>
        </div>
        <div className="row mt-5" id="about">
          <div className="col-12 text-center fw-bold fs-1 text-black">
            About Us <hr />
          </div>
          <div className="col-12 mt-3 px-5 py-2 fs-4 text_about">
            <b>
              Advance Technology Adpotion and Organisation of Technical
              Assistant
            </b>
            also knows as <b>Ataota</b> is an internet commerse market place
            where everyone can use the internet to procide an oppertunity to
            create market at home, and serve customers in digital ways.
            <br />
            <br />
            Internet Commerse is the use of the internet for all phases of
            creating and completing business transactions
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
