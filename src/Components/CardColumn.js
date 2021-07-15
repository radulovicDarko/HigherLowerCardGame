import { useEffect } from "react";
import React from "react";

const CardColumn = ({ currentCard }) => {
  useEffect(() => {}, [currentCard]);
  return (
    <div className="cardColumn">
      <img
        src={
          require("../Assets/" +
            `${currentCard.sign}${currentCard.number}` +
            ".png").default
        }
        width="166"
        height="254"
        alt="C2"
      />
    </div>
  );
};

export default CardColumn;
