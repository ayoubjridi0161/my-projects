import React , {useState} from "react";
import GameCircle from "./gamecircle";
import '../index.css'

const Gameboard = () =>{
    const [gameboard,setgameboard] = useState(Array(16).fill("noplayer"));
    const [turn,setTurn]= useState(1);
    function circleClicked(id) {
            if (turn === 1){    
                gameboard[id ] = "player_1";
                setTurn(2);
            }else{
                gameboard[id]= "player_2"
                setTurn(1);
            }
            
            setgameboard(gameboard);
            console.log(gameboard);
            
        }
    const intiboard= () =>{
        let circles=[];
        for (let i=0;i<16;i++){
            circles.push(renderCircle(i));

        }
        return circles;
    }
    const renderCircle = id =>{
        return  <GameCircle key={id} id={id} circleclick ={circleClicked} className={gameboard[id]} />
    }
    return (
        <div className="bigcontainer">
    <div className="showbox">
        player_1 turn
    </div>
    <div className="gameboard">
        {intiboard()}
    </div>
    </div>
    )
}
export default Gameboard