import React , {useState} from "react";
import GameCircle from "./gamecircle";
import '../index.css'

const Gameboard = () =>{
    const [gameboard,setgameboard] = useState(Array(16).fill(["noplayer",true]));
    const [turn,setTurn]= useState(1);
    function circleClicked(id) {
        console.log(id);
        if(gameboard[id][1] === true){
            const newgameboard = gameboard.slice();
            if (turn === 1){
                newgameboard[id]=["player_1",false];
                setTurn(2);
            }else{
                newgameboard[id]=["player_2",false];               
                setTurn(1);
            }
            
            setgameboard(newgameboard);
            console.log(gameboard);

            
        }
    }
    function intiboard() {
        let circles = [];
        for (let i = 0; i < 16; i++) {
            circles.push(renderCircle(i));

        }
        return circles;
    }
    const renderCircle = id =>{
        return  <GameCircle key={id} id={id} circleclick ={circleClicked} className={gameboard[id][0]} />
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