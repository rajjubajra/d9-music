import React,{useEffect, useState} from 'react';
import {useSelector} from 'react-redux';


function Homepage() {


  const data = useSelector(state => state.reducerHomePage.home_data.data);
  const included = useSelector(state => state.reducerHomePage.home_data.included);
  const length = useSelector(state => state.reducerHomePage.home_dataLength );

  //console.log("one",data);
  //console.log("two",included);

  const [arr, setArr] = useState();

  useEffect(()=>{
    const newArr = [];
    length > 0 
    && data.map(item => {
      const {attributes:{title, field_home_body}} = item;
      const image = included[1].attributes.uri.url;
        newArr.push({title: title, body: field_home_body.value, image: image})
    })
    setArr(newArr);
  },[data, included, length]);

  //console.log("new array ",arr);




  return (
    <div>
      
        {
        length > 0 
        ? arr.map(item=>{
          return <div>
            <h1 className="text-2xl">{item.title}</h1>
            <div><img className="w-60" src={item.image} alt="homepage" /></div>
            <div>
              <div dangerouslySetInnerHTML={{__html: item.body }}></div>
            </div>
          </div>
        })
        : 'Loading...'
        }
        
    </div>
  )
}

export default Homepage
