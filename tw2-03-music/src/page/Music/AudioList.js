import AudioPlayer from "./__AudioPlayer";



function AudioList(props) {

  //console.log("test - data", props.data);

  return (
    
    props.data.map(item => {
      const {title, url:{url}} = item;
      return <div>
        <h3>{title}</h3>
        <AudioPlayer url={url} />
      </div>
    })
    
  )
}

export default AudioList