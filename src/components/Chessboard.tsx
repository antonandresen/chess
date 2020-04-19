import React, { useState } from 'react';
import styled from 'styled-components';

import { defaultBoard } from '../data/squares';
import { Color } from '../types/enums';

const Chessboard: React.FC = () => {
  const [board, setBoard] = useState(defaultBoard);

  return (
    <BoardGrid>
      {board.map((square, i) => {
        return square.color === Color.White ? (
          <WhiteSquare key={i}>{square.id}</WhiteSquare>
        ) : (
          <BlackSquare key={i}>{square.id}</BlackSquare>
        );
      })}
    </BoardGrid>
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
  background-color: #ffffff;
  color: red;
`;

const BlackSquare = styled.div`
  background-color: #000000;
  color: red;
`;

export default Chessboard;
