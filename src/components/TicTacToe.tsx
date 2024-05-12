import { useState } from "react";
import Grid from "./Grid";
import UserFeedback from "./UserFeedback";
import PlayerTurnIndicator from "./PlayerTurnIndicator";
import Scores from "./Scores";

function TicTacToe() {
  const [playerOne, setPlayerOne] = useState<boolean>(true);
  const [userFeedback, setUserFeedback] = useState<string>("");
  const [moveLog, setMoveLog] = useState<("X" | "O" | "")[]>(["", "", "", "", "", "", "", "", ""]);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<{playerOne: number, playerTwo: number}>({ playerOne: 0, playerTwo: 0 });

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
