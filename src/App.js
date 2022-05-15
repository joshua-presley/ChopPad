import logo from './logo.svg';
import './App.css';
import Container, { Material, NewMaterialItem } from './Components/container'
import React from 'react';
import ReactDOM from 'react'
import Grid from './Components/grid'
import { ReactSession } from 'react-client-session';

const sqlite = require('sqlite3').verbose();


function App() {
  ReactSession.set("userid", "9C097FD9-74E2-4832-AD25-8B3FC0B8F36D");
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

function GetItems(containerName){
  try{
    db = new sqlite.Database('test.db');
    const items = [];

    containerTypes = ['NEWMATERIAL', 'DEVELOPINGMATERIAL', 'PERFORMANCEMATERIAL', 'TECHNIQUE', 'MUSICIANSHIP'];
    
    if(containerName in containerTypes){
      db.Serialize(() => {
        db.each("select title, form, notes from NewMaterial where userid = '" + ReactSession.Get('userid') + "' AND type = '" + containerName + "'", (err, row) => {
          items.push(new NewMaterialItem(row.title, row.form, row.notes));
        })
      });
    }
  }
  catch{
    throw("error getting container items")
  }
}

export default App;
