import React,{useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import ImageOnload from '../components/ImageOnload';
import BtnReadMore from '../components/Buttons/BtnReadMore';

function Homepage() {

  const data = useSelector(state => state.reducerHomePage.home_data.data);
  const included = useSelector(state => state.reducerHomePage.home_data.included);
  const length = useSelector(state => state.reducerHomePage.home_dataLength );
  const fetched = useSelector(state => state.reducerHomePage.home_fetched );


  console.log("one",data);
  console.log("two",included);
  console.log("homepage",fetched, "length", length);

  const [arr, setArr] = useState([]);


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
    <div className="w-full max-w-screen-xl m-auto p-10">      
        { fetched &&
          arr.map(item => {
            return <div key={item.id} className="grid md:grid-cols-12 w-full md:h-screen">
                  <div className="md:col-span-2 relative md:order-1 order-2">
                    <div className="md:absolute md:bottom-52">
                      <h2 className="lg:text-6xl md:text-5xl font-extralight md:transform md:-rotate-90 mt-5 tracking-wider uppercase">
                      YW4 Music Three</h2>
                    </div>
                  </div>

                  <div className="md:col-span-4 p-10 md:order-2 order-3 font-extralight">
                    <div dangerouslySetInnerHTML={{__html: item.body }} />
                    <div className="mt-5"><BtnReadMore link="#" /></div>
                  </div>
                  <div className="md:col-span-6 relative md:order-3 order-1">
                    <div>
                      <ImageOnload 
                        cssClass="h-40 md:h-screen px-10 md:py-40 w-full object-cover"
                        src={item.image} 
                        alt="Homepage" />
                    </div>
                  </div>
              </div>
          })
        } 
      </div>
  )
}

export default Homepage