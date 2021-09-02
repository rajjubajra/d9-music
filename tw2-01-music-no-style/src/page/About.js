import React,{useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ImageOnload from '../components/ImageOnload';
import {actionAbout} from '../redux/actions';


function About() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(actionAbout());
  },[dispatch])

  const state = useSelector(state => state.reducerAbout.about_data.data);
  const length = useSelector(state => state.reducerAbout.about_dataLength);
  const inc_data = useSelector(state => state.reducerAbout.about_data.included);

  console.log('about data', state, "about lng", inc_data);

  const [arr, setArr] = useState([]);

  useEffect(()=>{

    const data = [];
    length > 0 &&
    state.map(item => {
      const {attributes:{title, field_about_page}} = item;
      inc_data.map(inc => {
        if(inc.type === 'file--file'){
          const {attributes:{uri}} = inc;
          data.push({title: title, body: field_about_page.processed, image: uri.url})
        }
        return setArr(data);
      })
    })
    
  },[inc_data, length, state])

  console.log("Array about data",arr);

  return (
    <div>
      {
        length > 0 &&
        arr.map(item=>{
          return <div className="m-12">
            <h1 className="text-2xl">{item.title}</h1>
            <div>
              <ImageOnload 
              cssClass="w-56"
              src={item.image}
              alt="about" 
              />
            </div>
            <div dangerouslySetInnerHTML={{__html: item.body}} />
          </div>
        })
      }
    </div>
  )
}

export default About
