import { useState } from "react";
import Header from "./components/Header/Header";
import SetUp from "./components/SetUp/SetUp";
import Grid from "./components/Grid/Grid";
import Results from "./components/Results/Results";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyles/GlobalStyles";

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;

function App() {
  const [playerOne, setPlayerOne] = useState<boolean>(true);
  const [score, setScore] = useState<{ playerOne: number; playerTwo: number }>({
    playerOne: 0,
    playerTwo: 0,
  });
  const [usernames, setUsernames] = useState<{ playerOne: string; playerTwo: string; confirmed: boolean }>({
    playerOne: "",
    playerTwo: "",
    confirmed: false
  });
  const [userFeedback, setUserFeedback] = useState<string>("");
  const [moveLog, setMoveLog] = useState<("X" | "O" | "")[]>(Array(9).fill(""));
  const [gameOver, setGameOver] = useState<boolean>(false);

  const resetGame = () => {
    setMoveLog(Array(9).fill(""));
    setUserFeedback("");
    setGameOver(false);
  };

  return (
    <>
    <GlobalStyle/>
    <GameContainer>
      <Header usernames={usernames} score={score} playerOne={playerOne} />
      {usernames.confirmed === false && (
        <SetUp usernames={usernames} setUsernames={setUsernames} />
      )}
      {usernames.confirmed === true && !gameOver && (
        <Grid
        usernames={usernames}
          playerOne={playerOne}
          setPlayerOne={setPlayerOne}
          setUserFeedback={setUserFeedback}
          moveLog={moveLog}
          setMoveLog={setMoveLog}
          gameOver={gameOver}
          setGameOver={setGameOver}
          setScore={setScore}
        />
      )}
      {gameOver && (
        <Results usernames={usernames} userFeedback={userFeedback} resetGame={resetGame} />
      )}
      <Footer />
    </GameContainer>
    </>
  );
}

export default App;