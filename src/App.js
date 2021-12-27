import React from 'react';
import { data } from './data';
import { BsPlus, BsArrow90DegLeft } from 'react-icons/bs';
import { FiMinus } from 'react-icons/fi';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import img from './images-avatars/image-juliusomo.png';

function App() {
  // console.log(data.comments);

  return (
    <main className='main'>
      <section className='comments-container'>
        {data.comments.map((item) => {
          const { content, createdAt, id, replies, score, user } = item;
          const {
            image: { png: userImage },
            username: usernameMainComment,
          } = user;
          console.log(replies);
          // Comments
          return (
            <>
              <article className='single-comment' key={id}>
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
                    const { content, createdAt, id, score, user } = item;
                    const {
                      image: { png: userImage },
                      username,
                    } = user;
                    //  single replay container
                    return (
                      <article
                        className='single-comment single-replay'
                        key={`${id}${index}`}
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
        <article className='form-container'>
          <img src={img} alt='author' className='send-form-img-big-screen' />
          <form className='form'>
            <textarea
              type='text'
              className='form-input'
              placeholder='Add a comment...'
            />
            <div className='send-btn-container'>
              <img
                src={img}
                alt='author'
                className='send-form-img-small-screen'
              />
              <button type='submit' className='submit-btn'>
                SEND
              </button>
            </div>
          </form>
        </article>
      </section>
    </main>
  );
}

export default App;
