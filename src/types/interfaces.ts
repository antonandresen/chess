import { Color } from './enums';

export interface ISquare {
  id: string;
  color: Color;
  occupied: boolean;
  piece?: IPiece;
}

export interface IPiece {
  color: Color;
  imagePath: string;
  //pos: string;
  //getValidMoves: () => string[];
}

export interface IPawn extends IPiece {}

export interface IKing extends IPiece {}

export interface IQueen extends IPiece {}

export interface IRook extends IPiece {}

export interface IBishop extends IPiece {}

export interface IKnight extends IPiece {}
