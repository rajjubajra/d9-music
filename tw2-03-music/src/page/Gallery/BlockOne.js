import React from 'react'
import ImageOnload from '../../components/ImageOnload';

function BlockOne({image, title}) {
  return (
    <div className="col-span-8
        lg:col-span-2 lg:row-span-2
        md:col-span-2 md:row-span-3">
          <div>
            <ImageOnload 
            cssClass="md:h-96 md:w-3/4 object-cover
            h-40 w-full p-3 md:p-0 border border-gray-900"
            src={image} />
            <div className="text-xs uppercase">{title}</div>
          </div>
    </div>
  )
}

export default BlockOne
