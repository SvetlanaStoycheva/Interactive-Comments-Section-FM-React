import React, { useState } from 'react';
import imgCurrentUser from '../images-avatars/image-juliusomo.png';
import { useGlobalContext } from '../context';

//it is very similar to NewComment
const ReplayForm = ({ item, setIsReplayingId }) => {
  const { addNewReplay } = useGlobalContext();
  const [newReplay, setNewReplay] = useState('');

  //take the username for replayTo
  const {
    user: { username },
  } = item;

  const handleNewReplay = (e) => {
    e.preventDefault();
    addNewReplay(newReplay, username, item);
    setNewReplay('');
    //close the replay form after clicking UPDATE
    setIsReplayingId(null);
  };
  return (
    <article className='form-container'>
      <img
        src={imgCurrentUser}
        alt='author'
        className='send-form-img-big-screen'
      />
      <form className='form' onSubmit={handleNewReplay}>
        <textarea
          type='text'
          className='form-input'
          placeholder='Add a replay...'
          value={newReplay}
          onChange={(e) => setNewReplay(e.target.value)}
        />
        <div className='send-btn-container'>
          <img
            src={imgCurrentUser}
            alt='author'
            className='send-form-img-small-screen'
          />
          <button type='submit' className='submit-btn'>
            REPLAY
          </button>
        </div>
      </form>
    </article>
  );
};

export default ReplayForm;
