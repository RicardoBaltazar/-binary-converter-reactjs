import React from 'react';
import './app.css';

import Menu from './components/Menu/Index'
import Home from './pages/home/Index'

function App() {
  return (
    <div className="App">
      <Menu />
      <Home />
    </div>
  );
}

export default App;
