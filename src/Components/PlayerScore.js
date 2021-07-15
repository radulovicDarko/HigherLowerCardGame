const PlayerScore = ({ score }) => {
  return (
    <div className="playerScore">
      <h3>Player Score</h3>
      <span>{score}</span>
    </div>
  );
};

export default PlayerScore;
