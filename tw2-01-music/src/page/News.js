import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionNews} from '../redux/actions';
//import ImageOnload from '../components/ImageOnload';
import NewsList from './NewsList';



function News() {

  const dispatch = useDispatch();
  const data = useSelector(state => state.reducerNews.news_data.data);
  const inc_data = useSelector(state => state.reducerNews.news_data.included);
  const length = useSelector(state => state.reducerNews.news_dataLength);

  const [arr, setArr] = useState([]);

  //console.log("news",data,"news length", length);

  useEffect(()=>{
    dispatch(actionNews());
  },[dispatch])



  useEffect(()=>{
    const newdata = [];
    length > 0 && 
    data.map(item => {

      const {attributes:{title, field_news_body, field_news_date}} = item;
      
      inc_data.map(inc => {
        
        const { attributes:{uri}, id } = inc;
        /** stop repeat push */
        const hasId = newdata.some((el) => el.incId === id);

        if(inc.type === 'file--file' && !hasId){
              
          newdata.push({
            title: title, 
            body: field_news_body.processed, 
            data: field_news_date, 
            incId: id,
            image: uri.url});
        }
        return setArr(newdata);
      })
    })
    
  },[data, inc_data, length])

  //console.log("data arr news", arr);
  
  return (
    <div className="max-w-screen-xl m-auto p-10">
      <NewsList listdata={length > 0 ? arr : []} />
    </div>
  )
}

export default News
