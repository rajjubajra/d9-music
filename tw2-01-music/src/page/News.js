import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionNews} from '../redux/actions';




function News() {

  const dispatch = useDispatch();
  const data = useSelector(state => state.reducerNews.news_data.data);
  const length = useSelector(state => state.reducerNews.news_dataLength);

  console.log("news",data,"news length", length);
  useEffect(()=>{
    dispatch(actionNews());
  },[dispatch])
  
  return (
    <div>
      <h1>News Page</h1>
    </div>
  )
}

export default News
