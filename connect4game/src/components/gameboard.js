import React , {useEffect, useState} from "react";
import GameCircle from "./gamecircle";
import '../index.css'
import Header from './header'
import Footer from './footer'
import { isWinner,comPlay } from "../help";
const Gameboard = () =>{
    const [gameState,setGameState] = useState("playing"); // ["playing","won","draw"]
    const [gameboard,setgameboard] = useState(Array(16).fill("noplayer"));
    const [turn,setTurn]= useState(1);
    const [message,setMessage] = useState("ayoub");
    const [draw,setDraw] = useState(16);
    const setNewGame = () =>{
        setgameboard(Array(16).fill("noplayer"));
        setMessage("player 1 turn");
        setTurn(1);
        setDraw(16);
        setGameState("playing");
    };
    useEffect(() => {setNewGame()},[]);
    const suggestMove = () => {
        
        circleClicked(comPlay(gameboard));
    }

    function circleClicked(id) {
        if (turn === 1){    
                gameboard[id ] = "player_1";
                setMessage("player 2 turn");
                if (isWinner(gameboard)){
                    setMessage("player 1 wins");
                    setGameState("won");
                    return;
                }                
                setDraw(draw-1);
                if (draw === 1){
                    setMessage("draw");
                    setGameState("draw");
                    return;
                }
                setTurn(2);
            }else{
                gameboard[id]= "player_2"
                setMessage("player 1 turn");
                if (isWinner(gameboard)){
                    setMessage("player 2 wins");
                    setGameState("won");
                    return;
                }
                setDraw(draw-1);
                if (draw === 1){
                    setMessage("draw");
                    setGameState("draw");
                    return;
                }
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
    <> 
    <Header message={message}/>
    <div className="gameboard">
        {intiboard()}
    </div>
    <Footer setGame={setNewGame} suggest={suggestMove} state={gameState}/>
    </>
    )
}
export default Gameboard;