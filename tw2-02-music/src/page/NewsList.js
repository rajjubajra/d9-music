import React from 'react';
import BtnReadMore from '../components/Buttons/BtnReadMore';

function NewsList({listdata}) {
  return (
    <div>
    {
      listdata.length > 0 && listdata.map( item => {
        return <div key={item.id} className="grid grid-rows-1 p-10 font-extralight">
          <div className="text-center my-4">{item.article_id}</div>
          <div className="text-center">{item.date}</div>
          <div className="text-center">
            <h2 className="text-2xl my-4">{item.title}</h2>
          </div>
          <div><div  className="text-center my-4" dangerouslySetInnerHTML={{__html: item.body.substring(0,300)}} /></div>
          <div className="text-center"><BtnReadMore link={`#`} /></div>
        </div>
      })
    }
    </div>
  )
}

export default NewsList
