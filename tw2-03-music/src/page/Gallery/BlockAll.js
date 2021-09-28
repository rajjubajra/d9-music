import React from 'react'
import ImageOnload from '../../components/ImageOnload';

function BlockAll({image, title}) {
  return (
    <div className="col-span-8 lg:col-span-2 md:col-span-3">
          <div>
              <ImageOnload
            cssClass="border border-gray-900 h-44 object-cover"
            src={image} />
          </div>
          <div className="text-xs uppercase">{title}</div>
        </div>
  )
}

export default BlockAll
