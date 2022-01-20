import React, { useState, useContext, useEffect } from 'react';
import { initialData } from './data';
import imgCurrentUser from './images-avatars/image-juliusomo.png';

//get data from LocalStorage
const getLocalStorage = () => {
  let data = localStorage.getItem('data');
  if (data) {
    return JSON.parse(localStorage.getItem('data'));
  } else {
    return initialData;
  }
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState(getLocalStorage());

  //add new comment to the data
  const addNewComment = (text) => {
    const randomId = Date.now();
    const newComment = {
      id: randomId,
      author: true,
      content: text,
      createdAt: '1 min ago',
      score: 0,
      user: {
        image: {
          png: imgCurrentUser,
        },
        username: 'juliusomo',
      },
      replies: [],
    };
    //add new author comment to the data.
    const newComments = [...data.comments, newComment];
    setData({ ...data, comments: newComments });
  };

  //add new replay to the data
  const addNewReplay = (text, commentUsername, item) => {
    // const randomId = Math.floor(Math.random() * 100);
    const randomId = Date.now();
    const newReplay = {
      id: randomId,
      author: true,
      content: text,
      createdAt: '1 min ago',
      score: 0,
      replyingTo: commentUsername,
      user: {
        image: {
          png: imgCurrentUser,
        },
        username: 'juliusomo',
      },
      replies: [],
    };
    //add new author replay to the correspondent comment.
    data.comments.forEach((c) => {
      if (c === item) {
        c.replies.push(newReplay);
      }
    });
    setData(data);
    localStorage.setItem('data', JSON.stringify(data));
  };

  //On click Delete btn => delete authorComment or authorReplay
  const deleteAuthorComment = (item) => {
    //if item is a replay
    let newDataComments = [];
    if (item.replyingTo) {
      newDataComments = data.comments.map((c) => {
        if (c.replies) {
          const newReplaies = c.replies.filter(
            (r) => r.content !== item.content
          );
          return (c = { ...c, replies: newReplaies });
        }
        return c;
      });
      // console.log(newDataComments);
    } else {
      newDataComments = data.comments.filter((i) => i.id !== item.id);
    }
    setData({ ...data, comments: newDataComments });
  };

  //After content of a comment is edited, it needs to be updated in the data
  const updateItemContentAfterEditInData = (item, newEdit) => {
    console.log(item);

    if (item.replyingTo) {
      data.comments.forEach((c) => {
        if (c.replies) {
          const currentReplay = c.replies.find((r) => r.id === item.id);
          if (currentReplay) {
            currentReplay.content = newEdit;
          }
        }
      });
    }
    data.comments.map((i) => {
      if (i.id === item.id) {
        return (i.content = newEdit);
      }
      return i.content;
    });
    setData(data);
    localStorage.setItem('data', JSON.stringify(data));
  };

  //update ItemVote after voting in the data and LocalStorage
  const updateItemVote = (currentScore, item) => {
    // console.log(currentScore, item);
    //if item is a replay
    data.comments.forEach((c) => {
      if (c.replies) {
        c.replies.map((r) => {
          if (r === item) {
            return (r.score = currentScore);
          }
          return r.score;
        });
      }
    });
    //if item is a comment
    data.comments.forEach((c) => {
      if (c === item) {
        return (c.score = currentScore);
      }
      return c.score;
    });

    //
    setData(data);
    localStorage.setItem('data', JSON.stringify(data));
  };

  //set data on LocalStorage
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  return (
    <AppContext.Provider
      value={{
        data,
        addNewComment,
        addNewReplay,
        deleteAuthorComment,
        updateItemContentAfterEditInData,
        updateItemVote,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
// import { useGlobalContext } from './context'
// const { openSidebar, openModal } = useGlobalContext();
