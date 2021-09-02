import ReactAudioPlayer from 'react-audio-player';


function AudioList(props) {

  //console.log("test - data", props.data);

  return (
    props.data.map(item =>{
      const {title, url} = item;
      return <li>
        <h3>{title}</h3>
        <div>Audio link: {url}</div>
        <div>
        <ReactAudioPlayer
            src={url}
            controls
          />
        </div>
      </li>
    })
  )

}

export default AudioList
