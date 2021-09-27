import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionNews} from '../redux/actions';
import NewsList02 from './News/NewsList02';
import NewsDetail02 from './News/NewsDetail02';



function News() {

  /** fetching data via redux */
  const dispatch = useDispatch();
  const newsdata = useSelector(state => state.reducerNews.news_data);
  const data = useSelector(state => state.reducerNews.news_data.data);
  const inc_data = useSelector(state => state.reducerNews.news_data.included);
  const fetched = useSelector(state => state.reducerNews.news_fetched);


  /** SET compiled and simplified NEW ARRAY */
  const [arr, setArr] = useState([]);
  

  /** VIEW READ-MORE PAGE CONTENTS */
  const [viewReadMore, setViewReadMore] = useState(false);
  const [index, setIndex] = useState(0);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');


  console.log("news",data,"news length", fetched, "arr", arr);

  useEffect(()=>{

    const {data, included} = newsdata; 
    console.log("newsdata: ",data, included);

    const dataArr = [];
   

    async function getImageDetail(imageId){

      const arr1 = [];
      const arr2 = [];
      console.log("Arr1", arr1);

        await included.map(item =>{
        const {relationships:{field_media_image:{data:{id, meta:{alt, height, width, title}}}}} = item;
        imageId === item.id &&
        arr1.push({
          id: item.id, 
          mediaId: id,
          alt: alt,
          height: height,
          width: width,
          imageTitle: title
        })
      });
      return arr1;
    }


    fetched &&
    data.map(item=>{
      const { id, attributes:{title, field_news_body:{processed:body}, field_news_date:date}} = item;
      const { relationships:{field_news_media:{data:{id: imageId}}}} = item;
      /** create new array */
      return dataArr.push({
        id: id, date:date, title:title, body: body, 
        image:[getImageDetail(imageId)]
      });
    });

    console.log("ARRAY ONE", dataArr)

  },[fetched, newsdata])

  /** RUN REDUX ACTION TO LOAD DATA */
  useEffect(()=>{
    dispatch(actionNews());
  },[dispatch])


    /** CREATING NEW 'arr' 
    * - Complied and Simlified Drupal Json data
    * - Stored into  'arr' state 
    */
  useEffect(()=>{
    const newdata = [];
    fetched && 
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
            date: field_news_date, 
            incId: id,
            image: uri.url});
        }
        return setArr(newdata);
      })
    })
  },[data, inc_data, fetched])

  
  /** POPULATING ReadMore Page Components */
  useEffect(()=>{
    setTitle( arr.length > 0 && arr[index].title);
    setImage( arr.length > 0 && arr[index].image);
    setDate( arr.length > 0 && arr[index].date);
    setBody( arr.length > 0 && arr[index].body);
  },[arr, index])

  //console.log("data arr news", arr, "index", index, "view readmore", viewReadMore);
  //console.log(title, date, image , body);

  /** CHANGING DATE  "D MMM, YYYY" FORMATE  */
  const dateFormate = (date) => {
    const monthArr = ["","Jan","Feb","Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const dt = new Date(date);
    return dt.getDate()+" "+ monthArr[dt.getMonth()]+ ", "+ dt.getFullYear()
  }
  
  /** ReadMore function 
   * "onClick" from Child Component "NewsList02" status to "True"
   * "onClick" from Child Component "NewsDetail02" status to "False"
   */
  const readmore = (index, status) => { 
    setViewReadMore(status)
    setIndex(index)
    //console.log("yes it is clicked");
  }

  return (
    <div className="max-w-screen-xl m-auto p-10">
      
      <div className="w-full max-w-screen-xl m-auto p-10">
        <h2 className="text-3xl">News</h2>
        {/** NEWS LIST */}
        {
          arr.length > 0 && !viewReadMore &&
          arr.map((item, index) =>{
                return <NewsList02 
                          title={item.title} 
                          date={dateFormate(item.date)}
                          image={item.image} 
                          body={item.body}
                          article_id={item.incId} 
                          index={index}
                          readmore={readmore}
                          /> })
        }
        {/** NEWS READMORE */}
        { viewReadMore &&
          <NewsDetail02 
            date={dateFormate(date)}
            title={title}
            image={image}
            body={body} 
            readmore={readmore}
          />
        }
      </div>
    </div>
  )
}

export default News