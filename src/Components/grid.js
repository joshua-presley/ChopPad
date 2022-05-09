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
                <div className = 'PerformanceMaterial'>3</div>
                <div className = 'Technique'>4</div>
                <div className = 'Musicianship'>5</div>
            </div>
        )
    }
}

export default Grid;