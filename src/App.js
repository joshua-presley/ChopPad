import logo from './logo.svg';
import './App.css';
import Container from './Components/container'
import React from 'react';
import Grid from './Components/grid'
function App() {
  return (
    <div className="App">
      <Grid newMaterialContainer={<Container name = 'test' position = '0'/>}/>
    </div>
  );
}

export default App;
