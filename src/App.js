import logo from './logo.svg';
import './App.css';
import Container, { Material, NewMaterialItem } from './Components/container'
import React from 'react';
import {useState, useEffect} from 'react';
import ReactDOM from 'react'
import Grid from './Components/grid'
import { ReactSession } from 'react-client-session';
import { supabase } from './helpers/supabaseClient';

function App () {
  const [loading, setLoading] = useState(true);
  const [newMaterial, setNewMaterial] = useState(null);
  const [developingMaterial, setDevelopingMaterial] = useState(null);
  const [performanceMaterial, setPerformanceMaterial] = useState(null);
  const [techniqueMaterial, setTechniqueMaterial] = useState(null);
  const [musicianshipMaterial, setMusicianshipMaterial] = useState(null);


  useEffect(() => {GetItems()}, [])


  const GetItems = async () => {
    try {
      setLoading(true);
      var items = [];
      let { data, error, status } = await supabase
        .from('material')
        .select('id, title, form, notes')

      if (error) {
        throw error;
      }


      if (data) {
        data.forEach((row) => {
          console.log('after select');
          console.log(row.id);
          console.log(row.title);
          items.push(new NewMaterialItem(row.id, row.title, row.form, row.notes));
        }
        );
      }
      setLoading(false);
      setNewMaterial(items);
    }
    catch {
      throw ("error getting container items");
    }
  }



  ReactSession.set("userid", '9c097fd9-74e2-4832-ad25-8b3fc0b8f36d');
  const items = [new NewMaterialItem('test', 'AABA', 'add your notes here'), new NewMaterialItem('test1', 'ABCD', 'add your notes here'), new NewMaterialItem('test2', 'ABA', 'add your notes here')]
    


      if(loading){
        return (<div>loading...</div>)
      }
      else {
        console.log(newMaterial)
        return (
          <div className="App">
            <Grid newMaterialContainer={<Material title='New Material' listOfItems={newMaterial} />}
              developingMaterialContainer={<Material title='Developing Material' listOfItems={items} />}
              performanceMaterialContainer={<Material title='Performance Material' listOfItems={items} />}
              techniqueContainer={<Material title='Technique' listOfItems={items} />}
              musicianshipContainer={<Material title='Musicianship' listOfItems={items} />}
            />
          </div>
        )
      }
  

}
  
export default App;
