import React from 'react';
import './app.css';

import Menu from './components/Menu/Index'
import Home from './pages/home/Index'
import Routes from '../src/routes/index'

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes />
    </div>
  );
}

export default App;
