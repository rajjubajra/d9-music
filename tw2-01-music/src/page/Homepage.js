import React from 'react';
import {useSelector} from 'react-redux';


function Homepage() {


  const data = useSelector(state => state.reducerHomePage.home_data.data);
  const included = useSelector(state => state.reducerHomePage.home_data.included);

  console.log("one",data);
  console.log("two",included);


  return (
    <div>
      <h1>Test Page</h1>      
    </div>
  )
}

export default Homepage
