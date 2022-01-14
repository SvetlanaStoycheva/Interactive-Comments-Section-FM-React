import React, { useState } from 'react';
import imgCurrentUser from '../images-avatars/image-juliusomo.png';
import { useGlobalContext } from '../context';

//it is very similar to NewComment
const ReplayForm = ({ item }) => {
  const { addNewReplay } = useGlobalContext();
  const [newReplay, setNewReplay] = useState('');

  const handleNewReplay = (e) => {
    e.preventDefault();
    addNewReplay(newReplay);
    setNewReplay('');
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
