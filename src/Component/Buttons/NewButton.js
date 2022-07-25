import React from "react";
import "./button.css"

function NewButton({ buttonText, type, onClick, buttonStyle, buttonSize }) {
  const STYLES = [
    "btn--primary--solid",
    "btn--warning--solid",
    "btn--danger--solid",
    "btn--success--solid",
    "btn--primary--outline",
    "btn--warning--outline",
    "btn--danger--outline",
    "btn--success--outline",
  ];

  const SIZES = ["btn--medium", "btn--large"];

  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      type={type}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}

export default NewButton;
