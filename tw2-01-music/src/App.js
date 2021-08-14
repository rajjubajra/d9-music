import React, {useEffect} from 'react';
import Homepage from './page/Homepage';
import Tour from './page/Tour';
import About from './page/About';
import Gallery from './page/Gallery';
import Music from './page/Music';
import Contact from './page/Contact';
import News from './page/News';
import {useDispatch} from 'react-redux';
import {action} from './redux/actions';
import MainNav from './components/MainNav';
import {BrowserRouter, Switch, Route} from 'react-router-dom';



function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(action());
  },[dispatch])

  const baseurl = `https://yellow-website.com/d9-music/d9-music`



  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <MainNav />
          <Switch>
            <Route path={`${baseurl}`} component={Homepage} />
            <Route path={`${baseurl}/tour`} component={Tour} />
            <Route path={`${baseurl}/news`} component={News} />
            <Route path={`${baseurl}/about`} component={About} />
            <Route path={`${baseurl}/music`} component={Music} />
            <Route path={`${baseurl}/gallery`} component={Gallery} />
            <Route path={`${baseurl}/contact`} component={Contact} />
          </Switch>
          
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;