import { FC, useEffect, useState } from 'react';

import { InputType } from '../../types';

import Square from '../square/square.component';

import { Container, NewGameButton, Headline, GameBoard } from './board.styles';

const Board: FC = () => {
  const [squares, setSquares] = useState<any[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<InputType>();
  const [isXnext, setIsXnext] = useState(true);
  const [winner, setWinner] = useState<InputType>();

  useEffect(() => {
    if (isXnext) {
      setCurrentPlayer('X');
    } else {
      setCurrentPlayer('O');
    }
  }, [isXnext]);

  useEffect(() => {
    const calculateWinner = (): InputType => {
      const winningLines = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 4, 6],
        [2, 5, 8],
        [3, 4, 5],
        [6, 7, 8],
      ];

      for (let i = 0; i < winningLines.length; i++) {
        const [a, b, c] = winningLines[i];

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    };
    setWinner(calculateWinner());
  }, [squares]);

  const newGame = () => {
    setSquares(Array(9).fill(null));
    setIsXnext(true);
    setWinner(null);
  };

  const makeMove = (idx: number) => {
    let transformedSquares = [...squares];
    transformedSquares[idx] = currentPlayer;

    setSquares(transformedSquares);
    setIsXnext(prev => !prev);
  };

  return (
    <Container>
      <Headline>Current Player: {currentPlayer}</Headline>

      <NewGameButton onClick={newGame}>Start new game</NewGameButton>

      {winner && <Headline>Player {winner} won the game!</Headline>}

      <GameBoard>
        {squares.map((val, idx) => (
          <Square key={idx} idx={idx} input={val} makeMove={makeMove} />
        ))}
      </GameBoard>
    </Container>
  );
};

export default Board;
