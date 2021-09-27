import BtnReadMore from '../../components/Buttons/BtnReadMore';
import ImageOnload from '../../components/ImageOnload';




function NewsList02({image,article_id,date, title, body, readmore, index}) {


  return (
      <div>
          <div className="grid md:grid-cols-12 my-10 font-extralight">
                    <div className="col-span-3">
                      <div className="py-5 md:pr-5 m-5 md:border-r border-gray-400">
                        <ImageOnload src={image} alt="news" />
                      </div>
                    </div>
                    <div className="col-span-9">
                      <div>
                        <p className="text-xs">{article_id.substring(0,5)}...</p>
                      </div>
                      <div>{date}</div>
                      <div><h3 className="text-2xl my-2">{title}</h3></div>
                      <div>
                        <div dangerouslySetInnerHTML={{__html: body.substring(0, 200)}} />
                      </div>
                      <div className="my-5">
                        <div onClick={() => readmore(index, true)}><BtnReadMore link="#" /></div>
                      </div>
                    </div>
              </div>
        


        {/** NEWS DETAIL */}
        {/* <div className={`${detail === '' ? 'hidden' : 'block'}`}>
            <div 
            onClick={() => setDetail('')}
            className="w-full flex justify-end p-5 cursor-pointer" 
            title="close"><GrClose />
            </div>
            <NewsDetails02 index={detail} />
        </div> */}
      
    </div>
  )
}

export default NewsList02
