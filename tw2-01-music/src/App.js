import React, {useEffect} from 'react';
import './App.css';
import Homepage from './page/Homepage';
import {useDispatch} from 'react-redux';
import {action} from './redux/actions';
import MainNav from './components/MainNav';
import {BrowserRouter, Switch, Route} from 'react-router-dom';



function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(action());
  },[dispatch])



  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <MainNav />
          <Homepage />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;