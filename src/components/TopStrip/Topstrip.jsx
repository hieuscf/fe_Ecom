import React from "react";
import PropTypes from "prop-types";
import "./TopStrip.scss";

const TopStrip = ({ message }) => {
  return (
    <div className="top-strip">
      <div className="top-strip-content">
        <p>{message}</p>
      </div>
    </div>
  );
};

// Định nghĩa PropTypes cho TopStrip
TopStrip.propTypes = {
  message: PropTypes.string.isRequired, // message bắt buộc và phải là chuỗi
};

export default TopStrip;
