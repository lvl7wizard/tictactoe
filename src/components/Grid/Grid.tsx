import { useEffect, MouseEvent } from "react";
import styled from "styled-components";

interface GridProps {
  usernames: {playerOne: string, playerTwo: string}
  playerOne: boolean;
  setPlayerOne: React.Dispatch<React.SetStateAction<boolean>>;
  setUserFeedback: React.Dispatch<React.SetStateAction<string>>;
  moveLog: ("X" | "O" | "")[];
  setMoveLog: React.Dispatch<React.SetStateAction<object>>;
  gameOver: boolean;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  setScore: React.Dispatch<
    React.SetStateAction<{ playerOne: number; playerTwo: number }>
  >;
}

const TableContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StyledTable = styled.table`
  border-collapse: collapse;

  td {
    height: 25vw;
    width: 25vw;
    border: solid;
    font-size: 15vw;
    font-weight: 600;
    vertical-align: center;
    text-align: center;
    border: #d9dad7 solid 3px; // border colour must be set or it will be overriden by text colour

    @media (min-width: 720px) {
      height: 180px;
      width: 180px;
      font-size: 108px;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      transition: background-color 0.3s ease;
      cursor: pointer;
    }

    &:first-child {
      border-left: 0;
    }

    &:last-child {
      border-right: 0;
    }
  }

  tr:first-child td {
    border-top: 0;
  }

  tr:last-child td {
    border-bottom: 0;
  }
`;

const StyledCell = styled.td<{ content: "X" | "O" | "" }>`
  color: ${({ content }) => (content === "X" ? "#00a6a6" : content === "O" ? "#c24d2c" : null)};
`;

function Grid({
  usernames,
  playerOne,
  setPlayerOne,
  setUserFeedback,
  moveLog,
  setMoveLog,
  gameOver,
  setGameOver,
  setScore,
}: GridProps) {
  useEffect(() => {
    checkWinningConditions();
  }, [moveLog]);

  const addPoint = (player: "playerOne" | "playerTwo") => {
    setScore((currentScore: { playerOne: number; playerTwo: number }) => {
      const newScore = { ...currentScore };
      newScore[player] += 1;
      return newScore;
    });
  };

  const checkWinningConditions = () => {
    // check horizontals
    if (
      moveLog[0] !== "" &&
      moveLog[0] === moveLog[1] &&
      moveLog[0] === moveLog[2]
    ) {
      setUserFeedback(!playerOne ? `${usernames.playerOne} wins!` : `${usernames.playerTwo} wins!`);
      setGameOver(true);
      addPoint(!playerOne ? "playerOne" : "playerTwo");
    } else if (
      moveLog[3] !== "" &&
      moveLog[3] === moveLog[4] &&
      moveLog[3] === moveLog[5]
    ) {
      setUserFeedback(!playerOne ? `${usernames.playerOne} wins!` : `${usernames.playerTwo} wins!`);
      setGameOver(true);
      addPoint(!playerOne ? "playerOne" : "playerTwo");
    } else if (
      moveLog[6] !== "" &&
      moveLog[6] === moveLog[7] &&
      moveLog[6] === moveLog[8]
    ) {
      setUserFeedback(!playerOne ? `${usernames.playerOne} wins!` : `${usernames.playerTwo} wins!`);
      setGameOver(true);
      addPoint(!playerOne ? "playerOne" : "playerTwo");
      // check verticals
    } else if (
      moveLog[0] !== "" &&
      moveLog[0] === moveLog[3] &&
      moveLog[0] === moveLog[6]
    ) {
      setUserFeedback(!playerOne ? `${usernames.playerOne} wins!` : `${usernames.playerTwo} wins!`);
      setGameOver(true);
      addPoint(!playerOne ? "playerOne" : "playerTwo");
    } else if (
      moveLog[1] !== "" &&
      moveLog[1] === moveLog[4] &&
      moveLog[1] === moveLog[7]
    ) {
      setUserFeedback(!playerOne ? `${usernames.playerOne} wins!` : `${usernames.playerTwo} wins!`);
      setGameOver(true);
      addPoint(!playerOne ? "playerOne" : "playerTwo");
    } else if (
      moveLog[2] !== "" &&
      moveLog[2] === moveLog[5] &&
      moveLog[2] === moveLog[8]
    ) {
      setUserFeedback(!playerOne ? `${usernames.playerOne} wins!` : `${usernames.playerTwo} wins!`);
      setGameOver(true);
      addPoint(!playerOne ? "playerOne" : "playerTwo");
      // check diagonals
    } else if (
      moveLog[0] !== "" &&
      moveLog[0] === moveLog[4] &&
      moveLog[0] === moveLog[8]
    ) {
      setUserFeedback(!playerOne ? `${usernames.playerOne} wins!` : `${usernames.playerTwo} wins!`);
      setGameOver(true);
      addPoint(!playerOne ? "playerOne" : "playerTwo");
    } else if (
      moveLog[2] !== "" &&
      moveLog[2] === moveLog[4] &&
      moveLog[2] === moveLog[6]
    ) {
      setUserFeedback(!playerOne ? `${usernames.playerOne} wins!` : `${usernames.playerTwo} wins!`);
      setGameOver(true);
      addPoint(!playerOne ? "playerOne" : "playerTwo");
      // check if it's a draw
    } else if (
      moveLog.every((move) => {
        return move !== "";
      })
    ) {
      setUserFeedback("it's a draw!");
      setGameOver(true);
    }
  };

  const onClickHandler = (event: MouseEvent<HTMLTableCellElement>) => {
    const cellIndex = parseInt(event.currentTarget.id);
    const newMoveLog = [...moveLog];
    if (!gameOver) {
      if (event.currentTarget.innerText === "") {
        newMoveLog[cellIndex] = playerOne ? "X" : "O";
        setPlayerOne(!playerOne);
        setMoveLog(newMoveLog);
        setUserFeedback("");
      } else {
        // setUserFeedback("invalid move - someone is already in this square");
      }
    }
  };

  return (
    <TableContainer>
    <StyledTable>
      <tbody>
        <tr>
          <StyledCell id="0" content={moveLog[0]} onClick={onClickHandler}>
            {moveLog[0]}
          </StyledCell>
          <StyledCell id="1" content={moveLog[1]} onClick={onClickHandler}>
            {moveLog[1]}
          </StyledCell>
          <StyledCell id="2" content={moveLog[2]} onClick={onClickHandler}>
            {moveLog[2]}
          </StyledCell>
        </tr>
        <tr>
          <StyledCell id="3" content={moveLog[3]} onClick={onClickHandler}>
            {moveLog[3]}
          </StyledCell>
          <StyledCell id="4" content={moveLog[4]} onClick={onClickHandler}>
            {moveLog[4]}
          </StyledCell>
          <StyledCell id="5" content={moveLog[5]} onClick={onClickHandler}>
            {moveLog[5]}
          </StyledCell>
        </tr>
        <tr>
          <StyledCell id="6" content={moveLog[6]} onClick={onClickHandler}>
            {moveLog[6]}
          </StyledCell>
          <StyledCell id="7" content={moveLog[7]} onClick={onClickHandler}>
            {moveLog[7]}
          </StyledCell>
          <StyledCell id="8" content={moveLog[8]} onClick={onClickHandler}>
            {moveLog[8]}
          </StyledCell>
        </tr>
      </tbody>
    </StyledTable>
  </TableContainer>
  );
}

export default Grid;
