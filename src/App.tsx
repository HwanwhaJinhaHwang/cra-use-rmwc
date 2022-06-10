import React from 'react';
import './App.css';
import Dropdown from './components/dropdown';

const App = () => (
  <div className="App">
    <Dropdown options={['Cookies', 'Pizza', 'Icecream']} />
  </div>
);

export default App;
