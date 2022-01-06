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
    const newComment = {
      // id: 1,
      author: true,
      content: text,
      createdAt: '1 min ago',
      score: 0,
      user: {
        image: {
          png: imgCurrentUser,
        },
        username: 'amyrobson',
      },
      replies: [],
    };
    //add new author comment to the data.
    const newComments = [...data.comments, newComment];
    console.log(newComments);
    setData({ ...data, comments: newComments });
  };

  //set data on LocalStorage
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  return (
    <AppContext.Provider value={{ data, addNewComment }}>
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
