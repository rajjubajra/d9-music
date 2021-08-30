import React,{useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import ImageOnload from '../components/ImageOnload';

function Homepage() {

  //const dispatch = useDispatch();
  const data = useSelector(state => state.reducerHomePage.home_data.data);
  const included = useSelector(state => state.reducerHomePage.home_data.included);
  const length = useSelector(state => state.reducerHomePage.home_dataLength );
  const fetched = useSelector(state => state.reducerHomePage.home_fetched );


  console.log("one",data);
  console.log("two",included);
  console.log("homepage",fetched, "length", length);

  const [arr, setArr] = useState([]);

  


  // useEffect(()=>{
  //   console.log("action is runing");
  //     dispatch(actionHome());
  // },[dispatch])

  useEffect(()=>{
    const newArr = [];
    fetched
    && data.map(item => {
      const {attributes:{title, field_home_body}} = item;
      const image = included[1].attributes.uri.url;
      const imageWidth = included[0].relationships.field_media_image.data.meta.width;
      const imageHeight = included[0].relationships.field_media_image.data.meta.height;
        newArr.push({title: title, body: field_home_body.value, image: image, image_height: imageHeight, image_width: imageWidth})
    })
    setArr(newArr);
  },[data, fetched, included]);

  console.log("new array ",arr);


  return (
    <div>
        {
        arr.length > 0 && arr.map(item=>{
          return <div>
            <h1 className="text-2xl">{item.title}</h1>
            <div>
              <ImageOnload 
              height={item.image_height}
              width={item.image_width}
              cssClass="w-60"
              src={item.image} 
              alt="Homepage" 
              />
            </div>
            <div>
              <div dangerouslySetInnerHTML={{__html: item.body }}></div>
            </div>
          </div>
        })
      }
        
    </div>
  )
}

export default Homepage
