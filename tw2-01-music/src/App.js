import React, {useEffect} from 'react';
import './App.css';
import Homepage from './page/Homepage';
import {useDispatch} from 'react-redux';
import {action} from './redux/actions';
import MainNav from './components/MainNav';



function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(action());
  },[dispatch])



  return (
    <div className="App">
      <header className="App-header">
        <MainNav />
        <Homepage />
      </header>
    </div>
  );
}

export default App;