import React,{useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import ImageOnload from '../components/ImageOnload';
import BtnReadMore from '../components/Buttons/BtnReadMore';

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
    <div className="w-full min-h-screen flex align-middle">

      {
        arr.length > 0 &&
        arr.map((item)=>{
        return <div key={item.id} className="w-full p-5 max-w-screen-xl m-auto">

          <div className="grid gap-3 
          md:grid-cols-2 md:grid-rows-2 
          lg:grid-cols-3 lg:grid-rows-1">
            <div className="px-10">
              <h1 className="text-5xl font-thin text-right py-5
              md:w-1/2 md:transform md:-rotate-90 md:relative md:top-24 md:left-1/4 uppercase tracking-widest">
                YW4 Music One
              </h1>
              </div>
            <div className="px-10">
              <div className="py-5 md:flex md:justify-end lg:w-2/3">
                <ImageOnload 
                  height={item.image_height}
                  width={item.image_width}
                  src={item.image} 
                  alt="Homepage"  
                cssClass="h-64 w-full md:h-96 md:w-64 object-cover" />
              </div>
            </div>
            <div className="px-10 
            md:col-span-2 md:flex md:justify-end 
            lg:col-auto">
              <div className="md:w-1/2 lg:w-full pb-8 text-right">
                <h2 className="text-2xl">{item.title}</h2>
                <div  className="font-extralight my-5 text-right" 
                  dangerouslySetInnerHTML={{__html: item.body}} />
                <div className="md:text-right md:mt-10">
                  <BtnReadMore link={item.link} />
                </div>
            </div>
            </div>
          </div>
        </div>
        })
      }
    
    </div>
  )
}

export default Homepage