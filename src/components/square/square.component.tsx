import { FC } from 'react';

import { InputType } from '../../types';
import { SquareButton } from './square.styles';

interface SquareProps {
  input: InputType;
  idx: number;
  makeMove: (idx: number) => void;
}

const Square: FC<SquareProps> = ({ input, idx, makeMove }) => {
  const handleInput = () => {
    makeMove(idx);
  };

  return <SquareButton onClick={handleInput}>{input}</SquareButton>;
};

export default Square;
