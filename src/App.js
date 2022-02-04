import React, { useState, useEffect } from 'react';
import NewCommentComponent from './components/NewComment';
import AuthorComment from './components/AuthorComment';
import ScoreButton from './components/ScoreButton';
import { BsArrow90DegLeft } from 'react-icons/bs';
import { useGlobalContext } from './context';
import ReplayForm from './components/ReplayForm';

function App() {
  const { data } = useGlobalContext();
  const [isReplayingId, setIsReplayingId] = useState(null);

  //when the Replay button is clicked, set active status on the clicked item replay button in order to open the Replay Form
  const handleRiplay = (id) => {
    setIsReplayingId(id);
  };

  return (
    <main className='main'>
      <section className='comments-container'>
        {data.comments.map((item, index) => {
          const { content, createdAt, replies, score, user, id } = item;
          const {
            image: { png: userImage },
            username: usernameMainComment,
          } = user;

          // Comments
          return item.author ? (
            <AuthorComment key={index} item={item} />
          ) : (
            <>
              <article className='single-comment' key={`${index}a`}>
                <div className='votes-btn'>
                  <ScoreButton score={score} item={item} id={id} />
                  <button
                    className='replay-btn-small-window'
                    onClick={() => handleRiplay(id)}
                  >
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
                      <button
                        className='replay-btn-big-window'
                        onClick={() => handleRiplay(id)}
                      >
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
              {/* If the Replay button is clicked */}
              {isReplayingId === id && (
                <ReplayForm item={item} setIsReplayingId={setIsReplayingId} />
              )}
              {/* Replaies */}
              {replies.length > 0 && (
                <div className='replies-container'>
                  {replies.map((item, index) => {
                    const { content, createdAt, score, user, id } = item;
                    const {
                      image: { png: userImage },
                      username,
                    } = user;
                    //  single replay container
                    return item.author ? (
                      <AuthorComment key={id} item={item} />
                    ) : (
                      <>
                        <article
                          className='single-comment single-replay'
                          key={`${index}b`}
                        >
                          <div className='votes-btn'>
                            <ScoreButton score={score} item={item} id={id} />
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
                      </>
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
