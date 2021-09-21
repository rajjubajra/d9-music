import React,{useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import ImageOnload from '../components/ImageOnload';
import {GrNext, GrPrevious} from 'react-icons/gr';
import {AiOutlineMail} from 'react-icons/ai';
import {FiPhoneCall} from 'react-icons/fi';
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
  const [currnetPage, setCurrentPage] = [0];

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


    <div className="relative grid grid-flow-row gap-10 max-w-screen-xl m-auto p-10">

        {/** ROW ONE */}
        <div>
        <div className="relative grid
        gird-cols-1 grid-flow-row 
        lg:grid-cols-3 lg:grid-rows-2 gap-6
        md:grid-cols-2 md:grid-rows-3">
        { arr.length > 0 && 
          arr.map( (item, index) => {
            return index < 6  &&
              <div key={item.id} className="relative">
                      <h2 className="absolute bottom-6 left-0 p-1 font-extralight bg-gray-200 bg-opacity-40">{item.title}</h2>
                      <ImageOnload 
                      cssClass="w-full"
                      height={item.image_height}
                      width={item.image_width}
                      src={item.image} 
                      alt="Homepage" />
              </div>    
          })
        }
        </div>
        </div>





        {/** ROW TWO */}
        <div>
        <div className="grid grid-flow-row h-3/4 min-h-full
        md:grid-cols-2 md:grid-rows-1 gap-10">

        {/** TEXT BLOCK */}        
            <div className="relative order-2 md:order-1">
              <h2 className="text-3xl font-extralight pb-10">{fetched && arr[currnetPage].title}</h2>
              <div>{fetched && 
                <div  className="font-extralight tracking-wider"
                      dangerouslySetInnerHTML={{__html: 
                      arr[currnetPage].body.substring(0,500)}} /> }
              </div>
            </div>

        {/** NEXT AND PREV BUTTONS */}
            <div className="order-3">   
                <div className="flex mt-8 w-full font-extralight">
                <div 
                className={ `${currnetPage === 0 && 'hidden'} flex cursor-pointer`}
                onClick={() => setCurrentPage(currnetPage - 1)}>
                    <div className="mt-1 px-2"><GrPrevious /></div>
                    <div>Prev</div>
                </div>
                <div className="px-10">{currnetPage + 1}</div>
                <div 
                className={`${length - 1 === currnetPage && 'hidden'} flex cursor-pointer`}
                onClick={() => setCurrentPage(currnetPage + 1 )}>
                    <div>Next</div>
                    <div className="mt-1 px-2"><GrNext /></div>
                </div>
              </div>
            </div>
            
        {/*** Image Block ****/}
            <div className="order-1 md:order-2">
              {fetched && <ImageOnload 
              cssClass="w-full h-5/6 object-cover"
              src={arr[currnetPage].image} 
              alt="cover" /> }
            </div>

        </div>
        </div>




        {/** ROW THREE */}
        <div>
          <div className="grid
          grid-flow-row gap-10
          md:grid-cols-2 md:grid-row-1 font-extralight border-t border-gray-300 pt-10">
            <div>
              <h1 className="text-3xl tracking-wider ">YW MUSIC TWO</h1>
            </div>
            <div>
              <div className="w-full tracking-wider md:flex md:flex-col  md:items-end">
                
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


    
    // <div className="w-full min-h-screen flex align-middle">

    //   {
    //     arr.length > 0 &&
    //     arr.map((item)=>{
    //     return <div key={item.id} className="w-full p-5 max-w-screen-xl m-auto">

    //       <div className="grid gap-3 
    //       md:grid-cols-2 md:grid-rows-2 
    //       lg:grid-cols-3 lg:grid-rows-1">
    //         <div className="px-10">
    //           <h1 className="text-5xl font-thin text-right py-5
    //           md:w-1/2 md:transform md:-rotate-90 md:relative md:top-24 md:left-1/4 uppercase tracking-widest">
    //             YW4 Music One
    //           </h1>
    //           </div>
    //         <div className="px-10">
    //           <div className="py-5 md:flex md:justify-end lg:w-2/3">
    //             <ImageOnload 
    //               height={item.image_height}
    //               width={item.image_width}
    //               src={item.image} 
    //               alt="Homepage"  
    //             cssClass="h-64 w-full md:h-96 md:w-64 object-cover" />
    //           </div>
    //         </div>
    //         <div className="px-10 
    //         md:col-span-2 md:flex md:justify-end 
    //         lg:col-auto">
    //           <div className="md:w-1/2 lg:w-full pb-8 text-right">
    //             <h2 className="text-2xl">{item.title}</h2>
    //             <div  className="font-extralight my-5 text-right" 
    //               dangerouslySetInnerHTML={{__html: item.body}} />
    //             <div className="md:text-right md:mt-10">
    //               <BtnReadMore link={item.link} />
    //             </div>
    //         </div>
    //         </div>
    //       </div>
    //     </div>
    //     })
    //   }
    
    // </div>
  
  
  )
}

export default Homepage