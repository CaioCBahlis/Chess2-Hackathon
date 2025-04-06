import { handleDragStart } from "./DropFunctionality";

export const initialPieces = {
  a1: { id: "wR1", src: `${process.env.PUBLIC_URL}/pieces/rook_white.png`, className: "Rook white", draggable: "true", onDragStart: handleDragStart },
  b1: { id: "wN1", src: `${process.env.PUBLIC_URL}/pieces/knight_white.png`, className: "Knight white", draggable: "true", onDragStart: handleDragStart },
  c1: { id: "wB1", src: `${process.env.PUBLIC_URL}/pieces/bishop_white.png`, className: "Bishop white", draggable: "true", onDragStart: handleDragStart },
  d1: { id: "wQ",  src: `${process.env.PUBLIC_URL}/pieces/queen_white.png`, className: "Queen white", draggable: "true", onDragStart: handleDragStart },
  e1: { id: "wK",  src: `${process.env.PUBLIC_URL}/pieces/king_white.png`, className: "King white", draggable: "true", onDragStart: handleDragStart },
  f1: { id: "wB2", src: `${process.env.PUBLIC_URL}/pieces/bishop_white.png`, className: "Bishop white", draggable: "true", onDragStart: handleDragStart },
  g1: { id: "wN2", src: `${process.env.PUBLIC_URL}/pieces/knight_white.png`, className: "Knight white", draggable: "true", onDragStart: handleDragStart },
  h1: { id: "wR2", src: `${process.env.PUBLIC_URL}/pieces/rook_white.png`, className: "Rook white", draggable: "true", onDragStart: handleDragStart },

  a2: { id: "wP1", src: `${process.env.PUBLIC_URL}/pieces/pawn_white.png`, className: "Pawn white", draggable: "true", onDragStart: handleDragStart },
  b2: { id: "wP2", src: `${process.env.PUBLIC_URL}/pieces/pawn_white.png`, className: "Pawn white", draggable: "true", onDragStart: handleDragStart },
  c2: { id: "wP3", src: `${process.env.PUBLIC_URL}/pieces/pawn_white.png`, className: "Pawn white", draggable: "true", onDragStart: handleDragStart },
  d2: { id: "wP4", src: `${process.env.PUBLIC_URL}/pieces/pawn_white.png`, className: "Pawn white", draggable: "true", onDragStart: handleDragStart },
  e2: { id: "wP5", src: `${process.env.PUBLIC_URL}/pieces/pawn_white.png`, className: "Pawn white", draggable: "true", onDragStart: handleDragStart },
  f2: { id: "wP6", src: `${process.env.PUBLIC_URL}/pieces/pawn_white.png`, className: "Pawn white", draggable: "true", onDragStart: handleDragStart },
  g2: { id: "wP7", src: `${process.env.PUBLIC_URL}/pieces/pawn_white.png`, className: "Pawn white", draggable: "true", onDragStart: handleDragStart },
  h2: { id: "wP8", src: `${process.env.PUBLIC_URL}/pieces/pawn_white.png`, className: "Pawn white", draggable: "true", onDragStart: handleDragStart },

  a8: { id: "bR1", src: `${process.env.PUBLIC_URL}/pieces/rook_black.png`, className: "Rook black", draggable: "true", onDragStart: handleDragStart },
  b8: { id: "bN1", src: `${process.env.PUBLIC_URL}/pieces/knight_black.png`, className: "Knight black", draggable: "true", onDragStart: handleDragStart },
  c8: { id: "bB1", src: `${process.env.PUBLIC_URL}/pieces/bishop_black.png`, className: "Bishop black", draggable: "true", onDragStart: handleDragStart },
  d8: { id: "bQ",  src: `${process.env.PUBLIC_URL}/pieces/queen_black.png`, className: "Queen black", draggable: "true", onDragStart: handleDragStart },
  e8: { id: "bK",  src: `${process.env.PUBLIC_URL}/pieces/king_black.png`, className: "King black", draggable: "true", onDragStart: handleDragStart },
  f8: { id: "bB2", src: `${process.env.PUBLIC_URL}/pieces/bishop_black.png`, className: "Bishop black", draggable: "true", onDragStart: handleDragStart },
  g8: { id: "bN2", src: `${process.env.PUBLIC_URL}/pieces/knight_black.png`, className: "Knight black", draggable: "true", onDragStart: handleDragStart },
  h8: { id: "bR2", src: `${process.env.PUBLIC_URL}/pieces/rook_black.png`, className: "Rook black", draggable: "true", onDragStart: handleDragStart },

  a7: { id: "bP1", src: `${process.env.PUBLIC_URL}/pieces/pawn_black.png`, className: "Pawn black", draggable: "true", onDragStart: handleDragStart },
  b7: { id: "bP2", src: `${process.env.PUBLIC_URL}/pieces/pawn_black.png`, className: "Pawn black", draggable: "true", onDragStart: handleDragStart },
  c7: { id: "bP3", src: `${process.env.PUBLIC_URL}/pieces/pawn_black.png`, className: "Pawn black", draggable: "true", onDragStart: handleDragStart },
  d7: { id: "bP4", src: `${process.env.PUBLIC_URL}/pieces/pawn_black.png`, className: "Pawn black", draggable: "true", onDragStart: handleDragStart },
  e7: { id: "bP5", src: `${process.env.PUBLIC_URL}/pieces/pawn_black.png`, className: "Pawn black", draggable: "true", onDragStart: handleDragStart },
  f7: { id: "bP6", src: `${process.env.PUBLIC_URL}/pieces/pawn_black.png`, className: "Pawn black", draggable: "true", onDragStart: handleDragStart },
  g7: { id: "bP7", src: `${process.env.PUBLIC_URL}/pieces/pawn_black.png`, className: "Pawn black", draggable: "true", onDragStart: handleDragStart },
  h7: { id: "bP8", src: `${process.env.PUBLIC_URL}/pieces/pawn_black.png`, className: "Pawn black", draggable: "true", onDragStart: handleDragStart },
};
