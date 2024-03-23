function PlayerTurnIndicator ({playerOne, gameOver}) {
    if (!gameOver) {
        return <p className="player-turn-indicator">{playerOne ? "player one (x)" : "player two (o)"}'s turn</p>
    }
}

export default PlayerTurnIndicator;