import {
  ISquare,
  IPiece,
  IPawn,
  IKing,
  IQueen,
  IRook,
  IBishop,
  IKnight,
} from '../types/interfaces';

import { Color } from '../types/enums';

const BASE_PIECE_PATH = 'chesspieces';

// Pieces in play
export const piecesInPlayWhite: IPiece[] = [
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/white-rook`,
  } as IRook,
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/white-knight`,
  } as IKnight,
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/white-bishop`,
  } as IBishop,
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/white-queen`,
  } as IQueen,
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/white-king`,
  } as IKing,
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/white-bishop`,
  } as IBishop,
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/white-knight`,
  } as IKnight,
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/white-rook`,
  } as IRook,
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/white-pawn`,
  } as IPawn,
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/white-pawn`,
  } as IPawn,
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/white-pawn`,
  } as IPawn,
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/white-pawn`,
  } as IPawn,
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/white-pawn`,
  } as IPawn,
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/white-pawn`,
  } as IPawn,
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/white-pawn`,
  } as IPawn,
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/white-pawn`,
  } as IPawn,
];

export const piecesInPlayBlack: IPiece[] = [
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/black-rook`,
  } as IRook,
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/black-knight`,
  } as IKnight,
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/black-bishop`,
  } as IBishop,
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/black-queen`,
  } as IQueen,
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/black-king`,
  } as IKing,
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/black-bishop`,
  } as IBishop,
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/black-knight`,
  } as IKnight,
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/black-rook`,
  } as IRook,
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/black-pawn`,
  } as IPawn,
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/black-pawn`,
  } as IPawn,
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/black-pawn`,
  } as IPawn,
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/black-pawn`,
  } as IPawn,
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/black-pawn`,
  } as IPawn,
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/black-pawn`,
  } as IPawn,
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/black-pawn`,
  } as IPawn,
  {
    color: Color.White,
    imagePath: `${BASE_PIECE_PATH}/black-pawn`,
  } as IPawn,
];

// "dynamically" create board based on piecesInPlay
/*export const board: ISquare[][] = [
  [
    {
      color: Color.Black,
      id: '8A',
      occupied: true,
      piece: { color: Color.Black, imagePath: `${}` } as IRook,
    } as ISquare,
  ],
];*/

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

// 0 --> 8A
// 1 --> 8B
