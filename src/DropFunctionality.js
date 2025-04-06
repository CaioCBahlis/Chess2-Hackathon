import {CheckMove} from "./functionality/CheckMoves";


export const handleDragStart = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
};

export const handleDragOver = (ev) => {
  ev.preventDefault();
};

export const handleDrop = (ev) => {
  ev.preventDefault();
   const data = ev.dataTransfer.getData("text");

  const NextTile = ev.target.closest('.Tile');
  const MyPiece = document.getElementById(data)
  const MyColor = MyPiece.classList.contains("white")? "white" : "black"

    let valid = CheckMove(NextTile, MyPiece)
    if (!valid){
        return;
    }

    if (NextTile.children.length !== 0) {
        const tocapture = NextTile.children[0];

        if ( !(tocapture.classList.contains("white") ^ MyPiece.classList.contains("white"))){
            return;
        }
        if (tocapture.classList.contains("King")){
            document.getElementById("PopUp").style.display = "flex"
        }
        tocapture.remove();
    }

    NextTile.appendChild(MyPiece);


    if (MyPiece.classList.contains("Pawn") && ((NextTile.id[1] === "8" && MyColor === "white") || (NextTile.id[1] === "1" && MyColor === "black"))){
        MyPiece.classList.remove("Pawn")
        MyPiece.classList.add("Queen")
        if (MyColor === "black"){
            MyPiece.setAttribute("src", "/pieces/queen_black.png")
        }else{
            MyPiece.setAttribute("src", "/pieces/queen_white.png")
        }
    }


};

