import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {action} from '../redux/actions'


function Home() {


  const distpach = useDispatch();


  useEffect(()=>{
      distpach(action());
  },[distpach])


  return (
    <div>
      Music Home Page Test page
    </div>
  )
}

export default Home
