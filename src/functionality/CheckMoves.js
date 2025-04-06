var EnPassant = ""
var Rounds = 0
var Moves = 0
var GameIsOn = true

export var Turn = Moves % 2 === 0? "white":"black"

export const CheckMove = (NextTile, Piece) =>{
  if (!GameIsOn){
    return
  }
  if (NextTile === Piece.parentElement){
    return false
  }

  if (Piece.classList.contains("Pawn")){
    return CheckPawnMove(NextTile, Piece);

  }else if (Piece.classList.contains("Rook")) {
    return CheckRookMove(NextTile, Piece);

  }else if (Piece.classList.contains("Knight")) {
    return CheckKnightMove(NextTile, Piece);

  }else if (Piece.classList.contains("Bishop")) {
    return CheckBishopMove(NextTile, Piece);

  }else if (Piece.classList.contains("Queen")) {
    return CheckQueenMove(NextTile, Piece);

  } else if (Piece.classList.contains("King")) {
    return CheckKingMove(NextTile, Piece);
  }
}


function CheckPawnMove(NextTile, Piece) {
  const color = Piece.classList.contains("white") ? "white" : "black";

  const curTile = Piece.parentElement;
  const curCol = curTile.id[0].charCodeAt(0);
  const curRow = Number(curTile.id[1]);
  const IsFirstMove = (curRow === 2 && color === "white") || (curRow === 7 && color === "black")


  const nextCol = NextTile.id[0].charCodeAt(0);
  const nextRow = Number(NextTile.id[1]);


  const colDiff = Math.abs(nextCol - curCol);
  const rowDiff = nextRow - curRow;

  const forward = color === "white" ? 1 : -1;
  const opponentColor = color === "white" ? "black" : "white";
  const FrontTile = document.getElementById(String.fromCharCode(curCol) + (curRow + forward).toString())

  if (colDiff === 0 && rowDiff === forward && NextTile.children.length === 0) {
    return true;
  }

  if (colDiff === 1 && rowDiff === forward){
    console.log(NextTile.id, EnPassant)
    if (NextTile.children.length !== 0 && NextTile.children[0].classList.contains(opponentColor)) {
      return true;
    }else if (NextTile.id === EnPassant){
        let EnPawnssantID = EnPassant[0] + (Number(EnPassant[1]) + -1*forward).toString()
        document.getElementById(EnPawnssantID).children[0].remove()
        EnPassant = ""
        return true
    }
  }

  if (rowDiff === forward*2 && IsFirstMove){
    if (FrontTile.children.length === 0 && NextTile.children.length === 0){
      EnPassant = NextTile.id[0] + (Number(NextTile.id[1]) + (-1 * forward)).toString()

      return true
    }
  }

  return false;
}


function CheckRookMove(NextTile, Piece){
  EnPassant = ""
  const NextCol = NextTile.id[0].charCodeAt(0)
  const CurCol = Piece.parentElement.id[0].charCodeAt(0)

  const NextRow = Number(NextTile.id[1])
  const CurRow = Number(Piece.parentElement.id[1])

  if (NextCol !== CurCol && NextRow !== CurRow){
    return false
  }

  if (CurRow === NextRow){
     const max = Math.max(CurCol, NextCol)
     const min = Math.min(CurCol, NextCol) + 1

    for (let cur = min; cur < max; cur ++){
      if ( (document.getElementById(String.fromCharCode(cur) + CurRow)).children.length !== 0 ){return false}}
  }else{
    const max = Math.max(CurRow, NextRow)
    const min = Math.min(CurRow, NextRow) + 1

    for (let cur = min; cur < max; cur++){
      if ( ((document.getElementById(Piece.parentElement.id[0] + cur.toString()))).children.length !== 0 ){return false}}
  }
  return true
}

function CheckBishopMove(NextTile, Piece){
  EnPassant = ""
  const NextCol = NextTile.id[0].charCodeAt(0)
  const CurCol = Piece.parentElement.id[0].charCodeAt(0)

  const NextRow = Number(NextTile.id[1])
  const CurRow = Number(Piece.parentElement.id[1])

  if (Math.abs(NextCol - CurCol) !== Math.abs(NextRow - CurRow)){
    return false
  }


  const RowIncrement = NextRow > CurRow ? 1 : -1;
  const ColIncrement = NextCol > CurCol ? 1 : -1;

   let buffmyrow = CurRow + RowIncrement;
   let buffmycol = CurCol + ColIncrement;
   while (buffmycol !== NextCol && buffmyrow !== NextRow){
     if ((document.getElementById(String.fromCharCode(buffmycol) + buffmyrow.toString())).children.length !== 0 ){
       return false
     }
     buffmyrow += RowIncrement
     buffmycol += ColIncrement
   }
   return true
}

function CheckKnightMove(NextTile, Piece){
  EnPassant = ""
  const PieceColor = Piece.classList.contains("white")? "white":"black"

  const CurCol = Piece.parentElement.id[0].charCodeAt(0)

  const CurRow = Number(Piece.parentElement.id[1])

  let PossibleMoves = [
     String.fromCharCode(CurCol-2) + (CurRow-1).toString(),
     String.fromCharCode(CurCol-2) + (CurRow+1).toString(),
     String.fromCharCode(CurCol-1) + (CurRow-2).toString(),
     String.fromCharCode(CurCol-1) + (CurRow+2).toString(),
     String.fromCharCode(CurCol+1) + (CurRow+2).toString(),
     String.fromCharCode(CurCol+1) + (CurRow-2).toString(),
     String.fromCharCode(CurCol+2) + (CurRow+1).toString(),
     String.fromCharCode(CurCol+2) + (CurRow-1).toString(),
  ]
  if (!PossibleMoves.includes(NextTile.id)) {
    return false
  }

  if (NextTile.children.length === 0){
    return true
  }else{
    if (NextTile.children[0].classList.contains(PieceColor)){
      return false
    }
  }

  return true
}


function CheckQueenMove(NextTile, Piece){
  EnPassant = ""
  return (CheckRookMove(NextTile, Piece) || CheckBishopMove(NextTile, Piece))
}

function CheckKingMove(NextTile, Piece){
  EnPassant = ""
  const NextCol = NextTile.id[0].charCodeAt(0)
  const CurCol = Piece.parentElement.id[0].charCodeAt(0)

  const NextRow = Number(NextTile.id[1])
  const CurRow = Number(Piece.parentElement.id[1])

  if (NextRow >= CurRow + 2 || NextCol >= CurCol + 2){
    return false
  }
  return true
}