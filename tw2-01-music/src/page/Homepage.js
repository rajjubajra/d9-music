import React from 'react';
import {useSelector} from 'react-redux';


function Homepage() {


  const data = useSelector(state => state.reducerHomePage.home_data.data);
  const included = useSelector(state => state.reducerHomePage.home_data.included);
  const length = useSelector(state => state.reducerHomePage.home_dataLength );

  console.log("one",data);
  console.log("two",included);


  return (
    <div>
      
        {
        length > 0 
        ? data.map(item=>{
          const {attributes:{title, field_home_body}} = item;
          return <div>
            <h1 className="text-2xl">{title}</h1>
            <div>
              {field_home_body.value}
            </div>
          </div>
        })
        : 'Loading...'
        }
        
    </div>
  )
}

export default Homepage
