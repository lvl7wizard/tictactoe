import { useState } from "react";
import Grid from "./Grid";
import UserFeedback from "./UserFeedback";
import PlayerTurnIndicator from "./PlayerTurnIndicator";
import Scores from "./Scores";

function TicTacToe() {
  const [playerOne, setPlayerOne] = useState(true);
  const [userFeedback, setUserFeedback] = useState("");
  const [moveLog, setMoveLog] = useState(["", "", "", "", "", "", "", "", ""]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState({ playerOne: 0, playerTwo: 0 });

  const resetGame = () => {
    setMoveLog(["", "", "", "", "", "", "", "", ""]);
    setUserFeedback("");
    setGameOver(false);
  };

  return (
    <div className="game-container">
      <Scores score={score} />
      <Grid
        playerOne={playerOne}
        setPlayerOne={setPlayerOne}
        setUserFeedback={setUserFeedback}
        moveLog={moveLog}
        setMoveLog={setMoveLog}
        gameOver={gameOver}
        setGameOver={setGameOver}
        setScore={setScore}
      />
      <PlayerTurnIndicator playerOne={playerOne} gameOver={gameOver} />
      <UserFeedback userFeedback={userFeedback} />
      {gameOver ? (
        <div className="button-container">
          <button onClick={resetGame} className="reset-button">
            new game
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default TicTacToe;
