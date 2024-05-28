import "./App.css";
import { useState } from "react";
import Grid from "./components/Grid/Grid";
import Scores from "./components/Scores/Scores";
import NewGame from "./components/NewGame/NewGame";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";

const TicTacToeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;

function App() {
  const [playerOne, setPlayerOne] = useState<boolean>(true);
  const [userFeedback, setUserFeedback] = useState<string>("");
  const [moveLog, setMoveLog] = useState<("X" | "O" | "")[]>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<{ playerOne: number; playerTwo: number }>({
    playerOne: 0,
    playerTwo: 0,
  });

  const resetGame = () => {
    setMoveLog(["", "", "", "", "", "", "", "", ""]);
    setUserFeedback("");
    setGameOver(false);
  };

  return (
    <TicTacToeContainer>
      <Scores score={score} playerOne={playerOne} />
      {!gameOver ? (
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
      ) : (
        <NewGame userFeedback={userFeedback} resetGame={resetGame} />
      )}
      <Footer />
    </TicTacToeContainer>
  );
}

export default App;
