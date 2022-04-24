import logo from './logo.svg';
import './App.css';
import Container, { NewMaterial } from './Components/container'
import React from 'react';
import Grid from './Components/grid'


function App() {

  const items = [new NewMaterialItem('test', '1'), new NewMaterialItem('test1', '2'), new NewMaterialItem('test2', '3')]
  return (
    <div className="App">
      <Grid newMaterialContainer={<NewMaterial title = 'New Material' listOfItems = {items}/>}/>
    </div>
  );
}

export default App;
