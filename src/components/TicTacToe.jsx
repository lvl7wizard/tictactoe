import { useState } from "react";
import Grid from "./Grid";
import UserFeedback from "./UserFeedback";

function TicTacToe() {
  const [playerOne, setPlayerOne] = useState(true);
  const [userFeedback, setUserFeedback] = useState("");
  const [moveLog, setMoveLog] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const resetGame = () => {
    setMoveLog([]);
    setUserFeedback("");
    setGameOver(false);
  };

  return (
    <>
      <Grid
        playerOne={playerOne}
        setPlayerOne={setPlayerOne}
        setUserFeedback={setUserFeedback}
        moveLog={moveLog}
        setMoveLog={setMoveLog}
        gameOver={gameOver}
        setGameOver={setGameOver}
      />
      <UserFeedback userFeedback={userFeedback} />
      <div className="button-container">
      <button onClick={resetGame} className="reset-button">Reset Game</button>
      </div>
    </>
  );
}

export default TicTacToe;
