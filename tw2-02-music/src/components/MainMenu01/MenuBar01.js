import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Desktop from './Desktop';
import Mobile from './Mobile';

function MenuBar01() {


      const state = useSelector(state => state.reducerNav.nav_data.data);
      const length = useSelector(state => state.reducerNav.nav_dataLength);

      console.log("Menu state: ",state);

      const [menudata, setMenudata] = useState([]);
      
      useEffect(()=>{
    
        fetch('http://localhost:3000/data/mainmenu.json')
        .then(res => res.json())
        .then(data => setMenudata(data))
        .catch(err => console.log(err))
    
      },[]);

      const menu = ["Music", "About", "Contact"];
    
  return (
    <div className="w-full py-3 bg-gray-100">
      
      <div className="md:hidden block">
        <Mobile menudata={menudata} length={length} menu={menu} />
      </div>

      <div className="hidden md:block">
        <Desktop menudata={menudata} length={length} menu={menu} />
      </div>
      
    </div>
  )
}

export default MenuBar01
