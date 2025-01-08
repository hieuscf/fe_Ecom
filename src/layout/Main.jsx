import React from "react";
import TopStrip from "../components/TopStrip/Topstrip"; // Corrected import
import TopBar from "../components/TopBar/TopBar";
/*import NavBar from "../components/NavBar/NavBar"; // Corrected import
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"; */
import HeaderBackground from "../components/HeaderBackground/HeaderBackground.jsx";
import Header from "../components/Header/Header";
import PropTypes from "prop-types";
import "./Main.scss";
import {slidesData} from "../Data/background.jsx";

const Main = ({ children }) => {
  return (
    <div className="layout">
      <TopBar />
      {/* Corrected JSX usage */}
      {/* Corrected JSX usage */}
        <Header />
        <HeaderBackground slides={slidesData}/>
      {children || <div>Content is missing</div>}
      {/* <Footer /> */}
    </div>
  );
};
Main.propTypes = {
  children: PropTypes.node,
};
export default Main;
