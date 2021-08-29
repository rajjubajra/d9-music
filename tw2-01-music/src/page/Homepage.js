import React,{useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import LoadingBar from '../components/LoadingBar';
//import {actionHome} from '../redux/actions';


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
        newArr.push({title: title, body: field_home_body.value, image: image})
    })
    setArr(newArr);
  },[data, fetched, included]);

  console.log("new array ",arr);


  return (
    <div>
        {
        arr.length > 0
        ? arr.map(item=>{
          return <div>
            <h1 className="text-2xl">{item.title}</h1>
            <div><img className="w-60" src={item.image} alt="homepage" /></div>
            <div>
              <div dangerouslySetInnerHTML={{__html: item.body }}></div>
            </div>
          </div>
        })
        : <LoadingBar />
        }
        
    </div>
  )
}

export default Homepage
