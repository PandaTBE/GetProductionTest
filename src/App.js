import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { store } from './components/redux/redux-store';
import RouteComponent from './components/routeComponent/routeComponent';


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouteComponent />
      </BrowserRouter>
    </Provider>

  )
}

export default App;
