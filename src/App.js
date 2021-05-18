import logo from './logo.svg';
import React, { useState,useEffect } from 'react';

import './App.css';

function App() {
  const product =[{name:"Photoshop", price:"$99.99"},
  {name:"Illustrator", price:"$59.99"},
  {name:"Adobe Premioum", price:"$250.99"}
  ]
  const nayok = ["Manna", "Joshim", "Sakib Khan", "Shalman Shah","Rubel"]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Count></Count>
        <Users></Users>
        {
          product.map(pd=> <li>{pd.name}</li>)
        }
        {
          nayok.map(nayok=> <li>{nayok}</li>)
        }
        {
          product.map(pd=><Product product={pd}></Product>)
        }
        
      </header>
    </div>
  );
}

function Users(){
  const [user, setUser] = useState([])
  
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUser(data))
  }, [])
  
  return(
    <div>
      {
        user.map(user => <li>{user.phone}</li>)
      }
    </div>
  )
}
function Count(){
  const [count, setCount] = useState(10)
 

  return(
    <div>
      <h3>count:{count}</h3>
      <button onClick={()=> setCount(count + 1)}>Increase</button>
      <button onClick={()=> setCount(count - 1)}>Decrease</button>
    </div>
  )
}
function Product(props){

const productStyle ={border:"1px solid red", backgroundColor:"gray", margin:"5px"}
  let {name, price} = props.product
  console.log(props.product);
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <p>{price}</p>
      <button>Buy now !</button>
    </div>
  )
}
function Person(props){
  return(
    <div>
      <h2>Name:{props.name}</h2>
      <h6>Job: {props.job}</h6>
    </div>
  )
}

export default App;
