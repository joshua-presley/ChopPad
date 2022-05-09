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
                <div className = 'NewMaterial'>
                    {this.newMaterialContainer}
                </div>
                <div className = 'DevelopingMaterial'>
                    {this.developingMaterialContainer}
                </div>
                <div className = 'PerformanceMaterial'>
                    {this.performanceMaterialContainer}
                </div>
                <div className = 'Technique'>
                    {this.techniqueContainer}
                </div>
                <div className = 'Musicianship'>
                    {this.musicianshipContainer}
                </div>
            </div>
        )
    }
}

export default Grid;