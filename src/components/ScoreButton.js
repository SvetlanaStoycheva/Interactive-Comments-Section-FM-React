import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../context';
import { BsPlus } from 'react-icons/bs';
import { FiMinus } from 'react-icons/fi';
// import { initialData } from '../data';

const ScoreButton = ({ score, item }) => {
  const { updateItemVote } = useGlobalContext();
  // const [originalScore, setOriginalScore] = useState(0);
  const [newScore, setNewScore] = useState(score);

  //Find the original score in the initialData in order to be able to change it only with +-1;
  // const findOriginalScore = () => {
  //   initialData.comments.map((c) => {
  //     if (item.replyingTo) {
  //       c.replies.map((r) => {
  //         if (r === item) {
  //           setOriginalScore(r.score);
  //         }
  //       });
  //     } else {
  //       if (c === item) {
  //         setOriginalScore(c.score);
  //       }
  //     }
  //   });
  // };
  // useEffect(() => {
  //   findOriginalScore();
  // }, []);
  // console.log(originalScore);

  const increaseValue = (s) => {
    const currentScore = s + 1;
    //only score + 1 is allowed because you cannot give more than one vote
    if (currentScore > score + 1) return;
    setNewScore(currentScore);
    //update the vote in the data and LocalStorage
    updateItemVote(currentScore, item);
  };
  const decreaseValue = (s) => {
    const currentScore = s - 1;
    if (currentScore < score - 1) return;
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
