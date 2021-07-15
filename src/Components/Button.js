import React from "react";

function Button({ text, check, value }) {
  return (
    <button
      className="button"
      onClick={() => {
        check(value);
      }}
    >
      {text}
    </button>
  );
}

export default Button;
