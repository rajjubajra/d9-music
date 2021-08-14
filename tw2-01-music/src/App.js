import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import {store}from './redux/store';
import Homepage from './page/Homepage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
            <Homepage />
        </Provider>
      </header>
    </div>
  );
}

export default App;
