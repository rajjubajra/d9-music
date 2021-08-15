import React,{useEffect, useState} from 'react';
import {useSelector} from 'react-redux';


function Homepage() {


  const data = useSelector(state => state.reducerHomePage.home_data.data);
  const included = useSelector(state => state.reducerHomePage.home_data.included);
  const length = useSelector(state => state.reducerHomePage.home_dataLength );

  console.log("one",data);
  console.log("two",included);

  const [arr, setArr] = useState([]);

  useEffect(()=>{
    const newArr = [];
    length > 0 
    && data.map(item => {
      const {attributes:{title, field_home_body}} = item;
      included.map(inc => {
        const {attributes:{uri}} = inc
        newArr.push({title: title, body: field_home_body.value, image: uri.url})
      })
    })
    setArr(newArr)
  },[data, included, length]);

  console.log("new array ",arr);




  return (
    <div>
      
        {
        length > 0 
        ? data.map(item=>{
          const {attributes:{title, field_home_body}} = item;
          return <div>
            <h1 className="text-2xl">{title}</h1>
            <div>
              <div dangerouslySetInnerHTML={{__html: field_home_body.value }}></div>
            </div>
          </div>
        })
        : 'Loading...'
        }
        
    </div>
  )
}

export default Homepage
