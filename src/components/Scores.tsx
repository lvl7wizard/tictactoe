interface ScoresProps {
score: {playerOne: number, playerTwo: number}
}

function Scores({ score }: ScoresProps) {
  return (
    <div className="scores">
      <p>player one: {score.playerOne}</p>
      <p> player two: {score.playerTwo}</p>
    </div>
  );
}

export default Scores;