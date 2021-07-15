const PopUp = ({ trigger, highscore, restartGame }) => {
  return trigger ? (
    <div className="popUp">
      <div className="popUp-inner">
        <p>
          You have lost all your lives. <br /> Your highest score was{" "}
          {highscore}. <br /> Can you beat it?
        </p>
        <button className="close-btn" onClick={restartGame}>
          Try again
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default PopUp;
