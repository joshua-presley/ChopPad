import logo from './logo.svg';
import './App.css';
import Container, { NewMaterial, NewMaterialItem } from './Components/container'
import React from 'react';
import ReactDOM from 'react'
import Grid from './Components/grid'


function App() {

  const items = [new NewMaterialItem('test', 'AABA'), new NewMaterialItem('test1', 'ABCD'), new NewMaterialItem('test2', 'ABA')]
  return (
    <div className="App">
      <Grid newMaterialContainer={<NewMaterial title = 'New Material' listOfItems = {items}/>}/>
    </div>
  );
}


export default App;
