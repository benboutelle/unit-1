import React from "react";
import './index.css'

const Square = (props) => {
     console.log(props.squares, props.players)

     const handleClick = () => {
        if (!props.squareValue) {
        if (props.players){
            props.squares.splice(props.index, 1, "X")
            props.setSquares(props.squares)
            props.setPlayers(!props.players)        
         } else {
        props.squares.splice(props.index, 1, "O")
        props.setSquares(props.squares)
        props.setPlayers(!props.players)
     }
    }
}

    return (
        <div className="square" onClick={handleClick}>
            {props.squareValue === "O" ? "X" : props.squareValue}
            {props.squares} {props.player}
        </div>
    );
}

export default Square;