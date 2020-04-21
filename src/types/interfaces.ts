import { Color, Piece, BoardState } from './enums';

export interface ISquare {
  id: string;
  color: Color;
  occupied: boolean;
  piece?: IPiece;
}

export interface IPiece {
  color: Color;
  imagePath: string;
  piece: Piece;
  pos: string;
  //getValidMoves: () => string[];
}

export interface IBoardState {
  playerTurn: Color;
  selectedPiece?: IPiece;
  state: BoardState;
  availableMoves?: string[];
}
