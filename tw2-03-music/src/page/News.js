import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionNews} from '../redux/actions';
import NewsList02 from './News/NewsList02';
import NewsDetail02 from './News/NewsDetail02';



function News() {

  const dispatch = useDispatch();
  const data = useSelector(state => state.reducerNews.news_data.data);
  const inc_data = useSelector(state => state.reducerNews.news_data.included);
  const length = useSelector(state => state.reducerNews.news_dataLength);

  const [arr, setArr] = useState([]);
  const [index, setIndex] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');

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


  // useEffect(()=>{
  //   setTitle(index !== '' && arr[index].title);
  //   setImage(index !== '' && arr[index].image);
  //   setDate(index !== '' && arr[index].data);
  //   setBody(index !== '' && arr[index].body);
  // },[arr, index])

  console.log("data arr news", arr, "index", index);

  const dateFormat = (date) => {
    const monthArr = ["","Jan","Feb","Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const dt = new Date(date);
    return dt.getDate()+" "+ monthArr[dt.getMonth()]+ ", "+ dt.getFullYear()
  }
  
  const readmore = () => (setIndex(index))

  return (
    <div className="max-w-screen-xl m-auto p-10">
      
      <div className="w-full max-w-screen-xl m-auto p-10">
        <h2 className="text-3xl">News</h2>
        {/** NEWS LIST */}
        {
          arr.length > 0 && index === '' &&
          arr.map((item, index) =>{
                return <NewsList02 
                          title={item.title} 
                          date={dateFormat(item.data)}
                          image={item.image} 
                          body={item.body}
                          article_id={item.incId} 
                          index={index}
                          readmore={readmore}
                          /> })
        }
        {/** NEWS READMORE */}
        { index !== '' &&
          <NewsDetail02 
            date={date}
            title={title}
            image={image}
            body={body} 
          />
        }
      </div>    
    </div>
  )
}

export default News