import React from 'react';
import { data } from './data';
import { BsPlus, BsArrow90DegLeft } from 'react-icons/bs';
import { FiMinus } from 'react-icons/fi';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

function App() {
  // console.log(data.comments);

  return (
    <main className='main'>
      <section className='comments-container'>
        {data.comments.map((item) => {
          const { content, createdAt, id, replies, score, user } = item;
          const {
            image: { png: userImage },
            username,
          } = user;
          console.log(replies);
          // Comments
          return (
            <>
              <article className='single-comment' key={id}>
                <div className='votes-btn'>
                  <button>
                    <span>
                      <BsPlus />
                    </span>
                    <p>{score}</p>
                    <span>
                      <FiMinus />
                    </span>
                  </button>
                </div>
                <div className='info-container'>
                  <div className='info-header'>
                    <div className='img-name-container'>
                      <img src={userImage} alt='user' />
                      <h3>{username}</h3>
                      <h4>{createdAt}</h4>
                    </div>
                    <div className='replay-btn'>
                      <button>
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
                      <article className='single-comment' key={`${id}${index}`}>
                        <div className='votes-btn'>
                          <button>
                            <span>
                              <BsPlus />
                            </span>
                            <p>{score}</p>
                            <span>
                              <FiMinus />
                            </span>
                          </button>
                        </div>
                        <div className='info-container'>
                          <div className='info-header'>
                            <div className='img-name-container'>
                              <img src={userImage} alt='user' />
                              <h3>{username}</h3>
                              <h4>{createdAt}</h4>
                            </div>
                            <div className='replay-btn'>
                              <button>
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
                    );
                  })}
                </div>
              )}
            </>
          );
        })}
      </section>
    </main>
  );
}

export default App;
