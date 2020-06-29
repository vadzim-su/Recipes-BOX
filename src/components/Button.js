import React from "react";

function Button({ title, styleName, onClick }) {
  const onButtonClick = () => {
    onClick && onClick();
  };
  return (
    <button onClick={onButtonClick} className={styleName}>
      {title}
    </button>
  );
}

export default Button;
