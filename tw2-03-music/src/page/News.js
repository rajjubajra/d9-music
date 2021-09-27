import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionNews} from '../redux/actions';
import NewsList02 from './News/NewsList02';



function News() {

  const dispatch = useDispatch();
  const data = useSelector(state => state.reducerNews.news_data.data);
  const inc_data = useSelector(state => state.reducerNews.news_data.included);
  const length = useSelector(state => state.reducerNews.news_dataLength);

  const [arr, setArr] = useState([]);

  console.log("news",data,"news length", length, "arr", arr);

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

  const dateFormat = (date) => {
    const monthArr = ["","Jan","Feb","Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const dt = new Date(date);
    return dt.getDate()+" "+ monthArr[dt.getMonth()]+ ", "+ dt.getFullYear()
  }
  
  return (
    <div className="max-w-screen-xl m-auto p-10">
      <div className="w-full max-w-screen-xl m-auto p-10">
        <h2 className="text-3xl">News</h2>
        {
          arr.length > 0 &&
          arr.map((item) =>{
                return <NewsList02 
                          title={item.title} 
                          date={dateFormat(item.data)}
                          image={item.image} 
                          body={item.body}
                          article_id={item.incId} /> })
        }
      </div>    
    </div>
  )
}

export default News
