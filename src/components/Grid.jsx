import { useEffect } from "react";

function Grid({
  playerOne,
  setPlayerOne,
  setUserFeedback,
  moveLog,
  setMoveLog,
  gameOver,
  setGameOver,
  setScore,
}) {
  useEffect(() => {
    checkWinningConditions();
  }, [moveLog])

  const addPoint = (player) => {
    setScore((currentScore) => {
      const newScore = {...currentScore}
      newScore[player] += 1
      return newScore
    } )
  }

  const checkWinningConditions = () => {
    // check horizontals
    if (
      moveLog[0] !== "" &&
      moveLog[0] === moveLog[1] &&
      moveLog[0] === moveLog[2]
    ) {
      setUserFeedback(!playerOne ? "player one wins!" : "player two wins!");
      setGameOver(true);
      addPoint(!playerOne ? "playerOne" : "playerTwo")
    } else if (
      moveLog[3] !== "" &&
      moveLog[3] === moveLog[4] &&
      moveLog[3] === moveLog[5]
    ) {
      setUserFeedback(!playerOne ? "player one wins!" : "player two wins!");
      setGameOver(true);
      addPoint(!playerOne ? "playerOne" : "playerTwo")
    } else if (
      moveLog[6] !== "" &&
      moveLog[6] === moveLog[7] &&
      moveLog[6] === moveLog[8]
    ) {
      setUserFeedback(!playerOne ? "player one wins!" : "player two wins!");
      setGameOver(true);
      addPoint(!playerOne ? "playerOne" : "playerTwo")
      // check verticals
    } else if (
      moveLog[0] !== "" &&
      moveLog[0] === moveLog[3] &&
      moveLog[0] === moveLog[6]
    ) {
      setUserFeedback(!playerOne ? "player one wins!" : "player two wins!");
      setGameOver(true);
      addPoint(!playerOne ? "playerOne" : "playerTwo")
    } else if (
      moveLog[1] !== "" &&
      moveLog[1] === moveLog[4] &&
      moveLog[1] === moveLog[7]
    ) {
      setUserFeedback(!playerOne ? "player one wins!" : "player two wins!");
      setGameOver(true);
      addPoint(!playerOne ? "playerOne" : "playerTwo")
    } else if (
      moveLog[2] !== "" &&
      moveLog[2] === moveLog[5] &&
      moveLog[2] === moveLog[8]
    ) {
      setUserFeedback(!playerOne ? "player one wins!" : "player two wins!");
      setGameOver(true);
      addPoint(!playerOne ? "playerOne" : "playerTwo")
      // check diagonals
    } else if (
      moveLog[0] !== "" &&
      moveLog[0] === moveLog[4] &&
      moveLog[0] === moveLog[8]
    ) {
      setUserFeedback(!playerOne ? "player one wins!" : "player two wins!");
      setGameOver(true);
      addPoint(!playerOne ? "playerOne" : "playerTwo")
    } else if (
      moveLog[2] !== "" &&
      moveLog[2] === moveLog[4] &&
      moveLog[2] === moveLog[6]
    ) {
      setUserFeedback(!playerOne ? "player one wins!" : "player two wins!");
      setGameOver(true);
      addPoint(!playerOne ? "playerOne" : "playerTwo")
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

  const onClickHandler = (event) => {
    const cellIndex = event.target.id;
    const newMoveLog = [...moveLog];
    if (!gameOver) {
      if (event.target.innerText === "") {
        newMoveLog[cellIndex] = playerOne ? "X" : "O";
        setPlayerOne(!playerOne);
        setMoveLog(newMoveLog);
        setUserFeedback("");
      } else {
        setUserFeedback(
          "invalid move - someone is already in this square"
        );
      }
    }
  };

  return (
    <table>
      <tbody>
        <tr>
          <td id="0" onClick={onClickHandler}>
            {moveLog[0]}
          </td>
          <td id="1" onClick={onClickHandler}>
            {moveLog[1]}
          </td>
          <td id="2" onClick={onClickHandler}>
            {moveLog[2]}
          </td>
        </tr>
        <tr>
          <td id="3" onClick={onClickHandler}>
            {moveLog[3]}
          </td>
          <td id="4" onClick={onClickHandler}>
            {moveLog[4]}
          </td>
          <td id="5" onClick={onClickHandler}>
            {moveLog[5]}
          </td>
        </tr>
        <tr>
          <td id="6" onClick={onClickHandler}>
            {moveLog[6]}
          </td>
          <td id="7" onClick={onClickHandler}>
            {moveLog[7]}
          </td>
          <td id="8" onClick={onClickHandler}>
            {moveLog[8]}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Grid;
