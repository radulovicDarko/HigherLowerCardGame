import React, { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

import CardColumn from "./Components/CardColumn";
import Score from "./Components/Score";
import Button from "./Components/Button";
import PlayerScore from "./Components/PlayerScore";
import Lives from "./Components/Lives";
import HighScore from "./Components/HighScore";
import PopUp from "./Components/PopUp";

import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cardConfig } from "./config/config";

function App() {
  const [currentCard, setCurrentCard] = useState({});
  const [cardDeck, setCardDeck] = useState([]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [highScore, setHighScore] = useState(0);
  const [isMusicPlaying, setIsPlaying] = useState(true);
  const [rightCounter, setRightCounter] = useState(0);
  const [wrongCounter, setWrongCounter] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const deck = [];

    cardConfig.cardSigns.forEach((sign) => {
      cardConfig.cardNumbers.forEach((number) => {
        let cardTemp = {
          sign: sign,
          number: number,
          value: cardConfig.cardNumbers.indexOf(number) + 2,
        };

        deck.push(cardTemp);
      });
    });

    setCardDeck(deck);
  }, []);

  const drawCard = useCallback(() => {
    return cardDeck[getRandomNumber(1, cardDeck.length)];
  }, [cardDeck]);

  function reset() {
    setScore(0);
    setLives(3);
  }

  function checkHighScore(newScore) {
    // eslint-disable-next-line no-unused-expressions
    return newScore > highScore;
  }

  function setNewHighScore(newHighScore) {
    setHighScore(newHighScore);
  }

  function gameOver() {
    reset();
    setIsGameOver(true);

    // eslint-disable-next-line no-unused-expressions
    checkHighScore(score) ? setNewHighScore(score) : "";
  }

  function handleMiss() {
    setLives(lives - 1);

    // eslint-disable-next-line no-unused-expressions
    checkHighScore(score) ? setNewHighScore(score) : "";

    setScore(0);
  }

  function handleMistake() {
    setWrongCounter(wrongCounter + 1);

    // eslint-disable-next-line no-unused-expressions
    lives === 1 ? gameOver() : handleMiss();
  }

  function handleCorrect(points) {
    setScore(score + points);
    setRightCounter(rightCounter + 1);
  }

  function restartGame() {
    setIsGameOver(false);
  }

  function handleButtonClick(button) {
    const newCard = drawCard();

    switch (button) {
      case 1:
        newCard.value > currentCard.value ? handleCorrect(10) : handleMistake();
        break;
      case 0:
        newCard.value === currentCard.value
          ? handleCorrect(50)
          : handleMistake();
        break;
      case -1:
        newCard.value < currentCard.value ? handleCorrect(10) : handleMistake();
        break;
      default:
    }

    setCurrentCard(newCard);
  }

  useEffect(() => {
    const newCard = drawCard();
    setCurrentCard(newCard);
  }, [drawCard]);

  function getRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className="App">
      <div className="container p-0">
        <div className="row align-items-center">
          <div className="col-lg-5 leftColumn">
            <FontAwesomeIcon
              style={{ color: "white", fontSize: "35px" }}
              icon={isMusicPlaying ? faVolumeUp : faVolumeMute}
            />
            <div className="row temp">
              {currentCard?.sign && <CardColumn currentCard={currentCard} />}
            </div>
            <div className="row">
              <Score rightCounter={rightCounter} wrongCounter={wrongCounter} />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="centerColumnWrapper">
              <PlayerScore score={score} />
              <Lives lives={lives} />
              <Button text={"Higher"} value={1} check={handleButtonClick} />
              <Button text={"Same"} value={0} check={handleButtonClick} />
              <Button text={"Lower"} value={-1} check={handleButtonClick} />
            </div>
          </div>
          <div className="col-lg-4">
            <HighScore highScore={highScore} />
          </div>
        </div>
      </div>
      <PopUp
        trigger={isGameOver}
        highscore={highScore}
        restartGame={restartGame}
      />
    </div>
  );
}

export default App;
