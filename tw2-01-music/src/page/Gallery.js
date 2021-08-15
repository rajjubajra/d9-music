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

  console.log("gallery state", state, "include gallery", inc_data,"length", length);
  
  return (
    <div>
      <h1>Gallery Page</h1>
    </div>
  )

}

export default Gallery
