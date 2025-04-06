import logo from './logo.svg';
import './App.css';
import {handleDragStart, handleDragOver, handleDrop} from "./DropFunctionality"
import {initialPieces} from "./Board_Setup";
import {Turn} from "./functionality/CheckMoves";
import { useState } from "react";


function FuncHeader(){
  return (
      <div className="Header"> </div>
  )
}
function WinnerPopUp(){
    return <div id="PopUp">
        <div className="WinnerBox">
           <h1> {Turn.charAt(0).toUpperCase() + Turn.slice(1)} Player Won!</h1>
            <h2> Thank you for Playing! </h2>
            <div className="ButtonArea">
                <button onClick={() => window.location.reload()} id="Retry"> Play Again </button>
                <button onClick={() => window.location.href = '/'}> Home </button>
            </div>
        </div>
    </div>
}

function Tile({id}){
    const piece = initialPieces[id]

    return (
        <div
            id={id}
            className={`Tile ${((id.charCodeAt(0) + Number(id[1])) % 2 === 0) ? "Black" : "White"}`}
            onDrop={handleDrop} onDragOver={handleDragOver}
        >
            {piece && (<img  id={piece.id} src={piece.src} className={piece.className}
                             draggable="true" onDragStart={handleDragStart}/>)}

        </div>
    )
}

function BoardRow({id}) {
    return (

        <div className="BoardRow">
            <Tile id={"a" + id}>  </Tile>
            <Tile id={"b" + id}>  </Tile>
            <Tile id={"c" + id}>  </Tile>
            <Tile id={"d" + id}>  </Tile>
            <Tile id={"e" + id}>  </Tile>
            <Tile id={"f" + id}>  </Tile>
            <Tile id={"g" + id}>  </Tile>
            <Tile id={"h" + id}>  </Tile>
        </div>
    )


}

function Board(){
  return (
    <div className="Board">
        <BoardRow id="8"> </BoardRow>
        <BoardRow id="7"> </BoardRow>
        <BoardRow id="6"> </BoardRow>
        <BoardRow id="5"> </BoardRow>
        <BoardRow id="4"> </BoardRow>
        <BoardRow id="3"> </BoardRow>
        <BoardRow id="2">  </BoardRow>
        <BoardRow id="1"> </BoardRow>
    </div>
  )
}

function Game() {
    return (
        <div className="Game">
            <WinnerPopUp> </WinnerPopUp>
            <div id="BlackPlayer" className="Player-Frame">
                <img className={`icon ${Turn !== 'white' ? 'glow' : ''}`} src={`${process.env.PUBLIC_URL}/pieces/gdsc.jpg`}/>
            </div>
            <Board/>
            <div id="WhitePlayer" className="Player-Frame">
                <img className={`icon ${Turn === 'white' ? 'glow' : ''}`} src={`${process.env.PUBLIC_URL}/pieces/ieee.jpg`}/>
            </div>
        </div>
    )
}

function Help() {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div className="Help">
            <div className="HelpBox">
                <h1> Rules </h1>
                <p> Welcome to Chess 2 </p>
                <p> Out of curiosity, I've decided to create my own version of chess, and see where it leads me </p>
                <p>
                    Both players will play on the same computer and take turns playing. <br/><br/>
                    In each round, the player can select ANY piece from the board to move, despite its color.
                    This subtle change is enough to make the game feel vastly different.
                </p>
                <p> I hope you have as much fun as I did :) </p>
                <p> Good Luck and Good Game!</p>

                <button id="yap" onClick={() => setVisible(false)}>TLDR</button>
            </div>
        </div>
    );
}


function App() {
  return (
      <div className="App">
          <FuncHeader>  </FuncHeader>
          <Help> </Help>
          <Game> </Game>
      </div>
  )
}

export default App;
