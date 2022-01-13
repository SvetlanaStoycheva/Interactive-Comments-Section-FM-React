import React, { useState } from 'react';
import { useGlobalContext } from '../context';
import ScoreButton from '../components/ScoreButton';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

const AuthorComment = ({ item }) => {
  const {
    deleteAuthorComment,
    updateItemContentAfterEditInData,
  } = useGlobalContext();
  const [authorCommentIsEditing, setAuthorCommentIsEditing] = useState(false);
  const [newEdit, setNewEdit] = useState(item.content);
  const [newContent, setNewContent] = useState(item.content);

  //if the item has .author: true, gets passed here in order to have an author's comment css
  let { content, createdAt, replies, score, user } = item;
  const {
    image: { png: userImage },
    username: usernameMainComment,
  } = user;

  const editAuthorComment = () => {
    setAuthorCommentIsEditing(true);
  };

  //show edited comment after update btn is clicked
  const setEditedText = () => {
    setAuthorCommentIsEditing(false);
    setNewContent(newEdit);
    //need to update the comment content in the data
    updateItemContentAfterEditInData(item, newEdit);
  };

  return (
    <article className='single-comment'>
      <div className='votes-btn author-comment-header-btns'>
        {/* <button className='score-btn'>
          <span className='score-btn-icons score-btn-icons-plus '>
            <BsPlus />
          </span>
          <p>{score}</p>
          <span className='score-btn-icons'>
            <FiMinus />
          </span>
        </button> */}
        <ScoreButton score={score} item={item} />
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
        {/* Edit the comment */}
        {!authorCommentIsEditing ? (
          <p>{newContent}</p>
        ) : (
          <div>
            <form className='form'>
              <textarea
                className='form-input'
                value={newEdit}
                onChange={(e) => setNewEdit(e.target.value)}
              ></textarea>
            </form>
            <button
              className='author-comment-edit-btn submit-btn'
              onClick={setEditedText}
            >
              UPDATE
            </button>
          </div>
        )}
      </div>
    </article>
  );
};

export default AuthorComment;
