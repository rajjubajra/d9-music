import ReactAudioPlayer from 'react-audio-player';


function AudioList(props) {

  //console.log("test - data", props.data);

  return (
    props.data.map(item =>{
      const {title, url:{url}} = item;
      return <li>
        <h3>{title}</h3>
        <ReactAudioPlayer
            src={url}
            controls
          />
      </li>
    })
  )
}

export default AudioList
