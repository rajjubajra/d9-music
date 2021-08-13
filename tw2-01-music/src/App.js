import Home from './Pages/Home';
import {Provider} from 'react-redux';
import {store} from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
