import React, { useState } from 'react';
import styled from 'styled-components';

import {
  defaultBoard,
  piecesInPlayWhite,
  piecesInPlayBlack,
  defaultBoardState,
} from '../data/squares';
import { Color, BoardState } from '../types/enums';
import { ISquare, IPiece, IBoardState } from '../types/interfaces';

const Chessboard: React.FC = () => {
  const [board, setBoard] = useState(defaultBoard);
  const [whitePieces, setWhitePieces] = useState(piecesInPlayWhite);
  const [blackPieces, setBlackPieces] = useState(piecesInPlayBlack);
  const [boardState, setBoardState] = useState(defaultBoardState);

  const allPieces = [...blackPieces, ...whitePieces];

  const getPieceForSquare = (id: string) => {
    const piece = allPieces.find((piece) => piece.pos === id);

    return piece;
  };

  const pressPiece = (square: ISquare, piece: IPiece) => {
    switch (boardState.state) {
      case BoardState.Idle:
        if (boardState.playerTurn !== piece.color) return;
        const newBoardState = {
          playerTurn: boardState.playerTurn,
          state: BoardState.Selected,
          selectedPiece: piece,
        } as IBoardState;
        setBoardState(newBoardState);
        console.log('pressPieceIdle', `${square.id}`);
        break;
      case BoardState.Selected:
        if (boardState.playerTurn === piece.color) {
          const newBoardState = {
            playerTurn: boardState.playerTurn,
            state: BoardState.Selected,
            selectedPiece: piece,
          } as IBoardState;
          setBoardState(newBoardState);
        }
        console.log('pressPieceSelected', `${square.id}`);
        break;
      default:
        console.error('corrupt state');
        break;
    }
  };

  const pressSquare = (square: ISquare) => {
    switch (boardState.state) {
      case BoardState.Idle:
        console.log('pressSquareIdle', `${square.id}`);
        break;
      case BoardState.Selected:
        movePiece(boardState.selectedPiece!, square.id);
        const newBoardState = {
          playerTurn:
            boardState.playerTurn === Color.White ? Color.Black : Color.White,
          state: BoardState.Idle,
          selectedPiece: undefined,
        } as IBoardState;
        setBoardState(newBoardState);
        console.log('pressSquareSelected', `${square.id}`);
        break;
      default:
        console.error('corrupt state');
        break;
    }
  };

  const movePiece = (piece: IPiece, pos: string) => {
    if (boardState.playerTurn === Color.White) {
      console.log('white piece move');
      const wp = whitePieces;
      const pieceIndex = wp.findIndex((p) => p.pos === piece.pos);
      wp.splice(pieceIndex, 1);
      piece.pos = pos;
      wp.push(piece);
      setWhitePieces(wp);
    } else {
      console.log('black piece move');
      const bp = blackPieces;
      const pieceIndex = bp.findIndex((p) => p.pos === piece.pos);
      bp.splice(pieceIndex, 1);
      piece.pos = pos;
      bp.push(piece);
      setBlackPieces(bp);
    }
  };

  return (
    <>
      <h2>
        {boardState.playerTurn === Color.White ? (
          <p>White players turn</p>
        ) : (
          <p>Black players turn</p>
        )}
      </h2>
      <BoardGrid>
        {board.map((square, i) => {
          const piece = getPieceForSquare(square.id);

          return square.color === Color.White ? (
            <WhiteSquare
              onClick={() =>
                piece ? pressPiece(square, piece) : pressSquare(square)
              }
              key={i}
            >
              {piece ? (
                <img src={piece?.imagePath} alt='chesspiece' />
              ) : (
                <p>{square.id}</p>
              )}
            </WhiteSquare>
          ) : (
            <BlackSquare
              onClick={() =>
                piece ? pressPiece(square, piece) : pressSquare(square)
              }
              key={i}
            >
              {piece ? (
                <img src={piece?.imagePath} alt='chesspiece' />
              ) : (
                <p>{square.id}</p>
              )}
            </BlackSquare>
          );
        })}
      </BoardGrid>
    </>
  );
};

const BoardGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(8, 50px);
  grid-template-rows: repeat(8, 50px);
  grid-gap: 1px;
  border: 3px solid black;
  max-width: 407px;
`;

const WhiteSquare = styled.div`
  background-color: #b58863;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlackSquare = styled.div`
  background-color: #f0d9b5;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Chessboard;
