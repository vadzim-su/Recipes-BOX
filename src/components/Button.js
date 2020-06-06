import React from "react";

function Button({ title, styleName }) {
  return (
    <div>
      <button className={styleName}>{title}</button>
    </div>
  );
}

export default Button;
