import logo from './logo.svg';
import './App.css';
import Container, { NewMaterial } from './Components/container'
import React from 'react';
import Grid from './Components/grid'


function App() {

  return (
    <div className="App">
      <Grid newMaterialContainer={<NewMaterial/>}/>
    </div>
  );
}

export default App;
