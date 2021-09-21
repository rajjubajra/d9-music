import React, {useEffect} from 'react';
import Loadable from 'react-loadable';
import LoadingBar from './components/LoadingBar';
import {useDispatch} from 'react-redux';
import {actionNav, actionHome} from './redux/actions';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const MenuBar01 = Loadable({
  loader: () => import ('./components/MainMenu01/MenuBar01'),
  loading: LoadingBar,
});

const Homepage = Loadable({
  loader: () => import('./page/Homepage'),
  loading: LoadingBar,
})

const Tour = Loadable({
  loader: () => import('./page/Tour'),
  loading: LoadingBar,
})

const About = Loadable({
  loader: () => import('./page/About'),
  loading: LoadingBar,
})

const Gallery = Loadable({
  loader: () => import('./page/Gallery'),
  loading: LoadingBar,
})

const Music = Loadable({
  loader: () => import('./page/Music'),
  loading: LoadingBar,
})

const Contact = Loadable({
  loader: () => import('./page/Contact'),
  loading: LoadingBar,
})

const News = Loadable({
  loader: () => import('./page/News'),
  loading: LoadingBar,
})



function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(actionNav());
      dispatch(actionHome());
  },[dispatch])
  
  const baseurl = `/d9-music/themes/tw2-02`
  useEffect(() => console.log("Refresh"));

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <MenuBar01 />
          <Switch>
            <Route exact path={`${baseurl}/`} component={Music} />
            <Route exact path={`${baseurl}/about`} component={About} />
            <Route exact path={`${baseurl}/music`} component={Music} />
            <Route exact path={`${baseurl}/music/:id`} component={Music} />
            <Route exact path={`${baseurl}/form/fansclub`} component={Contact} />
          </Switch>  
          
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;