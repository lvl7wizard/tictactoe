import styled from "styled-components";

interface ResultsProps {
  usernames: {playerOne: string, playerTwo: string}
  userFeedback: string;
  resetGame: () => void;
}

const NewGameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  background-color: #1a2639;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: #d9dad7;
  padding-bottom: 16px;
  text-align: center;
  padding: 16px;
  margin: 0 auto;
  border-radius: 20px;

  p {
    margin: 0;
    margin-bottom: 8px;
  }
`;

const StyledButton = styled.button`
    background-color: rgba(255, 255, 255, 0.1);
    border: #d9dad7 solid;
    border-radius: 20px;
    padding: 15px;
    color: #d9dad7;
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      transition: background-color 0.3s ease;
      cursor: pointer;
    }
`

function Results({ usernames, userFeedback, resetGame }: ResultsProps) {
  return (
    <NewGameContainer>
      {userFeedback === `${usernames.playerOne} wins!` ? <p style={{color: "#00a6a6", fontSize: "100px"}}>X</p> : null}
      {userFeedback === `${usernames.playerTwo} wins!` ? <p style={{color: "#c24d2c", fontSize: "100px"}}>O</p> : null}
      {userFeedback === "it's a draw!" ? <div style={{display: "flex", gap: "5px"}}><p style={{color: "#00a6a6", fontSize: "100px"}}>X</p><p style={{color: "#c24d2c", fontSize: "100px"}}>O</p></div> : null}
      <p>{userFeedback}</p>
      <StyledButton onClick={resetGame}>play again</StyledButton>
    </NewGameContainer>
  );
}

export default Results;
