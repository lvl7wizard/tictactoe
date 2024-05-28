import styled from "styled-components";

interface HeaderProps {
  usernames: { playerOne: string; playerTwo: string; confirmed: boolean };
  score: { playerOne: number; playerTwo: number };
  playerOne: boolean;
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a2639;
  height: 50.5px;
`;

const Title = styled.h1`
      margin: 0;
`

const ScoreBar = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
`

function Header({ usernames, score, playerOne }: HeaderProps) {
  return (
    <HeaderContainer>
      {!usernames.confirmed && <Title>TicTacToe</Title>}
      {usernames.confirmed && (
        <ScoreBar>
          <p
            style={{
              textDecoration: playerOne ? "underline" : "none",
              textDecorationColor: playerOne ? "greenyellow" : "none",
            }}
          >
            <span style={{ color: "#00a6a6" }}>X</span> {usernames.playerOne}:{" "}
            {score.playerOne}
          </p>
          <p
            style={{
              textDecoration: !playerOne ? "underline" : "none",
              textDecorationColor: !playerOne ? "greenyellow" : "none",
            }}
          >
            <span style={{ color: "#c24d2c" }}>O</span> {usernames.playerTwo}:{" "}
            {score.playerTwo}
          </p>
        </ScoreBar>
      )}
    </HeaderContainer>
  );
}

export default Header;
