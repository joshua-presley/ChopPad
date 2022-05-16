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
      var newitems = [];
      var devitems = [];
      var perfitems = [];
      var techitems = [];
      var musiitems = [];
      let { data, error, status } = await supabase
        .from('material')
        .select('type, title, form, notes')
        .eq('owner', ReactSession.get('userid'))

      if (error) {
        throw error;
      }


      if (data) {
        data.forEach((row) => {
          console.log('after select');
          console.log(row.type);
          console.log(row.title);
          switch (row.type){
            case 1:
              newitems.push(new NewMaterialItem(row.type, row.title, row.form, row.notes));
              break;
            case 2:
              devitems.push(new NewMaterialItem(row.type, row.title, row.form, row.notes));
              break;
            case 3:
              perfitems.push(new NewMaterialItem(row.type, row.title, row.form, row.notes));
              break;
            case 4: 
              techitems.push(new NewMaterialItem(row.type, row.title, row.form, row.notes));
              break;
            case 5:
              musiitems.push(new NewMaterialItem(row.type, row.title, row.form, row.notes));
              break;
          }
        }
        );
      }
      setNewMaterial(newitems);
      setDevelopingMaterial(devitems);
      setPerformanceMaterial(perfitems);
      setTechniqueMaterial(techitems);
      setMusicianshipMaterial(musiitems);
      setLoading(false);
    }
    catch {
      throw ("error getting container items");
    }
  }



  ReactSession.set("userid", '9c097fd9-74e2-4832-ad25-8b3fc0b8f36d');
    


  if (loading) {
    return (<div>loading...</div>)
  }
  else {
    console.log(newMaterial)
    return (
      <div className="App">
        <Grid newMaterialContainer={<Material title='New Material' listOfItems={newMaterial} id='1'/>}
          developingMaterialContainer={<Material title='Developing Material' listOfItems={developingMaterial} id='2'/>}
          performanceMaterialContainer={<Material title='Performance Material' listOfItems={performanceMaterial} id='3'/>}
          techniqueContainer={<Material title='Technique' listOfItems={techniqueMaterial} id='4'/>}
          musicianshipContainer={<Material title='Musicianship' listOfItems={musicianshipMaterial} id='5'/>}
        />
      </div>
    )
  }


}
  
export default App;
