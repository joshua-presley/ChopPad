import logo from './logo.svg';
import './App.css';
import Container, { Material, NewMaterialItem } from './Components/container'
import React from 'react';
import ReactDOM from 'react'
import Grid from './Components/grid'


function App() {

  const items = [new NewMaterialItem('test', 'AABA', 'add your notes here'), new NewMaterialItem('test1', 'ABCD', 'add your notes here'), new NewMaterialItem('test2', 'ABA', 'add your notes here')]
  return (
    <div className="App">
      <Grid newMaterialContainer={<Material title = 'New Material' listOfItems = {items}/>} 
            developingMaterialContainer={<Material title = 'Developing Material' listOfItems = {items}/>}
            performanceMaterialContainer={<Material title = 'Performance Material' listOfItems = {items}/>}
            techniqueContainer={<Material title = 'Technique' listOfItems = {items}/>}
            musicianshipContainer={<Material title = 'Musicianship' listOfItems = {items}/>}
      />
    </div>
  );
}


export default App;
