import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../context';
import { BsPlus } from 'react-icons/bs';
import { FiMinus } from 'react-icons/fi';
import { initialData } from '../data';

const ScoreButton = ({ score, item, id }) => {
  const { updateItemVote } = useGlobalContext();
  const [newScore, setNewScore] = useState(score);
  const [
    originalScoreFromInitialData,
    setOriginalScoreFromInitialData,
  ] = useState(null);

  //Find the original score in the initialData in order to be able to change it only with +-1;
  const findInitialScore = (id) => {
    initialData.comments.map((c) => {
      if (c.id === id) {
        setOriginalScoreFromInitialData(c.score);
      }
      if (c.replies.length > 0) {
        c.replies.map((r) => {
          if (r.id === id) {
            setOriginalScoreFromInitialData(c.score);
          }
        });
      }
    });
  };
  useEffect(() => {
    findInitialScore(id);
  }, []);

  const increaseValueByOne = (s) => {
    const currentScore = s + 1;
    //only score = initialScore + 1 is allowed because you cannot give more than one vote
    if (currentScore > originalScoreFromInitialData + 1) return;
    setNewScore(currentScore);
    //update the vote in the data and LocalStorage
    updateItemVote(currentScore, item);
  };
  const decreaseValueByOne = (s) => {
    const currentScore = s - 1;
    if (currentScore < originalScoreFromInitialData - 1) return;
    setNewScore(currentScore);
    updateItemVote(currentScore, item);
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
          onClick={() => increaseValueByOne(newScore)}
        >
          <BsPlus />
        </span>
        <p>{newScore}</p>
        <span
          className='score-btn-icons'
          onClick={() => decreaseValueByOne(newScore)}
        >
          <FiMinus />
        </span>
      </button>
    );
  }
};

export default ScoreButton;
