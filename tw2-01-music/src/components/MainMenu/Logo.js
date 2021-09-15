


function Logo() {


  const url = ['./yellow-website-square150x150.png', './../yellow-website-square150x150'];

  console.log(url);

  return (
    <div>
      <img 
        width='50px'
        height='auto'
        src={url[0]}
        alt="logo" />
    </div> 
  )
}

export default Logo