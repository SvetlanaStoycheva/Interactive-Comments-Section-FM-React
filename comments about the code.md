#### Comments about the code

- In App.js I import the data from context.js. In context.js the data is set in the LocalStorage. Every time data is changed, data get set in the localStorage.
  The initial comments from data are displayed. If the comment has item.author, I use separate component AuthorComment becose the author comments have different css.
  Every time we make a change in the data (add comment or replay etc.), the data is updated in context.js, get sent to LocalStorage. We take it from there and display it in App.js
- To display new author comment or replay I use AuthorComment
