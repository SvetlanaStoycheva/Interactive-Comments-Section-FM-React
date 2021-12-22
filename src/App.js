import React from 'react';
import data from './data.json';

function App() {
  console.log(data.comments);

  return (
    <main>
      <section className='comments-container'></section>
    </main>
  );
}

export default App;
