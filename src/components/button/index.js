import React from "react";
import "./main.css";

const Button = ({ method, handleClick, children }) => {
  return (
    <button
      type={method}
      onClick={handleClick}
      className="btn btn-medium btn-dark"
    >
      {children}
    </button>
  );
};

export default Button;
