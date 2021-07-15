const Score = ({ wrongCounter, rightCounter }) => {
  return (
    <div className="score-wrapper">
      <p>You have guessed:</p>
      <div className="scoreMetrics">
        <div className="left" style={{ float: "left" }}>
          <p>{rightCounter}</p>
          <p>{wrongCounter}</p>
        </div>
        <div className="right" style={{ float: "right" }}>
          <p> Right</p>
          <p> Wrong</p>
        </div>
      </div>
    </div>
  );
};

export default Score;
