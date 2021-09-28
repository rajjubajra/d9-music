import React,{useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionGallery} from '../redux/actions';
import BlockAll from './Gallery/BlockAll';
import BlockOne from './Gallery/BlockOne';


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
    length > 0 &&
    state.map(item => {
      const {attributes:{title, field_gallery_body}} = item;
      console.log("loop 1");

      inc_data.map(inc => {
        if(inc.type === 'file--file'){
          const {attributes: {uri}} = inc;  
          /** in order to avoide repeat loop */
          const hasId = data.some(key => key.id === inc.id);
          //console.log(hasId);
          !hasId && data.push({
            id: inc.id, 
            title: title, 
            body: field_gallery_body.processed, 
            image: uri.url})
        }
      })
    })
    setArr(data);
  },[inc_data, length, state])

  console.log("gallery arr",arr);
  
  
  return (
    <div className="w-full max-w-screen-xl m-auto p-10">
      <div className="grid grid-cols-8 lg:grid-row-2 md:grid-rows-3 gap-4 font-extralight">
      {
        arr.map((item, index)=>{
          return index === 0 
          ? <BlockOne image={item.image} title={item.title} />   
          : <BlockAll image={item.image} title={item.title} />
        })
      }
      </div>
    </div>
  )

}

export default Gallery
