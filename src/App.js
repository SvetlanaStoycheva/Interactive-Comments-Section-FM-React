import React, { useState } from 'react';
import NewCommentComponent from './components/NewComment';
import AuthorComment from './components/AuthorComment';
import { useGlobalContext } from './context';
import { BsPlus, BsArrow90DegLeft, BsTypeH2 } from 'react-icons/bs';
import { FiMinus } from 'react-icons/fi';

function App() {
  const { data } = useGlobalContext();
  console.log(data);

  return (
    <main className='main'>
      <section className='comments-container'>
        {data.comments.map((item, index) => {
          const { content, createdAt, replies, score, user } = item;
          const {
            image: { png: userImage },
            username: usernameMainComment,
          } = user;

          // Comments
          return item.author ? (
            <AuthorComment />
          ) : (
            <>
              <article className='single-comment' key={index}>
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
                  {/* if you are the author of the comment, you have delete and edit button instead of replay */}
                  {item.author && (
                    <div className='delete-edit-btn-container'>
                      <button>Delete</button>
                      <button>Edit</button>
                    </div>
                  )}

                  <button className='replay-btn-small-window'>
                    <span className='replay-btn-icon'>
                      <BsArrow90DegLeft />
                    </span>
                    Replay
                  </button>
                </div>
                <div className='info-container'>
                  <div className='info-header'>
                    <div className='img-name-container'>
                      <img src={userImage} alt='user' />
                      <h3>{usernameMainComment}</h3>
                      <h4>{createdAt}</h4>
                    </div>
                    <div>
                      <button className='replay-btn-big-window'>
                        <span>
                          <BsArrow90DegLeft />
                        </span>
                        Replay
                      </button>
                    </div>
                  </div>
                  <p>{content}</p>
                </div>
              </article>
              {/* Replaies */}
              {replies.length > 0 && (
                <div className='replies-container'>
                  {replies.map((item, index) => {
                    const { content, createdAt, score, user } = item;
                    const {
                      image: { png: userImage },
                      username,
                    } = user;
                    //  single replay container
                    return (
                      <article
                        className='single-comment single-replay'
                        key={index}
                      >
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
                          <button className='replay-btn-small-window'>
                            <span className='replay-btn-icon'>
                              <BsArrow90DegLeft />
                            </span>
                            Replay
                          </button>
                        </div>
                        <div className='info-container'>
                          <div className='info-header'>
                            <div className='img-name-container'>
                              <img src={userImage} alt='user' />
                              <h3>{username}</h3>
                              <h4>{createdAt}</h4>
                            </div>
                            <div>
                              <button className='replay-btn-big-window'>
                                <span>
                                  <BsArrow90DegLeft />
                                </span>
                                Replay
                              </button>
                            </div>
                          </div>
                          <p>
                            <span className='main-comment-name'>
                              @{usernameMainComment}{' '}
                            </span>
                            {content}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </>
          );
        })}
        {/* Create comment container */}
        <NewCommentComponent />
      </section>
    </main>
  );
}

export default App;
