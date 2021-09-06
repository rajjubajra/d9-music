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
            ref={(element) => { console.log("AUDIO ELEM play",element.onPlay,"on ended", element.onEnded, "element", element) }}
          />
      </li>
    })
  )

}

export default AudioList
