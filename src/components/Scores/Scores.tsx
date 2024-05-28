import styled from "styled-components";

interface ScoresProps {
  score: { playerOne: number; playerTwo: number };
  playerOne: boolean;
}

const ScoreBar = styled.div`
  display: flex;
  justify-content: center;
  background-color: #1a2639;
  color: #d9dad7;
  gap: 20px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

function Scores({ score, playerOne }: ScoresProps) {
  return (
    <ScoreBar>
      <p
        style={{
          textDecoration: playerOne ? "underline" : "none",
          textDecorationColor: playerOne ? "greenyellow" : "none",
        }}
      >
        <span style={{ color: "#00a6a6" }}>X</span> player one: {score.playerOne}
      </p>
      <p
        style={{
          textDecoration: !playerOne ? "underline" : "none",
          textDecorationColor: !playerOne ? "greenyellow" : "none",
        }}
      >
        <span style={{ color: "#c24d2c" }}>O</span> player two: {score.playerTwo}
      </p>
    </ScoreBar>
  );
}

export default Scores;
