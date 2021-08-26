import { FC, memo, useState } from 'react';

import { InputType } from '../../types';
import { SquareButton } from './square.styles';

interface SquareProps {
  input: InputType;
  idx: number;
  makeMove: (idx: number) => void;
}

const Square: FC<SquareProps> = ({ input, idx, makeMove }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleInput = () => {
    makeMove(idx);
    setIsButtonDisabled(true);
  };

  return (
    <SquareButton onClick={handleInput} disabled={isButtonDisabled}>
      {input}
    </SquareButton>
  );
};

export default memo(Square);
