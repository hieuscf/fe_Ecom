import React from "react";
import TopStrip from "../components/TopStrip/Topstrip"; // Corrected import
import TopBar from "../components/TopBar/TopBar";
/*import NavBar from "../components/NavBar/NavBar"; // Corrected import
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"; */
import PropTypes from "prop-types";
import "./Main.scss";

const Main = ({ children }) => {
  return (
    <div className="layout">
      <TopStrip message=" 100% Secure delivery without contacting the courier" />
      <TopBar /> 
      {/* Corrected JSX usage */}
      {/* Corrected JSX usage */}
      {/* <Header /> {/* Corrected JSX usage */}
      {children || <div>Content is missing</div>}
      {/* <Footer /> */}
    </div>
  );
};
Main.propTypes = {
  children: PropTypes.node,
};
export default Main;
