import './container.css'
import { Component } from 'react';

//This component will hold information for a song to be practiced. perhaps subclass this?
class Container extends Component{

    constructor(props){
        super(props);
        this.name = props.name;
        this.position = props.position;
    }

    render(){
        return (
            <div className="container">
                <p className="title">{this.name} is at postion {this.position}</p>
            </div>
        );
    }
}

export default Container;