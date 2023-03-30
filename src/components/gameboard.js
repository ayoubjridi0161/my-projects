import React , {useState} from "react";
import GameCircle from "./gamecircle";
import '../index.css'

const Gameboard = () =>{
    const [gameboard,setgameboard] = useState(Array(16).fill("noplayer"));
    const [turn,setTurn]= useState(1);
    function circleClicked(id) {
            if (turn === 1){    
                gameboard[id - 1] = "player_1";
                setTurn(2);
            }else{
                gameboard[id-1]= "player_2"
                setTurn(1);
            }
            
            setgameboard(gameboard);
            console.log(gameboard);
            
        }
    const renderCircle = id =>{
        return  <GameCircle id={id} circleclick ={circleClicked} className={gameboard[id -1 ]} />
    }
    return (
    <div className="gameboard">
        {renderCircle(1)}
        {renderCircle(2)}
        {renderCircle(3)}
        {renderCircle(4)}
        {renderCircle(5)}
        {renderCircle(6)}
        {renderCircle(7)}
        {renderCircle(8)}
        {renderCircle(9)}
        {renderCircle(10)}
        {renderCircle(11)}
        {renderCircle(12)}
        {renderCircle(13)}
        {renderCircle(14)}
        {renderCircle(15)}
        {renderCircle(16)}

    </div>
    )
}
export default Gameboard