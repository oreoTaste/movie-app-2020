import React from 'react';

function Food({name, picture}) {
  return (
    <div>
      <h3>I love {name}!</h3>
      <img src={picture} alt={name}/>
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://www.maangchi.com/wp-content/uploads/2014/06/fresh-kimchi.jpg"
  },
  {
    id: 2,
    name: "ramen",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190208-ramen-horizontal-063-1550014435.jpg?crop=1xw:1xh;center,top&resize=768:*"
  },
  {
    id: 3,
    name: "samgyupsal",
    image: "https://swisshansik.files.wordpress.com/2011/10/samgyupsal.jpg?w=480&h=321"
  },
  {
    id: 4,
    name: "chukumi",
    image: "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile23.uf.tistory.com%2Fimage%2F237100345502F17C14F168"
  }
];

function App() {
  return (
    <div>
      {
        foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image}/>)
      }
    </div>
  );
}

export default App;
