import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}) {
  return (
    <div>
      <h3>I love {name}!</h3>
      <h3>rating : {rating}/5</h3>
      <img src={picture} alt={name} width="300px"/>
    </div>
  );
}
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://www.maangchi.com/wp-content/uploads/2014/06/fresh-kimchi.jpg",
    rating: 4.8
  },
  {
    id: 2,
    name: "ramen",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190208-ramen-horizontal-063-1550014435.jpg?crop=1xw:1xh;center,top&resize=768:*",
    rating: 4.9
  },
  {
    id: 3,
    name: "samgyupsal",
    image: "https://swisshansik.files.wordpress.com/2011/10/samgyupsal.jpg?w=480&h=321",
    rating: 5.0
  },
  {
    id: 4,
    name: "chukumi",
    image: "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile23.uf.tistory.com%2Fimage%2F237100345502F17C14F168",
    rating: 4.7
  }
];

function App() {
  return (
    <div>
      {
        foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>)
      }
    </div>
  );
}

export default App;
