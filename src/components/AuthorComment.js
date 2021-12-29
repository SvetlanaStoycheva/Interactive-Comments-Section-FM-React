import React from 'react';
import { useGlobalContext } from '../context';
import { BsPlus } from 'react-icons/bs';
import { FiMinus } from 'react-icons/fi';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

const AuthorComment = () => {
  const { data } = useGlobalContext();

  //fing author comment from the data to display it with different css
  const autorCommentFromData = data.comments.find((item) => item.author);
  const { content, createdAt, replies, score, user } = autorCommentFromData;
  const {
    image: { png: userImage },
    username: usernameMainComment,
  } = user;

  return (
    <article className='single-comment'>
      <div className='votes-btn'>
        <button className='score-btn'>
          <span className='score-btn-icons score-btn-icons-plus '>
            <BsPlus />
          </span>
          <p>{score}</p>
          <span className='score-btn-icons'>
            <FiMinus />
          </span>
        </button>

        <div className='delete-edit-btn-container'>
          <button>Delete</button>
          <button>Edit</button>
        </div>
      </div>
      <div className='info-container'>
        <div className='info-header'>
          <div className='img-name-container'>
            <img src={userImage} alt='user' />
            <h3>{usernameMainComment}</h3>
            <h4>{createdAt}</h4>
          </div>
          <div></div>
        </div>
        <p>{content}</p>
      </div>
    </article>
  );
  //   } else return [];
};

export default AuthorComment;
