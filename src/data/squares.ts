import { ISquare, IPiece, IBoardState } from '../types/interfaces';

import { Color, Piece, BoardState } from '../types/enums';

const BASE_PIECE_PATH = 'chesspieces';

// Pieces in play
export const piecesInPlayWhite: IPiece[] = [
  {
    color: Color.White,
    piece: Piece.Rook,
    imagePath: `${BASE_PIECE_PATH}/white-rook.svg`,
    pos: 'A1',
  } as IPiece,
  {
    color: Color.White,
    piece: Piece.Knight,
    imagePath: `${BASE_PIECE_PATH}/white-knight.svg`,
    pos: 'B1',
  } as IPiece,
  {
    color: Color.White,
    piece: Piece.Bishop,
    imagePath: `${BASE_PIECE_PATH}/white-bishop.svg`,
    pos: 'C1',
  } as IPiece,
  {
    color: Color.White,
    piece: Piece.King,
    imagePath: `${BASE_PIECE_PATH}/white-king.svg`,
    pos: 'D1',
  } as IPiece,
  {
    color: Color.White,
    piece: Piece.Queen,
    imagePath: `${BASE_PIECE_PATH}/white-queen.svg`,
    pos: 'E1',
  } as IPiece,
  {
    color: Color.White,
    piece: Piece.Bishop,
    imagePath: `${BASE_PIECE_PATH}/white-bishop.svg`,
    pos: 'F1',
  } as IPiece,
  {
    color: Color.White,
    piece: Piece.Knight,
    imagePath: `${BASE_PIECE_PATH}/white-knight.svg`,
    pos: 'G1',
  } as IPiece,
  {
    color: Color.White,
    piece: Piece.Rook,
    imagePath: `${BASE_PIECE_PATH}/white-rook.svg`,
    pos: 'H1',
  } as IPiece,
  {
    color: Color.White,
    piece: Piece.Pawn,
    imagePath: `${BASE_PIECE_PATH}/white-pawn.svg`,
    pos: 'A2',
  } as IPiece,
  {
    color: Color.White,
    piece: Piece.Pawn,
    imagePath: `${BASE_PIECE_PATH}/white-pawn.svg`,
    pos: 'B2',
  } as IPiece,
  {
    color: Color.White,
    piece: Piece.Pawn,
    imagePath: `${BASE_PIECE_PATH}/white-pawn.svg`,
    pos: 'C2',
  } as IPiece,
  {
    color: Color.White,
    piece: Piece.Pawn,
    imagePath: `${BASE_PIECE_PATH}/white-pawn.svg`,
    pos: 'D2',
  } as IPiece,
  {
    color: Color.White,
    piece: Piece.Pawn,
    imagePath: `${BASE_PIECE_PATH}/white-pawn.svg`,
    pos: 'E2',
  } as IPiece,
  {
    color: Color.White,
    piece: Piece.Pawn,
    imagePath: `${BASE_PIECE_PATH}/white-pawn.svg`,
    pos: 'F2',
  } as IPiece,
  {
    color: Color.White,
    piece: Piece.Pawn,
    imagePath: `${BASE_PIECE_PATH}/white-pawn.svg`,
    pos: 'G2',
  } as IPiece,
  {
    color: Color.White,
    piece: Piece.Pawn,
    imagePath: `${BASE_PIECE_PATH}/white-pawn.svg`,
    pos: 'H2',
  } as IPiece,
];

export const piecesInPlayBlack: IPiece[] = [
  {
    color: Color.Black,
    piece: Piece.Rook,
    imagePath: `${BASE_PIECE_PATH}/black-rook.svg`,
    pos: 'H8',
  } as IPiece,
  {
    color: Color.Black,
    piece: Piece.Knight,
    imagePath: `${BASE_PIECE_PATH}/black-knight.svg`,
    pos: 'G8',
  } as IPiece,
  {
    color: Color.Black,
    piece: Piece.Bishop,
    imagePath: `${BASE_PIECE_PATH}/black-bishop.svg`,
    pos: 'F8',
  } as IPiece,
  {
    color: Color.Black,
    piece: Piece.King,
    imagePath: `${BASE_PIECE_PATH}/black-king.svg`,
    pos: 'E8',
  } as IPiece,
  {
    color: Color.Black,
    piece: Piece.Queen,
    imagePath: `${BASE_PIECE_PATH}/black-queen.svg`,
    pos: 'D8',
  } as IPiece,
  {
    color: Color.Black,
    piece: Piece.Bishop,
    imagePath: `${BASE_PIECE_PATH}/black-bishop.svg`,
    pos: 'C8',
  } as IPiece,
  {
    color: Color.Black,
    piece: Piece.Knight,
    imagePath: `${BASE_PIECE_PATH}/black-knight.svg`,
    pos: 'B8',
  } as IPiece,
  {
    color: Color.Black,
    piece: Piece.Rook,
    imagePath: `${BASE_PIECE_PATH}/black-rook.svg`,
    pos: 'A8',
  } as IPiece,
  {
    color: Color.Black,
    piece: Piece.Pawn,
    imagePath: `${BASE_PIECE_PATH}/black-pawn.svg`,
    pos: 'H7',
  } as IPiece,
  {
    color: Color.Black,
    piece: Piece.Pawn,
    imagePath: `${BASE_PIECE_PATH}/black-pawn.svg`,
    pos: 'G7',
  } as IPiece,
  {
    color: Color.Black,
    piece: Piece.Pawn,
    imagePath: `${BASE_PIECE_PATH}/black-pawn.svg`,
    pos: 'F7',
  } as IPiece,
  {
    color: Color.Black,
    piece: Piece.Pawn,
    imagePath: `${BASE_PIECE_PATH}/black-pawn.svg`,
    pos: 'E7',
  } as IPiece,
  {
    color: Color.Black,
    piece: Piece.Pawn,
    imagePath: `${BASE_PIECE_PATH}/black-pawn.svg`,
    pos: 'D7',
  } as IPiece,
  {
    color: Color.Black,
    piece: Piece.Pawn,
    imagePath: `${BASE_PIECE_PATH}/black-pawn.svg`,
    pos: 'C7',
  } as IPiece,
  {
    color: Color.Black,
    piece: Piece.Pawn,
    imagePath: `${BASE_PIECE_PATH}/black-pawn.svg`,
    pos: 'B7',
  } as IPiece,
  {
    color: Color.Black,
    piece: Piece.Pawn,
    imagePath: `${BASE_PIECE_PATH}/black-pawn.svg`,
    pos: 'A7',
  } as IPiece,
];

const getColorForSquare = (index: number) => {
  const row = Math.floor(index / 8);
  if (row % 2 === 0) {
    return index % 2 === 0 ? Color.White : Color.Black;
  } else {
    return index % 2 !== 0 ? Color.White : Color.Black;
  }
};

// Map row number to letter, 1 -> A, 2 -> B etc
const chars: Record<number, string> = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
  5: 'E',
  6: 'F',
  7: 'G',
  8: 'H',
};

const getIdForSquare = (index: number) => {
  const row = 8 - Math.floor(index / 8);
  const col = (index % 8) + 1;
  return `${chars[col]}${row}`;
};

export const defaultBoard = Array.from({ length: 64 }, (_, i) => {
  return {
    color: getColorForSquare(i),
    id: getIdForSquare(i),
    occupied: false,
  } as ISquare;
});

export const defaultBoardState = {
  playerTurn: Color.White,
  state: BoardState.Idle,
} as IBoardState;
