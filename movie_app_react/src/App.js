//https://nomadcoders.co/react-fundamentals/lobby
// #3 STATE 할 차례!

import React from 'react';
import PropTypes from "prop-types";

function Food({ name , picture, rating}) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating} / 5.0</h4>
    <img src={picture} alt={name}></img>
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}
// required, type check를 할 수 있음!!

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image: "https://cdn.crowdpic.net/detail-thumb/thumb_d_CDC14868821FF3F20C77BC8BC15E6355.jpg",
    rating: 4.7
  },
  { 
    id:2,
    name: "삼겹살",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwoman.chosun.com%2Fmobile%2Fnews%2Fview.asp%3Fcate%3DC05%26mcate%3DM1001%26nNewsNumb%3D20200868344&psig=AOvVaw1PDIe_YRZfYP376cyl9Jaw&ust=1618127180459000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjw0tCX8-8CFQAAAAAdAAAAABAD",
    rating: 4.0
  },
  {
    id:3,
    name: "비빔밥", 
    image: "https://lh3.googleusercontent.com/proxy/3yVmq_QLhpBBbTkZ1G65O25BVAF03Ebru9Dub6aYfPCeCcXxua8uMV6pVPv20tpXmKu8vLcvk1EsIFYAMrE98LSObZvE2BKjkmM",
    rating: 3.2
  },
  {
    id:4,
    name: "Kimchi",
    image: "https://cdn.crowdpic.net/detail-thumb/thumb_d_CDC14868821FF3F20C77BC8BC15E6355.jpg",
    rating: 2.7
  },
  {
    id:5,
    name: "삼겹살",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwoman.chosun.com%2Fmobile%2Fnews%2Fview.asp%3Fcate%3DC05%26mcate%3DM1001%26nNewsNumb%3D20200868344&psig=AOvVaw1PDIe_YRZfYP376cyl9Jaw&ust=1618127180459000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjw0tCX8-8CFQAAAAAdAAAAABAD",
    rating: 4.8
  },
  {
    id:6,
    name: "비빔밥",
    image: "https://lh3.googleusercontent.com/proxy/3yVmq_QLhpBBbTkZ1G65O25BVAF03Ebru9Dub6aYfPCeCcXxua8uMV6pVPv20tpXmKu8vLcvk1EsIFYAMrE98LSObZvE2BKjkmM",
    rating: 3.1
  }
];

function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image}/>
}

function App() {
  return (
    <div className="App">
      {/* {console.log(foodILike.map(renderFood))}
      {foodILike.map(renderFood)} */}
      {foodILike.map(dish => 
      <Food 
        key={dish.id} 
        name={dish.name} 
        picture={dish.image}
        rating={dish.rating}/>)}
    </div>
  );
}

export default App;
