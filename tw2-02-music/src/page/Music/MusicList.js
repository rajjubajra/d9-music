import React,{useState} from 'react';
import {GrNext, GrPrevious} from 'react-icons/gr';
import {AiOutlineMail} from 'react-icons/ai';
import {FiPhoneCall} from 'react-icons/fi';
import BtnReadMore from '../../components/Buttons/BtnReadMore';
import ImageOnload from '../../components/ImageOnload';

function MusicList({listdata}) {

  const [currnetPage, setCurrentPage] = useState(0);

  return (

    <div className="relative grid grid-flow-row gap-10 max-w-screen-xl m-auto p-10">

    {/** ROW ONE */}
    <div>
    <div className="relative grid
    gird-cols-1 grid-flow-row 
    lg:grid-cols-3 lg:grid-rows-2 gap-6
    md:grid-cols-2 md:grid-rows-3">
    { listdata.length > 0 && 
      listdata.map( (item, index) => {
        return index < 6  &&
          <div key={item.id} className="relative">
                  <h2 className="absolute bottom-6 left-0 p-1 font-extralight bg-gray-200 bg-opacity-40">{item.title}</h2>
                  <ImageOnload 
                  cssClass="w-full"
                  height={item.image_height}
                  width={item.image_width}
                  src={item.image[0].url} 
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
          <h2 className="text-3xl font-extralight pb-10">{listdata.length > 0 && 
            listdata[currnetPage].title}</h2>
          <div>{listdata.length > 0  && 
            <div  className="font-extralight tracking-wider mb-10"
                  dangerouslySetInnerHTML={{__html: 
                  listdata[currnetPage].body.substring(0,500)}} /> }
          </div>
          <div 
          className="absolute bottom-0">
            <BtnReadMore link={`/d9-music/themes/tw2-02/music/${currnetPage}`} />
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
            className={`${listdata.length - 1 === currnetPage && 'hidden'} flex cursor-pointer`}
            onClick={() => setCurrentPage(currnetPage + 1 )}>
                <div>Next</div>
                <div className="mt-1 px-2"><GrNext /></div>
            </div>
          </div>
        </div>
        
    {/*** Image Block ****/}
        <div className="order-1 md:order-2">
          {listdata.length > 0  && <ImageOnload 
          cssClass="w-full h-5/6 object-cover"
          src={listdata[currnetPage].image[0].url} 
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



  )
}

export default MusicList