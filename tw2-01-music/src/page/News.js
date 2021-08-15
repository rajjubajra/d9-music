import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionNews} from '../redux/actions';



function News() {

  const dispatch = useDispatch();
  const data = useSelector(state => state.reducerNews.news_data.data);
  const inc_data = useSelector(state => state.reducerNews.news_data.included);
  const length = useSelector(state => state.reducerNews.news_dataLength);

  const [arr, setArr] = useState([]);

  console.log("news",data,"news length", length);
  useEffect(()=>{

    dispatch(actionNews());
    
  },[dispatch])



  useEffect(()=>{

    const newdata = [];

    console.log("newdata", newdata);
    
    length > 0 && data.map(item => {

      const {attributes:{title, field_news_body, field_news_date}} = item;
      
      inc_data.map(inc => {

        if(inc.type === 'file--file'){
          const {attributes:{uri}} = inc;    
          newdata.push({
            title: title, 
            body: field_news_body.processed, 
            data: field_news_date, 
            image: uri.url});
        }
      })
    })

    setArr(newdata);

  },[data, inc_data, length])

  console.log("data arr news", arr);
  
  return (
    <div>
      {
        length > 0 &&
        arr.map(item=>{
          return(
            <div className="m-5">
              <h1 className="text-2xl">{item.title}</h1>
              <div><img src={item.image} alt="news" /></div>
              <div dangerouslySetInnerHTML={{__html: item.body}} />
            </div>
          )
        })
      }
    </div>
  )
}

export default News
