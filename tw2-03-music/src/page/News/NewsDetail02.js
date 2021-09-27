import ImageOnload from '../../components/ImageOnload';
import {GrClose} from 'react-icons/gr';


function NewsDetail02({ date, title, image, body, readmore}) {


  return (
    <div className="w-full max-w-screen-xl m-auto font-extralight">

      <div 
      className="w-full flex justify-end  cursor-pointer" 
      title="close"
      onClick={() => readmore(0, false)}>
        <GrClose />
        </div>
  
      <div className="my-8 flex justify-end">
        {date}
      </div>

      <div>
        <h2 className="text-4xl my-5 tracking-wider">
          {title}</h2>
      </div>

      <div>    
        <ImageOnload 
            cssClass="md:w-1/2 object-cover pr-6 pb-5 pt-5 md:float-left md:border-r border-gray-300 mr-6"
            src={image} 
            alt="news" />
          
        <div className="pl-10 ml-10 border-l-2 border-gray-300" dangerouslySetInnerHTML={{__html: body }} />
      </div>
      
    </div>
  )
}

export default NewsDetail02
