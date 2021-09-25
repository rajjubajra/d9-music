

function Logo() {

  const url = ['./yellow-website-square150x150.png', './../yellow-website-square150x150.png'];

  //console.log(window.location.href);

  const img = window.location.href === 'https://yellow-website.com/d9-music/themes/tw2-01/form/fansclub' ? url[1] : url[0]; 

  return (
    <div>
      <img 
        width='50px'
        height='50px'
        src={img}
        alt="logo" />
    </div> 
  )
}

export default Logo