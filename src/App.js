 import { useState } from 'react';
import './App.css';
import Square from './Square'; 

function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""])
  const [players, setPlayers] = useState(true)
  
const handleClick = () => {
    setSquares (["", "", "", "", "", "", "", "", ""])
    setPlayers (true)

}

const winner = (squares)=>{
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]
for(let i = 0; i < lines.length; i++){
  const [a,b,c] = lines[i]
  if(
    squares[a] &&
    squares[a]===squares[b] &&
    squares[a]===squares[c]
  ){
    return `${squares[a]} won!`
  }
}
return "who will win??"
}

  return (
    <div className="App">
        <span>{winner(squares)}</span>
      <div className='container'>
        {squares.map((value, index)=>{
          return(
            <Square 
            squares={squares}
            setSquares={setSquares}
            players={players}
            setPlayers={setPlayers}
            index={index}
            squaresValue={value}
            /> 
            )
          })}
      </div>
          <button onClick={handleClick}>reset</button>
    </div>
  )
}


export default App;
