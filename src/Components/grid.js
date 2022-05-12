import './grid.css'
import { Component } from 'react';

class Grid extends Component{
    
    constructor(props){
        super(props);
        this.newMaterialContainer = props.newMaterialContainer;
        this.developingMaterialContainer = props.developingMaterialContainer;
        this.performanceMaterialContainer = props.performanceMaterialContainer;
        this.techniqueContainer = props.techniqueContainer;
        this.musicianshipContainer = props.musicianshipContainer;
    }


    render(){
        return (
            <div className='grid-container'>
                <div id = 'NewMaterial' className='Material'>
                    {this.newMaterialContainer}
                </div>
                <div id = 'DevelopingMaterial' className='Material'>
                    {this.developingMaterialContainer}
                </div>
                <div id = 'PerformanceMaterial' className='Material'>
                    {this.performanceMaterialContainer}
                </div>
                <div id = 'Technique' className='Material'>
                    {this.techniqueContainer}
                </div>
                <div id = 'Musicianship' className='Material'>
                    {this.musicianshipContainer}
                </div>
            </div>
        )
    }
}

export default Grid;