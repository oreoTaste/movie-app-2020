import React from 'react';

function Food({fav}) {
  return (
  <h3>I love {fav}!</h3>
  );
}

function App() {
  return (
    <div>
      <h3>Hello!</h3>
      <Food fav="kimchi"/>
      <Food fav="ramen"/>
      <Food fav="samgyupsal"/>
      <Food fav="chukumi"/>
    </div>
  );
}

export default App;
