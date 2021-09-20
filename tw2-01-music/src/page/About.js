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
        arr.map(item => {
          return <div className="grid grid-cols-12 gap-4
          max-w-screen-xl m-auto p-10 font-extralight tracking-wide">

          <div className="p-10 col-span-12">
            <h1 className="text-4xl">{ item.title }</h1>
          </div>
      
          <div className="col-span-12 md:col-span-2 mt-12">
                <ImageOnload 
                cssClass="w-full md:h-96 h-40 object-cover"
                src={item.image}
                alt="about" 
                />
          </div>

          <div className="col-span-12 md:col-span-10 p-2 md:p-10">
            <div className="tracking-wider" dangerouslySetInnerHTML={{__html: item.body}} />
          </div>
        </div>
        })
      }
    </div>
  )
}

export default About
