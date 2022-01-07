import React, { useState } from 'react';
import { useGlobalContext } from '../context';
import { BsPlus } from 'react-icons/bs';
import { FiMinus } from 'react-icons/fi';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

const AuthorComment = ({ item }) => {
  const { deleteAuthorComment } = useGlobalContext();
  const [authorCommentIsEditing, setAuthorCommentIsEditing] = useState(false);

  //if the item has .author: true gets passed here in order to have an author's comment css
  const { content, createdAt, replies, score, user } = item;
  const {
    image: { png: userImage },
    username: usernameMainComment,
  } = user;

  const editAuthorComment = () => {
    setAuthorCommentIsEditing(true);
  };

  return (
    <article className='single-comment'>
      <div className='votes-btn author-comment-header-btns'>
        <button className='score-btn'>
          <span className='score-btn-icons score-btn-icons-plus '>
            <BsPlus />
          </span>
          <p>{score}</p>
          <span className='score-btn-icons'>
            <FiMinus />
          </span>
        </button>

        <div className='delete-edit-btn-container-small-window'>
          <button
            className='author-comment-delete-btn'
            onClick={() => deleteAuthorComment(item)}
          >
            <span>
              <AiFillDelete />
            </span>
            Delete
          </button>
          <button
            className='author-comment-edit-btn'
            onClick={() => editAuthorComment()}
          >
            <span>
              <AiFillEdit />
            </span>
            Edit
          </button>
        </div>
      </div>
      <div className='info-container'>
        <div className='info-header'>
          <div className='img-name-container'>
            <img src={userImage} alt='user' />
            <h3>{usernameMainComment}</h3>
            <p>you</p>
            <h4>{createdAt}</h4>
          </div>
          <div className='delete-edit-btn-container-big-window'>
            <button
              className='author-comment-delete-btn'
              onClick={() => deleteAuthorComment(item)}
            >
              <span>
                <AiFillDelete />
              </span>
              Delete
            </button>
            <button
              className='author-comment-edit-btn'
              onClick={() => editAuthorComment()}
            >
              <span>
                <AiFillEdit />
              </span>
              Edit
            </button>
          </div>
        </div>
        {!authorCommentIsEditing ? (
          <p>{content}</p>
        ) : (
          <div>
            <form className='form'>
              <textarea value={content}></textarea>
            </form>
            <button className='author-comment-edit-btn submit-btn '>
              UPDATE
            </button>
          </div>
        )}
      </div>
    </article>
  );
};

export default AuthorComment;
