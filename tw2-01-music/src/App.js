import React, {useEffect} from 'react';
import Loadable from 'react-loadable';
import LoadingBar from './components/LoadingBar';
import Homepage from './page/Homepage';
import Tour from './page/Tour';
import About from './page/About';
import Gallery from './page/Gallery';
import Music from './page/Music';
import Contact from './page/Contact';
import News from './page/News';
import {useDispatch} from 'react-redux';
import {actionNav, actionHome} from './redux/actions';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const MenuBar = Loadable({
  loader: () => import ('./components/MainMenu/MenuBar'),
  loading: LoadingBar,
});

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(actionNav());
      dispatch(actionHome());
  },[dispatch])
  
  const baseurl = `/d9-music/themes/tw2-01`
  useEffect(() => console.log("Refresh"));

  

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <MenuBar />
          <Switch>
            <Route exact path={`${baseurl}/`} component={Homepage} />
            <Route exact path={`${baseurl}/tour`} component={Tour} />
            <Route exact path={`${baseurl}/news`} component={News} />
            <Route exact path={`${baseurl}/about`} component={About} />
            <Route exact path={`${baseurl}/music`} component={Music} />
            <Route exact path={`${baseurl}/gallery`} component={Gallery} />
            <Route exact path={`${baseurl}/form/contact`} component={Contact} />
          </Switch>  
          
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;