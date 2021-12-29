import React, { useState } from 'react';
import imgCurrentUser from '../images-avatars/image-juliusomo.png';
import { useGlobalContext } from '../context';

const NewComment = () => {
  const { addNewComment } = useGlobalContext();
  const [newComment, setNewComment] = useState('');

  const handleNewComment = (e) => {
    e.preventDefault();
    addNewComment(newComment);
  };
  return (
    <article className='form-container'>
      <img
        src={imgCurrentUser}
        alt='author'
        className='send-form-img-big-screen'
      />
      <form className='form' onSubmit={handleNewComment}>
        <textarea
          type='text'
          className='form-input'
          placeholder='Add a comment...'
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <div className='send-btn-container'>
          <img
            src={imgCurrentUser}
            alt='author'
            className='send-form-img-small-screen'
          />
          <button type='submit' className='submit-btn'>
            SEND
          </button>
        </div>
      </form>
    </article>
  );
};

export default NewComment;
