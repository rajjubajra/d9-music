import React from 'react';
import ImageOnload from '../../components/ImageOnload';

function MusicList({listdata}) {
  return (
    <div className="p-10 grid grid-cols-3 grid-rows-3 gap-6 
                    font-extralight">
    {
      listdata.length > 0 && listdata.map( item => {
        return <div className="w-full
                lg:max-w-screen-sm">
        <div>
          <h3 className="text-3xl py-4">{item.title}</h3>
        </div>
        <div>
          {
            item.image && <ImageOnload cssClass="w-full h-64 object-cover" src={item.image[0].url} />
          }
          
        </div>
        <div className="py-4">
          <div dangerouslySetInnerHTML={{__html: item.body.substring(0,400)}} />
        </div>
      </div>
      })
    }
    </div>
  )
}

export default MusicList
