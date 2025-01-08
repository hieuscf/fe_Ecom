import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import Button from "@mui/material/Button";
import PropTypes from 'prop-types';
import "./Dropdown.scss"
const Dropdown = ({ location, setLocation }) => {
  return (
    <>
      <Button className="country-dropdown">
        <div className="country-info">
          <span className="country-info-lable">Your Location</span>
          
          <span className="country-info-name">{location}</span>
        </div>
        <span className="country-icon">
          <FaAngleDown />
        </span>
      </Button>
    </>
  );
};
Dropdown.propTypes = {
  location: PropTypes.string.isRequired, // `location` phải là chuỗi và bắt buộc
  setLocation: PropTypes.func.isRequired, // `setLocation` phải là hàm và bắt buộc
};

export default Dropdown
