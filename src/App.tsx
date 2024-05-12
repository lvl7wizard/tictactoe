import './App.css'
import TicTacToe from './components/TicTacToe'

function App() {
  
  return (
    <>
    <h1 className='game-title'>Tic Tac Toe</h1>
    <div className="game-wrapper">
    <TicTacToe/>
    </div>
    </>
  )
}

export default App;