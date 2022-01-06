import React from 'react';
import { useGlobalContext } from '../context';
import { BsPlus } from 'react-icons/bs';
import { FiMinus } from 'react-icons/fi';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

const AuthorComment = () => {
  const { data } = useGlobalContext();

  //find author comment or comments from the data to display it with different html/css
  const autorCommentFromData = data.comments.find((item) => item.author);

  // autorCommentFromData.map((item) => {
  const { content, createdAt, replies, score, user } = autorCommentFromData;
  const {
    image: { png: userImage },
    username: usernameMainComment,
  } = user;
  // });

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
          <button className='author-comment-delete-btn'>
            <span>
              <AiFillDelete />
            </span>
            Delete
          </button>
          <button className='author-comment-edit-btn'>
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
            <button className='author-comment-delete-btn'>
              <span>
                <AiFillDelete />
              </span>
              Delete
            </button>
            <button className='author-comment-edit-btn'>
              <span>
                <AiFillEdit />
              </span>
              Edit
            </button>
          </div>
        </div>
        <p>{content}</p>
      </div>
    </article>
  );
};

export default AuthorComment;
