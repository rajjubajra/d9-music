import React,{useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionAbout} from '../redux/actions';
import {AiOutlineMail} from 'react-icons/ai';
import {FiPhoneCall} from 'react-icons/fi';


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
        <div className="relative w-full max-w-screen-xl m-auto p-10">
          {
            length > 0 &&
            arr.map((item)=>{      
            return <>

              <div className="grid grid-flow-row gap-10 relative z-10">
                        <div className="text-6xl font-extralight">About</div>
                        <div className="text-2xl font-extralight tracking-wider">
                        <div dangerouslySetInnerHTML={{__html: item.body.substring(0,250)}} />
                        </div>
                        <div className="tracking-wider">
                          <div className="font-light text-sm mb-10" dangerouslySetInnerHTML={{__html: item.body}} />
                        </div>

                      <div className="text-6xl">

                          {/** ROW THREE */}
                      <div>
                        <div className="grid
                        grid-flow-row gap-10
                        md:grid-cols-2 md:grid-row-1 font-extralight border-t border-gray-300 pt-10">
                          <div>
                            <h1 className="text-3xl tracking-wider ">YW MUSIC TWO</h1>
                          </div>
                          <div>
                            <div className="w-full tracking-wider md:flex md:flex-col  text-base md:items-end">
                              
                                <div className="flex w-full">
                                  <div className="mt-1 px-2"><AiOutlineMail /></div>
                                  <div>email@example.com</div> 
                                </div>   
                                <div className="flex w-full">
                                  <div className="mt-1 px-2"><FiPhoneCall /></div>
                                  <div>(UUU) 5555-5555</div>
                                </div>   
                            </div>
                          </div>
                          
                        </div>
                      </div>


                      </div>
                      </div>

              <div className="w-full h-screen absolute top-0 
              origin-center transform rotate-90 md:rotate-0 
              text-9xl md:text-9xl md:text-16xl text-gray-100 z-0
              flex justify-center items-center font-semibold">About</div>

            </>    
            })
          }
        </div>
    

  )
}

export default About


{/* <div>
      {
        length > 0 &&
        arr.map(item => {
          return <div className="grid grid-cols-12 gap-4
          max-w-screen-xl m-auto p-10 font-extralight tracking-wide">

          <div className="p-10 col-span-12">
            <h1 className="text-4xl">{ item.title}</h1>
          </div>
      
          <div className="col-span-2 mt-12">
                <ImageOnload 
                cssClass="w-full h-96 object-cover"
                src={item.image}
                alt="about" 
                />
          </div>

          <div className="col-span-10 p-10">
            <div className="tracking-wider" dangerouslySetInnerHTML={{__html: item.body}} />
          </div>
        </div>
        })
      }
    </div> */}
