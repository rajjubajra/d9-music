


function AudioList(props) {

  //console.log("test - data", props.data);

  return (
    props.data.map(item =>{
      const {title, url:{url}} = item;
      return <li>
        <h3>{title}</h3>
        <figure>
          <figcaption>{title}</figcaption>
            <audio
              controls
              src={url}>
                Your browser does not support the
            <code>audio</code> element.
            </audio>
        </figure>
      </li>
    })
  )
}

export default AudioList