interface PlayerTurnIndicatorProps {
    playerOne: boolean,
    gameOver: boolean
}

function PlayerTurnIndicator ({playerOne, gameOver}: PlayerTurnIndicatorProps) {
    if (!gameOver) {
        return <p className="player-turn-indicator">{playerOne ? "player one (x)" : "player two (o)"}'s turn</p>
    }
}

export default PlayerTurnIndicator;