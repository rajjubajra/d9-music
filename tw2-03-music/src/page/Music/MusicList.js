import React from 'react';
import BtnReadMore from '../../components/Buttons/BtnReadMore';
import ImageOnload from '../../components/ImageOnload';

function MusicList({listdata}) {
  return (
    <div className="max-width-screen-xl m-auto p-10 
                    grid grid-cols-1 grid-flow-row gap-6 
                    md:grid-cols-2 lg:grid-cols-3
                    font-extralight">
    {
      listdata.length > 0 
      && listdata.map( (item,index) => {
        return <div className="relative w-full lg:max-w-screen-sm" key={item.id}>
          <div>
            <h3 className="text-xl lg:text-2xl  py-4">{item.title}</h3>
          </div>
          <div>
            {
              item.image && <ImageOnload 
              cssClass="w-full h-64 object-cover" 
              src={item.image[0].url} 
              alt="Cover"
              />
            }
          </div>
          <div className="py-4 mb-5">
            <div className="text-sm tracking-wide" dangerouslySetInnerHTML={{__html: item.body.substring(0,400)}} />
          </div>
          <div className="absolute bottom-0">
            <BtnReadMore link={`/d9-music/themes/tw2-01/music/${index}`} />
          </div>

      </div>
      })
    }
    </div>
  )
}

export default MusicList
