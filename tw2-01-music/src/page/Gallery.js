import React,{useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionGallery} from '../redux/actions';

function Gallery() {

  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(actionGallery());
  },[dispatch])

  const state = useSelector(state => state.reducerGallery.gallery_data.data);
  const inc_data = useSelector(state => state.reducerGallery.gallery_data.included);
  const length = useSelector(state => state.reducerGallery.gallery_dataLength);

  const [arr, setArr] = useState([]);

  console.log("gallery state", state, "include gallery", inc_data,"length", length);

  useEffect(()=>{
    const data = [];
    console.log("DATA",data);
    length > 0 &&
    state.map(item => {
      const {attributes:{title, field_gallery_body}} = item;
      console.log("loop 1");

      inc_data.map(inc => {
        if(inc.type === 'file--file'){
          const {attributes: {uri}} = inc;
          console.log(data.some(function(i){return i['id'] === inc.id}));
          data.some(function(i){return i["id"] !== inc.id}) && console.log("loop 2");
          /** in order to avoide repeat loop */
          return data.some(function(i){return i["id"] !== inc.id}) &&
          data.push({id: inc.id, title: title, body: field_gallery_body.processed, image: uri.url})
        }
      })
    })
    setArr(data);
    console.log("loop 3")
  },[inc_data, length, state])

  console.log("gallery arr",arr);
  
  
  return (
    <div>
      <h1>Gallery Page</h1>
    </div>
  )

}

export default Gallery
