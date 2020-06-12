import React from "react";

function Button({ title, styleName, onClick }) {
  const onButtonClick = () => {
    onClick && onClick();
  };
  return (
    <div>
      <button onClick={onButtonClick} className={styleName}>
        {title}
      </button>
    </div>
  );
}

export default Button;
