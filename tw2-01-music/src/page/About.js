import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionAbout} from '../redux/actions';


function About() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(actionAbout());
  },[dispatch])

  const state = useSelector(state => state.reducerAbout.about_data.data);
  const inc_data = useSelector(state => state.reducerAbout.about_data.included);

  console.log('about data', state, "about lng", inc_data);

  return (
    <div>
      <h1>About Page</h1>
    </div>
  )
}

export default About
