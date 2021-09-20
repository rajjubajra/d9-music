import React,{useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ImageOnload from '../components/ImageOnload';
import {actionGallery} from '../redux/actions';
import Gear from './Gear';

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
    <div className="max-w-screen-xl m-auto p-10">
    <div className="grid grid-cols-12 grid-flow-row gap-6 ">
      {
        arr.map(item=>{
         // return(<Gear title={item.title} src={item.image} text={item.body} />
            return <div key={item.id} className="md:col-span-4 col-span-12">
                <div>
                  <ImageOnload 
                  cssClass="max-w-md"
                  src={item.image} 
                  alt="gallery" />
                </div>
                <h2 className="text-2xl font-light">{item.title}</h2>
                <div className="text-sm tracking-wide" 
                dangerouslySetInnerHTML={{__html: item.body}} />
            </div> 
        })
      }
    </div>
    </div>
  )

}

export default Gallery
