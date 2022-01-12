import React, { useState } from 'react';
import { useGlobalContext } from '../context';
import { BsPlus } from 'react-icons/bs';
import { FiMinus } from 'react-icons/fi';

const ScoreButton = ({ score, item }) => {
  const { updateItemVote } = useGlobalContext();
  const [newScore, setNewScore] = useState(score);
  console.log(score, item);

  //
  const increaseValue = (s) => {
    const currentScore = s + 1;
    //only score + 1 is allowed because you cannot give more than one vote
    if (currentScore > score + 1) return;
    setNewScore(currentScore);
  };
  const decreaseValue = (s) => {
    const currentScore = s - 1;
    if (currentScore < score - 1) return;
    setNewScore(currentScore);
  };

  //Current user can vote only on other user's comments, but not on it's own
  if (item.author) {
    return (
      <button className='score-btn'>
        <span className='score-btn-icons score-btn-icons-plus '>
          <BsPlus />
        </span>
        <p>{score}</p>
        <span className='score-btn-icons'>
          <FiMinus />
        </span>
      </button>
    );
  } else {
    return (
      <button className='score-btn'>
        <span
          className='score-btn-icons score-btn-icons-plus '
          onClick={() => increaseValue(newScore)}
        >
          <BsPlus />
        </span>
        <p>{newScore}</p>
        <span
          className='score-btn-icons'
          onClick={() => decreaseValue(newScore)}
        >
          <FiMinus />
        </span>
      </button>
    );
  }
};

export default ScoreButton;
